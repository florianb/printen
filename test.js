#!/usr/bin/env node

const printen = require('./index')
const testData = require('./test-data')
const packageJson = require('./package.json')
// This is quite good.. :)

// Lirum larum.. sooooo giiid!
/* Or quite better is this. */

const exampleData = {
	title: "Printen Examples",
	stars: Number.POSITIVE_INFINITY,
	quite: undefined,
	pros: [
		'They are quite gross',
		'They are tasty'
	],
	cons: [],
	attributes: {
		color: 'brown',
		jellyBeans: 4
	}
}

// console.log(printen(testData, '  '))
console.log(printen(exampleData))

console.log(printen("exampleData", '  '))

console.log(printen(100, '---'))


console.log(printen(100.00, ' + '))

// console.log(printen(packageJson))
