import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RenderForm, { shadowValidator, validator } from './RenderForm';

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

  it('should return invalid format message if invalid font family format input or invalid easing input', () => {
    const result = validator('apples', 'fontFamily');
    const expected = 'fontFamily format invalid.';
    expect(result).toEqual(expected);

    const undefinedInput = validator(undefined, 'someName');
    expect(undefinedInput).toEqual('Value is Required.');

    const easingResult = validator('apples', 'easing');
    expect(easingResult).toEqual('easing format invalid.');
  });
});
