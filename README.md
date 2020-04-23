# Font Picker for React

**A simple, customizable font picker allowing users to preview, select and use Google Fonts on your website.**

- Simple setup
- No dependencies
- Automatic font download and generation of the required CSS selectors
- Efficient font previews (full fonts are only downloaded on selection)

→ **[Demo](https://font-picker.samuelmeuli.com)**

_This is the React component for the [**Font Picker**](https://github.com/samuelmeuli/font-picker) library._

<p align="center">
  <img src=".github/demo.gif" width="700" alt="Font picker demo" />
</p>

## Getting started

To be able to access the API, you'll need to [generate a Google Fonts API key](https://developers.google.com/fonts/docs/developer_api#APIKey).

### 1. Setup

Install the `font-picker-react` package using NPM:

```sh
npm install font-picker-react
```

### 2. Displaying the font picker

Add the `FontPicker` component to your React code:

```jsx
import React, { Component } from "react";
import FontPicker from "font-picker-react";

export default class ExampleComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFontFamily: "Open Sans",
		};
	}

	render() {
		return (
			<div>
				<FontPicker
					apiKey="YOUR_API_KEY"
					activeFontFamily={this.state.activeFontFamily}
					onChange={(nextFont) =>
						this.setState({
							activeFontFamily: nextFont.family,
						})
					}
				/>
				<p className="apply-font">The font will be applied to this text.</p>
			</div>
		);
	}
}
```

### 3. Applying the selected font

**Add the class `"apply-font"` to all JSX elements you want to apply the selected font to.**

When the user selects a font, it will automatically be downloaded and applied to all elements with the `"apply-font"` class.

## Props

The following props can be passed to the `FontPicker` component:

- **`apiKey` (required)**: Google API key
- **`activeFontFamily`**: Font that should be selected in the font picker and applied to the text. Should be stored in the component state and updated using `onChange`
- **`onChange`**: Function which is executed when the user changes the active font. This function should update `activeFontFamily` in the component state
- **`pickerId`**: If you have multiple font pickers on your site, you need to give them unique IDs which must be provided as a prop and appended to the `.apply-font` class names. Example: If `pickerId="main"`, use `className="apply-font-main"`
- **`families`**: If only specific fonts shall appear in the list, specify their names in an array. Default: All font families
- **`categories`**: Array of font categories to include in the list. Possible values: `"sans-serif", "serif", "display", "handwriting", "monospace"`. Default: All categories
- **`scripts`**: Array of scripts which the fonts must include and which will be downloaded on font selection. Default: `["latin"]`. Example: `["latin", "greek", "hebrew"]` (see [all possible values](https://github.com/samuelmeuli/font-picker/blob/master/src/shared/types.ts))
- **`variants`**: Array of variants which the fonts must include and which will be downloaded on font selection. Default: `["regular"]`. Example: `["regular", "italic", "700", "700italic"]` (see [all possible values](https://github.com/samuelmeuli/font-picker/blob/master/src/shared/types.ts))
- **`filter`**: Function which must evaluate to `true` for a font to be included in the list. Default: `font => true`. Example: If `font => font.family.toLowerCase().startsWith("m")`, only fonts whose names begin with "M" will be in the list
- **`limit`**: Maximum number of fonts to display in the list (the least popular fonts will be omitted). Default: `50`
- **`sort`**: Sorting attribute for the font list. Possible values: `"alphabet", "popularity"`. Default: `"alphabet"`

_Currently, only the `activeFontFamily`, `onChange` and `sort` props are reactive._

## Development

Requirements: Node.js, Yarn

1. Clone this repository: `git clone REPO_URL`
2. Install all dependencies: `yarn`
3. Generate the library bundle: `yarn start`
4. View the rendered component on `localhost:3000`

Suggestions and contributions are always welcome! Please discuss larger changes via issue before submitting a pull request.
