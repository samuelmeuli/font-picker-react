import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleComponent from './ExampleComponent';

import './style.css';


storiesOf('FontPicker', module)
	.add('GitHub demo', () => (
		<ExampleComponent
			defaultFont="Open Sans"
		/>
	))
	.add('Local default font', () => (
		<ExampleComponent
			defaultFont="Arial"
			fontPickerOptions={{ limit: 50 }}
		/>
	))
	.add('Non-existent default font', () => (
		<ExampleComponent
			defaultFont="asdf"
			fontPickerOptions={{ limit: 50 }}
		/>
	))
	.add('Custom font variants', () => (
		<ExampleComponent
			defaultFont="Barlow"
			fontPickerOptions={{ variants: ['900italic'] }}
		/>
	));
