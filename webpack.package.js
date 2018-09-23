'use strict';

const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const packageDir = path.resolve(__dirname, 'package');
const assetsDir = path.resolve(packageDir, 'assets');
const imagesDir = path.resolve(assetsDir, 'images');
const filesDir = path.resolve(assetsDir, 'files');
const iconsDir = path.resolve(assetsDir, 'icons');
const packageZip = path.resolve(__dirname, 'package.zip');

module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'template.html')
		}),
        new FileManagerPlugin({
            onEnd: {
                delete: [
                    packageDir,
                    packageZip,
                ],
                mkdir: [
                    packageDir,
                    assetsDir,
                    imagesDir,
                    filesDir,
                    iconsDir,
                ],
                copy: [
                    { source: 'public/files/*', destination: filesDir },
                    { source: 'public/icons/*', destination: iconsDir },
                    { source: 'public/images/*', destination: imagesDir },
                    { source: 'public/build/index.html', destination: packageDir },
                    { source: 'public/build/bundle.js', destination: packageDir },
                ],
                archive: [
                    { source: packageDir, destination: packageZip },
                ],
                delete: [
                    packageDir
                ],
            }
        })
    ],
});