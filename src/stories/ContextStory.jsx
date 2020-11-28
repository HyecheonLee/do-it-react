import {storiesOf} from "@storybook/react";
import React from "react";
import HomePageComponent from "../06/HomePageComponent";

storiesOf('HomePageComponent', module)
.add('컨텍스트 예제', () => <HomePageComponent/>)