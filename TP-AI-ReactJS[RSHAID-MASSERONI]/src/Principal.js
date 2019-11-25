import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

function Persona(){
    ReactDOM.render(
        <div>
            <Form>
                <Form.Group controlId="formGroupNombre">
                    <Form.Label><strong>Nombre:</strong></Form.Label>
                    <Form.Control className="w-25" type="text" placeholder="Ingrese un nombre" />
                </Form.Group>
                <Form.Group controlId="formGroupApellido">
                    <Form.Label><strong>Apellido:</strong></Form.Label>
                    <Form.Control className="w-25" type="text" placeholder="Ingrese el apellido" />
                </Form.Group>
            </Form>        
        </div>, document.getElementById('container'));
}
function Edificio(){
    ReactDOM.render(
        <div>
            <Form>
                <Form.Group controlId="formGroupEdificioNombre">
                    <Form.Label><strong>Nombre del Edificio:</strong></Form.Label>
                    <Form.Control className="w-25" type="text" placeholder="Ingrese un nombre" />
                </Form.Group>
                <Form.Group controlId="formGroupIdEdificio">
                    <Form.Label><strong>N° identificador:</strong></Form.Label>
                    <Form.Control className="w-25" type="text" placeholder="Ingrese el número ID asociado" />
                </Form.Group>
            </Form>        
        </div>, document.getElementById('container'));

}
function Reclamo(){
    ReactDOM.render(
            <div>
                <Form>
                    <Form.Group controlId="formGroupEdificioNombre">
                        <Form.Label><strong>Documento:</strong></Form.Label>
                        <Form.Control className="w-25" type="text" placeholder="Ingrese el doc. de la persona reclamante" />
                    </Form.Group>
                    <Form.Group controlId="formGroupIdEdificio">
                        <Form.Label><strong>N° identificador:</strong></Form.Label>
                        <Form.Control className="w-25" type="text" placeholder="Ingrese el número ID asociado" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Ubicación:</strong></Form.Label>
                        <Form.Control className="w-25" type="text" placeholder="Ingrese dónde se ubica el reclamo" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Descripción:</strong></Form.Label>
                        <Form.Control className="w-25" as="textarea" rows="2" placeholder="Describa el reclamo" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><strong>Estado del reclamo</strong></Form.Label>
                        <Form.Control className="w-25" as="select">
                            <option>Elija una opción...</option>
                            <option>Nuevo</option>
                            <option>Abierto</option>
                            <option>En proceso</option>
                            <option>Desestimado</option>
                            <option>Anulado</option>
                            <option>Terminado</option>
                        </Form.Control>
                    </Form.Group>
                </Form>        
            </div>, document.getElementById("container"));

}

function Unidad(){
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
        </div>, document.getElementById("container"));


}



class BotónAgregar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            presionadoA: false,
            isLoaded: false,
            items: []
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event){
        
    }
    
 

    render(){
        return (
            <div>
                <Button variant="primary" onClick={this.handleClick} type="submit">Agregar</Button>
            </div>
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
            <div>
                <Button variant="primary"  onClick={this.handleClick}>
                    Buscar
                </Button>
            </div>
        )
    }
}


class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.selectedAdd=this.selectedAdd.bind(this)
        this.selectedGet=this.selectedGet.bind(this)
        // this.state={
        // }

    }


    selectedAdd(event){
        event.preventDefault();
        this.setState({dropdown:'add'})
        document.getElementById("tagMenú").innerHTML="Menú 'Agregar'"
        ReactDOM.render(<BotónAgregar/>, document.getElementById('botónMenú'))
    }
    
    selectedGet(event){
        event.preventDefault()
        this.setState({dropdown:'get'})
        document.getElementById("tagMenú").innerHTML="Menú 'Buscar'"
        ReactDOM.render(<BotónBuscar/>, document.getElementById('botónMenú'))
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

                                <Dropdown.Menu onClick={this.selectedGet}>
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
                    <div id="resultado"></div>
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