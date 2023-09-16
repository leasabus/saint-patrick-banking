
export interface User {
    id:number,
    nombre:string,
    pago:string,
    tarjeta:string,
    metodo:string,
    monto:number
}


export const usuario : User[]  = [
    {
        id: 1,
        nombre: "Usuario 1",
        pago : "Completado",
        tarjeta : "Visa",
        metodo : "Transferencia",
        monto : 12.000
    },
    {
        id: 2,
        nombre: "Usuario 2",
        pago : "En curso",
        tarjeta : "Visa",
        metodo : "Crédito",
        monto : 22.000
    },
    {
        id: 3,
        nombre: "Usuario 3",
        pago : "Incompleto",
        tarjeta : "Visa",
        metodo : "Transferencia",
        monto : 9.000
    },
    {
        id: 4,
        nombre: "Usuario 4",
        pago : "Completado",
        tarjeta : "Visa",
        metodo : "Debito",
        monto : 2.000
    },
]
 