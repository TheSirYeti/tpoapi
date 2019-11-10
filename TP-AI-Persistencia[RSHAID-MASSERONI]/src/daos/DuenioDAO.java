package daos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import daos.PersonaDAO;
import entities.Due�oEntity;
import entities.PersonaEntity;
import exceptions.PersonaException;
import hibernate.HibernateUtil;
import modelo.Persona;

public class DuenioDAO {
	public List<Persona> findDueniosByUnidad(int numero) throws PersonaException{
		List<Persona> resultado = new ArrayList<Persona>();
		Session s = HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		List<Due�oEntity> seleccion = s.createQuery("from Due�oEntity de where de.identificador = ?").setInteger(0, numero).list();
		s.getTransaction().commit();
		if(seleccion == null)
			throw new PersonaException("No hay un due�o para la unidad N� " + numero);
		else {
			for(Due�oEntity de: seleccion)
				resultado.add(new PersonaDAO().getPersonaDAO(de.getDocumento()));
		}
		return resultado;
	}
	
	public void save (int idUnidad, String documento) {
		Session s= HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		List<Due�oEntity> selecci�n = s.createQuery("from Due�oEntity").list();
		int indice = selecci�n.size();
//		indice++;
		Due�oEntity aGrabar= toEntity(indice, idUnidad, documento);
		aGrabar.setId(indice);
		s.save(aGrabar);
		s.getTransaction().commit();
		s.close();
	}
	
	public void update (int idDue�o, int idUnidad, String documento) {
		Due�oEntity aGrabar= new Due�oEntity(idDue�o, idUnidad, documento);
		Session s= HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		s.update(aGrabar);
		s.getTransaction().commit();
		s.close();
	}
		
	Due�oEntity toEntity(int id, int idUnidad, String documento) {
		return new Due�oEntity(id, idUnidad, documento);
	}
	
	PersonaEntity toNegocio(PersonaEntity persona) {
		return new PersonaEntity(persona.getDocumento(), persona.getNombre());
	}
}
