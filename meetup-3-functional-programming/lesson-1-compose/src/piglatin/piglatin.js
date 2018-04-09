const R = require('ramda')

const breakWord = (word) => {
  word = word || ''
  let head = word.split(/[aeiou]/gi)[0]
  return ({
    head: head,
    tail: word.substr(head.length),
  })
}

const rearrange = ({ head, tail }) => `${tail}${head}`.toLowerCase()

const attachAy = (word) => word ? `${word}ay` : word

const pigLatin = R.pipe(breakWord, rearrange, attachAy)

module.exports = {
  pigLatin,
  breakWord,
  rearrange,
  attachAy
}