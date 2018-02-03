import React, { Component } from 'react';


/**
 * Font picker presentational component
 */
export default class FontPickerUI extends Component {

	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};

		// function bindings
		this.closeEventListener = this.closeEventListener.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.toggleExpanded = this.toggleExpanded.bind(this);
	}

	/**
	 * Download the font previews for all visible font entries and the five after them
	 */
	onScroll(e) {
		const elementHeight = e.target.scrollHeight / this.props.fontList.length;
		const downloadIndex = Math.ceil((e.target.scrollTop + e.target.clientHeight) / elementHeight);
		this.props.downloadPreviews(downloadIndex + 5);
	}

	/**
	 * EventListener for closing the font picker when clicking anywhere outside it
	 */
	closeEventListener(e) {
		let targetElement = e.target; // clicked element

		do {
			if (targetElement === document.getElementById('font-picker')) {
				// click inside font picker
				return;
			}
			// move up the DOM
			targetElement = targetElement.parentNode;
		} while (targetElement);

		// click outside font picker
		this.toggleExpanded();
	}

	/**
	 * Set the font with the given font list index as the active one
	 */
	selectFont(index) {
		this.toggleExpanded(); // collapse font list
		this.props.selectFont(index);
	}

	/**
	 * Expand/collapse the picker's font list
	 */
	toggleExpanded() {
		if (this.state.expanded) {
			this.setState({ expanded: false });
			document.removeEventListener('click', this.closeEventListener);
		}
		else {
			this.setState({ expanded: true });
			document.addEventListener('click', this.closeEventListener);
		}
	}

	render() {
		// generate <ul> with font names; fetch font previews on scroll
		const fontList = (
			<ul
				className={this.state.expanded ? 'expanded' : ''}
				onScroll={this.onScroll}
			>
				{
					this.props.fontList.map((font, index) => {
						const fontId = font.family.replace(/\s+/g, '-').toLowerCase();
						const isActive = font.family === this.props.activeFont.family;
						return (
							<li key={font.family}>
								<a
									role="button"
									tabIndex="0"
									onClick={() => this.selectFont(index)}
									onKeyPress={() => this.selectFont(index)}
									className={`font-${fontId} ${isActive ? 'active-font' : ''}`}
								>
									{font.family}
								</a>
							</li>
						);
					})
				}
			</ul>
		);

		return (
			<div
				id={`font-picker${this.props.name}`}
				title={this.props.loadingStatus === 'error' ?
					'Error trying to fetch the list of available fonts' : ''
				}
			>
				<a
					role="button"
					tabIndex="0"
					className={`dropdown-button ${this.state.expanded ? 'expanded' : ''}`}
					onClick={this.toggleExpanded}
					onKeyPress={this.toggleExpanded}
				>
					<p>{this.props.activeFont.family}</p>
					<div className={`dropdown-icon ${this.props.loadingStatus}`} />
				</a>
				{this.props.loadingStatus === 'finished' && fontList}
			</div>
		);
	}
}