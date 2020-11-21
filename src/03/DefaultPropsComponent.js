import React from 'react';
import PropTypes from 'prop-types';

const DefaultPropsComponent = ({boolValue = false, booleanValueWithoutDefault}) => {
  let message1 = '';
  if (boolValue === false) {
    message1 = 'boolValue 기본값이 false입니다.'
  }
  let message2 = '';
  if (booleanValueWithoutDefault === false) {
    message2 = 'booleanValueWithoutDefault 기본값이 false입니다. '
  }
  return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
  );
};

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

export default DefaultPropsComponent;
