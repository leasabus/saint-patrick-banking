import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'

const usuarioGuardado = JSON.parse(localStorage.getItem('user'));

if(usuarioGuardado) {
  const userSaved = JSON.parse(usuarioGuardado);
} else {
  console.log("error")
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider initialUser={usuarioGuardado}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
