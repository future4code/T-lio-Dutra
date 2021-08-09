export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type addressInfo = {
   zipcode: string
   street: string
   number: number
   complement?: number
   neighbourhood: string
   city: string
   state: string
}