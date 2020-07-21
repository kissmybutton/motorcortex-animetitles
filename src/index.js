const RotatedLIne = require("./incidents/RotatedLine");
const RolingText = require("./incidents/RolingText");
const SvgBorder = require("./incidents/SvgBorder");
const RotatadLineReveal = require("./incidents/RotatadLineReveal");
const SvgDrow = require("./incidents/SvgDrow");
const Circle = require("./incidents/Circle");
const LogoBox = require("./incidents/LogoBox");
const attrs = require("./validation");
module.exports = {
  npm_name: "@kissmybutton/motorcortex-animetitles",
  incidents: [
    {
      exportable: RotatedLIne,
      name: "RotatedLine",
      attributesValidationRules: attrs.RotatedLIne
    },
    {
      exportable: RolingText,
      name: "RolingText",
      attributesValidationRules: attrs.RolingText
    },
    {
      exportable: SvgBorder,
      name: "SvgBorder",
      attributesValidationRules: attrs.SvgBorder
    },
    {
      exportable: RotatadLineReveal,
      name: "RotatadLineReveal",
      attributesValidationRules: attrs.RotatadLineReveal
    },
    {
      exportable: SvgDrow,
      name: "SvgDrow",
      attributesValidationRules: attrs.SvgDrow
    },
    {
      exportable: Circle,
      name: "Circle",
      attributesValidationRules: attrs.Circle
    },
    {
      exportable: LogoBox,
      name: "LogoBox"
    }
  ]
};
