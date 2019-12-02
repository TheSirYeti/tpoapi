import './bootstrap.css'
import './App.js'
import RenderMain from './Principal.js'
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
// className PaginaLogIn extends React.Component{
//     render(){
//         return(
//             <div>
//                 <input placeholder= "Ingrese usuario">usuario</input>
//                 <input placeholder=" Ingrese contraseña">contraseña</input>
//             </div>
//         );
//     }
// }
class PaginaLogIn extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            clicked: false,
            sUsuario: "",
            sPassword: ""
        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            sUsuario: document.getElementById('addUsername').value,
            sPassword: document.getElementById('addPassword').value
        });

    }
    
    handleSubmit(event){
        console.log(this.state.sNombre);
        console.log(this.state.sDocumento);
        var url = 'http://localhost:8080/ar/verificarLogin?usuario=' + this.state.sUsuario + '&password=' + this.state.sPassword;
        if(this.state.clicked){
            axios.get(url)
            .then(function (response) {
                if(response.data === true){
                    axios.get(url).then(RenderMain)
                } 
                else{
                    window.alert("Usuario / Contraseña Incorrecta");
                }
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
            <div className="container">
    
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Registro</h1>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="row">
                    <form className="col-md-6 col-md-offset-3" action="">
                        <label htmlFor="addUsuario">Usuario</label>
                        <input className="form-control" type="text" id="addUsername" name="username" onChange={this.handleChange} required placeholder="Ingrese un usuario"/>
                        <br></br>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3" >
                            <label htmlFor="addPassword">Contraseña</label>
                                <input className="form-control" type="text" id="addPassword" name="password" onChange={this.handleChange} required placeholder="Ingrese la contraseña asociada"/>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                            <Button variant="primary" onClick={this.handleSubmit}>Ingresar</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <br></br>
            </div>
        );
    }
}

function PasarALogIn(){
    const paginaLogIn= React.createElement(PaginaLogIn);
    ReactDOM.render(paginaLogIn, document.getElementById('root'));
    return; 
}
export default PasarALogIn