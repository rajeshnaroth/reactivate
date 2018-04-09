const fibonacci = (() => {
  let cache = {} // seed values
  const __fibonacci = (n) => {
    if (n == 0) return 0
    if (n == 1) return 1
    if (cache[n]) return cache[n] // from cache
    return (cache[n] = __fibonacci(n - 1) + __fibonacci(n - 2))
  }

  return __fibonacci
})() //IIFE

const fibonacciNoCache = (n) => {
  if (n == 0) return 0
  if (n == 1) return 1
  return fibonacciNoCache(n - 1) + fibonacciNoCache(n - 2)
}

module.exports = { fibonacci, fibonacciNoCache }
