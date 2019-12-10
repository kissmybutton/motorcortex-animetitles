"use strict";

var RotatedLIne = require("./incidents/RotatedLine");

var RolingText = require("./incidents/RolingText");

var SvgBorder = require("./incidents/SvgBorder");

var RotatadLineReveal = require("./incidents/RotatadLineReveal");

var SvgDrow = require("./incidents/SvgDrow");

var Circle = require("./incidents/Circle");

var LogoBox = require("./incidents/LogoBox");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-titles",
  incidents: [{
    exportable: RotatedLIne,
    name: "RotatedLine"
  }, {
    exportable: RolingText,
    name: "RolingText"
  }, {
    exportable: SvgBorder,
    name: "SvgBorder"
  }, {
    exportable: RotatadLineReveal,
    name: "RotatadLineReveal"
  }, {
    exportable: SvgDrow,
    name: "SvgDrow"
  }, {
    exportable: Circle,
    name: "Circle"
  }, {
    exportable: LogoBox,
    name: "LogoBox"
  }]
};