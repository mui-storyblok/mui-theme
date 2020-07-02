import React from 'react';
import { mount } from 'enzyme';
import { Form } from 'rff-wrapper';
import renderer from 'react-test-renderer';
import arrayMutators from 'final-form-arrays';
import RenderForm from './RenderForm';
import { shadowValidator, validator } from './Regex';

function setup() {
  const props = {};
  const comp = mount(
    <Form
      onSubmit={() => true}
      mutators={{ ...arrayMutators }}
      initialValues={{ theme: {} }}
    >
      <RenderForm />
    </Form>,
  );
  return { comp, props };
}

describe('<RenderForm />', () => {
  it('renders RenderForm', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const tree = renderer.create(
      <Form
        onSubmit={() => true}
        mutators={{ ...arrayMutators }}
        initialValues={{ theme: {} }}
      >
        <RenderForm />
      </Form>,
    );
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
