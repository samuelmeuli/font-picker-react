import babel from 'rollup-plugin-babel';


export default {
	input: 'src/FontPicker',
	output: {
		file: 'lib/FontPicker.js',
		format: 'cjs'
	},
	external: ['react', 'font-picker'],
	plugins: [
		babel({
			exclude: 'node_modules/**',
			plugins: ['external-helpers']
		})
	]
};