import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class EliminarDepartamento extends Component {
  state = {
    status: false
  }

  deleteDpto = (iddpto) => {
    let request = "api/departamentos/" + iddpto;
    let url = Global.apiDptos + request;
    axios.delete(url).then(response => {
      console.log("Borrando...");
      this.setState({
        status: true
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Eliminar Dpto</h1>
        {
          this.state.status == true && (
            <div>
              <h1>Elemento eliminado</h1>
              <button onClick={this.deleteDpto}>Confirmar eliminación</button>
            </div>
          )
        }
      </div>
    )
  }
}
