import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { UserTypes } from '../../interfaces/users';
import { useUser } from '../../context/AuthContext';
import { redirect} from 'react-router-dom';
import { User } from '../history/transactions';




const LoginForm = () => {


   //Utilizacion del hook de react-hook-form
   const {register, handleSubmit , formState:{errors}} = useForm<UserTypes>();
   const {user, setUser} = useUser();

  const baseURL = 'http://localhost:3000/users/1' ;
   
  const onSubmit = async (data: {name:string, lastName:string, key:string}) => {
        try {
          const response = await axios.get(`http://localhost:3000/users?name=${data.name}`)
          const users = response.data
          // console.log("Este es el user")
          // console.log(users)
          if(users.length === 1){
            const user = users[0];
            //verificacion de los 3 campos
            //(mostrar un mensaje por campo)
            if(user.key === data.key && user.name === data.name && user.lastName === data.lastName){
              console.log(user)
              setUser(user) ;
              redirect("/welcome")
            } else {
              alert("Datos incorrectos, intentalo de nuevo")
            }
          }else {
            console.error("NO SE ENCONTRO UN USUARIO CON ESE ID")
          }          
        }catch(erorr){
          console.log("Usuario no encontrado")
        }
  };

 
  return (
    <>
      <div className='h-full flex flex-col justify-center items-start py-20  px-40'>

        <h1 className="text-4xl font-bold text-green-500">Bienvenido Saint Patrick</h1>
        <h4 className="mt-3 text-start">Ingresa tus datos y comenza a operar.</h4>
  
  <form onSubmit={handleSubmit(onSubmit)}
        className="bg-white  rounded mt-5 flex flex-col h-full ">
    <div className="mb-4">
      <label className="block text-gray-500 text-xl font-bold mb-2" htmlFor="username">
       Nombre
      </label>
      <input className="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
             type= "text"
             placeholder='Usuario'
             {...register("name" , {required: true, minLength:5 , pattern: /^[A-Za-z]+$/i})}
             />
             {errors.name && <p className='text-red-500'>El nombre es requerido</p>}
          
    </div>

    <div className="mt-4">
      <label className="block text-gray-500 text-xl font-bold mb-2" htmlFor="username">
       Apellido
      </label>
      <input  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"  
              type="text"
              placeholder='Apellido'
              {...register("lastName" , {required: true , maxLength:20 , pattern: /^[A-Za-z]+$/i})}
              />
      {errors.lastName && <p className='text-red-500'>El nombre es requerido</p>}

    </div>


    <div className="mt-4">
      <label className="block text-gray-500 text-xl font-bold mb-2" htmlFor="password">
        Contraseña
      </label>
      <input  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"   
              type='password'
              placeholder='Contraseña'
              {...register("key" , {required: true , minLength:5 , maxLength:20})}
              />
      {errors.key && <p className='text-red-500'>Por favor ingresa tu contraseña</p>}

        
    </div>

    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" 
              type="submit">
           Login
    </button>

    {
      <div>
      <p>{user?.name}</p>
      <p>{user?.lastName}</p>
      </div>
    }
    

  </form>
  
</div>
      </>
  )
}

export default LoginForm ;

  

       {/* {
            (!formData.name) || (formData.name.length <= 5)
              ? 
             <span className='text-red-500 text-[10px]'>Rellena este campo. Recuerda que debe tener más de 5 caracteres</span>
              : 
            <span className='text-blue-400 text-[10px] font-bold'><AiFillCheckCircle size={16}/> </span>
           
              } */}