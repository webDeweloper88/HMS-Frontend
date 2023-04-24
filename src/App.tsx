import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/router/PrivateRoute'
import AuthRootComponent from './components/auth'


const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/login' element={<AuthRootComponent />} />
        <Route path='/register' element={<AuthRootComponent />} />
      </Routes>
    </div >
  )
}

export default App