import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import loadingImg from './../assets/images/loading.jpg';
import { NavLink } from 'react-router-dom';

export default class DetalleDepartamento extends Component {
  state = {
    dptos: null
  }
  mostrarDetalles = () =>{
    let request = "api/departamentos/" + this.props.id;
    let url = Global.apiDptos + request;
    axios.get(url).then(response =>{
      this.setState({
        dptos: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.mostrarDetalles();
  }
  render() {
    return (
      <div>
        <h1>Detalle del departamento</h1>
        {/* prueba para ver que saca el props -> le llamamos aqui como "id" porque en la 
        funcion de Router.js DetalleDptoElement le he llamado "id" al prop */}
        <h1>{this.props.id}</h1>
        <NavLink to="/">Volver atrás </NavLink>
        {
          !this.state.dptos  ? (
            <img src={loadingImg}/>
          ) : (
          <ul className='list-group' style={{width: "50%"}}>
            <li className='list-group-item'>Número: {this.state.dptos.numero}</li>
            <li className='list-group-item'>Nombre: {this.state.dptos.nombre}</li>
            <li className='list-group-item'>Localidad: {this.state.dptos.localidad}</li>
          </ul>
          )
        }
      </div>
    )
  }
}
