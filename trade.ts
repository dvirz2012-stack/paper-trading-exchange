class Trade {

    buyOrderId: number
    sellOrderId: number
    price: number
    quantity: number

    constructor(buyOrderId: number, sellOrderId: number, price: number, quantity: number) {

        this.buyOrderId = buyOrderId
        this.sellOrderId = sellOrderId
        this.price = price
        this.quantity = quantity

    }

}

export default Trade