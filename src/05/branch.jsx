import React from 'react';
import Button from "../04/Button";
import branch from "recompose/branch";

export default branch(({isLoading}) => isLoading, () =>
	() => <Button disabled>로딩 중</Button>)(Button);
