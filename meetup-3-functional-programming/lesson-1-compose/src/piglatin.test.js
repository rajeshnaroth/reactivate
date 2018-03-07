const pigLatin = require('./piglatin').pigLatin
const breakWord = require('./piglatin').breakWord
const attachAy = require('./piglatin').attachAy

// Tests
test('breakWord', () => {
  expect(breakWord('test').head).toBe('t')
  expect(breakWord('test').tail).toBe('est')
  expect(breakWord('ask').head).toBe('')
  expect(breakWord('ask').tail).toBe('ask')
})

test('attachAy', () => {
  expect(attachAy('test')).toBe('testay')
  expect(attachAy('')).toBe('')
  expect(attachAy(null)).toBe(null)
})

test('pigLatin', () => {
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
})