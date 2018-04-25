function mostCommonWord(inputString) {
  let wordsCounter = {}
  let mostCommonCounter = 0
  let mostCommonWord = ""
  inputString.split(" ").forEach((word) => {
    wordsCounter[word] = wordsCounter[word] || 0
    wordsCounter[word]++
    if (wordsCounter[word] > mostCommonCounter) {
      mostCommonWord = word
      mostCommonCounter = wordsCounter[word]
    }
  })

  return mostCommonWord
}

// functional approach but reserves __maxCounter and __maxWords
//
function mostCommonWordWithReduce(inputString) {
  let result = inputString.split(" ").reduce(
    (acc, word) => {
      acc[word] = acc[word] ? acc[word] + 1 : 1
      if (acc[word] > acc.__maxCounter) {
        acc.__maxWord = word
        acc.__maxCounter = acc[word]
      }
      return acc
    },
    { __maxWord: "", __maxCounter: 0 }
  )
  console.log(result)
  return result.__maxWord
}

module.exports = { mostCommonWord }
