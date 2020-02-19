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

export const generateRandExaDecimalColor = () =>  {
  return Math.floor(Math.random() * 16777215 ).toString(16);
};
