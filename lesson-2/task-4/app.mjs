import { createReadStream } from 'fs'
import { createServer } from 'http'
const server = createServer((req, res) => {
	var filePath = req.url
	switch (filePath) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html' })
			createReadStream('./index.html').pipe(res)
			break
		case '/coffee':
			res.writeHead(200, { 'Content-Type': 'text/html' })
			createReadStream('./coffee.html').pipe(res)
			
			break
		case '/music':
			res.writeHead(200, { 'Content-Type': 'text/html' })
			createReadStream('./music.html').pipe(res)
			break
		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' })
			res.end('Page Not Found')
			break
	}
})

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
