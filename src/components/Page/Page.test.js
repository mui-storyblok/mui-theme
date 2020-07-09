import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Page } from './Page';

function setup() {
  const props = {
    form: {
      getState: jest.fn(() => ({
        values: {
          theme: {},
          storyBlokAccessToken: 'wasd',
        },
      })),
    },
    theme: {},
    accessToken: '',
    pageRedirect: '/',
  };

  const comp = mount(<Page {...props} />);
  return { comp, props };
}

describe('<Page />', () => {
  it('renders Page', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((<Page {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
