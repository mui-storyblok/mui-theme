import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import { act } from 'react-dom/test-utils';
import { Form } from 'rff-wrapper';
import renderer from 'react-test-renderer';
import GoogleFonts from './GoogleFonts';

function setup() {
  const comp = mount(
    <Form onSubmit={() => true}>
      <GoogleFonts />
    </Form>,
  );
  return { comp };
}

describe('<GoogleFonts />', () => {
  it('renders GoogleFonts', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handleSubmit and add Link tag to head', () => {
    const dom = new JSDOM();
    const { comp } = setup();
    const { createElement } = document;
    global.document = dom.window.document;
    global.window = dom.window;
    const spy = jest.spyOn(document, 'getElementById');
    const input = comp.find('input').first();
    input.simulate('change', { target: { value: 'poop' } });
    const submitBtn = comp.find('MuiSubmit').first();
    act(async () => {
      await submitBtn.simulate('submit');
    });
    expect(spy).toBeCalledTimes(1);
    document.createElement = createElement;
  });

  test('snapshot', () => {
    const tree = renderer.create(<GoogleFonts />);
    expect(tree).toMatchSnapshot();
  });
});
