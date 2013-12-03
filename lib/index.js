var easymongo = require('easymongo');

module.exports = function(options) {
  var mongo = new easymongo(options);

  return {
    find: function(collection, params, options) {
      return function(fn) {
        mongo.find(collection, params, options, fn);
      };
    },

    save: function(collection, params) {
      return function(fn) {
        mongo.save(collection, params, fn);
      };
    },

    remove: function(collection, id) {
      return function(fn) {
        mongo.removeById(collection, id, fn);
      };
    }
  };
};