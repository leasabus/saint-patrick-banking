// import "./public/logo.png" ;
const LoginSlogan = () => {
  return (
       <div id="bg-login" className="h-full  text-white flex flex-col items-start p-8">
       <div className="flex flex-row items-start justify-center gap-2">
       <img src="./public/logo1.png" alt="logo"  />

       <div className="flex flex-col ">
       <h1 className="text-xl font-bold">Saint Patrick</h1>
       <p className="text-sm text-gray-400">Online banking.</p>
       </div>
       </div>

       <div className="flex flex-col items-start justify-center mt-[200px]">
       <h3 className="text-2xl text-green-500">La mejor banca online.</h3>
       <p className="text-sm text-white mt-4">Una aplicación de home banking que permite a los usuarios enviar y recibir dinero de manera segura, además de proporcionar un seguimiento completo de sus transacciones financieras.</p>
       </div>
    
      
      </div>
      
  )
}

export default LoginSlogan ;
