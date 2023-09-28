import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom";

// !Proteccion de rutas sin loguearse
export const ProtectedRoutes = () => {
    const[isAuth, setIsAuth] = useState(false);
  return (
     isAuth ? <Outlet/> : <Navigate to={"/login"}></Navigate>
  )
}
