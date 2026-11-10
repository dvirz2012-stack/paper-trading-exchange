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