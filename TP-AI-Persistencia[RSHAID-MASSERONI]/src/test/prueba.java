package test;

import java.util.List;

import controlador.Controlador;
import exceptions.EdificioException;
import exceptions.PersonaException;
import exceptions.ReclamoException;
import exceptions.UnidadException;
import views.EdificioView;
import views.ImagenView;
import views.PersonaView;
import views.ReclamoView;
import views.UnidadView;

public class prueba {

	public static void main(String[] args) throws UnidadException, EdificioException, PersonaException, ReclamoException {
		Controlador c = new Controlador();
		//c.agregarReclamo(codigo, piso, numero, documento, ubicación, descripcion)
		//c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "HOLA");
		//c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "HOLA");
		//c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "HOLA");
		c.agregarImagenAReclamo(1, "google.com", ".png");
		c.agregarImagenAReclamo(1, "google.com2", ".png");
		c.agregarImagenAReclamo(1, "google.com3", ".png");
		//c.agregarImagenAReclamo(2, "google.com", ".png");
		//c.agregarImagenAReclamo(3, "google.com", ".png");
		//c.agregarImagenAReclamo(4, "google.com", ".png");
		//c.agregarImagenAReclamo(5, "google.com", ".png");
		//c.reclamosPorUnidad(codigo, piso, numero)
		
		// TODO Auto-generated method stub
		
		System.out.println("MOSTRAR");
		ReclamoView r = c.reclamosPorNumero(1);
		
			for(ImagenView im : r.getImagenes()) {
				System.out.println(im.getDireccion());
				System.out.println(r.getDescripcion());
			}
		
		System.out.println("FIN FIN FIN");
	}
	

}


