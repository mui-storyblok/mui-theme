import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('renders App', () => {
    const comp = mount(<App />);
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const tree = renderer.create((<App />));
    expect(tree).toMatchSnapshot();
  });

  it('should submit form and set state to form values', () => {
    const comp = mount(<App />);
    const input = comp.find('input').first();
    input.simulate('change', { target: { value: 'apples' } });
    const button = comp.find('MuiSubmit').first();
    act(() => {
      button.simulate('submit');
    });
    const theme = comp.find('ViewThemeDialog').first().prop('theme').palette.common.black;
    setTimeout(() => {
      expect(theme).toEqual('apples');
    }, 800);
  });
});
