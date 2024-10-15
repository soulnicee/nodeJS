import { existsSync, readFileSync, writeFileSync } from 'fs'
import { createServer } from 'http'

var settings = JSON.parse(readFileSync('settings.json'))
var historyFilePath = settings.historyFile

if (!existsSync(historyFilePath)) {
	writeFileSync(historyFilePath, JSON.stringify({}))
}

var updateHistory = route => {
	var history = JSON.parse(readFileSync(historyFilePath))
	history[route] = (history[route] || 0) + 1
	writeFileSync(historyFilePath, JSON.stringify(history, null, 2))
}

const server = createServer((req, res) => {
	var route = req.url

	if (route === settings.historyRoute) {
		var history = readFileSync(historyFilePath)
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(history)
	} else {
		res.writeHead(200, { 'Content-Type': 'text/plain' })
		res.end(`You visited route: ${route}`)

		updateHistory(route)
	}
})

server.listen(3000, '127.0.0.1', () => {
	console.log('Listening on 127.0.0.1:3000')
})
