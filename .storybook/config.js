import { configure } from '@storybook/react';

// Import all stories
const imports = require.context('../stories', true, /.stories.js$/);
function loadStories() {
	imports.keys().forEach((filename) => imports(filename));
}

configure(loadStories, module);
