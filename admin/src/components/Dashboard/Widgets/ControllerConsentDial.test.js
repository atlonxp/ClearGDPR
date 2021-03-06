import React from 'react';
import { shallow } from 'enzyme';
import ConsentDial from './ControllerConsentDial';

const setup = propOverrides => {
  const props = {
    ...propOverrides
  };
  const component = shallow(<ConsentDial {...props} />);

  return { props, component };
};

describe('(Component) ConsentDial', () => {
  it('should render', () => {
    const { component } = setup({
      consented: 1,
      unconsented: 10
    });
    expect(component).toMatchSnapshot();
  });

  it('should render if numbers are 0', () => {
    const { component } = setup({
      consented: 0,
      unconsented: 0
    });
    expect(component).toMatchSnapshot();
  });
});
