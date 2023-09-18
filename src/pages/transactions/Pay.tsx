import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar'
 //focus:ring

const Pay = () => {
  return (
    <>
   
       <div className="flex flex-row ">
        <SideBar/>
        <div className='flex flex-col px-20 py-10 items-start justify-start'>
        <h1 className='text-2xl'>Enviar dinero</h1>

            <div className='flex flex-col items-center justify-center mt-10  m-auto w-[400px] h-[200px] '>
            <h4 className='text-xl flex flex-row items-center gap-2'>¿Cuanto querés transferir?</h4>
            <input  className='cursor-pointer focus:border focus:outline-none w-[350px] h-[150px] text-center text-5xl border-none mt-4'  type="number" placeholder='$0.00' />
            </div>
            <div className='absolute top-[68%] left-[50%]  p-1'>
            <span>Motivo:</span>
            <select className='mr-4' name="motivos" id="motivos"></select>
            <Link to={"/confirm"}><button className='ml-4 p-1 mt-8 bg-terciary rounded'>Continuar</button></Link>
            </div>
        </div>
        </div>
        </>
  )
}

export default Pay ;
