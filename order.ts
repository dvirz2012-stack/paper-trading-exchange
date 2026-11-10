class Order {

    static nextId: number = 1;
    id: number;
    side: "buy" | "sell";
    quantity: number;
    price: number;
    timestamp: number;

    constructor(side: "buy" | "sell", price: number, quantity: number) {

        this.id = Order.nextId;
        Order.nextId++;

        this.side = side;
        this.quantity = quantity;
        this.price = price;
        this.timestamp = Date.now();

    }
    
}

export default Order;