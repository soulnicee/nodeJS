import { Router } from 'express'
const goalsRouter = Router() 
goalsRouter.get('/', (req, res) => { res.send("Learn express, Learn nodeJs, Drink beer and something else...") }) 
export default goalsRouter