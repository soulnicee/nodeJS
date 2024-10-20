import { Router } from 'express'

const productsRouter = Router()

var products = [
	{
		name: 'Beer',
		price: 50,
	},
]

productsRouter.post('/add', (req, res) => {
	var { name, price } = req.body
	products.push({ name, price })
	res.redirect('/products')
})

productsRouter.get('/', (req, res) => {
	res.render('products', { products })
})

productsRouter.get('/add', (req, res) => {
	res.render('addProduct')
})

export default productsRouter
