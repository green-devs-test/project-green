import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    // Indicates whether each individual test should be reported during the run
    // Defaults to false for multiple files or true for a single test file
    verbose: true,

    // A list of paths to directories that Jest should use to search for files in.
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    // The environment that tests will be run in
    // The default environment in Jest is a Node.js environment.
    // set to jsdom for react testing library
    testEnvironment: 'jsdom',

    // A preset that is used as a base for Jest's configuration.
    // This performs jest typescript transformations
    preset: 'ts-jest',
};

export default config;