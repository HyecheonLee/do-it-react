import React from 'react';
import PropTypes from 'prop-types';

const ChildProperty = props => {
  return (
      <div>
        {props.children}
      </div>
  );
};

ChildProperty.propTypes = {
  children: PropTypes.node
};

export default ChildProperty;
