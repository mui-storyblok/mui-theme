import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import copy from 'copy-to-clipboard';
import ViewThemeDialog from './ViewThemeDialog';

jest.mock('copy-to-clipboard');

// const callClose = (comp, props, eleString) => {
//   comp.find(eleString).first().simulate('click');
//   expect(props.handleClose).toBeCalled();
// };

function setup(open = true) {
  const props = {
    open,
    handleClose: jest.fn(),
  };
  const comp = shallow(<ViewThemeDialog {...props} />);
  return { comp, props };
}

describe('<ViewThemeDialog />', () => {
  it('renders ViewThemeDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('open and close', () => {
    const { comp } = setup();
    comp.find('[data-testid="viewTheme"]').first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Dialog))').first().props().open).toEqual(true);
    comp.find('[data-testid="closeViewThemeDialog"]').first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Dialog))').first().props().open).toEqual(false);
  });

  it('callClose on clicking closeViewThemeDialog', () => {
    const realWindow = window;
    const { createElement } = document;

    window.URL.createObjectURL = jest.fn();
    window.alert = jest.fn();
    document.createElement = jest.fn(() => ({
      href: '',
      setAttribute: jest.fn(),
      click: jest.fn(),
      remove: jest.fn(),
    }));

    const { comp } = setup();

    comp.find('[data-testid="viewTheme"]').first().simulate('click');

    comp.find('[data-testid="download"]').first().simulate('click');
    expect(document.createElement).toBeCalled();

    window = realWindow;
    document.createElement = createElement;
  });


  it('clicking copy', () => {
    copy.mockImplementation(jest.fn());
    const { comp } = setup();
    comp.find('[data-testid="viewTheme"]').first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Dialog))').first().props().open).toEqual(true);

    comp.find('[data-testid="copy"]').first().simulate('click');
    expect(copy).toBeCalled();
  });

  test('snapshot', () => {
    const { props } = setup(false);
    const tree = renderer.create((<ViewThemeDialog {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
