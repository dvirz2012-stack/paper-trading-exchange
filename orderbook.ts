import Trade from "./trade";
import Order from "./order";


const order1 = new Order("buy", 10000, 5);
const order2 = new Order("buy", 10100, 3);
const order3 = new Order("sell", 10200, 2);
const order4 = new Order("buy", 10000, 1);
const order5 = new Order("sell", 10150, 4);
const order6 = new Order("sell", 10000, 6);
const order7 = new Order("buy", 10200, 1);

class OrderBook {

        bids: Order[] = [];
        asks: Order[] = [];
        trades: Trade[] = [];

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

            this.match();


        }

        public match(): void {

            while (this.bids.length != 0 && this.asks.length != 0 && this.bids[0].price >= this.asks[0].price){


                
                const orderToRemove: number = Math.min(this.bids[0].quantity, this.asks[0].quantity);

                const trade: Trade = new Trade(this.bids[0].id, this.asks[0].id, this.bids[0].id < this.asks[0].id ? this.bids[0].price : this.asks[0].price, orderToRemove);
                this.trades.push(trade); 

                this.bids[0].quantity -= orderToRemove;
                this.asks[0].quantity -= orderToRemove;

                if (this.bids[0].quantity == 0) {

                    this.bids.shift();

                } 
                
                if (this.asks[0].quantity == 0) {

                    this.asks.shift();

                }    

            }

        }

        public cancelOrder(id: number): boolean {

            for (let idx = 0; idx < this.asks.length; idx++) {
                
                if (this.asks[idx].id == id){

                    this.asks.splice(idx, 1);
                    return true;

                }

            }

            for (let idx = 0; idx < this.bids.length; idx++) {

                if (this.bids[idx].id == id) {

                    this.bids.splice(idx, 1);
                    return true;

                }

            }

            return false;

        }

}

const book = new OrderBook();
book.addOrder(order1);
book.addOrder(order2);
book.addOrder(order3);
book.addOrder(order4);
book.addOrder(order5);
book.addOrder(order6);
book.addOrder(order7);

console.log(book.bids);
console.log(book.asks);
console.log(book.trades);

book.cancelOrder(order4.id);
book.cancelOrder(order2.id);
book.cancelOrder(order5.id);
book.cancelOrder(order3.id);

console.log(book.bids);
console.log(book.asks);
console.log(book.trades);

export default OrderBook;