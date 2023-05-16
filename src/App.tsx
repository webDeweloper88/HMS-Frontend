import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/router/PrivateRoute'
import AuthRootComponent from './components/pages/auth'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutComponent from './components/layout'
import WatchListComponent from './components/pages/watchlist'
import SettingComponent from './components/pages/settings'
import BemorPage from './components/pages/bemor'
import DoctorPage from './components/pages/doctor'
import BulimPage from './components/pages/Bulim'



const App = () => {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className='App'>
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='/watchlist' element={<WatchListComponent />} />
                <Route path='/bulim' element={<BulimPage />} />
                <Route path='/doctor' element={<DoctorPage />} />
                <Route path='/bemor' element={<BemorPage />} />
                <Route path='/settings' element={<SettingComponent />} />
              </Route>
              <Route path='/login' element={<AuthRootComponent />} />
              <Route path='/register' element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </div >

      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App