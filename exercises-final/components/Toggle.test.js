import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

test('has toggle--off class applied by default', () => {
  const wrapper = shallow(<Toggle onToggle={() => {}} children="Toggle Me" />);
  expect(wrapper.hasClass('toggle--off')).toBe(true);
});

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  const wrapper = shallow(<Toggle onToggle={() => {}} children="Toggle Me" initialToggledOn />);
  expect(wrapper.hasClass('toggle--on')).toBe(true);
});

test('invokes the onToggle prop when clicked', () => {
  const onToggle = jest.fn();
  const wrapper = shallow(<Toggle children="Toggle Me" onToggle={onToggle} />);
  wrapper
    .find('button')
    .first()
    .prop('onClick')();
  expect(onToggle).toHaveBeenCalledTimes(1);
  expect(onToggle).toBeCalledWith(true);
});
