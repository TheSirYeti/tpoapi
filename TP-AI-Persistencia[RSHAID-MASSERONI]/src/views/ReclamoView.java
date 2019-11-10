package views;

import java.util.ArrayList;
import java.util.List;

import exceptions.ReclamoException;
import modelo.Edificio;
import modelo.Imagen;
import modelo.Persona;
import modelo.Unidad;

public class ReclamoView {

	private int numero;
	private PersonaView usuario;
	private EdificioView edificio;
	private String ubicaci�n;
	private String descripcion;
	private UnidadView unidad;
	private String estado;
	private List<ImagenView> imagenes;
	
	public ReclamoView(int numero, Persona usuario, Edificio edificio, String ubicaci�n, String descripcion, Unidad unidad, List<ImagenView> imagenes) {
		this.numero  = numero;
		this.usuario = usuario.toView();
		this.edificio = edificio.toView();
		this.ubicaci�n = ubicaci�n;
		this.descripcion = descripcion;
		this.unidad = unidad.toView();
		this.estado = "Nuevo";
		this.imagenes = imagenes;
	}

	public void agregarImagen(String direccion, String tipo) throws ReclamoException {
		Imagen imagen = new Imagen(direccion, tipo);
		imagenes.add(imagen.toView());
		imagen.save(imagen, numero);
	}
	
	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public PersonaView getUsuario() {
		return usuario;
	}

	public EdificioView getEdificio() {
		return edificio;
	}

	public String getUbicaci�n() {
		return ubicaci�n;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public UnidadView getUnidad() {
		return unidad;
	}

	public String getEstado() {
		return estado;
	}
	
	public List<ImagenView> getImagenes(){
		return this.imagenes;
	}
	
	public void cambiarEstado(String estado) {
		this.estado = estado;
	}
}
