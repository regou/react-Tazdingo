#!/bin/sh


shellpath=`dirname $0`

watchify $shellpath"/js/index.js" -d -o $shellpath"/compiles/bundle.js" -v
