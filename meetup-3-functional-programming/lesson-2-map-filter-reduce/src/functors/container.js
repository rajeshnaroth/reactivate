const Container = function (value) {
    this.__value = value
}

Container.of = (value) => new Container(value)

Container.prototype.map = function (f) {
    return Container.of(f(this.__value))
}

module.exports = {
    Container
}