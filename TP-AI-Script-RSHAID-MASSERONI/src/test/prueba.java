package test;

import java.util.List;

import controlador.Controlador;
import exceptions.EdificioException;
import exceptions.PersonaException;
import exceptions.ReclamoException;
import exceptions.UnidadException;
import views.EdificioView;
import views.PersonaView;
import views.ReclamoView;
import views.UnidadView;

public class prueba {

	public static void main(String[] args) throws UnidadException, EdificioException, PersonaException, ReclamoException {
		Controlador c = new Controlador();
		//c.agregarReclamo(codigo, piso, numero, documento, ubicación, descripcion)
		
		c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "Se rompio la cama");
		//c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "HOLA");
		//c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "HOLA");
		//c.agregarReclamo(2, "25", "3", "DNI30722275", "Dormitorio", "HOLA");
		//c.agregarImagenAReclamo(1, "google.com", ".png");
		//c.reclamosPorUnidad(codigo, piso, numero)
		
	// TODO Auto-generated method stub
		
		try {
			new Controlador().agregarInquilinoUnidad(6, "7", "2", "DNI31048088");
		} catch (UnidadException ue) {
			// TODO Auto-generated catch block
			System.out.println(ue.getMessage());
		} catch (PersonaException pe) {
			// TODO Auto-generated catch block
			System.out.println(pe.getMessage());
		}
////		
	List<PersonaView> duenios;
		try {
			duenios = new Controlador().inquilinosPorUnidad(6, "7", "2");
			for(PersonaView duenio : duenios)
				System.out.println(duenio.getNombre());
		} 
		catch (UnidadException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		
		try {
			new Controlador().liberarUnidad(6, "7", "2");
		} catch (UnidadException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		


//		
//
//		
		List<UnidadView> units;
		try {
			units = new Controlador().getUnidadesPorEdificio(1);
			for(UnidadView u: units)
				System.out.println(u.getId());
		} catch (UnidadException e1) {
			// TODO Auto-generated catch block
			System.out.println(e1.getMessage());
		}
		
		List<PersonaView> personas= new Controlador().getPersonas();
		for(PersonaView pv: personas) {
			System.out.println(pv.getNombre());
		}
			try {
				new Controlador().agregarDuenioUnidad(4, "11", "1", "DNI29988738");
			
			} catch (UnidadException eU) {
				// TODO Auto-generated catch block
				System.out.println(eU);	
			} catch (PersonaException eP) {
				// TODO Auto-generated catch block
				System.out.println(eP);
		}
		
		try {
			new Controlador().alquilarUnidad(4, "11", "1", "DNI30012288");
		} catch (UnidadException ue) {
			// TODO Auto-generated catch block
			System.out.println(ue.getMessage());
		} catch (PersonaException pe) {
			// TODO Auto-generated catch block
			System.out.println(pe.getMessage());
		}
		
		try {
			new Controlador().agregarDuenioUnidad(4, "6", "3", "DNI41857340");
		} catch (UnidadException eU) {
			// TODO Auto-generated catch block
			System.out.println(eU);
		} catch (PersonaException eP) {
			// TODO Auto-generated catch block
			System.out.println(eP);
		}
		
		try {
			duenios = new Controlador().dueniosPorEdificio(4);
			for(PersonaView duenio : duenios)
				System.out.println(duenio.getNombre());
		} catch (EdificioException ee) {
			// TODO Auto-generated catch block
				System.out.println(ee.getMessage());
		}
		

		
		
		
		
		
		try {
			new Controlador().eliminarPersona("41857340");
		} catch (PersonaException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		
		try {
			new Controlador().alquilarUnidad(3, "28", "5", "DNI41857340");
		} catch (UnidadException ue) {
			// TODO Auto-generated catch block
			System.out.println(ue.getMessage());
		} catch (PersonaException pe) {
			// TODO Auto-generated catch block
			System.out.println(pe.getMessage());
		}
		
		List<PersonaView> habilitados;
		try {
			habilitados = new Controlador().habitantesPorEdificio(5);
			for(PersonaView pv: habilitados)
				System.out.println(pv.getNombre());
		} catch (EdificioException e) {
			// TODO Auto-generated catch block
				System.out.println(e.getMessage());
		}
		
		
		ReclamoView rec = c.reclamosPorNumero(1);
		System.out.println(rec.getUnidad().getNumero());
		System.out.println(rec.getUnidad().getPiso());
		System.out.println(rec.getUnidad().getId());
		System.out.println(rec.getNumero());
		List<ReclamoView> r = c.reclamosPorUnidad(63, "25", "3");
		for(ReclamoView rv : r) {
			System.out.println(rv.getDescripcion());
		}
		System.out.println("-----------------");
		r = c.reclamosPorEdificio(2);
		for(ReclamoView rv : r) {
			System.out.println(rv.getDescripcion());
		}
		System.out.println("FIN FIN FIN");
	}
	

}


