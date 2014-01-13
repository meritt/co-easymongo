var co = require('co');

var mongo = require('..')({dbname: 'test'});

var collection = 'users';
var users = mongo.collection(collection);
var oid = '4e4e1638c85e808431000003';

describe('Easymongo with co', function() {
  it('should works with empty returns', function(done) {
    co(function *() {
      yield users.remove();

      var result = yield users.remove();
      result.should.be.false;

      var result = yield users.removeById(oid);
      result.should.be.false;

      var result = yield users.find({company: 'Yamb'});
      result.should.be.an.instanceof(Array);
      result.should.have.length(0);

      var result = yield users.findById(oid);
      result.should.be.false;

      var count = yield users.count();
      count.should.be.eql(0);
    })(done);
  });

  it('should works', function(done) {
    co(function *() {
      yield users.remove();

      yield [
        users.save({title: 'One', rep: 'yamb/yamb'}),
        users.save({title: 'Two', rep: 'yamb/yamb'}),
        users.save({title: 'Three', rep: 'yamb/yamb'}),
        users.save({title: 'Four', rep: 'meritt/easymongo'}),
        users.save({title: 'Five', rep: 'meritt/easymongo'})
      ];

      var count = yield users.count();
      count.should.be.eql(5);

      var documents = yield users.find({rep: 'yamb/yamb'});
      documents.should.be.an.instanceof(Array);
      documents.should.have.length(3);
      documents[0].should.have.property('_id');

      var result = yield users.removeById(documents[2]._id);
      result.should.be.true;

      var result = yield users.findById(documents[1]._id);
      result.should.be.an.instanceof(Object);
      result.should.have.property('_id');

      var result = yield users.remove({rep: 'yamb/yamb'});
      result.should.be.true;

      var result = yield users.find({rep: 'meritt/easymongo'}, {limit: 1});
      result.should.be.an.instanceof(Array);
      result.should.have.length(1);

      result[0].title = 'Six';
      var doc = yield users.save(result[0]);
      doc.should.be.an.instanceof(Object);
      doc.should.have.property('_id');
      doc.title.should.be.eql('Six');

      var count = yield users.count();
      count.should.be.eql(2);
    })(done);
  });
});