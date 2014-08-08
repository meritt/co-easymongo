# co-easymongo

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency status][dependency-image]][dependency-url]
[![devDependency status][devdependency-image]][devdependency-url]

Implementation of the [easymongo](https://github.com/meritt/easymongo) with generator based flow-control.

Currently you must use the `--harmony-generators` flag when running node 0.11.x to get access to generators.

## Installation

```bash
$ npm install co-easymongo
```

## Examples

```js
var co = require('co');

var mongo = require('co-easymongo')({
  dbname: 'test'
});

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

To figure which of APIs are available, you need to read the [easymongo readme](https://github.com/meritt/easymongo#api).

## Author

  - [Alexey Simonenko](https://github.com/meritt)

## License

The MIT License, see the included `license.md` file.

[npm-image]: https://img.shields.io/npm/v/co-easymongo.svg?style=flat
[npm-url]: https://npmjs.org/package/co-easymongo
[travis-image]: https://img.shields.io/travis/meritt/co-easymongo.svg?style=flat
[travis-url]: https://travis-ci.org/meritt/co-easymongo
[dependency-image]: https://img.shields.io/david/meritt/co-easymongo.svg?style=flat
[dependency-url]: https://david-dm.org/meritt/co-easymongo
[devdependency-image]: https://img.shields.io/david/dev/meritt/co-easymongo.svg?style=flat
[devdependency-url]: https://david-dm.org/meritt/co-easymongo#info=devDependencies