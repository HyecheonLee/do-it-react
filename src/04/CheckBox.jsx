import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from "./WithStyles";

const CheckBox = (props) => {
	const ref = useRef();
	useEffect(() => {
		if (props.autoFocus) {
			ref.current.focus();
		}
	}, [props.autoFocus, ref])
	const handleCheck = (e) => {
		const {name, onChange} = props
		onChange(name, e.target.checked)
	}
	const {errorMessage, label, children, styles, checked} = props;
	return (
		<label>
			{label}
			<div>
				<input ref={ref} type="checkbox"
				       checked={checked && 'checked'}
				       onChange={handleCheck}
				       onClick={handleCheck}
				/>
				{children}
			</div>
			{errorMessage && (
				<div>
					<span{...css(styles.errorText)}>{errorMessage}</span>
				</div>
			)}
		</label>
	);
};
CheckBox.propTypes = {
	name: PropTypes.string.isRequired,
	autoFocus: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
}
CheckBox.defaultProps = {
	autoFocus: false,
	checked: false,
	onChange: () => {
	}
}
export default withStyles(({color, size}) => ({
	errorText: {
		fontSize: size.sm,
		color: color.error
	}
}))(CheckBox);
