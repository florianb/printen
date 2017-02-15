#!/usr/bin/env node

const printen = require('./index')
const testData = require('./test-data')
const packageJson = require('./package.json')

const exampleData = {
	title: "Printen Examples",
	stars: Number.POSITIVE_INFINITY,
	cons: undefined,
	pros: [
		'They are gross',
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

// console.log(printen(packageJson))
