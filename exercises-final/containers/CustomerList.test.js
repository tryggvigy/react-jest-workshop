import React from 'react'
import {shallow, mount} from 'enzyme'
import getStoreStub from '../store/Customers.stub'
import CustomerList from './CustomerList'

test('should render no customers', () => {
  const wrapper = shallow(<CustomerList store={getStoreStub().store} />)
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('should render customers', () => {
  const {store} = getStoreStub([{name: 'Bob'}, {name: 'Joanna'}])
  const wrapper = shallow(<CustomerList store={store} />)
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('should respond to store updates', () => {
  const {store, updateCustomers} = getStoreStub()
  const wrapper = shallow(<CustomerList store={store} />)
  expect(wrapper.getElement()).toMatchSnapshot()
  updateCustomers([{name: 'Jill'}, {name: 'Fred'}])
  wrapper.update();
  expect(wrapper.getElement()).toMatchSnapshot()
})

test('unsubscribe when unmounted', () => {
  const {unsubscribe, store} = getStoreStub()
  const wrapper = shallow(<CustomerList store={store} />)
  wrapper.unmount()
  expect(unsubscribe).toHaveBeenCalledTimes(1)
})
