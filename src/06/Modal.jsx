import React from 'react';
import styled from 'styled-components';

const Modal = ({children}) => {

	const StyledModal = styled.div`
position: fixed;
z-index: 9999;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,.5);
& > div{
 vertical-align: middle;
 & > div{
		margin: 40px auto 0;
		padding: ${props => `${props.unit * 4}px`};
		background: ${props => props.color};
		width: 400px;
 }
}
`;
	return (
		<StyledModal color={'white'} unit={4}>
			<div>
				<div>
					{children}
				</div>
			</div>
		</StyledModal>
	);
};

export default Modal;
