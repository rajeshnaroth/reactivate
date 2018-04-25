const { mostCommonWord } = require("../mostCommonWord")

test("mostCommonWord test 1", () => {
  const para1 =
    "I am never looking for a one-line solution in an interview, and the same goes for over fancy styling, but I do expect a solid understanding of data structures, their functions, and a clean & easy to explain solution. I defined them as ammunition, which is a critical thing for a soldier, since they are, in my opinion, the basic building blocks for solving a problem in the coding interview"
  const para2 =
    "First of all, if you were invited to the coding interview, you probably have a solid CV, so just before diving into the coding tips, I MUST EMPHASIZE — go over your CV once again, make sure your advantages and strengths POP so the recruiter notices them. By that I mean the buzz words or highlights which define your experience. The academic institutes you attended, and the great companies you worked for are obviously bold, but keep in mind we are also skimming and scanning the text, and want to see the technical buzzwords, e.g. Angular, React, Redux, Node.js, WebPack, and so on, and don’t want to see the 2006 buzz words like jQuery, Bootstrap, and so on (sorry, not sorry)."
  expect(mostCommonWord(para1)).toEqual("a")
  expect(mostCommonWord(para1)).toEqual("a")
})
test("mostCommonWord test 2", () => {})
