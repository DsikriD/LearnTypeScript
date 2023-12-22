type TypeUSer = {
    name: string
    age: number
}

type TypeAddress = {
    city:string
    country: string
}

const user:TypeUSer = {
    name: 'MAX',
    age:24
}

const address: TypeAddress = {
    city: 'Moscow',
    country: 'Russia'
}

let common: TypeUSer & TypeAddress 

common = {
    ...user,...address
}

