'use strict';

/**
 * Accepts a method name and returns a function that invokes a method on a
 * receiver.
 *
 * @name invoker
 * @api public
 * @param {Function|string} method The method name or function to invoke on the
 * receiver.
 * @return {Function(receiver, ...args)} A function that, when called, will
 * invoke `method` on the receiver.
 * @example
 * var map = invoker('map');
 * map([1, 2, 3], function(num) {
 *   return num + 1;
 * });
 * //=> [2, 3, 4]
 */
var invoker = function invoker(method) {
  return function(receiver) {
    var func = typeof method === 'function' ? method : receiver[method];

    if (typeof func !== 'function') {
      throw new TypeError('Expected a function but received a ' + typeof func);
    }

    return func.apply(receiver, Array.prototype.slice.call(arguments, 1));
  };
};

/*
 * Exports.
 */

module.exports = invoker;
