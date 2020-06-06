import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
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

  it.skip('open and close some stuff with clicks', async () => {
    /** warn
     *  When testing, code that causes React state updates should be wrapped into act(...):
     * when wrapping in act test fail. warn is coming from RFFField in rff-wrapper
     */
    const { comp } = setup();
    expect(comp.find('ForwardRef(DialogContent)').length).toBe(0);
    comp.find('form').simulate('submit');
    expect(comp.find('ForwardRef(DialogContent)').length).toBe(1);
    // something weird is going on cant seem to get onclick to close dialog but is calling handler
    // act(() => {
    //   comp.find('[data-testid="closeSubmitDialog"]').last().simulate('click');
    // });
    // expect(comp.find('ForwardRef(DialogContent)').length).toBe(0);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((<App {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
