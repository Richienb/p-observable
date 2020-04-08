"use strict"

module.exports = observable => new Promise((resolve, reject) => {
	const onNext = value => {
		subscribed.unsubscribe()
		resolve(value)
	}

	const onError = error => {
		subscribed.unsubscribe()
		reject(error)
	}

	const onComplete = () => {
		resolve()
	}

	const subscribed = observable.subscribe(onNext, onError, onComplete)
})
