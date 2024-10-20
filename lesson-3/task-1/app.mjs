/*
Задача 1. Розробити додаток з такими маршрутами:
Маршрут	Що повертає
season	повертає пору року
day	повертає поточний день
time	повертає час дня (ранок, обід, вечеря)
*/


import express from 'express'
import { getDay, getSeason, getTime } from './utils.mjs'
const app = express() 
const port = 3000 
// Маршрут для GET запиту до кореневого шляху 
app.get('/', (req, res) => { res.send('Hello, World!') }) 
app.get('/season', (req, res) => {
		res.send(getSeason())
	}
)
app.get('/day', (req, res) => {
	res.send(getDay())
}
)
app.get('/time', (req, res) => {
	res.send(getTime())
}
)
// Запуск сервера 
app.listen(port, () => { console.log(`Сервер запущено на http://localhost:${port}`) })