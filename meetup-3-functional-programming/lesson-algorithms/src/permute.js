function permute(string) {
  function insertAt(item, at, arr) {
    let ret = Array.from(arr)
    ret.splice(at, 0, item)
    return ret
  }

  function danceWith(item, block, n) {
    // returns an array with i inserted in all possible locations in block
    let ret = []
    for (let i = 0; i < n; i++) {
      // insert item in 0 .. n
      block.forEach((arr1) => {
        ret.push(insertAt(item, i, arr1))
      })
    }
    return ret
  }

  function __permute(array, n) {
    if (array.length <= 1) {
      return [array]
    }
    // SPlit array into the firts item and the rest
    let block = Array.from(array)
    let item = block.shift() // item has the first item and block has the rest
    return danceWith(item, __permute(block, n - 1), n)
  }

  let itemArray = string.split("")
  return __permute(itemArray, itemArray.length).map((item) => item.join(""))
}

module.exports = { permute }
