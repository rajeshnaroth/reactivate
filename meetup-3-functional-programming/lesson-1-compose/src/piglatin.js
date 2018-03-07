const R = require('ramda')

const breakWord = (word) => {
  if (!word) word = ''
  let head = word.split(/[aeiou]/)[0]
  return ({
      head: head,
      tail: word.substr(head.length),
  })
}

const reArrange = ({head, tail}) => `${tail}${head}`

const attachAy = (word) => word ? `${word}ay` : word

const pigLatin = R.pipe(breakWord, reArrange, attachAy)

module.exports.pigLatin  = pigLatin
module.exports.breakWord  = breakWord
module.exports.attachAy  = attachAy