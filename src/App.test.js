import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

function setup() {
  const props = {};
  const comp = shallow(<App {...props} />);
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
