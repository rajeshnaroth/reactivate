const { filter } = require("../filter")

test("filter test", () => {
  expect(filter([], (n) => n > 2)).toEqual([])
  expect(filter([1, 2, 3, 4], (n) => n > 2)).toEqual([3, 4])
  expect(filter([1, 2, 3, 4], (n) => n < 4)).toEqual([1, 2, 3])
})
