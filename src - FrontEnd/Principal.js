import './bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
// class PaginaLogIn extends React.Component{
//     render(){
//         return(
//             <div>
//                 <input placeholder= "Ingrese usuario">usuario</input>
//                 <input placeholder=" Ingrese contraseña">contraseña</input>
//             </div>
//         );
//     }
// }
class MainPage extends React.Component{
    render(){
        return(     
            <body>
                <div className="encabezado">
                    <h1 className="text-center">Sistema Administrador de Edificios, Personas y Reclamos</h1>
                    <div className="row">
                        <div className="col col-md-1 md-offset-4 dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Agregar
                            </button>
                            <div class="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                        <div className="col col-md-1 dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Buscar
                            </button>
                            <div class="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                    </div>

                </div>

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
                </div>
                
                <div>
                    <h2>Menú "Buscar"</h2>
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
                </div>
            </body>
        );
    }
}

function RenderMain(){
    const mainPage= React.createElement(MainPage);
    ReactDOM.render(mainPage, document.getElementById('root'));
    return; 
}
export default RenderMain