function throttle(func, period) {
  var inThrottle = false
  return function(...args) {
    if (!inThrottle) {
      func.call(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), period)
    }
  }
}

module.exports = { throttle }
