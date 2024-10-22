import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import loadingImage from './../assets/images/loading.jpg';
import { NavLink } from 'react-router-dom';
import EliminarDepartamento from './EliminarDepartamento';
import { Navigate } from 'react-router-dom';

export default class HomeDepartamentos extends Component {
  state = {
    status: false,
    departamentos: []
  }
  loadDptos = () => {
    var request ="/api/Departamentos";
    var url = Global.apiDptos + request;
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({
        departamentos: response.data,
        status: true
      })
    })
  }
  //el id viene desde el btn de borrar
  deleteDpto = (iddpto) => {
    let request = "api/departamentos/" + iddpto;
    let url = Global.apiDptos + request;
    axios.delete(url).then(response => {
      console.log("Borrando...");
      this.loadDptos();
    })
  }

  componentDidMount = () =>{
    this.loadDptos();
  }
  render() {
    //hacemos esto con codgio js pero se puede hacer directamente en return con el condicional de react como hacemos siempre
    if (this.state.status == false){
      return( <img src={loadingImage} />)
    } else {
      return (
        <div>
          <h1>Home Departamentos</h1>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Localidad</th>
              </tr>
            </thead>
            <tbody>
              { this.state.departamentos.map((dpto, index) => {
                return(
                  <tr key={index}>
                    {/* enviamos por parametro el id del dpto en el que se clique para ver sus detalles */}
                    <td>{dpto.numero} 
                      ➡️ <NavLink to={"/detalledpto/" + dpto.numero}>Detalles</NavLink> 
                      ➡️ <NavLink to={"/update/" + dpto.numero + "/" + dpto.nombre + "/" + dpto.localidad}>Update</NavLink>
                      ➡️ <button className='btn btn-danger'><NavLink to={"/eliminar/" + dpto.numero }>Borrar</NavLink></button></td>
                    <td>{dpto.nombre}</td>
                    <td>{dpto.localidad}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
