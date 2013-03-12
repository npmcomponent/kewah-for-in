var hasOwnProp = Object.prototype.hasOwnProperty;

/**
 * Iterates an object
 *
 * @param {Object} obj
 * @param {Function} fn   Iterator
 * @param {Object} ctx    Context
 * @return {Object}
 */
module.exports = function forIn(obj, fn, ctx) {
  var key;
  for (key in obj) {
    if (hasOwnProp.call(obj, key)) {
      if (false === fn.call(ctx, obj[key], key, obj)) {
        return obj;
      }
    }
  }

  return obj;
};
