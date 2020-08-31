module.exports = {
	env: {
		node: true,
		es6: true
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended', 'prettier', 'prettier/react' ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [ 'react' ]
};
