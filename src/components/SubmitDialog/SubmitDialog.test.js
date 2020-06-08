import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SubmitDialog from './SubmitDialog';

jest.mock('../../../node_modules/copy-to-clipboard');

const callClose = (comp, props, eleString) => {
  comp.find(eleString).first().simulate('click');
  expect(props.handleClose).toBeCalled();
};

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

  it('callClose on clicking closeSubmitDialog', () => {
    const { comp, props } = setup();
    callClose(comp, props, '[data-testid="closeSubmitDialog"]');
  });


  it('callClose on clicking copy', () => {
    const { comp, props } = setup();
    callClose(comp, props, '[data-testid="copy"]');
  });

  test('snapshot', () => {
    const { props } = setup(false);
    const tree = renderer.create((<SubmitDialog {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
