import React from 'react';
import {storiesOf} from '@storybook/react'
import withHoc from "../05/withHoc";
import Button from "../04/Button";
import Text from "../04/Text";

const ButtonWithHoc = withHoc(Button);
const TextWithHoc = withHoc(Text);

storiesOf("withHoc", module)
.add('기본 설정', () => (<div>
	<ButtonWithHoc>안녕하세요</ButtonWithHoc>
	<TextWithHoc>안녕하세요</TextWithHoc>
</div>))
.add('large 예제', () =>
	<div>
		<ButtonWithHoc large>안녕하세요</ButtonWithHoc>
		<TextWithHoc large>안녕하세요</TextWithHoc>
	</div>)