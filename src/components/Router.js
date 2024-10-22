import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeDepartamentos from './HomeDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import CreateDepartamentos from './CreateDepartamentos'

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <MenuDepartamentos/>
          <Routes>
            <Route path='/' element={<HomeDepartamentos/>} />
            <Route path='/creardpto' element={<CreateDepartamentos/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
