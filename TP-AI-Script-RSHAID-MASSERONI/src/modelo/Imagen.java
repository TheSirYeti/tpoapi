package modelo;

import daos.ImagenDAO;
import views.ImagenView;

public class Imagen {

	private int numero;
	private String direccion;
	private String tipo;
	private int idReclamo;
	
	public Imagen(String direccion, String tipo, int idReclamo) {
		this.direccion = direccion;
		this.tipo = tipo;
		this.idReclamo = idReclamo;
	}
	
	public int getIdReclamo() {
		return idReclamo;
	}
	
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public void save(Imagen imagen) {
		new ImagenDAO().save(imagen);
	}
	
	public ImagenView toView() {
		return new ImagenView(numero, direccion, tipo);
	}
}
