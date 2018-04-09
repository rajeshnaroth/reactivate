function reverseString(string) {
  let arrayToReverse = string.split("")

  function __swapEndsRecursively(array, start, end) {
    if (start < end) {
      ;[array[start], array[end]] = [array[end], array[start]] // swap
      __swapEndsRecursively(array, start + 1, end - 1)
    }
  }

  __swapEndsRecursively(arrayToReverse, 0, arrayToReverse.length - 1)
  return arrayToReverse.join("")
}

function isPalindrome(string) {
  let arrayToReverse = string.split("")

  function __compareEndsRecursively(array, start, end) {
    if (start >= end) return true
    return (
      array[start] === array[end] &&
      __compareEndsRecursively(array, start + 1, end - 1)
    )
  }

  return __compareEndsRecursively(arrayToReverse, 0, arrayToReverse.length - 1)
}

module.exports = { reverseString, isPalindrome }
