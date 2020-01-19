const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query
    const techs_list = parseStringAsArray(techs)

    const devs = await Dev.find({
      techs: {
        $in: techs_list
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [ latitude, longitude ],
          },
          $maxDistance: 10000,
        }
      }
    })

    return res.json({ devs })
  }
}