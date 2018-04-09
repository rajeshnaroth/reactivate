// Cache object
const PrimeCache = {
  cachedPrimes: [],
  maxCached: 0,
  initCache: function(initialCache) {
    this.cachedPrimes = initialCache
    this.maxCached =
      initialCache[initialCache.length > 0 ? initialCache.length : 0]
  },
  cache: function() {
    return this.cachedPrimes
  },
  addToCache: function(n) {
    this.cachedPrimes.push(n)
    // console.log(this.cachedPrimes)
    this.maxCached = this.maxCached < n ? n : this.maxCached
  },
  isAlreadyInCache: function(n) {
    for (let prime of this.cachedPrimes) {
      if (prime === n) return true
    }
    return false
  }
}

const isPrime = (() => {
  let primeCache = Object.create(PrimeCache)
  primeCache.initCache([3])

  const __isPrime = (n) => {
    // precheck
    if (n === 1 || n === 2) return true
    if (n % 2 === 0) return false
    if (primeCache.isAlreadyInCache(n)) return true // from cache

    let divider = 0
    for (divider of primeCache.cache()) {
      if (divider > n / 2) break // No more check needed
      // console.log("try to dvide", n, divider)
      if (n % divider === 0) {
        return false
      }
    }

    // NO more primes in cache to check. start with the next odd number
    for (divider += 2; divider < n / 2; divider += 2) {
      if (__isPrime(divider)) {
        // numbers get cached within each check
        if (n % divider === 0) {
          // We can further optimize by tracking this point
          return false
        }
      }
    }

    primeCache.addToCache(n)
    return true
  }

  return __isPrime
})()

module.exports = { isPrime, PrimeCache }
