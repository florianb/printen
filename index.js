function keyMax(object) {
	Object.keys(object).reduce((l, v) => Math.max(l, v), 0)
}

function stringify(indentation, object) {
	const indnt = Number.isInteger(indentation) && indentation > 0 ? indentation : 0

	let result = ''
	Object.keys(object).forEach(k => {
		if (result.length > 0) {
			result += ' '.repeat(indnt)
		}
		result += `${k}`

		if (typeof object[k] === 'object' && !Array.isArray(object[k])) {
			result += '.'
			result += stringify(indnt + k.length + 1, object[k])
		} else {
			result += '\n'
		}
	})

	return result
}

module.exports = function(object) {
	return stringify(0, object)
}
