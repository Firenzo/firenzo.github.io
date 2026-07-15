export const insertObjectProperty = (
  originalObject: Record<string, any>,
  keyToInsertAfter: string,
  newKey: string,
  newValue: any
) => {
  const updatedObject = {};
  for (const [key, value] of Object.entries(originalObject)) {
    updatedObject[key] = value;
    if (key === keyToInsertAfter) {
      updatedObject[newKey] = newValue;
    }
  }
  return updatedObject;
};
