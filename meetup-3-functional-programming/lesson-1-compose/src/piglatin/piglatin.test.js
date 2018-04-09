const { pigLatin, breakWord, rearrange, attachAy } = require('./piglatin')

// Tests
test('breakWord function', () => {
  expect(breakWord('test').head).toBe('t')
  expect(breakWord('test').tail).toBe('est')
  expect(breakWord('ask').head).toBe('')
  expect(breakWord('ask').tail).toBe('ask')
})

test('attachAy function', () => {
  expect(attachAy('test')).toBe('testay')
  expect(attachAy('')).toBe('')
  expect(attachAy(null)).toBe(null)
})

test('rearrange function', () => {
  expect(rearrange({ head: 'a', tail: 'b' })).toBe('ba')
})

test('pigLatin function', () => {
  const testSuite = [
    ['look', 'ooklay'],
    ['bag', 'agbay'],
    ['BAG', 'agbay'],
    ['ant', 'antay'],
    ['clarinet', 'arinetclay'],
    ['spray', 'ayspray']
  ]
  testSuite.forEach((pair) => {
    expect(pigLatin(pair[0])).toBe(pair[1])
  })
})