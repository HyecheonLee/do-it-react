import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from "../04/Button";

storiesOf('Button', module)
.add('기본 설정', () => <Button>안녕하세요</Button>)
.add('large 예제', () => <Button large>안녕하세요</Button>)
.add('xlarge 예제', () => <Button xlarge>안녕하세요</Button>)
.add('small 예제', () => <Button small>안녕하세요</Button>)
.add('xsmall 예제', () => <Button xsmall>안녕하세요</Button>)
.add('primary 예제', () => <Button p  rimar>안녕하세요</Button>)
.add('secondary 예제', () => <Button secondary>안녕하세요</Button>)
.add('primary와 large 함께 쓰는 예제', () => <Button primar large>안녕하세요</Button>)