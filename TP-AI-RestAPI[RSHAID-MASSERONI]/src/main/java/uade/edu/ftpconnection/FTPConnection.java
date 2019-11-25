package uade.edu.ftpconnection;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.SocketException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

public class FTPConnection {

	private static FTPClient cliente;
	//F:\\Users\\Juampi\\Pictures\\API
	private static String carpeta = "C:\\Users\\JP\\Pictures\\API";
	private static String formato = ".png";
	
	public static FTPClient getConnection() throws SocketException {
		if (cliente == null) {
			cliente = new FTPClient();
			try {
				cliente.connect("127.0.0.1", 21);
				cliente.login("yeti", "");
				
				showServerReply(cliente);
				int replyCode = cliente.getReplyCode();

				if(!FTPReply.isPositiveCompletion(replyCode)) {
					System.out.println("ERROR FTP: failed operation" + replyCode);
				} else {
		            cliente.enterLocalPassiveMode();
		            try {
						cliente.setFileType(FTP.BINARY_FILE_TYPE);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
				System.out.println("Connected to server");
			} catch (IOException e) {
				System.out.println("Failed to connect to server");
			}
		}
		return cliente;
	}
	
	public static List<String> uploadFileList(List<File> images) {
		ArrayList<String> directions = new ArrayList<String>();
		
		if (images.isEmpty())
			return directions;
		
		if (cliente == null) {
			try {
				getConnection();		
			} catch (SocketException e) {
				e.printStackTrace();
			}
		}
		
		String fileFtpName = null;
		InputStream inputStream = null;
		
		for(File file: images) {
			try {
				fileFtpName = toHash.getFileHash(file);
			} catch (NoSuchAlgorithmException e1) {
				e1.printStackTrace();
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			
			try {
				inputStream = new FileInputStream(file);
				boolean uploaded = false;
				try {
					uploaded = cliente.storeFile(fileFtpName, inputStream);
				} catch (IOException e) {
					System.out.println("Error saving file");
					e.printStackTrace();
				}
				if(uploaded) {
					System.out.println("File uploaded succesfully");
				}
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} finally {
				try {	
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			
			String fileLocation = new String(carpeta + "\\" + fileFtpName);
			directions.add(fileLocation);
		}
		
		return directions;
	}
	
	public static String uploadFile(File file, String ubicacion) {
		
		if (cliente == null) {
			try {
				getConnection();		
			} catch (SocketException e) {
				e.printStackTrace();
			}
		}
		
		String fileFtpName = null;
		InputStream inputStream = null;
		
		try {
				fileFtpName = toHash.getFileHash(file);
			} catch (NoSuchAlgorithmException e1) {
				e1.printStackTrace();
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			
			try {
				inputStream = new FileInputStream(file);
				boolean uploaded = false;
				try {
					uploaded = cliente.storeFile(fileFtpName + formato, inputStream);
				} catch (IOException e) {
					System.out.println("Error saving file.");
					e.printStackTrace();
				}
				if(uploaded) {
					System.out.println("File uploaded succsefully");
				}
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} finally {
				try {	
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			
		String fileLocation= new String(ubicacion + "\\" + fileFtpName + formato);
		System.out.println(fileLocation);
		return fileLocation;
	}
	
    private static void showServerReply(FTPClient ftpClient) {
        String[] replies = ftpClient.getReplyStrings();
        if (replies != null && replies.length > 0) {
            for (String aReply : replies) {
                System.out.println("SERVER: " + aReply);
            }
        }
    }
	
	
}
