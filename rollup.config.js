import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const TS_CACHE_DIR = "node_modules/.cache/rollup-plugin-typescript2";

export default {
	input: "src/FontPicker.tsx",
	output: [
		{
			file: pkg.main,
			format: "cjs",
		},
		{
			file: pkg.module,
			format: "es",
		},
	],
	external: ["font-picker", "react"],
	plugins: [
		typescript({
			cacheRoot: TS_CACHE_DIR,
		}),
	],
};
