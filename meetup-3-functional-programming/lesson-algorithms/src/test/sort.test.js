const { sort, sortAndMerge } = require("../sort")

test("sortAndMerge test", () => {
  expect(sortAndMerge([3, 5, 6], [1, 2])).toEqual([1, 2, 3, 5, 6])
  expect(sortAndMerge([2], [1])).toEqual([1, 2])
  expect(sortAndMerge([1], [2])).toEqual([1, 2])
  expect(sortAndMerge([1, 2], [3])).toEqual([1, 2, 3])
  expect(sortAndMerge([1], [2, 3])).toEqual([1, 2, 3])
})

test("sort test", () => {
  expect(sort([3, 5, 6, 1, 2])).toEqual([1, 2, 3, 5, 6])
})
