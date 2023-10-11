import { useUser } from "../context/AuthContext" ;
import { Navigate , Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {

  const {autenticated} = useUser();

  if(autenticated === false) {
    return <Navigate to={"/"}/>
    
  }
  return (
   <Outlet/>
  )
} ;



