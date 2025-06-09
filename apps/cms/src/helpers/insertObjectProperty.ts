export const insertObjectProperty = (originalObject, keyToInsertAfter, newKey, newValue) => {
  const updatedObject = {};
  for (const [key, value] of Object.entries(originalObject)) {
    updatedObject[key] = value;
    if (key === keyToInsertAfter) {
      updatedObject[newKey] = newValue;
    }
  }
  return updatedObject;
};
