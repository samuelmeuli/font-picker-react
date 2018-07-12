import React, { Component } from 'react';
import FontPicker from '../../lib/FontPicker';


export default class TwoPickers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFont1: 'Open Sans',
			activeFont2: 'Barlow'
		};
	}

	render() {
		return (
			<div>
				<div className="wrapper">
					<FontPicker
						apiKey="AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k"
						activeFont={this.state.activeFont1}
						options={{ name: '5' }}
						onChange={nextFont => this.setState({ activeFont1: nextFont.family })}
					/>
					<p className="apply-font-5">
						The first font will be applied to this text.
					</p>
				</div>
				<div className="wrapper">
					<FontPicker
						apiKey="AIzaSyAOkdDlx49HCSBdu86oe8AD1Q7piIxlR6k"
						activeFont={this.state.activeFont2}
						options={{ name: '6' }}
						onChange={nextFont => this.setState({ activeFont2: nextFont.family })}
					/>
					<p className="apply-font-6">
						The second font will be applied to this text.
					</p>
				</div>
			</div>
		);
	}
}
