import React from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from "./WithStyles";

const Button = (props) => {
	const {
		children, disabled, onPress, styles, xsmall, small, large, xlarge, secondary, primary, color
	} = props;
	return (
		<button {...css(
			styles.default,
			xsmall && styles.xsmall,
			small && styles.small,
			large && styles.large,
			xlarge && styles.xlarge,
			secondary && styles.secondary,
			primary && styles.primary,
			color && styles.color
		)} onClick={onPress}>{children}</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	xsmall: PropTypes.bool,
	small: PropTypes.bool,
	large: PropTypes.bool,
	xlarge: PropTypes.bool,
	secondary: PropTypes.bool,
	primary: PropTypes.bool,
	color: PropTypes.string,
	onPress: PropTypes.func
};
Button.defaultProps = {
	onPress: () => {
	},
	xsmall: false,
	small: false,
	large: false,
	xlarge: false,
	secondary: false,
	primary: false,
	color: "white"
}

export default withStyles(({color, size, unit}) => ({
	default: {
		border: 1,
		borderStyle: 'solid',
		borderColor: color.default,
		borderRadius: 2,
		color: color.default,
		fontSize: size.md,
		padding: unit * 2,
		cursor: 'pointer'
	},
	xlarge: {
		fontSize: size.xg
	},
	large: {
		fontSize: size.lg
	},
	small: {
		fontSize: size.sm,
		padding: unit
	},
	xsmall: {
		fontSize: size.xs,
		padding: unit
	},
	primary: {
		borderColor: color.primary,
		color: color.primary,
		backgroundColor: color.primary,
	},
	secondary: {
		borderColor: color.secondary,
		color: color.secondary,
	},
	color: {
		color: color.white,
	}
}))(Button);
