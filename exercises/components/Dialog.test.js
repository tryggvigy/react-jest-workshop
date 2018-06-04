import React from 'react';
import { shallow } from 'enzyme';
import Dialog from './Dialog';

describe('Dialog', () => {
  it('calls onClose prop on clicks outside of the component', () => {
    // create a mock function of onClose with jest.fn()
    // render the component with your mocked onClose
    // assert that onClose has been called zero times
    // click outside the component
    // assert that onClose has been called one time
  });

  it(`prevents click events originating from inside
      the component from propagating`, () => {
    // create a mock event with a stopPropagation method using jest.fn()
    // render the component
    // assert that stopPropagation has been called zero times
    // simulate a click event inside the component providing your mock event
    // assert that stopPropagation has been called one time
  });

  it(`adds window click event listener on mount and removes on unmount.
      Also, make sure that the document click listener is the component method.`, () => {
    // mock document.addEventListener, providing an empty function as a mock implementaion
    // mock document.removeEventListener, providing an empty function as a mock implementaion
    // assert that document.addEventListener has been called zero times
    // render the component
    // assert that document.addEventListener has been called one time
    // assert that document.removeEventListener has been called zero times
    // unmount the component
    // assert that document.removeEventListener has been called one time
    // get an instance of click handler (fn) provided to
    // document.addEventListener('click', fn) using jests mock object information.
    // assert that its the same function as the components `handleDialogClick` function
  });
});
