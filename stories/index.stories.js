import React from 'react';
import { storiesOf } from '@storybook/react';
import OnePicker from './picker-wrappers/OnePicker';
import TwoPickers from './picker-wrappers/TwoPickers';

import './style.css';


storiesOf('FontPicker', module)
	.add('GitHub demo', () => (
		<OnePicker
			defaultFont="Open Sans"
		/>
	))
	.add('Local default font', () => (
		<OnePicker
			defaultFont="Arial"
			options={{ name: '2', limit: 50 }}
		/>
	))
	.add('Non-existent default font', () => (
		<OnePicker
			defaultFont="asdf"
			options={{ name: '3', limit: 50 }}
		/>
	))
	.add('Custom font variants', () => (
		<OnePicker
			defaultFont="Barlow"
			options={{ name: '4', variants: ['900italic'] }}
		/>
	))
	.add('Two font pickers', () => (
		<TwoPickers />
	));
