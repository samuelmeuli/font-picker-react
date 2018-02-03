import React, { Component } from 'react';
import FontPickerBase from 'font-picker';
import FontPickerUI from './FontPickerUI';


/**
 * Font picker container component
 * @prop {string} apiKey (required) - Google API key (can be generated at
 * 			 https://developers.google.com/fonts/docs/developer_api)
 * @prop {string} defaultFont - Font that is selected on initialization (default: 'Open Sans')
 * @prop {Object} options - Object with additional (optional) parameters:
 *   @prop {string} name - If you have multiple font pickers on your site, you need to give them
 *         unique names (which may only consist of letters and digits). These names must also be
 *         appended to the font picker's ID and the .apply-font class name.
 *         Example: if { name: 'main' }, then use #font-picker-main and .apply-font-main
 * 	 @prop {string[]} families - If only specific fonts shall appear in the list, specify their
 * 	 			 names in an array
 * 	 @prop {string[]} categories - Array of font categories
 * 	 			 Possible values: 'sans-serif', 'serif', 'display', 'handwriting', 'monospace' (default:
 * 	 			 all categories)
 *   @prop {string[]} variants - Array of variants which the fonts must include and which will be
 *   			 downloaded; the first variant in the array will become the default variant (and will be
 *   			 used in the font picker and the .apply-font class)
 *   			 Example: ['regular', 'italic', '700', '700italic'] (default: ['regular'])
 *   @prop {number} limit - Maximum number of fonts to be displayed in the list (the least popular
 *   			 fonts will be omitted; default: 100)
 *   @prop {string} sort - Sorting attribute for the font list
 *         Possible values: 'alphabetical' (default), 'popularity'
 * @prop {function} onChange - Function which is executed whenever the user changes the active
 * 			 font and its stylesheet finishes downloading
 */
export default class FontPicker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeFont: {
				family: this.props.defaultFont
			},
			fontList: [],
			loadingStatus: 'loading'
		};

		// initialize FontHandler object and generate the font list
		const fontPickerBase = new FontPickerBase(
			this.props.apiKey,
			this.props.defaultFont,
			this.props.options,
			this.props.onChange
		);
		this.fontHandler = fontPickerBase.fontHandler;
		this.fontHandler.init()
			.then(() => {
				// on font list load: save it to component state
				this.setState({
					activeFont: this.fontHandler.activeFont,
					fontList: this.fontHandler.fonts,
					loadingStatus: 'finished'
				});
			})
			.catch((err) => {
				console.error('Error trying to fetch the list of available fonts');
				console.error(err);
				this.setState({
					loadingStatus: 'error'
				});
			});

		// function bindings
		this.selectFont = this.selectFont.bind(this);
		this.update = this.update.bind(this);
	}

	/**
	 * Set the font with the given font list index as the active one
	 */
	selectFont(index) {
		this.fontHandler.changeActiveFont(index);
		this.update();
	}

	/**
	 * Updates the component state with the changed information in fontHandler
	 */
	update() {
		this.setState({
			activeFont: this.fontHandler.activeFont,
			fontList: this.fontHandler.fonts
		});
	}

	render() {
		return (
			<FontPickerUI
				activeFont={this.state.activeFont}
				downloadPreviews={downloadIndex => this.fontHandler.downloadPreviews(downloadIndex)}
				fontList={this.state.fontList}
				loadingStatus={this.state.loadingStatus}
				name={this.fontHandler.name}
				selectFont={this.selectFont}
			/>
		);
	}
}