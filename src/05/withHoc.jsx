import React from 'react';

export default function withHoc(WrappedComponent) {
	return (props) => {
		const displayName = `withHoc(${WrappedComponent.name})`;
		return (
			<WrappedComponent {...props}/>
		);
	};
}