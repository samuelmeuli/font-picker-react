import React, { Component } from 'react';
import FontPicker from '../lib/FontPicker';


export default class ExampleComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFont: this.props.defaultFont
		};
	}

	render() {
		return (
			<div className="wrapper">
				<FontPicker
					apiKey="AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k"
					activeFont={this.state.activeFont}
					options={this.props.fontPickerOptions}
					onChange={nextFont => this.setState({ activeFont: nextFont.family })}
				/>
				<p className="apply-font">
					The font will be applied to this text.
				</p>
			</div>
		);
	}
}
