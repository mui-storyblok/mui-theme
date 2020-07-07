import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import GoogleFonts from './GoogleFonts';

function setup() {
  const comp = mount(<GoogleFonts />);
  return { comp };
}

describe('<GoogleFonts />', () => {
  it('renders GoogleFonts', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handleSubmit and add Link tag to head', async () => {
    const dom = new JSDOM();
    const { comp } = setup();
    const { createElement } = document;
    global.document = dom.window.document;
    global.window = dom.window;
    const { getElementById } = document;

    document.getElementById = jest.fn(() => ({
      appendChild: jest.fn(),
    }));

    const iconBtn = comp.find('ForwardRef(IconButton)').first();
    iconBtn.simulate('click');

    const dialogOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    expect(dialogOpen).toEqual(true);

    const input = comp.find('input').first();
    input.simulate('change', { target: { value: 'poop' } });

    const submitBtn = comp.find('MuiSubmit').first();
    await submitBtn.simulate('submit');

    expect(document.getElementById).toBeCalledTimes(1);
    expect(comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open')).toEqual(false);

    document.createElement = createElement;
    document.getElementById = getElementById;
  });

  it('should handle close', () => {
    const { comp } = setup();
    const dialog = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    expect(dialog).toEqual(false);
    const iconBtn = comp.find('ForwardRef(IconButton)').first();
    iconBtn.simulate('click');
    const dialogOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    expect(dialogOpen).toEqual(true);
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
    const tree = renderer.create(<GoogleFonts />);
    expect(tree).toMatchSnapshot();
  });
});
