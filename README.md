# p-observable [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/p-observable/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/p-observable)

Promisify an observable by subscribing to it.

[![NPM Badge](https://nodei.co/npm/p-observable.png)](https://npmjs.com/package/p-observable)

## Install

```sh
npm install p-observable
```

## Usage

```js
const pObservable = require("p-observable");

(async () => {
	const result = await pObservable(observable);

	console.log(result);
})();
```

## API

### pObservable(observable)

#### observable

Type: `observable`

The observable to promisify.
