import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate, NavLink } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  }
  updateDpto = (e) =>{
    e.preventDefault();
    let request ="api/departamentos";
    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;
    //creamos el objeto para hacer update
    let departamento = {
      numero: id,
      nombre: nombre,
      localidad: localidad
    }
    let url = Global.apiDptos + request;
    axios.put(url, departamento).then (response => {
      this.setState({
        status: true
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Update departamento</h1>
        <NavLink to="/">Volver atrás</NavLink>
        <form>
          <label>Introduce Id</label>
          <input type='text' ref={this.cajaId} className='form-control' value={this.props.id} disabled/>
          <label>Introduce nombre</label>
          {/* value lo convierte en Read Only, asi que hay que usar -> defaultValue */}
          <input type='text' ref={this.cajaNombre} className='form-control' defaultValue={this.props.nombre}/>
          <label>Introduce localidad</label>
          <input type='text' ref={this.cajaLocalidad} className='form-control' defaultValue={this.props.localidad}/>
          <hr/>
          <button onClick={this.updateDpto} className='btn btn-primary'>Crear dpto</button>
        </form> 
        {
          this.state.status == true && <Navigate to="/" />
        }
      </div>
    )
  }
}
