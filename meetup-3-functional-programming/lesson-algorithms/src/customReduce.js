function reduce(array, reducerFunction, accumulator, index) {
  index = index || 0
  if (index === array.length) {
    return accumulator
  } else {
    return reduce(
      array,
      reducerFunction,
      reducerFunction(accumulator, array[index]),
      index + 1
    )
  }
}

module.exports = { reduce }
