import { Router } from 'express'
const router = Router()

var links = [
	{ href: '/about.html', text: 'About Us' },
	{ href: '/products', text: 'View Products' },
	{ href: '/products/add', text: 'Add Product' },
]

router.get('/', (req, res) => {
	res.render('index', { links })
})

export default router
