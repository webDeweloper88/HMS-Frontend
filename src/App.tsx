import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/router/PrivateRoute'
import AuthRootComponent from './components/auth'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutComponent from './components/layout'
import WatchListComponent from './components/pages/watchlist'
import NewsComponent from './components/pages/news'
import SettingsComponent from './components/pages/settings'


const App = () => {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className='App'>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='/watchlist' element={<WatchListComponent />} />
                <Route path='/news' element={<NewsComponent />} />
                <Route path='/settings' element={<SettingsComponent />} />
              </Route>
              <Route path='/login' element={<AuthRootComponent />} />
              <Route path='/register' element={<AuthRootComponent />} />
            </Routes>
          </div >
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App