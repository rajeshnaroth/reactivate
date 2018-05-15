const R = require("ramda");

const breakWord = word => {
  word = word || "";
  let head = R.head(word.split(/[aeiou]/gi)); // first item
  return {
    head: head,
    tail: word.substr(head.length)
  };
};

const rearrange = ({ head, tail }) => `${tail}${head}`;

const toLowerCase = string => (string ? string.toLowerCase() : "");

const attachAy = word => (word ? `${word}ay` : word);

const pigLatin = R.pipe(breakWord, rearrange, toLowerCase, attachAy);

module.exports = {
  toLowerCase,
  pigLatin,
  breakWord,
  rearrange,
  attachAy
};
