/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import SearchBook from './SearchBook';


Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<SearchBook {...props} />);
  if (state) wrapper.setState(state);

  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error ', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-SearchBook');

  expect(component.length).toBe(1);
});


describe('state controlled input field', () => {
  let mockSetSearchPol = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetSearchPol.mockClear();
    React.useState = jest.fn(() => ['', mockSetSearchPol]);
    wrapper = setup({});
  });

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'searchBook');
    console.log('inputBox: ', inputBox.debug());

    const mockEvent = { target: { value: 'taladro' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetSearchPol).toHaveBeenCalledWith('taladro');
  });

  //   test('field is cleared upon submit button click', () => {
  //     const submitButton = findByTestAttr(wrapper, 'submit-button');

//     submitButton.simulate('click', { preventDefault() {} });
//     expect(mockSetSearchPol).toHaveBeenCalledWith('');
//   });
});