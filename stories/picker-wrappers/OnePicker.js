import React, { Component } from 'react';
import FontPicker from '../../lib/FontPicker.es';


export default class OnePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFont: this.props.defaultFont
		};

		if (this.props.options && this.props.options.name) {
			this.pickerSuffix = `-${this.props.options.name}`;
		} else {
			this.pickerSuffix = '';
		}
	}

	render() {
		return (
			<div className="wrapper">
				<FontPicker
					apiKey="AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k"
					activeFont={this.state.activeFont}
					options={this.props.options}
					onChange={nextFont => this.setState({ activeFont: nextFont.family })}
				/>
				<p className={`apply-font${this.pickerSuffix}`}>
					The font will be applied to this text.
				</p>
			</div>
		);
	}
}
