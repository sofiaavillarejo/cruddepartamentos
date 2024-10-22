import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamentos extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  }

  insertDpto = (e)=>{
    e.preventDefault();
    let request = "api/departamentos";
    let url = Global.apiDptos + request;
    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;

    //!! al crear el objeto, poner de variables las mismas que tenga el de la api
    //TODO: SINO DARÁ ERROR!!!!!
    let dpto = {
      numero: id,
      nombre: nombre,
      localidad: localidad
    }

    axios.post(url, dpto).then(response => {
      this.setState({
        status: true
      })
    })
  }
  render() {
    if (this.state.status == true){
      return (<Navigate to="/"/>)
    } else {
      return (
        <div>
          <h1>Crear departamento</h1>
          <form>
            <label>Introduce Id</label>
            <input type='text' ref={this.cajaId} className='form-control'/>
            <label>Introduce nombre</label>
            <input type='text' ref={this.cajaNombre} className='form-control'/>
            <label>Introduce localidad</label>
            <input type='text' ref={this.cajaLocalidad} className='form-control'/>
            <button onClick={this.insertDpto} className='btn btn-primary'>Crear dpto</button>
          </form> 
        </div>
      )
    }
  }
}
