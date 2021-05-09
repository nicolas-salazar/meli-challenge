/* eslint-disable no-new-object */
const NOT_FOUND_ERROR_BASE = {
  data: {
    error: 'not_found',
    message: 'Item descriptions of item id 1 not found',
  },
  status: 404,
};

const DATABASE_ERROR_BASE = {
  data: {
    error: 'internal_error',
    message: 'Internal error',
  },
  status: 500,
};

const throwNoDataError = () => {
  throw new Object({
    response: NOT_FOUND_ERROR_BASE
  });
};

const throwDatabaseError = () => {
  throw new Object({
    response: DATABASE_ERROR_BASE
  });
};

module.exports = {
  throwDatabaseError,
  throwNoDataError,
};
