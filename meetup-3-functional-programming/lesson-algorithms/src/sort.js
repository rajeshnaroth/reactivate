const min = (a, b) => (a < b ? a : b)

function sortAndMerge(array1, array2) {
  let mergedArray = []
  while (array1.length > 0 && array2.length > 0) {
    mergedArray.push(array1[0] > array2[0] ? array2.shift() : array1.shift())
  }
  return [...mergedArray, ...array1, ...array2]
}

function sort(array) {
  let n = array.length
  if (n === 1) {
    return array
  }
  let midpoint = n % 2 === 0 ? n / 2 : (n + 1) / 2 // avoid a decimal index
  console.log(array)
  return sortAndMerge(
    sort(array.slice(0, midpoint)),
    sort(array.slice(midpoint))
  )
}

module.exports = { sort, sortAndMerge, min }
