const test = require("ava")
const Observable = require("core-js-pure/features/observable")
const pObservable = require(".")

test("main", async t => {
	const observable = new Observable(observer => {
		setImmediate(() => {
			observer.next("value")
			observer.complete()
		})
	})

	t.is(await pObservable(observable), "value")
})

test("throws", async t => {
	const observable = new Observable(observer => {
		setImmediate(() => {
			observer.error(new Error("value"))
			observer.complete()
		})
	})

	await t.throwsAsync(async () => pObservable(observable), {
		instanceOf: Error,
		message: "value"
	})
})

test("complete", async t => {
	const observable = new Observable(observer => {
		setImmediate(() => {
			observer.complete()
		})
	})

	t.is(await pObservable(observable), undefined)
})
