import React from 'react'
import {shallow} from 'enzyme'
import Dialog from './Dialog'

describe('Dialog', () => {
  it('calls onClose prop on clicks outside of the component', () => {
    const onClose = jest.fn();
    shallow(<Dialog onClose={onClose} />);
    expect(onClose).toHaveBeenCalledTimes(0);
    document.body.click();
    expect(onClose).toHaveBeenCalledTimes(1);
  })

  it(`prevents click events originating from inside
      the component from propagating`, () => {
    const fakeEvent = { stopPropagation: jest.fn() };
    const wrapper = shallow(<Dialog onClose={() => {}} />);

    expect(fakeEvent.stopPropagation).toHaveBeenCalledTimes(0);
    wrapper.find('div').simulate('click', fakeEvent);
    expect(fakeEvent.stopPropagation).toHaveBeenCalledTimes(1);
  })

  it(`adds window click event listener on mount and removes on unmount.
      Also, make sure that the document click listener is the component method.`,
      () => {
    // Not a good test. Breaks black-box.
    jest.spyOn(document, 'addEventListener').mockImplementation(() => {});
    jest.spyOn(document, 'removeEventListener').mockImplementation(() => {});
    
    expect(document.addEventListener).toHaveBeenCalledTimes(0);
    const wrapper = shallow(<Dialog onClose={() => {}} />);
    expect(document.addEventListener).toHaveBeenCalledTimes(1);

    expect(document.removeEventListener).toHaveBeenCalledTimes(0);
    wrapper.instance().componentWillUnmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);

    // get the second argument (0-index) of the first call to this mock
    // that is, the click event handler. `document.addEventListener('click', fn)`
    const documentClickHandler = document.addEventListener.mock.calls[0][1];
    expect(documentClickHandler).toBe(wrapper.instance().handleDocumentClick)

    document.addEventListener.mockRestore();
    document.removeEventListener.mockRestore();
  })
})
