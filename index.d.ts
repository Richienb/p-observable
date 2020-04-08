import { ObservableLike } from "type-fest" // eslint-disable-line import/no-unresolved

/**
Promisify an observable by subscribing to it.
@param observable The observable to promisify.
@example
```
const pObservable = require("p-observable");

(async () => {
	const result = await pObservable(observable);

	console.log(result);
})();
```
*/
declare function pObservable<ReturnType = unknown>(observable: ObservableLike): Promise<ReturnType>

export = pObservable
