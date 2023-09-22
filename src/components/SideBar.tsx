import {AiOutlineCreditCard,FaExchangeAlt,FaMoneyBillTransfer,BiLogOut,Link,MdCurrencyExchange,} from '../assets/icons' ;



const SideBar = () => {
  return (
   
    <div className="bg-sidebar h-[620px] w-[200px] flex flex-col p-4 text-white gap-2">
      
      <div className="flex flex-row items-start justify-center gap-2">
      <img src="./public/logo1.png" alt="logo"  />
      <div className="flex flex-col ">
      <h1 className="text-lg font-bold">Saint Patrick</h1>
      <span className="text-sm text-gray-400">Online banking</span>
      </div>
      </div>
      
      <div className="flex flex-col mt-8">
      <Link to={"/cards"} className="mt-6 flex flex-row items-center gap-2 text-md"><p className="text-gray-400 p-1"><AiOutlineCreditCard size={18}/></p>Saldo</Link>
      <Link to={"/transaction"} className="mt-8 flex flex-row items-center gap-2 text-md"><p className="text-gray-400 p-1"><FaExchangeAlt size={18}/></p>Transacciones</Link>
      <Link to={"/pay"} className="mt-8 flex flex-row items-center gap-2 text-md"><p className="text-gray-400 p-1"><FaMoneyBillTransfer size={18}/></p>Enviar</Link>
      <Link to={"/history"}><span className="mt-8 flex flex-row items-center gap-2 text-md"><p className="text-gray-400 p-1"><MdCurrencyExchange size={18}/></p>Movimientos</span></Link>
  
      </div>
     
      <Link to={"/"}><span className="mt-[120%] flex flex-row items-center gap-2 text-white shadow-xl p-2"><p className="text-red-500"><BiLogOut/></p>Logout</span></Link>

    </div>
  )
}

export default SideBar;
