import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('styles the button with a background of the context color', () => {
  const wrapper = shallow(<Button>Click Me</Button>, {
    context: { color: 'blue' },
  });
  expect(wrapper.getElement()).toMatchSnapshot();
});
