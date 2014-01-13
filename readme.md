# co-easymongo

[![NPM version](https://badge.fury.io/js/co-easymongo.png)](http://badge.fury.io/js/co-easymongo) [![Build Status](https://travis-ci.org/yamb/co-easymongo.png?branch=master)](https://travis-ci.org/yamb/co-easymongo) [![Dependency Status](https://david-dm.org/yamb/co-easymongo.png)](https://david-dm.org/yamb/co-easymongo) [![devDependency Status](https://david-dm.org/yamb/co-easymongo/dev-status.png)](https://david-dm.org/yamb/co-easymongo#info=devDependencies)

Implementation of the [easymongo](https://github.com/meritt/easymongo) with generator based flow-control.

Currently you must use the `--harmony-generators` flag when running node 0.11.x to get access to generators.

## Installation

```bash
$ npm install co-easymongo
```

## Examples

```js
var options = {
  dbname: 'test'
};

var mongo = require('co-easymongo')(options);

co(function *() {
  var posts = mongo.collection('posts');

  // array of documents
  var results = yield posts.find({title: 'Some title'}, {limit: 2});

  // new document
  var result = yield posts.save({title: 'Some title', text: 'Some text'});

  // result of operation (boolean)
  var result = yield posts.remove({title: 'Some title'});
})();
```

To figure which API are available, you need to read the [readme in the easymongo](https://github.com/meritt/easymongo#api).

## Author

* [Alexey Simonenko](mailto:alexey@simonenko.su), [simonenko.su](http://simonenko.su)

## License

The MIT License, see the included `license.md` file.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/yamb/co-easymongo/trend.png)](https://bitdeli.com/free "Bitdeli Badge")