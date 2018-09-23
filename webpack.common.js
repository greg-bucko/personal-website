'use strict';

const path = require('path');

const sourcePath = path.resolve(__dirname, 'app/assets/javascripts');
const buildPath = path.resolve(__dirname, 'public/build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    context: sourcePath,
    entry: {
        js: 'index.tsx'
    },
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [nodeModulesPath],
                enforce: 'pre',
                use: [
	                {
	                    loader: 'tslint-loader',
	                    options: {
	                        tsConfigFile: 'tsconfig.json',
	                        emitErrors: true,
	                        failOnHint: true
	                    }
	                }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: [
                    nodeModulesPath
                ],
                use: [
	                {
	                    loader: 'ts-loader'
	                }
                ]
            },
	        {
	            test: /\.scss$/,
	            exclude: [nodeModulesPath],
	            use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
	        },
            {
                test: /\.css$/,
                include: [path.resolve(nodeModulesPath, 'react-vertical-timeline-component')],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {},
        modules: [
            nodeModulesPath,
            sourcePath
        ]
    },
    stats: {
        colors: {
            green: '\u001b[32m'
        }
    }
};