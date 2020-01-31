export const filterInt = (value) => {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  }
  return NaN;
};
