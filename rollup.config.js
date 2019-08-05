import autoExternal from "rollup-plugin-auto-external";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

export default {
	input: "./src/FontPicker.tsx",
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
	external: ["@samuelmeuli/font-manager", "react"],
	plugins: [
		// Exclude dependencies and peerDependencies from bundle
		autoExternal(),
		// Resolve TypeScript files and dependencies
		resolve({
			extensions: EXTENSIONS,
		}),
		// Transform TypeScript with Babel
		babel({
			presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
			plugins: ["@babel/plugin-proposal-class-properties"],
			exclude: "./node_modules/**",
			extensions: EXTENSIONS,
		}),
	],
};
