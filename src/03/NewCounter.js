import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const NewCounter = (props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  const increaseCount = () => {
    setCount(count + 1);
  }
  return (
      <div>
        현재 카운트:{count}
        <button onClick={increaseCount}>카운트 증가</button>
      </div>
  );
};
NewCounter.propTypes = {
  count: PropTypes.number
}
export default NewCounter;
