module.exports = {
	collectCoverage: true,
	coverageProvider: 'v8',
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
		'^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
		'^@/components/(.*)$': '<rootDir>/components/$1',
	},
	testEnvironment: 'jsdom',
	testMatch: [
		'**/?(*.)+(spec).[jt]s?(x)'
	],
	transform: {
		'^.+\\.(svg|png)$': 'jest-transform-stub',
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
}