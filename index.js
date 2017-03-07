const chalk = require('chalk')

const keySeparator = '.'
const keyValueSeparator = ':\t'
const coloredKeySeparator = chalk.blue(keySeparator)
const coloredKeyValueSeparator = chalk.dim(keyValueSeparator)

function keyMax(object) {
	Object.keys(object).reduce((l, v) => Math.max(l, v), 0)
}

function stringify(object, prefix, level) {
	if (level === undefined) {
		level = 0
	}
	if (prefix === undefined) {
		prefix = ''
	}

	if (typeof object !== 'object') {
		return prefix + object
	}

	let result = ''
	let keyIndex = -1
	Object.keys(object).forEach(key => {
		if (level > 0) {
			keyIndex += 1
		}

		if (result.length > 0 || level <= 0) {
			result += chalk.black.hidden(prefix)
			if (keyIndex >= 0 && level > 0) {
				result = result.concat(coloredKeySeparator)
			}
		}

		result += chalk.blue(key)
		const value = object[key]

		if (typeof value === 'object') {
			if (Object.keys(value).length > 0) {
				const newPrefix = level > 0 ? prefix.concat(keySeparator) : String(prefix)
				result += chalk.blue(keySeparator)
				result += stringify(value, newPrefix.concat(key), level + 1)
			} else {
				if (Array.isArray(value)) {
					result = result.concat(coloredKeyValueSeparator, '[none]')
				} else {
					result = result.concat(coloredKeyValueSeparator, '{none}')
				}
				result += `\n`
			}
		} else {
			result = result.concat(coloredKeyValueSeparator, value, '\n')
		}
	})

	return result
}

module.exports = function(object, prefix) {
	return stringify(object, prefix)
}
