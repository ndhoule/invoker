'use strict';

/**
 * Accepts a method name and returns a function that invokes a method on a
 * receiver.
 *
 * @name invoker
 * @api public
 * @param {string} methodName Method to invoke on the receiver
 * @return {Function(receiver, ...args)} A function that, when called, will
 * invoke `methodName` on the receiver.
 * @example
 * var map = invoker('map');
 * map([1, 2, 3], function(num) {
 *   return num + 1;
 * });
 * //=> [2, 3, 4]
 */

var invoker = function invoker(methodName) {
  return function(receiver) {
    var method = receiver[methodName];

    if (typeof method !== 'function') {
      throw new TypeError('Expected a function but received a ' + typeof method);
    }
    return method.apply(receiver, Array.prototype.slice.call(arguments, 1));
  };
};

/**
 * Exports.
 */

module.exports = invoker;
