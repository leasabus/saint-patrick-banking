
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar' ;
import { CreditCar } from '../../components/CreditCar';

const CardsPage = () => {
  return (
    <>
    <div className='flex flex-row'>
    <SideBar/>
    <div className='flex flex-col px-20 py-10 items-start justify-start'>
      <h1 className='text-2xl'>Hola Leandro</h1>
      <h2>¡Que bueno tenerte de vuelta!</h2>

      {/* <div className='flex flex-col w-[500px] mt-8'>
        <div className='flex flex-row justify-between text-xl'>
        <span>Tarjeta</span>
        <span>Saldo</span>
        </div>
      </div> */}

      <CreditCar/>
      {/* <div className='flex flex-col w-[500px] mt-10'>

      <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
      <span className='text-sm'>Tarjeta Crédito Mastercard</span>
      <div className='flex flex-row text-center items-center gap-4 mt-2 text-[13px]'>
      <span>**** 9541</span>
      <span className='bg-green-500 text-white rounded p-0.5'>USD</span>
      </div>
      </div>
      <span>$90.000</span>
      </div>

      </div> */}

    
    <Link to={"/history"} className='mt-20 bg-green-500 text-white rounded p-1'>Mis movimientos</Link>
    </div>
    </div>
    </>
  
  )
}

export default CardsPage ;
