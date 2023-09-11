import { useState } from 'react';
import {AiFillCheckCircle} from 'react-icons/ai' ;

interface InitialState  {
  username : string,
  lastname: string,
  password: string
}


const initialState:InitialState = {
  username : '',
  lastname: '',
  password: '',
}

const LoginForm = () => {
  const [formData, setFormData] = useState<InitialState>(initialState);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
    //console.log(value);
  }

  const onFormSubmit = async (e : React.FormEvent) => {

    e.preventDefault();
    
    //Fetching de datos
    try {
    const url = `https://jsonplaceholder.typicode.com/users/1?nombre=${formData.username}&apellido=${formData.lastname}&contraseña=${formData.password}` ;
    const response = await fetch(url);
  
    if(response.ok){
      const data = await response.json();
      console.log(data)
    } else {
      console.error("Error") ;
    }
    }catch (error) {
     console.log(error);

    }};
    
      
  
  return (
    <>
      <div className="w-full max-w-xs mx-auto mt-4">
        <h1 className="text-xl font-bold text-secondary">Bienvenido a tu home banking</h1>
        <h4 className="mt-3">Ingresa tus datos y comenza a operar</h4>
  
  <form onSubmit={onFormSubmit} className="bg-white shadow-md rounded mt-5 ">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
       Nombre
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" 
             type= "text"
             name= 'username'
             placeholder="Nombre"
             value={formData.username}
             onChange={onInputChange}
             />
              {
            (!formData.username) || (formData.username.length <= 5)
              ? 
             <span className='text-red-500 text-[10px]'>Rellena este campo. Recuerda que debe tener más de 5 caracteres</span>
              : 
            <span className='text-blue-400 text-[10px] font-bold'><AiFillCheckCircle size={16}/> </span>
           
              }
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
       Apellido
      </label>
      <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"  
              type="text"
              name='lastname'
              placeholder="Apellido"
              value={formData.lastname}
              onChange={onInputChange}

              />
              {
       (!formData.lastname) || (formData.lastname.length <= 5)
              ? 
             <span className='text-red-500 text-[10px]'>Rellena este campo. Recuerda que debe tener más de 5 caracteres</span>
              : 
            <span className='text-blue-400 text-[10px] font-bold'><AiFillCheckCircle size={16}/> </span>
           
              }
         
    </div>


    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Contraseña
      </label>
      <input  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"   
              name='password'
              type='password'
              placeholder="*********"
              value={formData.password}
              onChange={onInputChange}

              />
                {
       (!formData.password) || (formData.password.length <= 5)
              ? 
             <span className='text-red-500 text-[10px]'>Rellena este campo. Recuerda que debe tener más de 5 caracteres</span>
              : 
            <span className='text-blue-400 text-[10px] font-bold'><AiFillCheckCircle size={16}/> </span>
           
              }
    </div>

    <div className="flex items-center justify-between">
      <button className="bg-terciary hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit">
        Login
      </button>
    
    </div>

  </form>
  
</div>
      </>
  )
}

export default LoginForm ;
