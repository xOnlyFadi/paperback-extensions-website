module.exports = {
	env: {
		browser: true,
		es6: true,
	},

	extends: ["vuepress", "prettier"],
	plugins: ["vue", "prettier", "markdown"],

	parserOptions: {
		ecmaVersion: 2018,
		parser: "babel-eslint",
		sourceType: "module",
	},

	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"import/no-unresolved": [
			2,
			{
				ignore: ["^@"],
			},
		],
		curly: ["error", "all"],
		"vue/multi-word-component-names": "off"
	},
};
