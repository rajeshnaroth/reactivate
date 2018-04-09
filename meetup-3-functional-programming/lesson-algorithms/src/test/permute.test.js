const { permute } = require("../permute")

test("permute test", () => {
  expect(permute("")).toEqual([""])
  expect(permute("a")).toEqual(["a"])
  expect(permute("ab")).toEqual(["ab", "ba"])
  expect(permute("abc")).toEqual(["abc", "acb", "bac", "cab", "bca", "cba"])
  expect(permute("abcd")).toEqual([
    "abcd",
    "abdc",
    "acbd",
    "adbc",
    "acdb",
    "adcb",
    "bacd",
    "badc",
    "cabd",
    "dabc",
    "cadb",
    "dacb",
    "bcad",
    "bdac",
    "cbad",
    "dbac",
    "cdab",
    "dcab",
    "bcda",
    "bdca",
    "cbda",
    "dbca",
    "cdba",
    "dcba"
  ])
})
