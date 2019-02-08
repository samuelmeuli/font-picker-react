# Font Picker for React

**A simple, customizable font picker allowing users to preview, select, and use Google Fonts on your website.**

- Simple setup
- Automatic font download and generation of the required CSS styles
- Efficient font previews (previews are loaded dynamically and full fonts are only downloaded on selection)

→ **[Demo](https://samuelmeuli.github.io/font-picker)**

_This is the React component for the [**Font Picker**](https://github.com/samuelmeuli/font-picker) package._

<p align="center">
  <img src=".github/demo.gif" width=700 alt="Demo">
</p>

## Getting started

### 1. Setup

Install the package using **NPM**:

```sh
npm install font-picker-react
```

### 2. Displaying the font picker

Add the **`<FontPicker />` component** to your React code:

```jsx
import React, { Component } from "react";
import FontPicker from "font-picker-react";

export default class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = { activeFont: "Open Sans" };
  }

  render() {
    return (
      <div>
        <FontPicker
          apiKey="YOUR_API_KEY"
          activeFont={this.state.activeFont}
          onChange={nextFont => this.setState({ activeFont: nextFont.family })}
        />
        <p className="apply-font">The font will be applied to this text.</p>
      </div>
    );
  }
}
```

### 3. Applying the selected font

**Add `className="apply-font"` to all JSX elements you want to apply the selected font to.**

When the user selects a font, it will automatically be downloaded and applied to all HTML elements of the `"apply-font"` class.

## Customization

The following **props** can be passed to the `FontPicker` component:

- **`apiKey` (required)**: Google API key (can be generated [here](https://developers.google.com/fonts/docs/developer_api#APIKey))
- **`activeFont` (required)**: Font that should be selected in the font picker and applied to the text. Must be stored in state and updated using `onChange`
- **`onChange` (required)**: Function which is executed when the user changes the active font and its stylesheet has finished downloading. This function should update the `activeFont` in the state
- **`options`**: Object with additional optional parameters:
  - **`name`**: If you have multiple font pickers on your site, you need to give them unique names (which may only consist of letters and digits). These names must also be appended to the font picker's ID and the `.apply-font` class name. Example: If `options = { name: 'main' }`, use `#font-picker-main` and `.apply-font-main`
  - **`families`**: If only specific fonts shall appear in the list, specify their names in an array (default: all font families)
  - **`categories`**: Array of font categories – possible values: `'sans-serif', 'serif', 'display', handwriting', 'monospace'` (default: all categories)
  - **`variants`**: Array of variants which the fonts must include and which will be downloaded; the first variant in the array will become the default variant and will be used in the font picker and the `.apply-font` class. Example: `['regular', 'italic', '700', '700italic']` (default: `['regular']`)
  - **`limit`**: Maximum number of fonts to be displayed in the list (the least popular fonts will be omitted; default: `100`)
  - **`sort`**: Sorting attribute for the font list – possible values: `'alphabetical'` (default), `'popularity'`

## Development

To build the project locally, do the following:

- `git clone`
- `yarn install`
- `yarn start` to generate the library bundle using [Rollup](https://github.com/rollup/rollup) and and start the [Storybook](https://github.com/storybooks/storybook) for testing the component interactively (`localhost:3000`)

Suggestions and contributions are always welcome! Please first discuss changes via issue before submitting a pull request.
