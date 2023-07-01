export function isArraysEqual(array1: Object[], array2: Object[]): boolean {
  if (array1.length !== array2.length) {
    return false;
  }
  // рекурсия :(
  for (let i = 0; i < array1.length; i++) {
    if (!isDeepEqual(array1[i], array2[i])) {
      return false;
    }
  }

  return true;
}

function isDeepEqual(obj1: any, obj2: any): boolean {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!isDeepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}