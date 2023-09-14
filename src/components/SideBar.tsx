import { AiOutlineCreditCard } from "react-icons/ai";
import {FaUserCircle, FaExchangeAlt } from 'react-icons/fa';
import {FaMoneyBillTransfer} from 'react-icons/fa6';
import {BiLogOut} from 'react-icons/bi';
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="bg-secondary h-[550px] w-[180px] flex flex-col p-4 text-white gap-2">
      <span className="mt-4 flex flex-row items-center gap-2 text-white shadow-xl p-2"><p><FaUserCircle/></p>Leandro</span>
      <span className="mt-8 text-gray-400 text-[14px]">Menú</span>
      <Link to={"/cards"} className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400 p-1"><AiOutlineCreditCard size={18}/></p>Saldo</Link>
      <Link to={"/transaction"} className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400 p-1"><FaExchangeAlt size={18}/></p>Transacciones</Link>
      <Link to={"/pay"} className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400 p-1"><FaMoneyBillTransfer size={18}/></p>Enviar</Link>
      <Link to={"/"}><span className="mt-6 flex flex-row items-center gap-2 text-[14px]"><p className="text-gray-400 p-1"><BiLogOut size={18}/></p>Cerrar sesion</span></Link>
    </div>
  )
}

export default SideBar;
