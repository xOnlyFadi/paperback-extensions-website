const pluginsConfig = require("./config/plugins");

module.exports = {
	theme: "yuu",
	dest: "./public",
	temp: "./node_modules/.temp/theme",

	title: "Paperback Extensions",
	description: "Unofficial site for paperback extensions",

	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
		["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
		["meta", { name: "theme-color", content: "#D21A1C" }],
	],

	themeConfig: {
		repo: "xOnlyFadi/paperback-extensions-website",
		editLinks: false,
		docsDir: "src",
		smoothScroll: true,
		editLinkText: "",
		lastUpdated: false,
		search: false,
		nav: [],
		sidebar: {},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: pluginsConfig,
};
