import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');

const config: StorybookConfig = {
	stories: ["../app/components/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal: async (config: any) => {
		config.resolve.alias = {
			...config.resolve?.alias,
			'@/*': path.resolve(__dirname, '../*')
		};
		return config;
	}
};
export default config;
