import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrr } from './../../../utils'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component;
};


describe('Header Component', () => {
  let component;
  beforeEach( () => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAtrr(component, 'logo-img');
    expect(logo.length).toBe(1);
  })
});
