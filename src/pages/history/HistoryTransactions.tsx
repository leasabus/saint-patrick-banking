import SideBar from "../../components/SideBar"
import { usuario } from './transactions';
import {BiUserCircle} from 'react-icons/bi';




export const HistoryTransactions = () => {
   

  return (
    <>
     <div className="flex flex-row">
      <SideBar/>
      <div className='flex flex-col px-20 py-10 items-start justify-start w-full'>
       <h1 className="text-2xl">Mis movimientos</h1>


     <table className=" mt-10 w-full text-sm text-center text-gray-500 dark:text-gray-400" >
        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr >
        <th className="px-4 py-3" >Usuario</th>
        <th className="px-4 py-3">Pago</th>
        <th className="px-4 py-3">Tarjeta</th>
        <th className="px-4 py-3">Método</th>
        <th className="px-4 py-3">Monto</th>
        </tr>
        </thead>
        <tbody>
            {
                usuario.map((user) => (
                    <tr key={user.id} className="items-center">
                    <td className="px-4 py-3 mt-2">{user.nombre}</td>
                    <td className=
                    {user.pago === 'Completado' ? "px-4 py-3 text-green-400" : user.pago === 'En curso' ? "text-yellow-500" : "text-red-500" }
                    >{user.pago}</td>
                    <td className="px-4 py-3 ">{user.tarjeta}</td>
                    <td className="px-4 py-3">{user.metodo}</td>
                    <td className="px-4 py-3">{user.monto}</td>
                    </tr>
                ))
            }
       
        </tbody>
    </table>
   

    </div>

      </div>
      
    </>
  )
}


