import type { Preview } from "@storybook/react";
import '../app/globals.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: 'white',
			values: [
				{ name: 'white', value: '#fff' },
				{ name: 'primary', value: '#ffe600' },
			],
		},
	},
};

export default preview;
