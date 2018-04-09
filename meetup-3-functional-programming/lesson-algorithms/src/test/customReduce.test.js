const { reduce } = require("../customReduce")

const add = (accum, current) => accum + current

test("customReduce function", () => {
  expect(reduce([1, 2, 3, 4, 5], add, 0)).toEqual(15)
  expect(reduce([1, 2, 3, 10], add, 0)).toEqual(16)
})
