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

function MenuAgregarImagen(){
    ReactDOM.render(
        <div>
            <h2>Agregar Imagen a Reclamo</h2>
            <form id="AgregarImagen">
                <ul>
                    <li className="form-group">
                        <label for="addNumero"> <strong>Numero de Reclamo:</strong></label>
                            <br></br>
                        <input type="number" id="addNumero" name="numero"></input>
                    </li>
                </ul>

                <form class="box" method="post" action="" enctype="multipart/form-data">
                    <div class="box__input">
                        <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                        <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                        <button class="box__button" type="submit">Upload</button>
                    </div>
                    <div class="box__uploading">Uploading&hellip;</div>
                    <div class="box__success">Done!</div>
                    <div class="box__error">Error! <span></span>.</div>
                </form>
            </form>
        </div>, document.getElementById("containerAdd"));
}

function MenuBuscarEdificio(){}

function MenuBuscarUnidad(){}
function MenuBuscarPersona(){
    ReactDOM.render(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Que desea buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={habilitados}>Habilitados</Dropdown.Item>
                    <Dropdown.Item onClick={duenios}>Dueños</Dropdown.Item>
                    <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                    <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
        </div>,   document.getElementById("containerAdd"));
}

function habilitados(){
    ReactDOM.render(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Que desea buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={habilitados}>Habilitados</Dropdown.Item>
                    <Dropdown.Item onClick={duenios}>Dueños</Dropdown.Item>
                    <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                    <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
            <h2>Buscar Habilitados</h2>
            <li className="form-group">
                <label for="addCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
            </li>
        </div>,   document.getElementById("containerAdd"));
}

function duenios(){
    ReactDOM.render(
    <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Que desea buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={habilitados}>Habilitados</Dropdown.Item>
                    <Dropdown.Item onClick={duenios}>Dueños</Dropdown.Item>
                    <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                    <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
            <h2>Buscar Dueños</h2>
            <li className="form-group">
                <label for="addCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
            </li>
        </div>,   document.getElementById("containerAdd"));
}

function inquilinos(){
    ReactDOM.render(
    <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Que desea buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={habilitados}>Habilitados</Dropdown.Item>
                    <Dropdown.Item onClick={duenios}>Dueños</Dropdown.Item>
                    <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                    <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
            <h2>Buscar Inquilinos</h2>
            <li className="form-group">
                <label for="addCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
            </li>
        </div>,   document.getElementById("containerAdd"));
}

function getallpersonas(){
    ReactDOM.render(
    <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Que desea buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={habilitados}>Habilitados</Dropdown.Item>
                    <Dropdown.Item onClick={duenios}>Dueños</Dropdown.Item>
                    <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                    <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 

            const response = await fetch('/ar/getPersonas');
        </div>,   document.getElementById("containerAdd"));
}

function MenuBuscarReclamo(){
    ReactDOM.render(
        <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Como desea buscar el Reclamo?
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={recPorUnidad}>por Unidad</Dropdown.Item>
                        <Dropdown.Item onClick={recPorEdificio}>por Edificio</Dropdown.Item>
                        <Dropdown.Item onClick={recPorPersona}>por Persona</Dropdown.Item>
                        <Dropdown.Item onClick={recPorNumero}>por Numero</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </div>,   document.getElementById("containerAdd"));
}

function recPorUnidad(){
    ReactDOM.render(
        <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Como desea buscar el Reclamo?
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={recPorUnidad}>por Unidad</Dropdown.Item>
                        <Dropdown.Item onClick={recPorEdificio}>por Edificio</Dropdown.Item>
                        <Dropdown.Item onClick={recPorPersona}>por Persona</Dropdown.Item>
                        <Dropdown.Item onClick={recPorNumero}>por Numero</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 

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
                </ul>
            </div>,   document.getElementById("containerAdd"));
}

function recPorEdificio(){
    ReactDOM.render(
        <div>
                 <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Como desea buscar el Reclamo?
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={recPorUnidad}>por Unidad</Dropdown.Item>
                        <Dropdown.Item onClick={recPorEdificio}>por Edificio</Dropdown.Item>
                        <Dropdown.Item onClick={recPorPersona}>por Persona</Dropdown.Item>
                        <Dropdown.Item onClick={recPorNumero}>por Numero</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 

                <ul>
                    <li className="form-group">
                    <label for="addCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="addCodigo" name="codigo"></input>
                    </li>
                </ul>
            </div>,   document.getElementById("containerAdd"));
}

function recPorPersona(){
    ReactDOM.render(
        <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Como desea buscar el Reclamo?
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={recPorUnidad}>por Unidad</Dropdown.Item>
                        <Dropdown.Item onClick={recPorEdificio}>por Edificio</Dropdown.Item>
                        <Dropdown.Item onClick={recPorPersona}>por Persona</Dropdown.Item>
                        <Dropdown.Item onClick={recPorNumero}>por Numero</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 

                <ul>
                    <li className="form-group">
                    <label for="addCodigo"> <strong>Documento:</strong></label>
                        <br></br>
                        <input type="text" id="addDocumento" name="documento"></input>
                    </li>
                </ul>
            </div>,   document.getElementById("containerAdd"));
}

function recPorNumero(){
    ReactDOM.render(
        <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Como desea buscar el Reclamo?
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={recPorUnidad}>por Unidad</Dropdown.Item>
                        <Dropdown.Item onClick={recPorEdificio}>por Edificio</Dropdown.Item>
                        <Dropdown.Item onClick={recPorPersona}>por Persona</Dropdown.Item>
                        <Dropdown.Item onClick={recPorNumero}>por Numero</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 

                <ul>
                    <li className="form-group">
                    <label for="addNumero"> <strong>Numero de Reclamo:</strong></label>
                        <br></br>
                        <input type="text" id="addNumero" name="Numero"></input>
                    </li>
                </ul>
            </div>,   document.getElementById("containerAdd"));
}

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
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        Agregar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={MenuAgregarPersona}>Persona</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarInquilino}>Inquilino</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarDuenio}>Dueño</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarReclamo}>Reclamo</Dropdown.Item>
                                        <Dropdown.Item onClick={MenuAgregarImagen}>Imagen a Reclamo</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                        
                        </div>
                        <div className="col col-md-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
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