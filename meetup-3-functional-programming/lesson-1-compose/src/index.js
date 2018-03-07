const expect = require('expect')
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

const log = (vals) => (console.log(vals), vals)

const pigLatin = R.pipe(breakWord, reArrange, attachAy)

const pigLatinPrint = R.pipe(breakWord, reArrange, attachAy, log)

const words = ['', 'i', 'am', 'a', 'robot', 'chair']

words.forEach(word => pigLatinPrint(word))


// Tests
expect(breakWord('test').head).toBe('t')
expect(breakWord('test').tail).toBe('est')
expect(breakWord('ask').head).toBe('')
expect(breakWord('ask').tail).toBe('ask')
expect(attachAy('test')).toBe('testay')
expect(attachAy('')).toBe('')
expect(attachAy(null)).toBe(null)
const testSuite = [
  ['look', 'ooklay'],
  ['bag', 'agbay'],
  ['ant', 'antay'],
  ['clarinet', 'arinetclay'],
  ['spray', 'ayspray']
]
testSuite.forEach((pair) => {
  expect(pigLatin(pair[0])).toBe(pair[1])
})
