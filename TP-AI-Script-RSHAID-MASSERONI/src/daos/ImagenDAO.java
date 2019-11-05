package daos;
import org.hibernate.classic.Session;

import entities.*;
import hibernate.HibernateUtil;
import modelo.Imagen;
import modelo.Reclamo;


public class ImagenDAO {
	
	public void save(Imagen imagen) {
		ImagenEntity save = toEntity(imagen);
		save.setNumero(imagen.getNumero());
		Session s = HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		s.save(save);
		s.getTransaction().commit();
		s.close();
	}
	
	/*public void update(Imagen imagen) {
		ImagenEntity update = toEntity(imagen);
		update.setNumero(imagen.getNumero());
		Session s = HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		s.update(update);
		s.getTransaction().commit();
		s.close();
	}
	
	public void delete(Imagen imagen) {
		ImagenEntity delete= toEntity(imagen);
		Session s = HibernateUtil.getSessionFactory().openSession();
		s.beginTransaction();
		s.delete(delete);
		s.getTransaction().commit();
		s.close();
	}*/
	
	public ImagenEntity toEntity(Imagen i) {
		return new ImagenEntity(i.getDireccion(), i.getTipo(), i.getIdReclamo());
	}
	
	public Imagen toNegocio(ImagenEntity ie) {
		return new Imagen(ie.getDireccion(), ie.getTipo(), ie.getIdReclamo());
	}


	
	
}
