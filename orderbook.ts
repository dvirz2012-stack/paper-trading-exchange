


class Order {

    static nextId: number = 1;
    id: number;
    side: "buy" | "sell";
    quantity: number;
    price: number;
    timestamp: number;

    constructor(side: "buy" | "sell", quantity: number, price: number) {

        this.id = Order.nextId;
        Order.nextId++;

        this.side = side;
        this.quantity = quantity;
        this.price = price;
        this.timestamp = Date.now();

    }




    
}

const order1 = new Order("buy", 10050, 5);
const order2 = new Order("sell", 100500, 50);
const order3 = new Order("buy", 1005000, 500);

class OrderBook {

        bids: Order[] = [];
        asks: Order[] = [];

        public addOrder(order: Order): void {

            switch(order.side) {

                case "buy":
                    this.bids.push(order);
                    break;
                case "sell":
                    this.asks.push(order);
                    break;    

            }

        }

}

const book = new OrderBook();
book.addOrder(order1);
book.addOrder(order2);
book.addOrder(order3);

console.log(book.bids);
console.log(book.asks);