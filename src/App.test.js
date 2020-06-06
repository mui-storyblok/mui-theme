import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

function setup() {
  const props = {};
  const comp = mount(<App {...props} />);
  return { comp, props };
}

describe('<App />', () => {
  it('renders App', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((<App {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
