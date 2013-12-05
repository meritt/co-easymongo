var EasyMongo = require('easymongo');

module.exports = function(server, options) {
  var mongo = new EasyMongo(server, options);

  return {
    find: function(table, params, options) {
      return function(fn) {
        mongo.find(table, params, options, fn);
      };
    },

    findById: function(table, id) {
      return function(fn) {
        mongo.findById(table, id, fn);
      };
    },

    save: function(table, params) {
      return function(fn) {
        mongo.save(table, params, fn);
      };
    },

    remove: function(table, params) {
      return function(fn) {
        mongo.remove(table, params, fn);
      };
    },

    removeById: function(table, id) {
      return function(fn) {
        mongo.removeById(table, id, fn);
      };
    },

    count: function(table, params) {
      return function(fn) {
        mongo.count(table, params, fn);
      };
    }
  };
};