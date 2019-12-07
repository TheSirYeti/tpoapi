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
        this.handleChangeReg=this.handleChangeReg.bind(this);
        this.handleSubmitReg=this.handleSubmitReg.bind(this);

        this.state={
            clicked: false,
            sUsuario: "",
            sPassword: "",
            sUsuarioReg: "",
            sPasswordReg: "",
            sDocumentoReg: "",

        };
    }

    handleChange(event){
        this.setState({
            clicked: true,
            sUsuario: document.getElementById('addUsername').value,
            sPassword: document.getElementById('addPassword').value
        });
        
    }
    
    handleChangeReg(event){
        this.setState({
            clicked: true,
            sUsuarioReg: document.getElementById('addUsernameReg').value,
            sPasswordReg: document.getElementById('addPasswordReg').value,
            sDocumentoReg: document.getElementById('addDocumentoReg').value,
        });

    }
    
    handleSubmit(event){
        console.log(this.state.sUsuario);
        console.log(this.state.sPassword);
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

    
    handleSubmitReg(event){
        console.log(this.state.sUsuarioReg);
        console.log(this.state.sDocumentoReg);
        var url = 'http://localhost:8080/ar/registrarUsuario?usuario=' + this.state.sUsuarioReg + '&password=' + this.state.sPasswordReg + '&documento=' + this.state.sDocumentoReg;
        if(this.state.clicked){
            axios.post(url)
            .then(function (response) {
                if(response.data === true){
                    axios.post(url).then(window.alert("Usuario registrado"))
                    console.log(response);
                    console.log("SUCCess")
                } 
                else{
                    window.alert("El usuario ya existe");
                }
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
                        <h1>Login</h1>
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
                <div className="row">
                <h1>Registro</h1>
                    <form className="col-md-6 col-md-offset-3" action="">
                    <form className="col-md-6 col-md-offset-3" action="">
                        <label htmlFor="addUsuarioReg">Usuario</label>
                        <input className="form-control" type="text" id="addUsernameReg" name="username" onChange={this.handleChangeReg} required placeholder="Ingrese un usuario"/>
                        <br></br>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3" >
                            <label htmlFor="addPasswordReg">Contraseña</label>
                                <input className="form-control" type="text" id="addPasswordReg" name="password" onChange={this.handleChangeReg} required placeholder="Ingrese la contraseña asociada"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3" >
                            <label htmlFor="addDocumentoReg">Documento</label>
                                <input className="form-control" type="text" id="addDocumentoReg" name="documento" onChange={this.handleChangeReg} required placeholder="Ingrese su documento"/>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                            <Button variant="primary" onClick={this.handleSubmitReg}>Registrar</Button>
                            </div>
                        </div>
                    </form>
                    </form>
                </div>
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