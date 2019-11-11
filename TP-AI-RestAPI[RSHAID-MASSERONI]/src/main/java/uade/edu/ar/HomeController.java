package uade.edu.ar;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.*;
import java.io.File;
//import java.awt.PageAttributes.MediaType;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletResponse;
//import javax.ws.rs.core.MediaType;
import javax.servlet.ServletContext;

import controlador.Controlador;
import exceptions.*;
import uade.edu.ftpconnection.FTPConnection;
import views.*;


import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


@Controller

public class HomeController {
	
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		
		
		model.addAttribute("serverTime", formattedDate );
		
		File file = new File("C:\\Users\\JP\\Pictures\\sans.png");
		new FTPConnection().uploadFile(file);
		
		return "home";
	}
	
	@RequestMapping(value = "/getEdificio", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getEdificio(@RequestParam(value="codigo", required = true) int codigo) throws JsonProcessingException{
			EdificioView edificio = Controlador.getInstancia().findEdificio(codigo); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(edificio);
	}
	
	@RequestMapping(value = "/getPersonas", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getPersonas() throws JsonProcessingException{
			List<PersonaView> personas = Controlador.getInstancia().getPersonas(); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(personas);
	}
	
	@RequestMapping(value = "/getUnidadesPorEdificio", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getUnidadesPorEdificio(@RequestParam(value="codigo", required = true) int codigo) throws JsonProcessingException{
		try {
			List<UnidadView> unidades = Controlador.getInstancia().getUnidadesPorEdificio(codigo); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(unidades);
		}
		catch (UnidadException e){
			return e.getMessage();
		}
	}
	
	@RequestMapping(value = "/getHabilitadosPorEdificio", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getHabilitadosPorEdificio(@RequestParam(value="codigo", required = true) int codigo) throws JsonProcessingException{
		try {
			Set<PersonaView> personas = Controlador.getInstancia().habilitadosPorEdificio(codigo); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(personas);
		}
		catch (EdificioException e){
			return e.getMessage();
		}
	}
	
	@RequestMapping(value = "/getDueniosPorEdificio", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getDueniosPorEdificio(@RequestParam(value="codigo", required = true) int codigo) throws JsonProcessingException{
		try {
			List<PersonaView> duenios = Controlador.getInstancia().dueniosPorEdificio(codigo); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(duenios);
		}
		catch (EdificioException e){
			return e.getMessage();
		}
	}
	
	@RequestMapping(value = "/getHabitantesPorEdificio", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getHabitantesPorEdificio(@RequestParam(value="codigo", required = true) int codigo) throws JsonProcessingException{
		try {
			List<PersonaView> habitantes = Controlador.getInstancia().dueniosPorEdificio(codigo); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(habitantes);
		}
		catch (EdificioException e){
			return e.getMessage();
		}
	}
	
	@RequestMapping(value = "/getDueniosPorUnidad", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getDueniosPorUnidad(@RequestParam(value="codigo", required = true) int codigo,
														@RequestParam(value="piso", required = true) String piso,
														@RequestParam(value="numero", required = true) String numero) throws JsonProcessingException{
		try {
			List<PersonaView> duenios = Controlador.getInstancia().dueniosPorUnidad(codigo, piso, numero); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(duenios);
		}
		catch (UnidadException e){
			return e.getMessage();
		}
	}
	
	@RequestMapping(value = "/getInquilinosPorUnidad", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String getInquilinosPorUnidad(@RequestParam(value="codigo", required = true) int codigo,
														@RequestParam(value="piso", required = true) String piso,
														@RequestParam(value="numero", required = true) String numero) throws JsonProcessingException{
		try {
			List<PersonaView> inquilinos = Controlador.getInstancia().dueniosPorUnidad(codigo, piso, numero); 
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(inquilinos);
		}
		catch (UnidadException e){
			return e.getMessage();
		}
	}
	
	@RequestMapping(value = "/transferirUnidad", method = RequestMethod.POST)
	public @ResponseBody<json> void transferirUnidad(@RequestParam(value="codigo", required=true) int codigo,
											   @RequestParam(value="piso", required=true) String piso,
												@RequestParam(value="numero", required=true) String numero,
												@RequestParam(value="documento", required=true) String documento) throws JsonProcessingException {
		try {
			Controlador.getInstancia().transferirUnidad(codigo, piso, numero, documento);
			
		}
		catch (PersonaException e) { 
			
		}
		catch (UnidadException e) { 
			
		}
	}
	
	@RequestMapping(value = "/agregarDuenioUnidad", method = RequestMethod.POST)
	public @ResponseBody<json> void agregarDuenioUnidad(@RequestParam(value="codigo", required=true) int codigo,
											   @RequestParam(value="piso", required=true) String piso,
												@RequestParam(value="numero", required=true) String numero,
												@RequestParam(value="documento", required=true) String documento) throws JsonProcessingException {
		try {
			Controlador.getInstancia().agregarDuenioUnidad(codigo, piso, numero, documento);
			
		}
		catch (PersonaException e) { 
			
		}
		catch (UnidadException e) { 
			
		}
	}
	
	@RequestMapping(value = "/alquilarUnidad", method = RequestMethod.POST)
	public @ResponseBody<json> void alquilarUnidad(@RequestParam(value="codigo", required=true) int codigo,
											   @RequestParam(value="piso", required=true) String piso,
												@RequestParam(value="numero", required=true) String numero,
												@RequestParam(value="documento", required=true) String documento) throws JsonProcessingException {
		try {
			Controlador.getInstancia().alquilarUnidad(codigo, piso, numero, documento);
			
		}
		catch (PersonaException e) { 
			
		}
		catch (UnidadException e) { 
			
		}
	}
	
	@RequestMapping(value = "/agregarInquilinoUnidad", method = RequestMethod.POST)
	public @ResponseBody<json> void agregarInquilinoUnidad(@RequestParam(value="codigo", required=true) int codigo,
											   @RequestParam(value="piso", required=true) String piso,
												@RequestParam(value="numero", required=true) String numero,
												@RequestParam(value="documento", required=true) String documento) throws JsonProcessingException {
		try {
			Controlador.getInstancia().agregarInquilinoUnidad(codigo, piso, numero, documento);
			
		}
		catch (PersonaException e) { 
			
		}
		catch (UnidadException e) { 
			
		}
	}
	
	@RequestMapping(value = "/liberarUnidad", method = RequestMethod.POST)
	public @ResponseBody<json> void liberarUnidad(@RequestParam(value="codigo", required=true) int codigo,
											   @RequestParam(value="piso", required=true) String piso,
												@RequestParam(value="numero", required=true) String numero) throws JsonProcessingException {
		try {
			Controlador.getInstancia().liberarUnidad(codigo, piso, numero);
			
		}
		catch (UnidadException e) { 
			
		}
	}
	
	@RequestMapping(value = "/habitarUnidad", method = RequestMethod.POST)
	public @ResponseBody<json> void habitarUnidad(@RequestParam(value="codigo", required=true) int codigo,
											   @RequestParam(value="piso", required=true) String piso,
												@RequestParam(value="numero", required=true) String numero) throws JsonProcessingException {
		try {
			Controlador.getInstancia().habitarUnidad(codigo, piso, numero);
			
		}
		catch (UnidadException e) { 
			
		}
	}
	
	@RequestMapping(value = "/agregarPersona", method = RequestMethod.POST)
	public @ResponseBody<json> void agregarPersona(@RequestParam(value="nombre", required=true) String nombre,
													@RequestParam(value="documento", required=true) String documento) throws JsonProcessingException {
			Controlador.getInstancia().agregarPersona(nombre, documento);
			System.out.println("ok");
	}
	
	@RequestMapping(value = "/agregarPersona", method = RequestMethod.DELETE)
	public @ResponseBody<json> void eliminarPersona(@RequestParam(value="documento", required=true) String documento) throws JsonProcessingException {
			try {
				Controlador.getInstancia().eliminarPersona(documento);
			} catch (PersonaException e) {
				e.getMessage();
			}
	}
	
	@RequestMapping(value = "/reclamosPorEdificio", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String reclamosPorEdificio(@RequestParam(value="codigo", required = true) int codigo) throws JsonProcessingException{
		List<ReclamoView> reclamo = Controlador.getInstancia().reclamosPorEdificio(codigo); 
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(reclamo);
	}
	
	@RequestMapping(value = "/reclamosPorUnidad", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String reclamosPorUnidad(@RequestParam(value="codigo", required = true) int codigo,
														@RequestParam(value="piso", required = true) String piso,
														@RequestParam(value="numero", required = true) String numero) throws JsonProcessingException{
		List<ReclamoView> reclamos = Controlador.getInstancia().reclamosPorUnidad(codigo, piso, numero); 
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(reclamos);
	}
	
	@RequestMapping(value = "/reclamosPorNumero", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String reclamosPorNumero(@RequestParam(value="numero", required = true) int numero) throws JsonProcessingException{
		ReclamoView reclamo;
		try {
			reclamo = Controlador.getInstancia().reclamosPorNumero(numero);
			ObjectMapper mapper = new ObjectMapper();
			return mapper.writeValueAsString(reclamo);
		} catch (ReclamoException e) {
			return e.getMessage();
		} 
	}
	
	@RequestMapping(value = "/reclamosPorPersona", method = RequestMethod.GET, produces = {"application/json"})
	public @ResponseBody<json> String reclamosPorPersona(@RequestParam(value="documento", required = true) String documento) throws JsonProcessingException{
		List<ReclamoView> reclamo = Controlador.getInstancia().reclamosPorPersona(documento);
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(reclamo); 
	}
	
	@RequestMapping(value = "/agregarReclamo", method = RequestMethod.POST)
	public @ResponseBody<json> void agregarReclamo(@RequestParam(value="codigo", required=true) int codigo,
													@RequestParam(value="piso", required=true) String piso,
													@RequestParam(value="numero", required=true) String numero,
													@RequestParam(value="documento", required=true) String documento,
													@RequestParam(value="ubicacion", required=true) String ubicacion,
													@RequestParam(value="descripcion", required=true) String descripcion) throws JsonProcessingException {
			try {
				Controlador.getInstancia().agregarReclamo(codigo, piso, numero, documento, ubicacion, descripcion);
			} catch (NumberFormatException e) {
				e.getMessage();
			} catch (EdificioException e) {
				e.getMessage();
			} catch (UnidadException e) {
				e.getMessage();
			} catch (PersonaException e) {
				e.getMessage();
			} catch (ReclamoException e) {
				e.getMessage();
			}
	}
	
	@RequestMapping(value = "/agregarImagenAReclamo", method = RequestMethod.POST)
	public @ResponseBody<json> void agregarImagenAReclamo(@RequestParam(value="numero", required=true) int numero,
											   @RequestParam(value="direccion", required=true) String direccion,
												@RequestParam(value="tipo", required=true) String tipo) throws JsonProcessingException {
		try {
			Controlador.getInstancia().agregarImagenAReclamo(numero, direccion, tipo);
			
		} catch (ReclamoException e) {
			e.getMessage();
		}
	}
	
	@RequestMapping(value = "/cambiarEstado", method = RequestMethod.PUT)
	public @ResponseBody<json> void cambiarEstado(@RequestParam(value="numero", required=true) int numero,
											   @RequestParam(value="estado", required=true) String estado) throws JsonProcessingException {
		try {
			Controlador.getInstancia().cambiarEstado(numero, estado);
			
		}
		catch (ReclamoException e) { 
			e.getMessage();
		}
	}
	
	/*@RequestMapping(value = "/imagenes", method = RequestMethod.GET)
	public void ArrayByteImagen(HttpServletResponse response) throws IOException {
		InputStream in = ServletContext.class.getResourceAsStream("/WEB-INF/images/image-example.jpg");
	    response.setContentType(MediaType.IMAGE_JPEG_VALUE);
	    IOUtils.copy(in, response.getOutputStream());
	}
	
	@ResponseBody
	@RequestMapping(value = "/imagenes/{ruta}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
	@Cacheable("imagenes")
	public byte[] imagen(@PathVariable String ruta) throws IOException {
	    InputStream in = ServletContext.class.getResourceAsStream("imagenes/" + ruta);
	    return IOUtils.toByteArray(in);
	}*/
}