# invoker [![CI][ci-badge]][ci-link]

Creates a function that invokes a given method.

## Installation

Browser:

```sh
component install ndhoule/invoker
```

Node:

```sh
$ npm install invoker
```

## API

### `invoker(method : Function|string) => Function(receiver, ...args)`

Accepts a method name or a function, and returns a function that invokes that method on a receiver.

```javascript
var map = invoker('map');
map([1, 2, 3], function(num) {
  return num + 1;
});
//=> [2, 3, 4]
```

## License

Released under the [MIT license](LICENSE.md).

[ci-link]: https://travis-ci.org/ndhoule/invoker
[ci-badge]: https://travis-ci.org/ndhoule/invoker.svg?branch=master
