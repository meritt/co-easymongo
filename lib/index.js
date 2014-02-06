var thunkify = require('thunkify'),

methods = [
  'find',
  'findOne',
  'findById',
  'save',
  'update',
  'remove',
  'removeById',
  'count'
],

Client = require('easymongo');

module.exports = function(server, options) {
  var proto = Client.Collection.prototype;

  methods.forEach(function(method) {
    proto[method] = thunkify(proto[method]);
  });

  var mongo = new Client(server, options);

  mongo.open = thunkify(mongo.open);

  return mongo;
};