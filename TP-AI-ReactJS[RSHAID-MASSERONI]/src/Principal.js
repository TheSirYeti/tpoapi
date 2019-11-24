import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown'

function MenuAgregarPersona(){
    ReactDOM.render(
            <div>
                <h2>Agregar Persona</h2>
                <form id="AgregarPersona">
                    <ul>
                        <li className="form-group">
                        <label for="addNombre"> <strong>Nombre:</strong></label>
                            <br></br>
                            <input type="text" id="addNombre" name="nombre"></input>
                        </li>
                        <li className="form-group">
                            <label for="addDocumento"> <strong>Documento:</strong></label>
                                <br></br>
                            <input type="text" id="addDocumento" name="documento"></input>
                        </li>

                        <li className="form-group">
                            <label for="inputState"><strong><em>Tipo de usuario</em></strong></label>
                            <select id="inputState" class="form-control" style={{width: '182.5px'}}>
                                <option selected>Elija una opción...</option>
                                <option>Inquilino</option>
                                <option>Dueño</option>
                            </select>
                        </li>
                    </ul>
                </form>
            </div>, document.getElementById("containerAdd"));
}

function MenuAgregarReclamo(){
    ReactDOM.render(
        <div>
            <h2>Agregar Reclamo</h2>
            <form id="AgregarReclamo">
                <ul>
                    <li className="form-group">
                    <label for="addCodigo"> <strong>Codigo del Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
                    </li>
                    <li className="form-group">
                        <label for="addPiso"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addPiso" name="piso"></input>
                    </li>
                    <li className="form-group">
                        <label for="addNumero"> <strong>Numero:</strong></label>
                            <br></br>
                        <input type="text" id="addNumero" name="numero"></input>
                    </li>
                    <li className="form-group">
                        <label for="addDocumento"> <strong>Documento:</strong></label>
                            <br></br>
                        <input type="text" id="addDocumento" name="documento"></input>
                    </li>
                    <li className="form-group">
                        <label for="addUbicacion"> <strong>Ubicacion:</strong></label>
                            <br></br>
                        <input type="text" id="addUbicacion" name="ubicacion"></input>
                    </li>
                    <li className="form-group">
                        <label for="addDescripcion"> <strong>Descripcion:</strong></label>
                            <br></br>
                            <textarea type="text-area" id="addDescripcion" name="descripcion" style={{width:'25%'}}></textarea>
                    </li>
                </ul>
            </form>
        </div>, document.getElementById("containerAdd"));
}


function MenuAgregarDuenio(){
    ReactDOM.render(
        <div>
            <h2>Agregar Dueño a Unidad</h2>
            <form id="AgregarPersona">
                <ul>
                    <li className="form-group">
                    <label for="addCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
                    </li>
                    <li className="form-group">
                        <label for="addPiso"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addPiso" name="piso"></input>
                    </li>
                    <li className="form-group">
                        <label for="addNumero"> <strong>Numero:</strong></label>
                            <br></br>
                        <input type="text" id="addNumero" name="numero"></input>
                    </li>
                    <li className="form-group">
                        <label for="addDocumento"> <strong>Documento:</strong></label>
                            <br></br>
                        <input type="text" id="addDocumento" name="documento"></input>
                    </li>


                </ul>
            </form>
        </div>, document.getElementById("containerAdd"));
}
function MenuAgregarInquilino(){
    ReactDOM.render(
        <div>
            <h2>Agregar Inquilino a Unidad</h2>
            <form id="AgregarPersona">
                <ul>
                    <li className="form-group">
                    <label for="addCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
                    </li>
                    <li className="form-group">
                        <label for="addPiso"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addPiso" name="piso"></input>
                    </li>
                    <li className="form-group">
                        <label for="addNumero"> <strong>Numero:</strong></label>
                            <br></br>
                        <input type="text" id="addNumero" name="numero"></input>
                    </li>
                    <li className="form-group">
                        <label for="addDocumento"> <strong>Documento:</strong></label>
                            <br></br>
                        <input type="text" id="addDocumento" name="documento"></input>
                    </li>


                </ul>
            </form>
        </div>, document.getElementById("containerAdd"));
}
function MenuBuscarEdificio(){}
function MenuBuscarUnidad(){}
function MenuBuscarPersona(){}
function MenuBuscarReclamo(){}

function MenuBuscar(){
    ReactDOM.render(
        <div>
            <h2>Menú "Buscar"</h2>
            <form>
                <ul>
                    <li className="form-group">
                    <label for="addNombre"> <strong>Nombre:</strong></label>
                        <br></br>
                        <input type="text" id="addNombre" name="nombre"></input>
                    </li>
                    <li className="form-group">
                        <label for="addApellido"> <strong>Apellido:</strong></label>
                            <br></br>
                        <input type="text" id="addApellido" name="apellido"></input>
                    </li>

                    <li className="form-group">
                        <label for="inputState"><strong>Elija un <em>tipo de usuario</em></strong></label>
                        <select id="inputState" class="form-control" style={{width: '182.5px'}}>
                            <option selected>Elija una opción...</option>
                            <option>Persona</option>
                            <option>Inquilino</option>
                            <option>Dueño</option>
                        </select>
                    </li>

                    <li className="form-group">
                        <label for="addEdificio"> <strong>Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addEdificio" name="edificio"></input>
                    </li>

                    <li className="form-group">
                        <div class="form-row">
                            <div class="col col-md-2">
                                <label for="inputState">Piso:</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Elija un piso...</option> 
                                    {/*Varían la cantidad de opciones en base a la cantidad de pisos que tenga el edificio*/}
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col col-md-2">
                                <label for="inputState">Unidad:</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Elija un N° de unidad...</option> 
                                        {/*Varían la cantidad de opciones en base a la cantidad de unidades que haya en el piso*/}
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>, document.getElementById("containerGet"));
}

class MainPage extends React.Component{
    render(){
        return(     
            <div>
                <div className="encabezado">
                    <h1 className="text-center">Sistema Administrador de Edificios, Personas y Reclamos</h1>
                    <div className="row">
                        <div className="col col-md-2">
                            <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Agregar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={MenuAgregarPersona}>Persona</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarInquilino}>Inquilino</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarDuenio}>Dueño</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarReclamo}>Reclamo</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                        
                        </div>
                        <div className="col col-md-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Buscar
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={MenuBuscarPersona}>Persona</Dropdown.Item>
                                    <Dropdown.Item onClick={MenuBuscarEdificio}>Edificio</Dropdown.Item>
                                    <Dropdown.Item onClick={MenuBuscarUnidad}>Unidad</Dropdown.Item>
                                    <Dropdown.Item onClick={MenuBuscarReclamo}>Reclamo</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                </div>

                <div>
                    <form id="containerAdd"></form>
                </div>
                
                <div>
                    <form id="containerGet"></form>
                </div>
            </div>

        );
    }
}
function RenderMain(){
    const mainPage= React.createElement(MainPage);
    ReactDOM.render(mainPage, document.getElementById('root'));
    return; 
}
export default RenderMain