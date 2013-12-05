# co-easymongo

Implementation of [easymongo](https://github.com/meritt/easymongo) that works with [co](https://github.com/visionmedia/co).

## Installation

```
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