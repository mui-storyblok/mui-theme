export const shadowValidator = (shadow) => {
  const shadowRE = new RegExp(/(-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\),){2}-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\)/);
  const result = shadowRE.exec(shadow);
  if (shadow === 'none') return undefined;
  if (result === null) return 'Shadow Format Invalid.';
  return undefined;
};

export const fontRE = (font) => {
  const e = new RegExp(/('(\w{1,20}-\w{1,20}|\w{1,20})',\s){3}'(\w{1,20}-\w{1,20}|\w{1,20})'/);
  const result = e.exec(font);
  if (result === null) return 'fontFamily format invalid.';
  return undefined;
};

export const easingRE = (easing) => {
  const e = new RegExp(/cubic-bezier\(((\d*\.\d*|\d*),\s){3}(\d*\.\d*|\d)\)/);
  const result = e.exec(easing);
  if (result === null) return 'easing format invalid.';
  return undefined;
};

export const validator = (value, name) => {
  let result;
  if (value === undefined) return 'Value is Required.';
  if (name.includes('fontFamily')) result = fontRE(value);
  if (name.includes('easing')) result = easingRE(value);
  return result;
};
