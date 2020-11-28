import Button from "../04/Button";
import React, {useState} from "react";
import LoadingContext from "./LoadingContext";
import ButtonWithLoadingContext from "./ButtonWithLoadingContext";

function RowBComponent() {
	return <Button>버튼</Button>
}

function RowCComponent() {
	return <ButtonWithLoadingContext label="버튼"/>
}

function TableComponent() {
	return (<table>
			<RowBComponent/>
			<RowCComponent/>
		</table>
	)
}

const HomePageComponent = () => {
	const [loading, setLoading] = useState(false)
	const toggleLoading = (e) => {
		setLoading(prevState => !prevState)
	}
	return (
		<LoadingContext.Provider value={loading}>
			<TableComponent/>
			<Button label="상태변경" onPress={toggleLoading}/>
		</LoadingContext.Provider>
	);
};

export default HomePageComponent;
