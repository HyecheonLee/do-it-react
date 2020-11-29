import React, {createContext, useState} from 'react';

const {Provider, Consumer} = createContext({});
export {Consumer};
const LoadingProviderWithNewContext = (props) => {
	const [state, setState] = useState({});

	function setLoading(key, value) {
		const newState = {[key]: value}
		setState(prevState => newState)
	}

	const context = {
		...state,
		setLoading
	};
	return (
		<Provider value={context}>
			{props.children}
		</Provider>
	);
};

export default LoadingProviderWithNewContext;
