import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import FontPicker from '../lib/FontPicker.es';
import './style.css';

const API_KEY = 'AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k';

function GithubDemo() {
	const [activeFont, setActiveFont] = useState('Open Sans');
	return (
		<div className="wrapper">
			<FontPicker
				apiKey={API_KEY}
				activeFont={activeFont}
				onChange={nextFont => setActiveFont(nextFont.family)}
			/>
			<p className="apply-font">The font will be applied to this text.</p>
		</div>
	);
}

function LocalFont() {
	const [activeFont, setActiveFont] = useState('Arial');
	return (
		<div className="wrapper">
			<FontPicker
				apiKey={API_KEY}
				activeFont={activeFont}
				onChange={nextFont => setActiveFont(nextFont.family)}
				options={{ name: '2' }}
			/>
			<p className="apply-font-2">The font will be applied to this text.</p>
		</div>
	);
}

function NonExistentFont() {
	const [activeFont, setActiveFont] = useState('asdf');
	return (
		<div className="wrapper">
			<FontPicker
				apiKey={API_KEY}
				activeFont={activeFont}
				onChange={nextFont => setActiveFont(nextFont.family)}
				options={{ name: '3' }}
			/>
			<p className="apply-font-3">The font will be applied to this text.</p>
		</div>
	);
}

function CustomFontVariant() {
	const [activeFont, setActiveFont] = useState('Barlow');
	return (
		<div className="wrapper">
			<FontPicker
				apiKey={API_KEY}
				activeFont={activeFont}
				onChange={nextFont => setActiveFont(nextFont.family)}
				options={{ name: '4', variants: ['900italic'] }}
			/>
			<p className="apply-font-4">The font will be applied to this text.</p>
		</div>
	);
}

function TwoPickers() {
	const [activeFont1, setActiveFont1] = useState('Open Sans');
	const [activeFont2, setActiveFont2] = useState('Barlow');
	return (
		<div>
			<div className="wrapper">
				<FontPicker
					apiKey={API_KEY}
					activeFont={activeFont1}
					onChange={nextFont => setActiveFont1(nextFont.family)}
					options={{ name: '5' }}
				/>
				<p className="apply-font-5">The font will be applied to this text.</p>
			</div>
			<div className="wrapper">
				<FontPicker
					apiKey={API_KEY}
					activeFont={activeFont2}
					onChange={nextFont => setActiveFont2(nextFont.family)}
					options={{ name: '6' }}
				/>
				<p className="apply-font-6">The font will be applied to this text.</p>
			</div>
		</div>
	);
}

storiesOf('FontPicker', module)
	.add('GitHub demo', () => <GithubDemo />)
	.add('Local default font', () => <LocalFont />)
	.add('Non-existent default font', () => <NonExistentFont />)
	.add('Custom font variant', () => <CustomFontVariant />)
	.add('Two font pickers', () => <TwoPickers />);
