require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')

//dotenv
const {SERVER_PORT, CONNECTION_STRING} = process.env

//use our req, res
app.use(express.json())

//controllers
const {getUsers, addUsers, updateUsers, deleteUsers} = require('./controllers/userController')

//db connection
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected :D')
})

//endpoints
app.get('/api/users', getUsers)
app.post('/api/users', addUsers)
app.put('/api/users/:id', updateUsers)
app.delete('/api/users/:id', deleteUsers)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))