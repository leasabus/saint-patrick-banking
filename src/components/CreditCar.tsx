import MasterCard from '../../public/assets/cards/mastercard-svgrepo-com.svg';

export const CreditCar = () => {
  return (
    <>
    <div className="flex flex-col items-start p-4 mt-8 w-[450px] h-[250px] bg-gradient-to-r from-blue-800 to-blue-400 rounded text-white">
    <h2 className='text-gray-400'>Salario</h2>

    <div className='flex flex-row gap-4 items-center text-center mt-4'>
    <span className=''>$1230</span>
    <span className='text-gray-400'>USD</span>
    </div>
     
     <div className='flex flex-col items-start mt-4 gap-2'>
     <span>Número de tarjeta</span>
     <div className='flex flex-row gap-8'>
    <span className='text-gray-400'>****</span>
    <span className='text-gray-400'>****</span>
    <span className='text-gray-400'>****</span>
    <span className='text-gray-400'>4589</span>
    </div>
    </div>

    <div className='flex flex-col items-start mt-4 gap-2'>
     <span>Expiración</span>
    <span className='text-gray-400'>05/27</span>
    </div>
      
      <div className='absolute left-[50%] top-[44%]'>
     <img className='w-20 mt-4' src={MasterCard} alt="mastercard_icon" />
     </div> 

     <div className='absolute left-[52%] top-[24%]'>
      <span>Débito</span>
     </div> 

    </div>
    </>
  )
}
