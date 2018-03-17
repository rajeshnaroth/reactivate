const R = require('ramda')
const pigLatin = require('./piglatin/piglatin').pigLatin
const log = (vals) => (console.log(vals), vals)
const pigLatinPrint = R.pipe(pigLatin, log)

const words = ['', 'i', 'am', 'a', 'robot', 'chair', 'aeonium']

words.forEach(word => pigLatinPrint(word))