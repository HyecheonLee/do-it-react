import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({boolValue, numValue, arrayValue, objValue, nodeValue, funcValue}) => {
  return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>객체값: {String(objValue)}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
      </div>
  );
};
ChildComponent.propTypes = {
  booleanValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
}

export default ChildComponent;
