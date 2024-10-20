import { Router } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const infoRouter = Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
infoRouter.get('/:myLinks', (req, res) => {
	var { myLinks } = req.params
	var filePath = ''
	switch (myLinks) {
		case 'sites':
			filePath = path.join(__dirname, '../pages/sites.html')
			break
		case 'films':
			filePath = path.join(__dirname, '../pages/films.html')
			break
		case 'me':
			filePath = path.join(__dirname, '../pages/me.html')
			break
		default:
			return res.status(404).send('Page not found')
	}
	res.sendFile(filePath)
})

export default infoRouter
