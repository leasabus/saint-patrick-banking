import axios from "axios";
import { UserTypes } from "../interfaces/users";


//Realizar peticion http para traer el usuario

const baseURL = 'http://localhost:3000/users/1' ;

export const loginRequest = (user : UserTypes) => axios.get(baseURL) ; 