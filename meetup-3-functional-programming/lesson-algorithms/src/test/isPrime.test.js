const { isPrime, PrimeCache } = require("../isPrime")

const primeNumbers = [
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97
]

function xtest() {}

test("isPrime exceptions test", () => {
  ;[97].forEach((n) => {
    expect(isPrime(n)).toEqual(true)
  })
})

test("isPrime exceptions test", () => {
  ;[2, 3].forEach((n) => {
    expect(isPrime(n)).toEqual(true)
  })
})

test("isPrime  test", () => {
  primeNumbers.forEach((n) => {
    expect(isPrime(n)).toEqual(true)
  })
})

test("is Not Prime  test", () => {
  expect(isPrime(6)).toEqual(false)
  expect(isPrime(49)).toEqual(false)
  expect(isPrime(1123459)).toEqual(false)
})

test("cache test", () => {
  let primeCache = Object.create(PrimeCache)
  primeCache.initCache([])
  expect(primeCache.cache().length).toEqual(0)
  primeCache.addToCache(1)
  expect(primeCache.cache().length).toEqual(1)
})
