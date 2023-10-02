import React from 'react'
import { useUser } from '../../context/AuthContext';

export const Bienvenida = () => {
    const {user} = useUser();
  return (
    user ? <h1>Bienvenido , {user.name}</h1> : <p>usuario no encontrado</p>
  )
}
