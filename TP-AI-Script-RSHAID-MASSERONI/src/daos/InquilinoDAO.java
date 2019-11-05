package daos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import entities.Due�oEntity;
import entities.InquilinoEntity;
import entities.PersonaEntity;
import hibernate.HibernateUtil;
import modelo.Persona;

public class InquilinoDAO {
	
	public List<Persona> findByUnidad(int id) {
		// TODO Auto-generated method stub
		List<Persona> resultado = new ArrayList<Persona>();
		Session s= HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		List<InquilinoEntity> selecci�n = s.createQuery("from InquilinoEntity ie where ie.identificador = ?").setInteger(0, id).list();
		s.getTransaction().commit();
		s.close();
		for(InquilinoEntity aux : selecci�n)
			resultado.add(new PersonaDAO().getPersonaDAO(aux.getDocumento()));
		return resultado;
	}
	
	public void save (int numero, String documento) {
		Session s= HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		List<InquilinoEntity> selecci�n = s.createQuery("from InquilinoEntity").list();
		int indice = selecci�n.size();
//		indice++;
		InquilinoEntity aGrabar= toEntity(indice, numero, documento);
		aGrabar.setId(indice);
		s.save(aGrabar);
		s.getTransaction().commit();
		s.close();
	}
	
	public void update (int idInquilino, int idUnidad, String documento) {
		InquilinoEntity aGrabar= new InquilinoEntity(idInquilino, idUnidad, documento);
		Session s= HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		s.update(aGrabar);
		s.getTransaction().commit();
		s.close();
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		Session s= HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		List<InquilinoEntity> selecci�n = s.createQuery("from InquilinoEntity ie where ie.identificador = ?").setInteger(0, id).list();
		for(InquilinoEntity ie: selecci�n)
			s.delete(ie);
		s.getTransaction().commit();
		s.close();
	}
		
	InquilinoEntity toEntity(int id, int idUnidad, String documento) {
		return new InquilinoEntity(id, idUnidad, documento);
	}
	
	PersonaEntity toNegocio(PersonaEntity aux) {
		return new PersonaEntity(aux.getDocumento(), aux.getNombre());
	}


}
