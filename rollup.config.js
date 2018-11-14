import babel from 'rollup-plugin-babel';

import pkg from './package.json';


export default {
	input: 'src/FontPicker',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true
		}
	],
	external: ['react', 'font-picker'],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};
