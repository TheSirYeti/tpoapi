import './bootstrap.css'
import './App.js'
import RenderMain from './Principal.js'
import React from 'react';
import ReactDOM from 'react-dom';
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
                        <label>Usuario</label>
                        <input className="form-control" type="text" name="username" required placeholder="Ingrese un usuario"/>
                        <br></br>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3" >
                                <label>Contraseña</label>
                                <input className="form-control" type="password" name="pwd" required placeholder="Ingrese la contraseña asociada"/>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <button className="btn btn-success" type="submit" name="submit" value="login" onClick={RenderMain}>Log in</button>
                            </div>
                        </div>
                    </form>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <button type="submit" className="btn btn-secondary" name="submit" value="signin">Registrar</button>
                    </div>
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