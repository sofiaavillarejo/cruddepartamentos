import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import EliminarDepartamento from './EliminarDepartamento'

export default class Router extends Component {
  render() {
    function DetalleDptoElement () {
      //!Aqui tiene que llamarse igual que lo que pongamos en <Route/>
      let {iddpto} = useParams();
      return (<DetalleDepartamento id={iddpto}/>)
    }

    function UpdateDepartamentoElement() {
      let {iddpto, nombre, localidad} = useParams();
      return(<UpdateDepartamento id={iddpto} nombre={nombre} localidad={localidad}/>)
    }

    function EliminarDepartamentoElement() {
      let {iddpto} = useParams();
      return(<EliminarDepartamento id={iddpto}/>)
    }
    return (
      <div>
        <BrowserRouter>
        <MenuDepartamentos/>
          <Routes>
            <Route path='/' element={<HomeDepartamentos/>} />
            <Route path='/creardpto' element={<CreateDepartamentos/>} />
            {/* aqui se llama a la funcion!!!! */}
            <Route path='/detalledpto/:iddpto' element={<DetalleDptoElement/>} />
            <Route path='/update/:iddpto/:nombre/:localidad' element={<UpdateDepartamentoElement/>} />
            <Route path='/eliminar/:iddpto' element={<EliminarDepartamentoElement/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
