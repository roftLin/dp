var curry = fun => (len => foo = (...args) => args.length >= len ? fun.call(this, ...args) : (...rest) => foo.call(this, ...args, ...rest))(fun.length)
const dp = (f, params) => f(params) ? params : params
module.exports = curry(dp)

