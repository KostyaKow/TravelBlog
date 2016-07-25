#!/bin/bash

npm install jscloak
npm install -g browserify
browserify index.js -o bundle.js
