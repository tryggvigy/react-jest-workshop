import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomerList from './CustomerList';

let store;
let customers = [];
let updateStateWithCustomers = null;

beforeEach(() => {
  store = {
    getCustomers: () => customers,
    subscribe: fn => {
      updateStateWithCustomers = fn;
      return jest.fn();
    },
    setCustomers: c => {
      customers = customers.concat(c);
    },
  };
});

afterEach(() => {
  customers = [];
  updateStateWithCustomers = null;
});

test('should render no customers', () => {
  const wrapper = shallow(<CustomerList store={store} />);
  expect(wrapper.getElement()).toMatchSnapshot();
});

test('should render customers', () => {
  store.setCustomers([{ name: 'Bob' }, { name: 'Joanna' }]);
  const wrapper = shallow(<CustomerList store={store} />);
  expect(wrapper.getElement()).toMatchSnapshot();
});

test('should respond to store updates', () => {
  const wrapper = shallow(<CustomerList store={store} />);
  expect(wrapper.getElement()).toMatchSnapshot();

  store.setCustomers([{ name: 'Jill' }, { name: 'Fred' }]);
  updateStateWithCustomers();
  wrapper.update();

  expect(wrapper.getElement()).toMatchSnapshot();
});

test('unsubscribe when unmounted', () => {
  const customerListInstance = shallow(<CustomerList store={store} />).instance();
  customerListInstance.componentDidMount();
  customerListInstance.componentWillUnmount();
  expect(customerListInstance.unsubscribe).toHaveBeenCalledTimes(1);
});
