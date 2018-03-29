# Font Picker for React

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/smeuli/font-picker/blob/master/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/smeuli/font-picker/pulls)

**A simple, customizable font selector allowing users to preview, choose, and use Google Fonts on your website.**

* automatic font download and generation of the required CSS styles
* efficient font previews (previews in the list are loaded dynamically; the full font is only downloaded on selection)

→ **[Demo](https://smeuli.github.io/font-picker)**

_This is the React component for the [**Font Picker**](https://github.com/smeuli/font-picker) package._

<p align="center">
  <img src=".github/demo.gif" width=700 alt="Demo">
</p>


## Getting started

### Setup

Add the package as a dependency using **NPM**:

```
npm install font-picker-react
```

Then add the **`<FontPicker />` component** somewhere in your React project:

```jsx
import FontPicker from 'font-picker-react';

<FontPicker
  apiKey="YOUR_API_KEY" // Google API key
  defaultFont={'Open Sans'}
  options={{ limit: 50 }}
/>
```


### Applying the selected font

**Add `className="apply-font"` to all JSX elements you want to apply the selected font to.**

When the user selects a font using the font picker, it will automatically be downloaded (added as a `<link>` to the document's head) and applied to all HTML elements of the `"apply-font"` class.


## Customization

### Props

The following props can be passed to the `FontPicker` component:

* **`apiKey` (required)**: Google API key (can be generated [here](https://developers.google.com/fonts/docs/developer_api#APIKey))
* **`defaultFont`**: Font that is selected on initialization (default: `'Open Sans'`)
* **`options`**: Object with additional (optional) parameters:
	* **`name`**: If you have multiple font pickers on your site, you need to give them unique names (which may only consist of letters and digits). These names must also be appended to the font picker's ID and the `.apply-font` class name; e.g. if `{ name: 'main' }`, then use `#font-picker-main` and `.apply-font-main`
  * **`families`**: If only specific fonts shall appear in the list, specify their names in an array (default: all font families)
  * **`categories`**: Array of font categories – possible values: `'sans-serif', 'serif', 'display', handwriting', 'monospace'` (default: all categories)
  * **`variants`**: Array of variants which the fonts must include and which will be downloaded; the first variant in the array will become the default variant (and will be used in the font picker and the `.apply-font` class); e.g. `['regular', 'italic', '700', '700italic']` (default: `['regular']`)
  * **`limit`**: Maximum number of fonts to be displayed in the list (the least popular fonts will be omitted; default: `100`)
  * **`sort`**: Sorting attribute for the font list – possible values: `'alphabetical'` (default), `'popularity'`
* **`onChange`**: Function which is executed whenever the user changes the active font and its stylesheet finishes downloading


## Build Process

* `git clone`
* `npm install`
* `npm start` to generate the library bundle using [Rollup](https://github.com/rollup/rollup) (in the `lib` directory)
* See the font picker in action using [Storybook](https://github.com/storybooks/storybook): `npm run storybook`
