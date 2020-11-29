import React, {createContext, useState} from "react";
import Modal from "./Modal";
import Text from "../04/Text";
import Button from "../04/Button";

const {Provider, Consumer} = createContext({});
export {Consumer};

const ModalProvider = ({children}) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<Provider value={setShowModal}>
			{children}
			{showModal && (
				<Modal>
					<div>
						<Text>
							정말로 삭제하시겠습니까?
						</Text>
					</div>
					<Button primary color={'white'}>예</Button>
					<Button onPress={() => setShowModal(false)}>닫기</Button>
				</Modal>
			)}
		</Provider>
	);
};

export default ModalProvider;
