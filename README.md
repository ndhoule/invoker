# invoker [![Circle CI][circleci-badge]][circleci-link]

Creates a function that invokes a named method.

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

### `invoker(method : string) => Function(receiver, ...args)`

Accepts a method name and returns a function that invokes a method on a receiver.

```javascript
var map = invoker('map');
map([1, 2, 3], function(num) {
  return num + 1;
});
//=> [2, 3, 4]
```

## License

Released under the [MIT license](LICENSE.md).

[circleci-link]: https://circleci.com/gh/ndhoule/invoker
[circleci-badge]: https://circleci.com/gh/ndhoule/invoker.svg?style=svg&circle-token=7104e1cc227460ef87cecb7094897fb11fd88a25
