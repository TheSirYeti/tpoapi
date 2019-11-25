import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
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
            </div>, document.getElementById('container'));
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
        </div>, document.getElementById('container'));
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
        </div>, document.getElementById('container'));
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
        </div>, document.getElementById('container'));
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
        </div>, document.getElementById('container'));
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
        </div>,   document.getElementById('container'));
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
        </div>,   document.getElementById('container'));
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
        </div>,   document.getElementById('container'));
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
        </div>,   document.getElementById('container'));
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
        </div>,   document.getElementById('container'));
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
            </div>,   document.getElementById('container'));
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
            </div>,   document.getElementById('container'));
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
            </div>,   document.getElementById('container'));
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
            </div>,   document.getElementById('container'));
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
            </div>,   document.getElementById('container'));
}

function MenuBuscar(){
    ReactDOM.render(
        <div>
            <Form>
                <Form.Group controlId="formGridEdificio">
                    <Form.Label>Edificio</Form.Label>
                    <Form.Control className="w-25" placeholder="Ingrese el nombre del edificio" />
                </Form.Group>
                
                <Form.Row>
                    <Form.Group xl={2} as={Col} controlId="formGridPiso">
                        <Form.Label>Piso:</Form.Label>
                        <Form.Control as="select">
                            <option>Elija un piso...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group xl={2} as={Col} controlId="formGridUnidad">
                        <Form.Label>Unidad:</Form.Label>
                        <Form.Control xl={2} as="select">
                            <option>Elija una unidad...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>, document.getElementById('container'));


}



class BotónAgregar extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         presionadoA: false,
    //         isLoaded: false,
    //         items: []
    //     }
    //     this.handleClick=this.handleClick.bind(this);
    // }

    // handleClick(event){
        
    // }
    
 

    render(){
        return (
            <Button variant="primary" /*onClick={this.handleClick}*/ type="submit">Agregar</Button>
        )
    }
}

class MostrarResult extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data: []
        }
     }
    componentDidMount() {
            axios.get('http://www.json-generator.com/api/json/get/cfgQfeHLtu?indent=2')
            .then(response => {
                if (response.status === 200 && response != null) {
                    this.setState({
                        data: response.data
                    });
            } else {
            console.log('problem');
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        const { data } = this.state;
        return (
        <div className="home">
            {Array.isArray(data) && data.map(object => (
                <p key={object.id}>{object.name}</p>
            ))}
        </div>
        )
    }
}


class BotónBuscar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            presionadoB: false
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event){
        ReactDOM.render(<MostrarResult/>, document.getElementById('resultado'));
    }
    
    
    render(){
        return (
            <Button variant="primary"  onClick={this.handleClick}>
                Buscar
            </Button>
        )
    }
}

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.selectedAdd=this.selectedAdd.bind(this)
        this.selectedGet=this.selectedGet.bind(this)
    }


    selectedAdd(event){
        event.preventDefault();
        ReactDOM.render(<BotónAgregar/>, document.getElementById('botónMenú'));
    }
    
    selectedGet(event){
        event.preventDefault();
        ReactDOM.render(<BotónBuscar/>, document.getElementById('botónMenú'));
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

                                    <Dropdown.Menu onClick={this.selectedAdd}>
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

                                <Dropdown.Menu onClick={this.selectedGet}>
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
                    <h2 id="tagMenú">Menú</h2>
                    <form id= "container"></form>
                    <div id="botónMenú"></div>
                    <div id= "resultado"></div>
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