// you'll need to import react, enzyme's render and shallow functions,
// and ./Toggle

test('renders correctly', () => {
  // render the component
  // expect snapshot to match rendered component
});


test('has toggle--off class applied by default', () => {
  // render the component
  // take the returned enzyme wrapper and expect it to have the class toggle--off
});

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  // render the component with the `initialToggledOn` prop
  // take the returned enzyme wrapper amd expect it to have the class toggle--on
});

test('invokes the onToggle prop when clicked', () => {
  // create a mock function of onToggle with jest.fn()
  // render the component with the mocked onToggle function
  // take the returned enzyme wrapper and invoke the onClick prop on the button
  // assert that onToggle was called once
  // assert that it was called with `true`
});
