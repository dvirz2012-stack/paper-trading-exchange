import Order from "./order";
import Trade from "./trade";
import OrderBook from "./orderbook";

class Demo {
    run(): void {

        const order1 = new Order("buy", 10000, 5);
        const order2 = new Order("buy", 10100, 3);
        const order3 = new Order("sell", 10200, 2);
        const order4 = new Order("buy", 10000, 1);
        const order5 = new Order("sell", 10150, 4);
        const order6 = new Order("sell", 10000, 6);
        const order7 = new Order("buy", 10200, 1);

        const book: OrderBook = new OrderBook();
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

    }

}

const demo = new Demo();
demo.run();