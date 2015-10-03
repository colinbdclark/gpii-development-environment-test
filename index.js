/*
 * Flocking Node.js Audio File Playback Demo
 * http://github.com/colinbdclark/flocking
 *
 * Copyright 2013-2015, Colin Clark
 * Dual licensed under the MIT and GPL Version 2 licenses.
 */

/*jslint white: true, vars: true, undef: true, newcap: true, regexp: true,
    node: true, forin: true, continue: true, nomen: true,
    bitwise: true, maxerr: 100, indent: 4 */

/*global flock*/

"use strict";

var express = require("express"),
    config = require(__dirname + "/config.json");

var appResources = config.webRoot.indexOf("/") === 0 ? config.webRoot : __dirname + "/" + config.webRoot,
    app = express(),
    server = app.listen(config.port);

app.use("/", express.static(appResources));
console.log("Server listening on port " + config.port);
