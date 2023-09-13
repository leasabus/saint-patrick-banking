import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";


const NewTransaction = () => {
  return (
    <div className="flex flex-row ">
        <SideBar/>
        <div className='flex flex-col px-20 py-10 items-start justify-start'>
            <h1 className="text-2xl">Nueva transacción</h1>
            <p className="mt-4 text-sm">Recuerde que puede ingresar el numero de tarjeta o alias.</p>
            
            <label className="mt-8 text-sm">Numero de tarjeta</label>
            <input className="border-solid border-2 border-black rounded" type="text" placeholder="**** *****" />

            <label className="text-sm mt-8">Alias</label>
            <input className="border-solid border-2 border-black rounded" type="text" placeholder="carlos123" />

            <Link to={"/pay"}><button className='mt-8 bg-terciary rounded p-1'>Continuar</button></Link>
        </div>
    </div>
  )
}

export default NewTransaction;
