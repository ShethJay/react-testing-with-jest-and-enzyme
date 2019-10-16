import React from 'react';
import { shallow } from 'enzyme';
import Headling from './index';

import { findByTestAtrr } from './../../../utils/index';
import Headline from './index';
import { exportAllDeclaration } from '@babel/types';

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  
  describe('Have props', () => {
    let wrapper;
    beforeEach( () => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'headline-component');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const h1 = findByTestAtrr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });

  });
  
  describe('Have No Props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component  = findByTestAtrr(wrapper, 'headline-component');
      expect(component.length).toBe(0);
    })
  });
  
});

