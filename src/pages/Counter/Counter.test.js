import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';
import Title from './Title';

configure({ adapter: new Adapter() });

describe('<Counter /> component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Counter />)))
  it('render Counter value', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
  it('render buttons for control in Counter component', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
});
