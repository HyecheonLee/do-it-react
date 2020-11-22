require('../src/sass/materialize.scss')
require('../src/js/bin/materialize')
const {addDecorator} = require("@storybook/react");
const {jsxDecorator} = require("storybook-addon-jsx");

addDecorator(jsxDecorator);