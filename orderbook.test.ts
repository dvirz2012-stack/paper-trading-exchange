import { expect, test } from 'vitest';
import OrderBook from './orderbook';
import Order from './order';

test('buy order entering to buyers.', () => {

    const order = new Order("buy", 1000, 2);
    const book = new OrderBook();
    book.addOrder(order);

    expect(book.asks.length).toBe(+0);
    expect(book.bids.length).toBe(1);

});

test('buy orders sorted from highest to lowest.', () => {

    const book = new OrderBook()
    const order1 = new Order("buy", 10000, 5)
    const order2 = new Order("buy", 10200, 3)
    const order3 = new Order("buy", 10100, 2)

    book.addOrder(order1)
    book.addOrder(order2)
    book.addOrder(order3)

    expect(book.bids[0].id).toBe(order2.id)
    expect(book.bids[1].id).toBe(order3.id)
    expect(book.bids[2].id).toBe(order1.id)

})

test('same price on 3 buy orders.', () => {

    const book = new OrderBook()

    const order1 = new Order("buy", 10000, 5)
    const order2 = new Order("buy", 10000, 3)
    const order3 = new Order("buy", 10000, 2)

    book.addOrder(order1)
    book.addOrder(order2)
    book.addOrder(order3)

    expect(book.bids[0].id).toBe(order1.id)
    expect(book.bids[1].id).toBe(order2.id)
    expect(book.bids[2].id).toBe(order3.id)

})

test('sell orders sorted from low to high.', () => {

    const book = new OrderBook()

    const order1 = new Order("sell", 10000, 5)
    const order2 = new Order("sell", 10200, 3)
    const order3 = new Order("sell", 10100, 2)

    book.addOrder(order1)
    book.addOrder(order2)
    book.addOrder(order3)

    expect(book.asks[0].id).toBe(order1.id)
    expect(book.asks[1].id).toBe(order3.id)
    expect(book.asks[2].id).toBe(order2.id)

})