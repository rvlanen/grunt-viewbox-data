/*
 * grunt-viewbox-data
 * https://github.com/rvlanen/grunt-viewbox-data
 *
 * Copyright (c) 2016 Roel van Lanen
 * Licensed under the MIT license.
 */

'use strict';

var parseString = require('xml2js').parseString;
var assign = require('lodash.assign');

module.exports = function (grunt) {

    function getXml2js(xml) {
        var obj;

        parseString(xml, function (err, result) {
            obj = result;
        });

        return obj;
    }

    function addSymbolData(obj, symbol) {
        obj[symbol.$.id] = symbol.$.viewBox;

        return obj;
    }

    function getSpriteViewBoxData(spritePath) {
        var svgData = getXml2js(grunt.file.read(spritePath));

        if (svgData.svg.symbol) {
            return svgData.svg.symbol.reduce(addSymbolData, {});
        } else {
            return {};
        }
    }

    function getViewBoxData(src) {
        return src.reduce(function (obj, path) {
            return assign(obj, getSpriteViewBoxData(path));
        }, {});
    }

    grunt.registerMultiTask('viewbox_data', 'Extract viewBox data from svg sprites', function () {

        function fileExists(filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                return false;
            } else {
                return true;
            }
        }

        this.files.forEach(function (f) {
            var src = f.src.filter(fileExists);

            grunt.file.write(f.dest, JSON.stringify(getViewBoxData(src)));
            grunt.log.writeln('File "' + f.dest + '" created.');
        });

    });

};
