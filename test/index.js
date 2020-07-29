const index = require('../index')
const assert = require('assert');

describe('index', () => {
  it('should equal', () => {
    let o = {}
    let foo = params => params['a'] = 3
    assert.deepEqual(index(foo, o), { a: 3 });
  })

  it('should equal', () => {
    let o = {}
    let foo = () => undefined
    assert.deepEqual(index(foo, o), {});
  })

  it('should equal', () => {
    let o = {}
    let foo = params => params['a'] = 3
    assert.deepEqual(index(foo)(o), { a: 3 });
  })

  it('should equal', () => {
    let o = {}
    let foo = () => undefined
    assert.deepEqual(index(foo)(o), {});
  })
})
