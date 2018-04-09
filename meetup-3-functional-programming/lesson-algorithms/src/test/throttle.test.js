const { throttle } = require("../throttle")

test("throttle test 1", (done) => {
  let counter = 0
  const inc = () => {
    counter++
  }

  const interval = setInterval(throttle(inc, 1000), 200)

  setTimeout(() => {
    clearInterval(interval)
    expect(counter).toEqual(2)
    done()
  }, 2000)
})

test("throttle test 2", (done) => {
  let counter = 0
  const inc = () => {
    counter++
  }

  const interval = setInterval(throttle(inc, 1000), 50)

  setTimeout(() => {
    clearInterval(interval)
    expect(counter).toEqual(3)
    done()
  }, 3000)
})
