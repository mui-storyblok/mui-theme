import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import AccessToken from './AccessToken';

function setup() {
  const props = {
    setState: jest.fn(),
    theme: { primary: 'asdf' },
    accessToken: '1234',
    pageRedirect: '/',
  };

  const comp = mount(<AccessToken {...props} />);
  return { comp, props };
}

describe('<AccessToken />', () => {
  it('renders AccessToken', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handleSubmit and add Link tag to head', async () => {
    const { comp } = setup();
    const iconBtn = comp.find('ForwardRef(IconButton)').first();
    window.location.host = 'http://localhost:3000';

    iconBtn.simulate('click');

    const dialogOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    expect(dialogOpen).toEqual(true);

    // console.log(comp.find('input').at(1).props());
    const accessInput = comp.find('input').first();
    const pageInput = comp.find('input').at(1);
    accessInput.simulate('change', { target: { value: '9090' } });
    pageInput.simulate('change', { target: { value: '/kale' } });

    const submitBtn = comp.find('MuiSubmit').first();
    await submitBtn.simulate('submit');

    setTimeout(() => {
      expect(comp.find('AccessToken').first().prop('accessToken')).toEqual('9090');
    }, 400);
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
      const dialogClosed = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
      expect(dialogClosed).toEqual(false);
    }, 800);
  });

  test('snapshot', () => {
    const tree = renderer.create(<AccessToken />);
    expect(tree).toMatchSnapshot();
  });
});
