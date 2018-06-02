const { flatten } = require("../flatten")
const R = require("ramda")

// Test against Ramda
test("flaten test 1", () => {
  let testArrays = [
    [],
    [[[[]]]],
    [1],
    [1, 2, 3, [5, 6], [7, 8]],
    [1, 2, 3, 4],
    [1, [2, 3, 4, [5, 6], 7], [8, 9]],
    [1, [2, 3, 4, [5, 6], 7], [8, 9, 10, [11, [12, [13]]]]]
  ]
  testArrays.forEach((arr) => expect(flatten(arr)).toEqual(R.flatten(arr)))
})
