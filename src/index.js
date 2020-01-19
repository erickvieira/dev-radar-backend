const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const { username, password, cluster, database } = require('./config.json')

console.log({ username, password, cluster, database })

const app = express()

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(9080)

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });