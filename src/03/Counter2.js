import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({count, onAdd}) => {
  return (
      <div>
        현재 카운트:{count}
        <button onClick={onAdd}>카운트 증가</button>
      </div>
  );
};
Counter.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
}
export default Counter;
