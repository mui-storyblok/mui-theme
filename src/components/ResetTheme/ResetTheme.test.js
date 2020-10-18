/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import ResetTheme from './ResetTheme';
import { removeThemeFromLocalStore } from '../../Utils/localStorage';

const mockGo = jest.fn()
jest.mock('../../Utils/localStorage')
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    go: mockGo
  })
}))


window.localStorage.removeItem = jest.fn()
function setup() {
  const comp = mount(<ResetTheme />);
  return { comp };
}

describe('<ResetTheme />', () => {
  it('renders ResetTheme', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should open and close the dialog', async () => {
    const { comp } = setup();
    // Open the dialog
    comp.find('ForwardRef(IconButton)').first().simulate('click');
    // Close the dialog
    comp.find('[data-testid="closeResetThemeDialog"]').first().simulate('click');
    const open = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open')
    expect(open).toEqual(false);
  });

  it('should reset the theme and reload when submitted', () => {
    const { comp } = setup();
    // Open the dialog
    comp.find('ForwardRef(IconButton)').first().simulate('click');
    // Close the dialog
    const submit = comp.find('[data-testid="submitResetThemeDialog"]').first().props('onSubmit');
    act(() => submit.onSubmit())

    expect(removeThemeFromLocalStore).toBeCalled()
    expect(mockGo).toBeCalled()
  });

  test('snapshot', () => {
    const tree = renderer.create(<ResetTheme />);
    expect(tree).toMatchSnapshot();
  });
});
