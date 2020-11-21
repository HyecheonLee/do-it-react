import React from 'react';
import PropTypes from 'prop-types';

const BooleanComponent = ({bored}) => {
  const message = bored ? '놀러가자' : '하던 일 열심히 마무리하기';
  return (
      <div className="container">
        {message}
      </div>
  );
};

BooleanComponent.propTypes = {
  bored: PropTypes.bool,
};

export default BooleanComponent;
