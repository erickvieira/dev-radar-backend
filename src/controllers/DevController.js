const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(_, res) {
    const devs = await Dev.find()

    return res.json(devs)
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    
    let dev = await Dev.findOne({ github_username })
    
    if (!dev) {
      const github_data = await axios.get(`https://api.github.com/users/${github_username}`)
    
      const { name = login, avatar_url, bio } = github_data.data
      const tech_list = parseStringAsArray(techs)
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: tech_list,
        location
      })
    }
  
    return res.json(dev)
  }
}