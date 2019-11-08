const RotatedLIne = require("./incidents/RotatedLine");
const RolingText = require("./incidents/RolingText");
const SvgBorder = require("./incidents/SvgBorder");
const RotatadLineReveal = require("./incidents/RotatadLineReveal");
const SvgDrow = require("./incidents/SvgDrow");
const Circle = require("./incidents/Circle");
const LogoBox = require("./incidents/LogoBox");
const TextWriting = require("./incidents/TextWriting");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-titles",
  incidents: [
    {
      exportable: RotatedLIne,
      name: "RotatedLine"
    },
    {
      exportable: RolingText,
      name: "RolingText"
    },
    {
      exportable: SvgBorder,
      name: "SvgBorder"
    },
    {
      exportable: RotatadLineReveal,
      name: "RotatadLineReveal"
    },
    {
      exportable: SvgDrow,
      name: "SvgDrow"
    },
    {
      exportable: Circle,
      name: "Circle"
    },
    {
      exportable: LogoBox,
      name: "LogoBox"
    },
    {
      exportable: TextWriting,
      name: "TextWriting"
    }
  ]
};

//TextWriting
