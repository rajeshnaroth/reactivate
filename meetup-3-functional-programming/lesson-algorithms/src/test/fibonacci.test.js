const { fibonacci, fibonacciNoCache } = require("../fibonacci")

test("fibonacci test", () => {
  expect(fibonacci(0)).toEqual(0)
  expect(fibonacci(1)).toEqual(1)
  expect(fibonacci(2)).toEqual(1)
  expect(fibonacci(17)).toEqual(1597)
  expect(fibonacci(3)).toEqual(2)
  expect(fibonacci(4)).toEqual(3)
  expect(fibonacci(5)).toEqual(5)
  expect(fibonacci(6)).toEqual(8)
  expect(fibonacci(6)).toEqual(8)
  expect(fibonacci(6)).toEqual(8)
})
test("fibonacci no Cachetest", () => {
  expect(fibonacciNoCache(0)).toEqual(0)
  expect(fibonacciNoCache(1)).toEqual(1)
  expect(fibonacciNoCache(2)).toEqual(1)
  expect(fibonacciNoCache(17)).toEqual(1597)
  expect(fibonacciNoCache(3)).toEqual(2)
  expect(fibonacciNoCache(4)).toEqual(3)
  expect(fibonacciNoCache(5)).toEqual(5)
  expect(fibonacciNoCache(6)).toEqual(8)
  expect(fibonacciNoCache(6)).toEqual(8)
  expect(fibonacciNoCache(6)).toEqual(8)
})
