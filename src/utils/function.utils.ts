/**
 * Function who check if the value is an integer return null if not
 * @param value {number}
 * @returns Number || Nan
 */
import hexToRgba = require('hex-to-rgba');

/**
 *
 * @param value
 */
export const filterInt = (value) => {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  }
  return NaN;
};

/**
 *
 */
export const generateRandExaDecimalColor = () =>  {
  return '#' + Math.floor(Math.random() * 16777215 ).toString(16);
};

/**
 *
 * @param exaDecimalCode
 * @param insertToObject
 */
export const exaToRgbaObject = (exaDecimalCode: string, insertToObject) => {
  const hexaToRgba = hexToRgba(exaDecimalCode);
  const getValueRba = hexaToRgba.split('(')[1].split(',').filter((elem) => typeof filterInt(elem) === 'number');
  insertToObject.r = filterInt(getValueRba[0].trim());
  insertToObject.g = filterInt(getValueRba[1].trim());
  insertToObject.b = filterInt(getValueRba[2].trim());
  insertToObject.a = filterInt(getValueRba[3].replace(')', '').trim());
};

/**
 *
 * @param enumeration
 */
export const getEnumKey = async (enumeration) => {
  const keysEnum: string[] = [];

  for (const n in enumeration) {
    if (typeof enumeration[n] === 'string') {
      keysEnum.push(enumeration[n]);
    }
  }
  return keysEnum;
}
