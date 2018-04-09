function filter(array, filterFunc) {
  let returnArray = []
  array.forEach((element) => {
    if (filterFunc.call(null, element)) returnArray.push(element)
  })
  return returnArray
}

module.exports = { filter }
