import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from './../../../utils';
import ListItem from './index';

describe('ListItem Component', () => {
  
  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some text',
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  });

  describe('Component Renders', () => {
    
    let wrapper;
    beforeEach(()=> {
      const props ={
        title: 'Example Title',
        desc: 'Some text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should render without errot',() => {
      const component = findByTestAtrr(wrapper, 'list-item-component');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAtrr(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });

  });
  
  describe('should noßt render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'list-item-component');
      expect(component.length).toBe(0);
      })
  })
});
