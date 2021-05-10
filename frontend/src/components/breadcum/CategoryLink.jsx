import React from 'react';
import PropTypes from 'prop-types';
import { BreadcumLabel, SeparationIcon } from './styles';

const CategoryLink = ({ printArrowhead, name }) => (
  <>
    <BreadcumLabel>{name}</BreadcumLabel>
    {printArrowhead && <SeparationIcon />}
  </>
);

CategoryLink.defaultProps = {
  printArrowhead: true,
};

CategoryLink.propTypes = {
  name: PropTypes.string.isRequired,
  printArrowhead: PropTypes.bool,
};

export default CategoryLink;
