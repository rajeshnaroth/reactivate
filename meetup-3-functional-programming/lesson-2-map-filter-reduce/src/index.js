const { Container } = require('./functors/container')

console.log(Container.of(3).map((v) => v * v))
console.log(Container.of(3).map((v) => v * v).map((v) => v / 2.0))
