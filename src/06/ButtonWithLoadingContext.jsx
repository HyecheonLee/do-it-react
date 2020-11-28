import React, {useContext} from 'react';
import Button from "../04/Button";
import LoadingContext from "./LoadingContext";
import PropTypes from "prop-types";

const ButtonWithLoadingContext = ({label}) => {
	const loading = useContext(LoadingContext);
	return (
		<div>
			<Button>
				{loading ? '로딩 중' : label}
			</Button>
		</div>
	);
};
ButtonWithLoadingContext.propTypes = {
	label: PropTypes.string
}
export default ButtonWithLoadingContext;
