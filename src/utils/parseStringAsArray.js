const parseStringAsArray = (arrayAsString) => (
  arrayAsString.split(',').map(e => e.trim())
)

module.exports = parseStringAsArray