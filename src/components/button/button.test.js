import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from './../../../utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
  
  describe('Checking PropTypes', () => {
    
    it('Should not throw warning ', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {
        }
      };

      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    })
  });
  
  describe('Renders', () => {
    
    let wrapper; let mochFunc;
    beforeEach(() => {
      mochFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mochFunc,
      }
      wrapper = shallow(<SharedButton {...props} />);
    })

    it('Should render a button', () => {
      const button = findByTestAtrr(wrapper, 'button-component');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on button click event', () => {
      const button = findByTestAtrr(wrapper, 'button-component');
      button.simulate('click');
      const callback = mochFunc.mock.calls.length;
      expect(callback).toBe(1);
    })
  });
  
});
