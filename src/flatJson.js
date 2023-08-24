function flatObject(nestedObject, parentKey = '') {
  let flattenedObject = {}

  Object.entries(nestedObject).map(([key, value]) => {
      const newKey = parentKey ? parentKey + '_' + key : key 
      if (typeof value != 'object') return flattenedObject[newKey] = value

      const objectValueFlattened = flatObject(value, newKey)
      flattenedObject = { ...flattenedObject, ...objectValueFlattened}
  })
  return flattenedObject
}

export default flatObject