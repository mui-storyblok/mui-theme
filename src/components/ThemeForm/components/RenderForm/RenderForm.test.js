import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RenderForm, { shadowValidator, fontValidator } from './RenderForm';

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

  it('should return invalid format message if invalid shadow format input', () => {
    const result = shadowValidator('apples');
    const expected = 'Shadow Format Invalid.';
    expect(result).toEqual(expected);
  });

  it('should return invalid format message if invalid font family format input', () => {
    const result = fontValidator('apples', 'fontFamily');
    const expected = 'fontFamily format invalid.';
    expect(result).toEqual(expected);

    const undefinedInput = fontValidator(undefined, 'someName');
    expect(undefinedInput).toEqual('Value is Required.');
  });
});
