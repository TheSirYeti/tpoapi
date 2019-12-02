import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.selectedAdd=this.selectedAdd.bind(this)
        this.selectedGet=this.selectedGet.bind(this)
    }


    selectedAdd(event){
        event.preventDefault();
        ReactDOM.render(<h2>Menú "Agregar"</h2>, document.getElementById('tagMenú'))
        // ReactDOM.render(<BotónAgregar/>, document.getElementById('botónMenú'));
    }
    
    selectedGet(event){
        event.preventDefault();
        ReactDOM.render(<h2>Menú "Buscar"</h2>, document.getElementById('tagMenú'))
        // ReactDOM.render(<BotónBuscar/>, document.getElementById('botónMenú'));
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
                                    <Dropdown.Item onClick={renderMBE}>Edificio</Dropdown.Item>
                                    <Dropdown.Item onClick={renderMBU}>Unidad</Dropdown.Item>
                                    <Dropdown.Item onClick={MenuBuscarReclamo}>Reclamo</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                </div>

                <Col xl={{offset: 0.5}}>
                    <div>
                        <h2 id="tagMenú"></h2>
                        <form id= "container"></form>
                        <div id="botónMenú"></div>
                        <div id= "resultado"></div>
                        <form id="containerAdd"></form>
                    </div>
                    
                    <div>
                        <form id="containerGet"></form>
                    </div>
                </Col>
            </div>

        );
    }
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


class BotónBuscar extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     presionadoB: false
        // }
    }

    
    
    render(){
        return (
            <Button variant="primary">
                Buscar
            </Button>
        )
    }
}




function MenuAgregarPersona(){
    ReactDOM.render(<AddPerson/>,document.getElementById('container'));
}

class AddPerson extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            sNombre: "",
            sDocumento: ""
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            sNombre: document.getElementById('addNombre').value,
            sDocumento: document.getElementById('addDocumento').value
        });
        
    }
    
    handleSubmit(event){        
        console.log(this.state.sNombre);
        console.log(this.state.sDocumento);
        const usuario = {
            nombre: this.state.sNombre,
            documento: this.state.sDocumento
        }
        if(this.state.clicked){
            var url= 'http://localhost:8080/ar/agregarPersona?nombre=' + this.state.sNombre + '&documento=' + this.state.sDocumento;
            axios.post(url)
            .then(function (response) {
                console.log(response);
                console.log("SUCCess")
            })
            .catch(function (error) {
                console.log(error);
            });
            }
        
    }


    render(){
        return(
            <div>
                <h2>Agregar Persona</h2>
                <form id="AgregarPersona">
                    <ul>
                        <li className="form-group">
                        <label for="addNombre"> <strong>Nombre:</strong></label>
                            <br></br>
                            <input type="text" id="addNombre" name="nombre" onChange={this.handleChange}></input>
                        </li>
                        <li className="form-group">
                            <label for="addDocumento"> <strong>Documento:</strong></label>
                                <br></br>
                            <input type="text" id="addDocumento" name="documento" onChange={this.handleChange}></input>
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
                    <Button variant="primary" onClick={this.handleSubmit}>Agregar</Button>
                </form>
            </div>);}
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
                        <label for="addCodigo"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addCodigo" name="piso"></input>
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
                        <label for="addFloor"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addFloor" name="piso"></input>
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
                        <label for="addFloor"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="addFloor" name="piso"></input>
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
                        <label for="file"><strong>Choose a file:</strong><span class="box__dragndrop">, or drag it here!</span></label>
                        <button class="box__button" type="submit">Upload</button>
                    </div>
                    <div class="box__uploading">Uploading&hellip;</div>
                    <div class="box__success">Done!</div>
                    <div class="box__error">Error! <span></span>.</div>
                </form>
            </form>
        </div>, document.getElementById('container'));
}

