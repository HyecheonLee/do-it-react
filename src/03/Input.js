import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const Input = ({type, name, value, errorMessage, label, onChange, onFocus, autoFocus}) => {
  const inputRef = useRef();
  const handleChange = e => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  useEffect(() => {
    if (autoFocus) {
      inputRef.focus();
    }
  }, [autoFocus]);
  return (
      <label>
        {label}
        <input
            id={`input_${name}`}
            ref={inputRef}
            onChange={handleChange}
            onFocus={onFocus}
            value={value}
            type={type}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </label>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {
  },
  onFocus: () => {
  },
  autoFocus: false,
  type: 'text'
}
export default Input;
