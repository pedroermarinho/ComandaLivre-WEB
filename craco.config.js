const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                '^@(.*)$': '<rootDir>/src$1'
            }
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {

                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};