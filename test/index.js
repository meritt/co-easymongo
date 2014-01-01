var mongo = require('..')({dbname: 'test'});
var co = require('co');

var collection = 'test';
var oid = '4e4e1638c85e808431000003';

describe('Easymongo with co', function() {
  it('should works with empty returns', function(done) {
    co(function *() {
      yield mongo.remove(collection);

      var result = yield mongo.remove(collection);
      result.should.be.false;

      var result = yield mongo.removeById(collection, oid);
      result.should.be.false;

      var result = yield mongo.find(collection, {company: 'Yamb'});
      result.should.be.an.instanceof(Array);
      result.should.have.length(0);

      var result = yield mongo.findById(collection, oid);
      result.should.be.false;

      var count = yield mongo.count(collection);
      count.should.be.eql(0);
    })(done);
  });

  it('should works', function(done) {
    co(function *() {
      yield mongo.remove(collection);

      yield [
        mongo.save(collection, {title: 'One', rep: 'yamb/yamb'}),
        mongo.save(collection, {title: 'Two', rep: 'yamb/yamb'}),
        mongo.save(collection, {title: 'Three', rep: 'yamb/yamb'}),
        mongo.save(collection, {title: 'Four', rep: 'meritt/easymongo'}),
        mongo.save(collection, {title: 'Five', rep: 'meritt/easymongo'})
      ];

      var count = yield mongo.count(collection);
      count.should.be.eql(5);

      var documents = yield mongo.find(collection, {rep: 'yamb/yamb'});
      documents.should.be.an.instanceof(Array);
      documents.should.have.length(3);
      documents[0].should.have.property('_id');

      var result = yield mongo.removeById(collection, documents[2]._id);
      result.should.be.true;

      var result = yield mongo.findById(collection, documents[1]._id);
      result.should.be.an.instanceof(Object);
      result.should.have.property('_id');

      var result = yield mongo.remove(collection, {rep: 'yamb/yamb'});
      result.should.be.true;

      var result = yield mongo.find(collection, {rep: 'meritt/easymongo'}, {limit: 1});
      result.should.be.an.instanceof(Array);
      result.should.have.length(1);

      result[0].title = 'Six';
      var doc = yield mongo.save(collection, result[0]);
      doc.should.be.an.instanceof(Object);
      doc.should.have.property('_id');
      doc.title.should.be.eql('Six');

      var count = yield mongo.count(collection);
      count.should.be.eql(2);
    })(done);
  });
});