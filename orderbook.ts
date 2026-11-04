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

const order1 = new Order("buy", 10000, 5);
const order2 = new Order("buy", 10100, 3);
const order3 = new Order("sell", 10200, 2);
const order4 = new Order("buy", 10000, 1);
const order5 = new Order("sell", 10150, 4);

class OrderBook {

        bids: Order[] = [];
        asks: Order[] = [];

        public addOrder(order: Order): void { 

            switch(order.side) {

                case "buy":
                    this.bids.push(order);
                    this.bids.sort((a, b) => b.price - a.price === 0 ? a.id - b.id : b.price - a.price);
                    break;
                case "sell":
                    this.asks.push(order);
                    this.asks.sort((a,b) => a.price - b.price === 0 ? a.id - b.id : a.price - b.price);
                    break;    

            }


        }

}

const book = new OrderBook();
book.addOrder(order1);
book.addOrder(order2);
book.addOrder(order3);
book.addOrder(order4);
book.addOrder(order5);

console.log(book.bids);
console.log(book.asks);