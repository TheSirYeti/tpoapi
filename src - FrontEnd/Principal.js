import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
function Persona(){
    ReactDOM.render(
        <div>
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
                            <select id="inputState" className="form-control" style={{width: '182.5px'}}>
                                <option defaultValue>Elija una opción...</option>
                                <option>Persona</option>
                                <option>Inquilino</option>
                                <option>Dueño</option>
                            </select>
                    </li>
                </ul>
            </form>
        </div>, document.getElementById('container'))
}
function Edificio(){
    ReactDOM.render(
        <div>
                <ul>
                    <li className="form-group">
                        <label for="addEdificio"> <strong>Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addEdificio" name="edificio"></input>
                    </li>
                </ul>
        </div>, document.getElementById('container'))
}
function Reclamo(){
    ReactDOM.render(
            <div>
                <form id="Agregar">
                    <ul>
                        <li className="form-group"> 
                            <label for="Reclamo"><strong>Dato del reclamo</strong></label>
                            <br></br>
                            <textarea type="text-area" id="addReclamo" name="dataReclamo" style={{width: '25%'}}></textarea>
                        </li>
                        <li className="form-group">
                            <label for="Reclamo"> <strong>Descripción del reclamo:</strong></label>
                                <br></br>
                            <textarea type="text-area" id="addReclamo" name="descReclamo" style={{width:'25%'}}></textarea>
                        </li>
                    </ul>
                </form>
            </div>, document.getElementById("container"));
}

function Unidad(){
    ReactDOM.render(
        <div>
            <form>
                <ul>
                    <li className="form-group">
                        <label for="getEdificio"> <strong>Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="getEdificio" name="edificio"></input>
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
        </div>, document.getElementById("container"));
}


class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.agregarWasClicked=this.agregarWasClicked.bind(this)
        this.buscarWasClicked=this.buscarWasClicked.bind(this)

    }
    
    agregarWasClicked(event){
        event.preventDefault();
        document.getElementById("tagMenú").innerHTML="Menú Agregar"
        ReactDOM.render(<Button variant="primary">Agregar</Button>, document.getElementById('botónMenú'))
    }
    
    buscarWasClicked(event){
        event.preventDefault()
        document.getElementById("tagMenú").innerHTML="Menú Buscar"
        ReactDOM.render(<Button variant="primary">Buscar</Button>, document.getElementById('botónMenú'))
    }
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

                                    <Dropdown.Menu onClick={this.agregarWasClicked}>
                                        <Dropdown.Item onClick={Persona}>Persona</Dropdown.Item>
                                        <Dropdown.Item onClick={Edificio}>Edificio</Dropdown.Item>
                                        <Dropdown.Item onClick={Unidad}>Unidad</Dropdown.Item>
                                        <Dropdown.Item onClick={Reclamo}>Reclamo</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                        
                        </div>
                        <div className="col col-md-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    Buscar
                                </Dropdown.Toggle>

                                <Dropdown.Menu onClick={this.buscarWasClicked}>
                                    <Dropdown.Item onClick={Persona}>Persona</Dropdown.Item>
                                    <Dropdown.Item onClick={Edificio}>Edificio</Dropdown.Item>
                                    <Dropdown.Item onClick={Unidad}>Unidad</Dropdown.Item>
                                    <Dropdown.Item onClick={Reclamo}>Reclamo</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                </div>

                <div>
                    <h2 id="tagMenú">Menú</h2>
                    <form id="container"></form>
                    <div id="botónMenú"></div>
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