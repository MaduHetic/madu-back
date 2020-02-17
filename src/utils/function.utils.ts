/**
 * Function who check if the value is an integer return null if not
 * @param value {number}
 * @returns Number || Nan
 */
export const filterInt = (value) => {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  }
  return NaN;
};
