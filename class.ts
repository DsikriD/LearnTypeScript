// public по умолчанию

class Car{
    name: string
    price: number

    constructor(name: string, price:number){
        this.name = name
        this.price = price
    }

    getInfo():string {
        return '${this.name} + ${this.price}'
    }

    protected Test(): string {
        return 'test protected'
    }

}

class Bus extends Car{
    constructor(name: string, price:number){
      super(name,price)
      this.Test()   
    }
}

new Car('BMW',10000).getInfo()