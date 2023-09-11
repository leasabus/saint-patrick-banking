import { AiOutlineCreditCard } from "react-icons/ai";
import {GrTransaction , GrLogout} from 'react-icons/gr' ;
import {FaUserCircle } from 'react-icons/fa';
import {FaMoneyBillTransfer} from 'react-icons/fa6';
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="bg-secondary h-[500px] w-[150px] flex flex-col p-4 text-white ">
      <span className="mt-4 flex flex-row items-center gap-2 text-white shadow-xl p-2"><p><FaUserCircle/></p>Leandro</span>
      <span className="mt-8 text-gray-400 text-[14px]">Menú</span>
      <span className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400"><AiOutlineCreditCard/></p> Ver saldo</span>
      <span className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-200"><GrTransaction/></p>Transacciones</span>
      <span className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400"><FaMoneyBillTransfer/></p>Enviar dinero</span>
      <Link to={"/"}><span className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400"><GrLogout/></p>Cerrar sesion</span></Link>
    </div>
  )
}

export default SideBar;
