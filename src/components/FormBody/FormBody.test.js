import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FormBody from './FormBody';

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
  };
  const comp = mount(<FormBody {...props} />);
  return { comp, props };
}

describe('<FormBody />', () => {
  it('renders FormBody', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((<FormBody {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
