import store from './Customers';

beforeEach(() => {
  store.reset();
})

test('should start with empty', () => {
  const customers = store.getCustomers()
  expect(customers.length).toBe(0)
})

test('should allow you to set customers and get them', () => {
  const c0 = {name: 'Bill'}
  const c1 = {name: 'Francine'}

  expect(store.getCustomers().length).toBe(0)
  store.setCustomers([c0, c1])
  const customers = store.getCustomers()
  const [sc0, sc1] = customers
  expect(customers.length).toBe(2)
  expect(c0).toBe(sc0)
  expect(c1).toBe(sc1)
})

test('should allow you to subscribe to the store', () => {
  const subscriber = jest.fn()
  const unsubscribe = store.subscribe(subscriber)

  expect(subscriber).toHaveBeenCalledTimes(0)
  store.setCustomers([])
  expect(subscriber).toHaveBeenCalledTimes(1)

  // Resets all information about calls
  subscriber.mockClear()
  unsubscribe()
  store.setCustomers([])
  expect(subscriber).not.toBeCalled()
})
