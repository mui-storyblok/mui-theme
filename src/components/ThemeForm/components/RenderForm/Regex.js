export const shadowValidator = (shadow) => {
  const shadowRE = new RegExp(/(-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\),){2}-?\d*px -?\d*px -?\d*px -?\d*px rgba\(\d*,\d*,\d*,(\d*\.\d*)\)/);
  const result = shadowRE.exec(shadow);
  if (shadow === 'none') return undefined;
  if (result === null) return 'Shadow Format Invalid.';
  return undefined;
};

const fontRE = new RegExp(/('(\w{1,20}-\w{1,20}|\w{1,20})',\s){3}'(\w{1,20}-\w{1,20}|\w{1,20})'/);
const easingRE = new RegExp(/cubic-bezier\(((\d*\.\d*|\d*),\s){3}(\d*\.\d*|\d)\)/);

const executeValidator = (value, regEx, errorMsg) => {
  const isValid = regEx.exec(value);
  if (isValid === null) return errorMsg;
  return undefined;
};

export const validator = (value, name) => {
  let result;
  if (value === undefined) return 'Value is Required.';
  if (name.includes('fontFamily')) result = executeValidator(value, fontRE, 'fontFamily format invalid.');
  if (name.includes('easing')) result = executeValidator(value, easingRE, 'easing format invalid.');
  return result;
};
