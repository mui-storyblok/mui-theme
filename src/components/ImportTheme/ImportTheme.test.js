import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import ImportTheme from './ImportTheme';

function setup() {
  const props = {
    setState: jest.fn(),
    theme: { primary: 'asdf' },
    accessToken: '1234',
    pageRedirect: '/',
  };

  const comp = mount(<ImportTheme {...props} />);
  return { comp, props };
}

describe('<ImportTheme />', () => {
  it('renders ImportTheme', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handleSubmit and take imported theme value and decode it', () => {
    const { comp } = setup();
    const iconBtn = comp.find('ForwardRef(IconButton)').first();
    console.log(comp.debug());
  });

  it('should handle close and close dialog when submitted or close is clicked', () => {
    const { comp } = setup();
    const dialog = comp.find('WithStyles(ForwardRef(Dialog))').first().props();
    expect(dialog.open).toEqual(false);
    const iconBtn = comp.find('ForwardRef(IconButton)').first();
    iconBtn.simulate('click');
    const dialogOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().props();
    expect(dialogOpen.open).toEqual(true);
    const dialogClose = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('onClose');
    act(() => {
      dialogClose();
    });
    setTimeout(() => {
      const closeDialog = comp.find('WithStyles(ForwardRef(Dialog))').first().props();
      expect(closeDialog.open).toEqual(false);
    }, 800);
  });

  test('snapshot', () => {
    const tree = renderer.create(<ImportTheme />);
    expect(tree).toMatchSnapshot();
  });
});
