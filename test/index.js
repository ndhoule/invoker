/* global describe it */

'use strict';

var assert = require('assert');
var invoker = require('../');
var sinon = require('sinon');

describe('invoker', function() {
  it('should be a function', function() {
    assert.equal(typeof invoker, 'function');
  });

  it('should have an arity of 1', function() {
    assert.equal(invoker.length, 1);
  });

  it('should invoke a method on a receiver', function() {
    var toString = invoker('toString');

    assert.equal(toString({}), '[object Object]');
  });

  it('should throw a descriptive error when invoking a non-function', function() {
    var throws = function() {
      invoker('length')([]);
    };

    assert.throws(throws, /Expected a function but received a/);
  });

  it('should pass arguments through to the receiver', function() {
    var match = invoker('match');
    var str = {
      value: 'abc',
      match: sinon.spy(function() {
        return String.prototype.match.apply(this.value, arguments);
      })
    };
    var rContainsNumber = /[0-9]/;

    match(str, rContainsNumber);
    sinon.assert.calledWithExactly(str.match, rContainsNumber);
  });
});
