import { ReactNode, createContext, useContext, useState } from "react";
import { UserTypes} from '../interfaces/users';
import { loginRequest } from "../api/auth";

//tipado de los children
type UserProviderProps = {
    children: ReactNode
}

//tipado del contexto de usuario
type UserContextType = {
    user: UserTypes | null;
    setUser: (user: UserTypes | null) => void
  };

  //Creacion del contexto
const UserContext  = createContext<UserContextType | undefined>(undefined);

//funcion para utilizar los datos del usuario
export function useUser() {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error('UseUser debe ser utilizado dentro de un UserProvider')
    }
    return context ;
}

//creacion del provider
export const AuthProvider = ({children}: UserProviderProps) => {
 const [user, setUser] = useState<UserTypes | null>(null);

 return (
   <UserContext.Provider value={{user, setUser}}>
      {children}
   </UserContext.Provider>
 )
 };


