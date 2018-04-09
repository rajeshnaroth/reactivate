const { reverseString, isPalindrome } = require("../stringFunctions")

test("reverseString test", () => {
  expect(reverseString("word")).toEqual("drow")
  expect(reverseString("crowd")).toEqual("dworc")
})

test("isPalindrome test", () => {
  expect(isPalindrome("word")).toEqual(false)
  expect(isPalindrome("malayalam")).toEqual(true)
})
