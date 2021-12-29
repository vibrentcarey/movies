export const removeDuplicates = (array) => {
  // Sets don't allow duplicate values
  const set = new Set()
  const uniqueArray = array.filter(el => {
    // Checks if the set has an id already
    const duplicate = set.has(el.title);
    // Adds the id to the set
    set.add(el.title);
    // Will only add a value to the array if it doesn't belong to set
    return !duplicate;
  });
  return uniqueArray;
}
