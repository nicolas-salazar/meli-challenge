const { NOT_FOUND_ERROR_BASE } = require('./consts');

const throwNoDataError = () => {
  // eslint-disable-next-line no-new-object
  throw new Object({
    response: NOT_FOUND_ERROR_BASE
  });
};

module.exports = {
  throwNoDataError
};
