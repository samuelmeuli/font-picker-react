import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
	input: 'src/FontPicker',
	output: [
		{
			file: pkg.main,
			format: 'cjs'
		},
		{
			file: pkg.module,
			format: 'es'
		}
	],
	external: ['font-picker', 'prop-types', 'react'],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};
