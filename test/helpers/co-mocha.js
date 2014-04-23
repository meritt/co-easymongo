var co = require('co');
var mocha = require('mocha');
var Runnable = mocha.Runnable;
var run = Runnable.prototype.run;

Runnable.prototype.run = function (fn) {
  if (this.fn.constructor.name === 'GeneratorFunction') {
    this.fn   = co(this.fn);
    this.sync = !(this.async = true);
  }

  return run.call(this, fn);
};