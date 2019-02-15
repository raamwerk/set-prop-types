const propTypesModule = require('prop-types')

module.exports = exports = function setPropTypes (component, callback) {
  const types = callback(propTypesModule)
  const propTypes = {}
  const defaultProps = {}
  for (const key in types) {
    const value = types[key]
    if (Array.isArray(value)) {
      propTypes[key] = value[0]
      defaultProps[key] = value[1]
    } else {
      propTypes[key] = value
    }
  }
  component.propTypes = propTypes
  if (Object.keys(defaultProps).length > 0) {
    component.defaultProps = defaultProps
  }
}

exports.default = exports
