import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SubmitDialog from './SubmitDialog';

function setup() {
  const props = {};
  const comp = mount(<SubmitDialog {...props} />);
  return { comp, props };
}

describe('<SubmitDialog />', () => {
  it('renders SubmitDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((<SubmitDialog {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
