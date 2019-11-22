import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown'
function MenúAgregar(){
    ReactDOM.render(
            <div>
                <h2>Menú "Agregar"</h2>
                <form id="Agregar">
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
                            <label for="Reclamo"> <strong>Descripción del reclamo:</strong></label>
                                <br></br>
                            <textarea type="text-area" id="addReclamo" name="reclamo" style={{width:'25%'}}></textarea>
                        </li>
                    </ul>
                </form>
            </div>, document.getElementById("containerAdd"));
}

function MenúBuscar(){
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
                                        <Dropdown.Item onClick={MenúAgregar}>Persona</Dropdown.Item>
                                        <Dropdown.Item onClick={MenúAgregar}>Inquilino</Dropdown.Item>
                                        <Dropdown.Item onClick={MenúAgregar}>Dueño</Dropdown.Item>
                                        <Dropdown.Item onClick={MenúAgregar}>Edificio</Dropdown.Item>
                                        <Dropdown.Item onClick={MenúAgregar}>Unidad</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                        
                        </div>
                        <div className="col col-md-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Buscar
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={MenúBuscar}>Persona</Dropdown.Item>
                                    <Dropdown.Item onClick={MenúBuscar}>Inquilino</Dropdown.Item>
                                    <Dropdown.Item onClick={MenúBuscar}>Dueño</Dropdown.Item>
                                    <Dropdown.Item onClick={MenúBuscar}>Edificio</Dropdown.Item>
                                    <Dropdown.Item onClick={MenúBuscar}>Unidad</Dropdown.Item>
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