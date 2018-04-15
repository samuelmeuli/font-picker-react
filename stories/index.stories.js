import React from 'react';
import { storiesOf } from '@storybook/react';

import FontPicker from '../lib/FontPicker';
import './style.css';


const apiKey = 'AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k';
const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae quidem vel cum periculo est quaerenda vobis; Quid ergo hoc loco intellegit honestum? Nam illud quidem adduci vix possum, ut ea, quae senserit ille, tibi non vera videantur.';


storiesOf('FontPicker', module)
	.add('GitHub demo', () => (
		<div className="storybook-github">
			<FontPicker
				apiKey={apiKey}
				defaultFont="Open Sans"
			/>
			<p className="apply-font">
				The font will be applied to this text.
			</p>
		</div>
	))
	.add('Default font from Google Fonts', () => (
		<div>
			<FontPicker
				apiKey={apiKey}
				defaultFont="Open Sans"
				options={{ limit: 50 }}
			/>
			<p className="apply-font">
				{sampleText}
			</p>
		</div>
	))
	.add('Local default font', () => (
		<div>
			<FontPicker
				apiKey={apiKey}
				defaultFont="Arial"
				options={{ limit: 50 }}
			/>
			<p className="apply-font">
				{sampleText}
			</p>
		</div>
	))
	.add('Non-existent default font', () => (
		<div>
			<FontPicker
				apiKey={apiKey}
				defaultFont="asdf"
				options={{ limit: 50 }}
			/>
			<p className="apply-font">
				{sampleText}
			</p>
		</div>
	))
	.add('Custom font variants', () => (
		<div>
			<FontPicker
				apiKey={apiKey}
				defaultFont="Barlow"
				options={{ variants: ['900italic'] }}
			/>
			<p className="apply-font">
				{sampleText}
			</p>
		</div>
	))
	.add('Multiple font pickers', () => (
		<div>
			<FontPicker
				apiKey={apiKey}
				defaultFont="Open Sans"
				options={{ name: '1' }}
			/>
			<FontPicker
				apiKey={apiKey}
				defaultFont="Roboto"
				options={{ name: '2' }}
			/>
			<p className="apply-font-1">
				The first font will be applied to this text.
			</p>
			<p className="apply-font-2">
				The second font will be applied to this text.
			</p>
		</div>
	));
