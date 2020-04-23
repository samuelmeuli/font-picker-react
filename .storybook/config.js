import { addParameters, configure } from "@storybook/react";

import pkg from "../package";

// Hide add-on menu
addParameters({
	options: {
		brandTitle: pkg.name,
		brandUrl: pkg.homepage,
		showPanel: false,
		showSearchBox: false,
	},
});

function loadStories() {
	// Import all story files
	const imports = require.context("../stories", true, /.stories.jsx?$/);
	imports.keys().forEach((filename) => imports(filename));
}

configure(loadStories, module);
