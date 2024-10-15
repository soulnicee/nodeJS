import { createServer } from 'http'
import { parse } from 'url'

var isValidOperation = operationType => {
	return ['add', 'subtract', 'mult'].includes(operationType)
}

var isValidNumbers = numbers => {
	return numbers.every(num => !isNaN(num))
}

var getRes = (operationType, numbers) => {
	var nums = numbers.map(Number)
	switch (operationType) {
		case 'add':
			return nums.reduce((acc, el) => acc + el, 0)
		case 'subtract':
			return nums.reduce((acc, el) => acc - el)
		case 'mult':
			return nums.reduce((acc, el) => acc * el, 1)
		default:
			return 'Incorrect operation type'
	}
}

const server = createServer((req, res) => {
	var { pathname } = parse(req.url, true)
	var pathParts = pathname.split('/').filter(Boolean)
	if (pathParts.length === 2) {
		var [operationType, stringNumbers] = pathParts
		var numbers = stringNumbers.split('-')

		if (!isValidOperation(operationType)) {
			res.writeHead(400, { 'Content-Type': 'text/plain' })
			return res.end('Incorrect operation type. Use add, subtract, or mult.')
		}
		if (!isValidNumbers(numbers)) {
			res.writeHead(400, { 'Content-Type': 'text/plain' })
			return res.end(
				'Incorrect numbers. Please provide a list of numbers separated by -.'
			)
		}

		var result = getRes(operationType, numbers)
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		res.end(`Result: ${result}`)
	} else {
		res.writeHead(400, { 'Content-Type': 'text/plain' })
		res.end('Incorrect request format. Use /operationType/num-num-num')
	}
})

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
