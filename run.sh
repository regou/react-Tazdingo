#!/bin/sh


shellpath=`dirname $0`

browserify $shellpath"/jsx/index.js" -d -o $shellpath"/compiles/bundle.js"
