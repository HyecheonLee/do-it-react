import React, {useState} from 'react';
import Button from "../04/Button";
import Modal from "./Modal";
import Text from "../04/Text";

const ButtonWithModal = props => {
	const [showModal, setModal] = useState(false);
	return (
		<>
			<Button onPress={() => setModal(true)}>삭제</Button>
			{showModal &&
			<Modal>
				<div>
					<Text>정말로 삭제 하시겠습니까?</Text>
				</div>
				<Button primary color="white">예</Button>
				<Button onPress={() => setModal(false)}>닫기</Button>
			</Modal>
			}
		</>
	);
};

ButtonWithModal.propTypes = {};

export default ButtonWithModal;
