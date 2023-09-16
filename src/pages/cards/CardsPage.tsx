
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar' ;

const CardsPage = () => {
  return (
    <>
    <div className='flex flex-row'>
    <SideBar/>
    <div className='flex flex-col px-20 py-10 items-start justify-start'>
      <h1 className='text-2xl'>Mis tarjetas</h1>

      <div className='flex flex-col w-[500px] mt-8'>
        <div className='flex flex-row justify-between text-xl'>
        <span>Tarjeta</span>
        <span>Saldo</span>
        </div>
      </div>

      <div className='flex flex-col w-[500px] mt-10'>

      <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
      <span className='text-sm'>Tarjeta Crédito Mastercard</span>
      <div className='flex flex-row text-center items-center gap-4 mt-2 text-[13px]'>
      <span>**** 9541</span>
      <span className='bg-gray-500 text-white rounded p-0.5'>USD</span>
      </div>
      </div>
      <span>$90.000</span>
      </div>

      </div>

      <div className='flex flex-col w-[500px] mt-10'>

      <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
      <span className='text-sm'>Tarjeta Crédito Mastercard</span>

      <div className='flex flex-row text-center items-center gap-4 mt-2 text-[13px]'>
      <span>**** 9541</span>
      <span className='bg-gray-500 text-white rounded p-0.5'>USD</span>
      </div>

      </div>
      <span>$90.000</span>
      </div>
      </div>

      <div className='flex flex-col w-[500px] mt-10'>

    <div className='flex flex-row justify-between'>
    <div className='flex flex-col'>
    <span className='text-sm'>Tarjeta Débito Visa</span>

    <div className='flex flex-row text-center items-center gap-4 mt-2 text-[13px]'>
    <span>**** 3214</span>
    <span className='bg-gray-500 text-white rounded p-0.5'>ARS</span>
    </div>

    </div>
    <span>$22.000</span>
    </div>
    </div>
    <Link to={"/history"} className='mt-8 bg-terciary rounded p-1'>Mis movimientos</Link>
    </div>
    </div>
    </>
  
  )
}

export default CardsPage ;
