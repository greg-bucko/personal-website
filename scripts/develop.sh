#!/usr/bin/env bash

webpack --mode development --config webpack.dev.js --watch & cd ../ & ./sbt.bat run