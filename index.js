const chalk = require('chalk')

const keySeparator = '.'
const keyValueSeparator = ':'
const coloredKeySeparator = chalk.blue(keySeparator)
const coloredKeyValueSeparator = chalk.gray(keyValueSeparator)

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

	let result = ''
	let keyIndex = -1
	Object.keys(object).forEach(key => {
		if (level > 0) {
			keyIndex += 1
		}

		if (result.length > 0 ||
			level <= 0) {
			result += chalk.gray(prefix)
			if (keyIndex >= 0 && level > 0) {
				result = result.concat(chalk.gray(keySeparator))
			}
		}

		result += chalk.blue(key)
		const value = object[key]

		if (typeof value === 'object') {
			if (Object.keys(value).length > 0) {
				const newPrefix = level > 0 ? prefix.concat(keySeparator, key) : prefix.concat(key)
				result += chalk.blue(keySeparator)
				result += stringify(value, newPrefix, level + 1)
			} else {
				if (Array.isArray(value)) {
					result = result.concat(keyValueSeparator, ' <none>')
				} else {
					result = result.concat(keyValueSeparator, ' <none>')
				}
				result += `\n`
			}
		} else {
			result = result.concat(keyValueSeparator, ' ', value, '\n')
		}
	})

	return result
}

module.exports = function(object) {
	return stringify(object, '  ')
}
