import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SubmitDialog from './SubmitDialog';

jest.mock('../../../node_modules/copy-to-clipboard');

function setup(open = true) {
  const props = {
    open,
    handleClose: jest.fn(),
  };
  const comp = mount(<SubmitDialog {...props} />);
  return { comp, props };
}

describe('<SubmitDialog />', () => {
  it('renders SubmitDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('close', () => {
    const { comp, props } = setup();
    comp.find('[data-testid="closeSubmitDialog"]').first().simulate('click');
    expect(props.handleClose).toBeCalled();
  });


  it('copy', () => {
    const { comp, props } = setup();
    comp.find('[data-testid="copy"]').first().simulate('click');
    expect(props.handleClose).toBeCalled();
  });


  test('snapshot', () => {
    const { props } = setup(false);
    const tree = renderer.create((<SubmitDialog {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
