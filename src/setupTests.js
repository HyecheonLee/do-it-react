import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({adapter: new Adapter()});

afterEach(() => {
	console.error.mockClear();
});

beforeEach(() => {
	jest.spyOn(console, 'error').mockImplementation((e) => {
		throw new Error(e);
	});
});