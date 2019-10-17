import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { findByTestAtrr, testStore} from './../utils';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};

describe('App component', () => {
  
  let wrapper;
  beforeEach( () => {
    const initialState = {
      posts: [
        {
        title: 'Example title 1',
        body: 'some body text',
        },
        {
        title: 'Example title 2',
        body: 'some body text',
        },
    ]
    }
    wrapper = setUp(initialState);
  });

  it('should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'app-component');
    expect(component.length).toBe(1);
  });

  it('exampleMethod_updateState method should update state as expected', () => {
    const classInstance =  wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('exampleMethod_returnsAValue method should return value as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  })
});
