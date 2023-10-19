/**
 * utility function to check if an array is sorted
 * @param  {ArrayItem}  array the array to be checked
 * @return {Boolean}
 */
const isArraySorted = (array: ArrayItem) => {
  if (!Array.isArray(array)) return false;
  if (array.length === 0) return true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) return false;
  }

  return true;
};

export default isArraySorted;