function renderMBE(){
    ReactDOM.render(<MenuBuscarEdificio/>, document.getElementById('container'));
}
class MenuBuscarEdificio extends React.Component{
    constructor(props){
        super(props);
        // this.callDB= this.callDB.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            nroCod: document.getElementById('codigoEdif').value
        })
    }
    
    handleSubmit(){
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/getEdificio?codigo="
            const nrocod= this.state.nroCod
            const url= bdd + nrocod
            axios.get(url)
            .then(response => {
                if (response.status === 200 && response != null) {
                    this.setState({
                        data: response.data
                    })
                    ReactDOM.render(
                    <Col xl={{span: 3, offset: 1}} className="text-center">
                        <ListGroup>
                            <ListGroup key={response.data.codigo}>
                                <ListGroup.Item>{response.data.nombre}</ListGroup.Item>
                                <ListGroup.Item>{response.data.direccion}</ListGroup.Item>
                            </ListGroup>
                            <br></br>
                        </ListGroup>
                    </Col>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }

    render(){
        return(
            <div>
                <h2>Búsqueda de Edificio</h2>
                <Form id="buscarEdificio">
                    <Form.Group>
                        <Form.Label>Codigo de Edificio</Form.Label>
                        <Form.Control id="codigoEdif" type="number" placeholder="Enter codigo" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre de Edificio</Form.Label>
                        <Form.Control type="text" placeholder="Enter nombre" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="Enter dirección" />
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={this.handleSubmit}>Buscar</Button>
            </div>);}
}


function renderMBU(){
    ReactDOM.render(<MenuBuscarUnidad/>, document.getElementById('container'));
}

class MenuBuscarUnidad extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            nroCod: document.getElementById('getBuildCode').value
        })
    }
    
    handleSubmit(){
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/getUnidadesPorEdificio?codigo="
            const nrocod= this.state.nroCod
            const url= bdd + nrocod
            axios.get(url)
            .then(response => {
                if (response.status === 200 && response != null) {
                    // this.setState({
                    //     data: response.data
                    // })
                    ReactDOM.render(
                    <div className="home">
                    {Array.isArray(response.data) && response.data.map(object => (
                        <Col xl={{span: 3, offset: 1}} className="text-center">
                            <ListGroup>
                                <ListGroup key={object.id}>
                                    <ListGroup.Item variant="warning"> Pertenece al edificio <strong>{object.edificio.nombre}</strong></ListGroup.Item>
                                    <ListGroup.Item>Piso: {object.piso}</ListGroup.Item>
                                    <ListGroup.Item>ID de la Unidad: {object.id}</ListGroup.Item>
                                    <ListGroup.Item>N° de unidad: {object.numero}</ListGroup.Item>
                                </ListGroup>
                            <br></br>
                            </ListGroup>
                        </Col>
                    ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }

    render(){
        return(
            <div>
                <h2>Búsqueda de Unidad</h2>
                <form id="buscarUnidad">
                    <ul>
                        <li className="form-group">
                        <label for="getBuildCode"> <strong>Codigo de Edificio:</strong></label>
                            <br></br>
                            <input type="number" id="getBuildCode" name="codigo" onChange={this.handleChange}></input>
                        </li>
                        {/* <li className="form-group">
                            <label for="getBuildFloor"> <strong>Piso del Edificio:</strong></label>
                                <br></br>
                            <input type="numbre" id="getBuildFloor" name="piso"></input>
                        </li>
                        <li className="form-group">
                            <label for="getUnitNumber"> <strong>Número de Unidad:</strong></label>
                                <br></br>
                            <input type="text" id="getUnitNumber" name="numero"></input>
                        </li> */}
                    </ul>
                </form>
                <Button variant="primary" onClick={this.handleSubmit}>Buscar</Button>
            </div>
        );}
}

function MenuBuscarPersona(){
    ReactDOM.render(
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Que desea buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={renderHabilitados}>Habilitados</Dropdown.Item>
                    <Dropdown.Item onClick={renderDuenios}>Dueños</Dropdown.Item>
                    <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                    <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
            <BotónBuscar/>
        </div>,   document.getElementById('container'));
}


function renderHabilitados(){
    ReactDOM.render(<Habilitados/>, document.getElementById('container'));
}
class Habilitados extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            nroCod: document.getElementById('getCodigo').value
        })
        console.log(this.state.nroCod);
    }
    
    handleSubmit(event){
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/getHabilitadosPorEdificio?codigo="
            const nrocod= this.state.nroCod
            const url= bdd + nrocod
            axios.get(url)
            .then(response => {
                if (response.status === 200 && response != null) {
                    // this.setState({
                    //     data: response.data
                    // })
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                    <ListGroup key={object.documento}>
                                        <ListGroup.Item><strong>{object.nombre}</strong></ListGroup.Item>
                                        <ListGroup.Item>Documento: {object.documento}</ListGroup.Item>
                                    </ListGroup>
                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }

    render(){
        return(
            <div>
                <h2>Buscar Habilitados</h2>
                <li className="form-group">
                    <label for="getCodigo"> <strong>Codigo de Edificio:</strong></label>
                    <br></br>
                    <input type="number" id="getCodigo" name="codigo" onChange={this.handleChange}></input>
                </li>
                <Button variant="primary" onClick={this.handleSubmit}>Buscar</Button>
            </div>
            );}
}

function renderDuenios(){
    ReactDOM.render(<Duenios/>,document.getElementById('container'));
}
class Duenios extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            nroCod: document.getElementById('getCodigo').value
        })
        console.log(this.state.nroCod);
    }
    
    handleSubmit(event){
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/getDueniosPorEdificio?codigo="
            const nrocod= this.state.nroCod
            const url= bdd + nrocod
            axios.get(url)
            .then(response => {
                if (response.status === 200 && response != null) {
                    // this.setState({
                    //     data: response.data
                    // })
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                    <ListGroup key={object.documento}>
                                        <ListGroup.Item><strong>{object.nombre}</strong></ListGroup.Item>
                                        <ListGroup.Item>Documento: {object.documento}</ListGroup.Item>
                                    </ListGroup>
                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }
    render(){
        return(
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Que desea buscar?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={renderHabilitados}>Habilitados</Dropdown.Item>
                        <Dropdown.Item onClick={renderDuenios}>Dueños</Dropdown.Item>
                        <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                        <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
                <h2>Buscar Dueños</h2>
                <li className="form-group">
                    <label for="getCodigo"> <strong>Codigo de Edificio:</strong></label>
                            <br></br>
                            <input type="number" id="getCodigo" name="codigo" onChange={this.handleChange}></input>
                </li>
                <Button variant="primary" onClick={this.handleSubmit}>Buscar</Button>
            </div>
            );
        }
}

function inquilinos(){
    ReactDOM.render(<Inquilinos/>,document.getElementById('container'));
}
class Inquilinos extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            // nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
        })
    }
    
    handleSubmit(event){
        console.log(this.state.clicked)
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/getInquilinosPorUnidad"
            axios.get(bdd,{
                params:{
                    codigo: document.getElementById('getCodigo').value,
                    piso: document.getElementById('getFloorNum').value,
                    numero: document.getElementById('getNum').value
                }
            })
            .then(response => {
                if (response.status === 200 && response != null) {
                    // this.setState({
                    //     data: response.data
                    // })
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                    <ListGroup key={object.documento}>
                                        <ListGroup.Item><strong>{object.nombre}</strong></ListGroup.Item>
                                        <ListGroup.Item>Documento: {object.documento}</ListGroup.Item>
                                    </ListGroup>
                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }
    render(){
        return(
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Que desea buscar?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={renderHabilitados}>Habilitados</Dropdown.Item>
                        <Dropdown.Item onClick={renderDuenios}>Dueños</Dropdown.Item>
                        <Dropdown.Item onClick={inquilinos}>Inquilinos</Dropdown.Item>
                        <Dropdown.Item onClick={getallpersonas}>Todas las Personas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
                <h2>Buscar Inquilinos</h2>
                <ul>
                    <li className="form-group">
                        <label for="getCodigo"> <strong>Codigo de Edificio:</strong></label>
                                <br></br>
                        <input type="number" id="getCodigo" name="codigo" onChange={this.handleChange}></input>
                    </li>
                    <li className="form-group">
                        <label>Piso de la unidad: </label>
                        <input type="number" id="getFloorNum" name="piso" onChange={this.handleChange}></input>    
                    </li>
                    <li>
                        <label>Numero de la unidad: </label>
                        <input type="number" id="getNum" name="numero" onChange={this.handleChange}></input>    
                    </li>
                </ul>
                <Button variant="type" onClick={this.handleSubmit}>Buscar</Button>
            </div>
        );}
}


function getallpersonas(){
    ReactDOM.render(<GetAllPersonas/>, document.getElementById('resultado'));
}

class GetAllPersonas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data: []
        }
     }
    componentDidMount() {
        axios.get("http://localhost:8080/ar/getPersonas")
        .then(response => {
             if (response.status === 200 && response != null) {
                ReactDOM.render(
                <div>
                    {Array.isArray(response.data) && response.data.map(object => (
                    <Col xl={{span: 3, offset: 1}} className="text-center">
                        <ListGroup>
                            <ListGroup key={object.documento}>
                                <ListGroup.Item>{object.documento}</ListGroup.Item>
                                <ListGroup.Item>{object.nombre}</ListGroup.Item>
                            </ListGroup>
                            <br></br>
                        </ListGroup>
                    </Col>))}
                </div>, document.getElementById('resultado'));

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
        return (<div/>)
    }
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
    ReactDOM.render(<PorUnidad/>, document.getElementById('container'));
}

class PorUnidad extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            // nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
        })
    }
    
    handleSubmit(event){
        console.log(this.state.clicked)
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/reclamosPorUnidad"
            axios.get(bdd,{
                params:{
                    codigo: document.getElementById('getCodigo').value,
                    piso: document.getElementById('getFloorNum').value,
                    numero: document.getElementById('getNum').value
                }
            })
            .then(response => {
                if (response.status === 200 && response != null) {
                    // this.setState({
                    //     data: response.data
                    // })
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                <ListGroup.Item>{object.documento}</ListGroup.Item>
                                    <ListGroup.Item>{object.ubicacion}</ListGroup.Item>
                                    <ListGroup.Item>{object.descripcion}</ListGroup.Item>
                                    <ListGroup.Item>{object.estado}</ListGroup.Item>

                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }
    render(){
        return(
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
                    <label for="getCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="getCodigo" name="codigo" onChange={this.handleChange}></input>
                    </li>
                    <li className="form-group">
                        <label for="getFloor"> <strong>Piso del Edificio:</strong></label>
                            <br></br>
                        <input type="text" id="getFloor" name="piso" onChange={this.handleChange}></input>
                    </li>
                    <li className="form-group">
                        <label for="getNumero"> <strong>Numero:</strong></label>
                            <br></br>
                        <input type="text" id="getNumero" name="numero" onChange={this.handleChange}></input>
                    </li>
                </ul>
                <Button variant="primary" onClick={this.handleSubmit}>Buscar</Button>
            </div>
            );}
}

function recPorEdificio(){
    ReactDOM.render(<PorEdificio/>,document.getElementById('container'));
}

class PorEdificio extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            // nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
        })
    }
    
    handleSubmit(event){
        console.log(this.state.clicked)
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/reclamosPorEdificio"
            axios.get(bdd,{
                params:{
                    codigo: document.getElementById('getCodigo').value,
                }
            })
            .then(response => {
                if (response.status === 200 && response != null) {
                    // this.setState({
                    //     data: response.data
                    // })
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                <ListGroup.Item>{object.documento}</ListGroup.Item>
                                    <ListGroup.Item>{object.ubicacion}</ListGroup.Item>
                                    <ListGroup.Item>{object.descripcion}</ListGroup.Item>
                                    <ListGroup.Item>{object.estado}</ListGroup.Item>

                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }

    render(){
        return(
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
                    <label for="getCodigo"> <strong>Codigo de Edificio:</strong></label>
                        <br></br>
                        <input type="number" id="getCodigo" name="codigo"></input>
                    </li>
                </ul>
            </div>);
    }
}

function recPorPersona(){
    ReactDOM.render(<PorPersona/>, document.getElementById('container'));
}

class PorPersona extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            // nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
        })
    }
    
    handleSubmit(event){
        console.log(this.state.clicked)
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/reclamosPorPersona"
            axios.get(bdd,{
                params:{
                    codigo: document.getElementById('getDocumento').value,
                }
            })
            .then(response => {
                if (response.status === 200 && response != null) {
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                    <ListGroup.Item>{object.documento}</ListGroup.Item>
                                    <ListGroup.Item>{object.ubicacion}</ListGroup.Item>
                                    <ListGroup.Item>{object.descripcion}</ListGroup.Item>
                                    <ListGroup.Item>{object.estado}</ListGroup.Item>
                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }

    
    render(){
        return(
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
                    <label for="getCodigo"> <strong>Documento:</strong></label>
                        <br></br>
                        <input type="text" id="getDocumento" name="documento"></input>
                    </li>
                </ul>
            </div>);
    }
}

function recPorNumero(){
    ReactDOM.render(<PorNumero/>, document.getElementById('container'));
}

class PorNumero extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            // nroCod: "",
            data: []
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
        })
    }
    
    handleSubmit(event){
        console.log(this.state.clicked)
        if(this.state.clicked){
            const bdd="http://localhost:8080/ar/reclamosPorNumero"
            axios.get(bdd,{
                params:{
                    codigo: document.getElementById('getNumero').value,
                }
            })
            .then(response => {
                if (response.status === 200 && response != null) {
                    ReactDOM.render(
                    <div className="home">
                        {Array.isArray(response.data) && response.data.map(object => (
                            <Col xl={{span: 3, offset: 1}} className="text-center">
                                <ListGroup>
                                    <ListGroup.Item>{object.documento}</ListGroup.Item>
                                    <ListGroup.Item>{object.ubicacion}</ListGroup.Item>
                                    <ListGroup.Item>{object.descripcion}</ListGroup.Item>
                                    <ListGroup.Item>{object.estado}</ListGroup.Item>
                                <br></br>
                                </ListGroup>
                            </Col>
                        ))}
                    </div>,document.getElementById('resultado'));
                } else {
                console.log('problem');
                }
            })
            .catch(error => {
                console.log(error);
            });   
        }
    }    
    
    render(){
        return(
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
                        <label for="getNumero"> <strong>Numero de Reclamo:</strong></label>
                            <br></br>
                            <input type="text" id="getNumero" name="Numero"></input>
                        </li>
                    </ul>
            </div>);
    }
}





function RenderMain(){
    const mainPage= React.createElement(MainPage);
    ReactDOM.render(mainPage, document.getElementById('root'));
    return; 
}
export default RenderMain