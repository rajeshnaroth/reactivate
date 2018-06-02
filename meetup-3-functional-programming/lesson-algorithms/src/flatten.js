function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (!Array.isArray(item)) {
      return acc.concat([item])
    } else {
      return acc.concat(flatten(item))
    }
  }, [])
}

module.exports = { flatten }
