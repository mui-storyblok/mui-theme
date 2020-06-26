import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RenderForm from './RenderForm';

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
  const comp = mount(<RenderForm {...props} />);
  return { comp, props };
}

describe('<RenderForm />', () => {
  it('renders RenderForm', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((<RenderForm {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
