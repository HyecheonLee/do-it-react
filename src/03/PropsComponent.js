import React from 'react';
import PropTypes from 'prop-types';

const PropsComponent = ({name}) => {
  return (
      <div className="message-container">
        {name}
      </div>
  );
};

// 자료형을 선언하는 예제
PropsComponent.propTypes = {
  name: PropTypes.string
}
export default PropsComponent;
