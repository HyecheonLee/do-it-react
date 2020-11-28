import {storiesOf} from "@storybook/react";
import BranchLoadingButton from '../05/branch'
import React from "react";

storiesOf('Branch', module)
.add('기본설정', () => <BranchLoadingButton>안녕하세요</BranchLoadingButton>)
.add('isLoading 예제',
	() => <BranchLoadingButton isLoading>안녕하세요</BranchLoadingButton>)
