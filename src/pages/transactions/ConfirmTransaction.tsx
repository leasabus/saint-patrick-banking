import SideBar from "../../components/SideBar"


const ConfirmTransaction = () => {
  return (
    <>
      <div className="flex flex-row">
      <SideBar/>
      <div className='flex flex-col px-20 py-10 items-start justify-start w-full'>
      <h1 className="text-2xl">Confirmar Pago</h1>
       
      
      <div className="flex flex-col items-start mt-8">
      <h4 className="text-xl text-gray-500" >Datos del usuario</h4>
      <span className="mt-4" >Usuario</span>
      <span >Visa **** 3212</span>
      <span >Monto : $15.000</span>
      <span>Editar</span>
      </div>

      <div className="flex flex-col items-start mt-8">
      <h4 className="text-xl text-gray-500">Mis medios de pago</h4>
      <span className="mt-4">Elegir medio de pago</span>
      <select name="cards" id="cards"></select>
      </div>

      <button className="mt-8 bg-terciary rounded p-1">Confirmar</button>
      
      </div>
      </div>
    </>
  )
}

export default ConfirmTransaction
