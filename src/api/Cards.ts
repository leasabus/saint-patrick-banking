
export interface Card  {
    id: number,
    salary: number,
    number: number,
    expirationMonth : number,
    expirationYear: number,
    type: string,
}


export const cards : Card[] = [
{
  id : 1,
  salary : 1200,
  number: 1234,
  expirationMonth : 3,
  expirationYear : 2027,
  type : 'Credit'
},

{
    id : 2,
    salary : 1400,
    number: 5312,
    expirationMonth : 1,
    expirationYear : 2026,
    type : 'Debito'
  },


]