# co-easymongo

[![NPM version](https://badge.fury.io/js/co-easymongo.png)](http://badge.fury.io/js/co-easymongo) [![Dependency Status](https://david-dm.org/yamb/co-easymongo.png)](https://david-dm.org/yamb/co-easymongo)

Implementation of [easymongo](https://github.com/meritt/easymongo) that works with [co](https://github.com/visionmedia/co).

## Installation

```bash
$ npm install co-easymongo
```

## Examples

```js
var mongo = require('co-easymongo')({dbname: 'test'});

// array of documents
var posts = yield mongo.find('posts', {title: 'Some title'}, {limit: 2});

// new document
var post = yield mongo.save('posts', {title: 'Some title', text: 'Some text'});

// deleted document
var result = yield mongo.remove('posts', {title: 'Some title'});
```

## Author

* [Alexey Simonenko](mailto:alexey@simonenko.su), [simonenko.su](http://simonenko.su)

## License

The MIT License, see the included `license.md` file.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/yamb/co-easymongo/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
