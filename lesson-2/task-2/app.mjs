import { appendFileSync, existsSync, readFileSync, unlinkSync } from 'fs'
import { createServer } from 'http'
import { parse } from 'url'
var numbersFilePath = 'numbers.txt'

var readNumbersFromFile = filePath => {
	if (!existsSync(filePath)) return []
	return readFileSync(filePath, 'utf8')
	.split(',')
	.filter(Boolean)
	.map(Number)
}

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	var { pathname } = parse(req.url, true)

	
	var nums = readNumbersFromFile(numbersFilePath)
	switch (true) {
		case/^\/save_num\/\d+$/.test(pathname):
			var num = parseInt(pathname.split('/')[2])
			if (!isNaN(num)) {
				appendFileSync(numbersFilePath, num + ',')
				res.end(`Number ${num} saved to file`)
			} else {
				res.end('Please, write a number')
			}
			break

		case pathname === '/sum':
			var sum = nums.reduce((acc, el) => acc + el, 0)
			res.end(`Sum: ${sum}`)
			break

		case pathname === '/mult':
			var mult = nums.reduce((acc, el) => acc * el, 1)
			res.end(`Mult: ${mult}`)
			break

		case pathname === '/remove':
			if (existsSync(numbersFilePath)) {
				unlinkSync(numbersFilePath)
				res.end('File removed!')
			} else res.end('File does not exist!')
			break

		default:
			res.end('Unknown path')
			break
	}
})

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
