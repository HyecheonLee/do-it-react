import React from 'react';
import {storiesOf} from '@storybook/react'
import withLoading from "../05/withLoading";
import Button from "../04/Button";
import Text from "../04/Text";

const TextWithLoading = withLoading('로딩 중')(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩 중...</Button>)(
	Button);

storiesOf('withLoading', module)
.add('isLoading 예제', () => (
	<div>
		<ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
		<TextWithLoading isLoading>안녕하세요</TextWithLoading>
	</div>
))