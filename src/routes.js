const { Router } = require('express')
const DevCtrl = require('./controllers/DevController')
const SearchCtrl = require('./controllers/SearchController')

const routes = Router()

routes.get('/', (_, res) => res.json({ message: `e ae, blz?` }))

routes.post('/devs', DevCtrl.store)
routes.get('/devs', DevCtrl.index)
routes.get('/search', SearchCtrl.index)

module.exports = routes