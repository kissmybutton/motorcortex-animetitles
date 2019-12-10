"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MotorCortex = require("@kissmybutton/motorcortex/");

var AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");

var Anime = MotorCortex.loadPlugin(AnimeDefinition);

var Size = function Size(svgWidth, svgHeight, lineSize) {
  _classCallCheck(this, Size);

  this.svgWidth = svgWidth;
  this.svgHeight = svgHeight;
  this.lineSize = lineSize;
};

var size;

var SvgDrow =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(SvgDrow, _MotorCortex$API$Clip);

  function SvgDrow() {
    _classCallCheck(this, SvgDrow);

    return _possibleConstructorReturn(this, _getPrototypeOf(SvgDrow).apply(this, arguments));
  }

  _createClass(SvgDrow, [{
    key: "buildTree",
    value: function buildTree() {
      var textDrow = new Anime.Anime({
        animatedAttrs: {
          strokeDashoffset: 0
        },
        attrs: {
          easing: "easeInSine"
        }
      }, {
        duration: this.attrs.duration * 0.75,
        selector: "svg path"
      });
      var textBigBack = new Anime.Anime({
        animatedAttrs: {
          transform: {
            scaleX: 1.3,
            scaleY: 1.3
          }
        },
        attrs: {
          easing: "easeOutElastic"
        }
      }, {
        duration: this.attrs.duration * 0.425,
        selector: "svg",
        id: "transform2"
      });
      var textErase = new Anime.Anime({
        animatedAttrs: {
          strokeDashoffset: this.attrs.strokeDashOffset
        },
        attrs: {
          easing: "easeInSine"
        }
      }, {
        duration: this.attrs.duration * 0.75,
        selector: "svg path"
      });
      this.addIncident(textDrow, 0);
      this.addIncident(textBigBack, this.attrs.duration * 0.75);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(textErase, this.attrs.duration * 0.95 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size = new Size(200, 100, "");
          break;

        case "M":
          size = new Size(300, 200, "5rem");
          break;

        case "L":
          size = new Size(500, 400, "7rem");

        default:
      }

      return "<div class=\"svg-wrapper\">".concat(this.attrs.svg, " </div>");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .svg-wrapper{\n      position: relative;\n      width: ".concat(size.svgWidth * 1.5, "px;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    svg{\n      width: ").concat(size.svgWidth, "px;\n      height: ").concat(size.svgHeight, "px;\n    }\n\n    .svgContainer{\n      height:100vh;\n    }\n    svg path\n    {\n      stroke-dasharray: ").concat(this.attrs.StrokeDashArray, ";\n      stroke-dashoffset: ").concat(this.attrs.strokeDashOffset, ";\n      \n    }\n    \n  ");
    }
  }]);

  return SvgDrow;
}(MotorCortex.API.Clip);

module.exports = SvgDrow;