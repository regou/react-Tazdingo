#!/bin/sh


shellpath=`dirname $0`

browserify $shellpath"/js/index.js" -d -o $shellpath"/compiles/bundle.js"
