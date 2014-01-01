var thunkify = require('thunkify');

var methods = [
  'find',
  'findById',
  'save',
  'remove',
  'removeById',
  'count'
];

var emongo = require('easymongo');

module.exports = function(server, options) {
  var mongo = new emongo(server, options);

  methods.forEach(function(method) {
    mongo[method] = thunkify(mongo[method]);
  });

  return mongo;
};