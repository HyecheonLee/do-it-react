import React from "react";
import Text from "../../04/Text";
import {mount, shallow} from "enzyme";

describe('<Text>', () => {
	it('renders without crashing', () => {
		expect(() => {
			shallow(<Text>테스트</Text>)
		}).not.toThrow();
	});
	it('contains <span>', () => {
		expect(mount(<Text>테스트</Text>).find('span')).toHaveLength(1)
	});
	it('contains <span>2', () => {
		expect(shallow(<Text>테스트</Text>).dive().find('span')).toHaveLength(1)
	});
})