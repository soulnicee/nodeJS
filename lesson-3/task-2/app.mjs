/*
Задача 2. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи.
*/


import express from 'express'
import path from 'path'
var currentDirName = path.resolve()

const app = express() 
const port = 3000 
// Маршрут для GET запиту до кореневого шляху 
app.get('/', (req, res) => { res.sendFile(path.join(currentDirName, 'index.html')) }) 
app.get('/coffee', (req, res) => {res.sendFile(path.join(currentDirName, 'coffee.html'))})
app.get('/music', (req, res) => {res.sendFile(path.join(currentDirName, 'music.html'))})
// Запуск сервера 
app.listen(port, () => { console.log(`Сервер запущено на http://localhost:${port}`) })