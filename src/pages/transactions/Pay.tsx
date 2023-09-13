import SideBar from '../../components/SideBar'

const Pay = () => {
  return (
    <>
        <div className="flex flex-row ">
       
        <SideBar/>
        <div className='flex flex-col px-20 py-10 items-start justify-start w-full'>
        <h1 className='text-2xl'>Monto</h1>

            <div className='flex flex-col items-center justify-center  m-auto w-[400px] h-[200px] '>
            <input className='w-[350px] h-[150px] text-center text-5xl border-none'  type="number" placeholder='0.00' />
            </div>
            <div className='absolute top-[85%] left-[50%] p-1'>
            <span>Motivo:</span>
            <select name="motivos" id="motivos"></select>
            <button className='mt-8 bg-terciary rounded'>Continuar</button>
            </div>
        </div>
        </div>
        </>
  )
}

export default Pay
