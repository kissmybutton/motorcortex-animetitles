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

var Size = function Size(borderWidth, borderHeight, fontSizeTitle, fontSizeSub, subGap, titleTop, subTop, titleContainerTop) {
  _classCallCheck(this, Size);

  this.borderWidth = borderWidth;
  this.borderHeight = borderHeight;
  this.fontSizeTitle = fontSizeTitle;
  this.fontSizeSub = fontSizeSub;
  this.subGap = subGap;
  this.titleTop = titleTop;
  this.subTop = subTop;
  this.titleContainerTop = titleContainerTop;
};

var size;

var SvgBorder =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(SvgBorder, _MotorCortex$API$Clip);

  function SvgBorder() {
    _classCallCheck(this, SvgBorder);

    return _possibleConstructorReturn(this, _getPrototypeOf(SvgBorder).apply(this, arguments));
  }

  _createClass(SvgBorder, [{
    key: "buildTree",
    value: function buildTree() {
      var delayEnd = this.attrs.delayEnd || 0;
      var borderAnimete = new Anime.Anime({
        animatedAttrs: {
          strokeDashoffset: " -".concat(size.subGap)
        },
        attrs: {}
      }, {
        duration: Math.round(this.attrs.duration * 0.28),
        selector: ".shape2",
        easing: "easeInOutQuart"
      });
      var titleAnimete = new Anime.Anime({
        animatedAttrs: {
          top: 0
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.12,
        selector: ".text"
      });
      var subAnimate = new Anime.Anime({
        animatedAttrs: {
          top: 0
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.12,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimate = new Anime.Anime({
        animatedAttrs: {
          top: 0
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.12,
        selector: ".slogan",
        easing: "easeInOutQuart"
      });
      var borderAnimeteLeft = new Anime.Anime({
        animatedAttrs: {
          strokeDashoffset: "-6000"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.24,
        selector: ".shape2"
      });
      var titleAnimeteLeft = new Anime.Anime({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".text"
      });
      var subAnimateLeft = new Anime.Anime({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimateLeft = new Anime.Anime({
        animatedAttrs: {
          left: "150px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".slogan",
        easing: "easeInOutQuart"
      }); //

      this.addIncident(borderAnimete, 0);
      this.addIncident(titleAnimete, this.attrs.duration * 0.12);
      this.addIncident(subAnimate, this.attrs.duration * 0.24);
      this.addIncident(sloganAnimate, this.attrs.duration * 0.24);
      var grupMc = new MotorCortex.Group();
      grupMc.addIncident(borderAnimeteLeft, this.attrs.duration * 0.16);
      grupMc.addIncident(titleAnimeteLeft, this.attrs.duration * 0.08);
      grupMc.addIncident(subAnimateLeft, this.attrs.duration * 0.08);
      grupMc.addIncident(sloganAnimateLeft, this.attrs.duration * 0.08);

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, this.attrs.duration * 0.6 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size = new Size(600, 70, "2rem", "1rem", 100, 50, 17, 50);
          break;

        case "M":
          size = new Size(700, 90, "3rem", "2rem", 200, 50, 34, 70);
          break;

        case "L":
          size = new Size(1000, 110, "3.5rem", "2.5rem", 200, 55, 45, 80);

        default:
      }

      return "\n    <div class=\"svg-wrapper\">\n    <svg height=\"".concat(size.borderHeight, "\" width=\"").concat(size.borderWidth, "\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect class=\"shape2\" height=\"").concat(size.borderHeight, "\" width=\"").concat(size.borderWidth, "\" />\n      </svg>\n      <div class=\"sub--container\"><div class=\"sub\">").concat(this.attrs.subTitle, "</div></div>\n      <div class=\"titleContainer\"><div class=\"text\">").concat(this.attrs.title, "</div></div>\n    <div class=\"sloganContainer\">\n      <div class=\"slogan\">").concat(this.attrs.slogan, "</div>\n    </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    body{\n     font-size: 62.5%;\n    }\n    .svg-wrapper {\n      position: relative;\n      top :10px;\n     \n      height: 100%;\n      color:  ".concat(this.attrs.textColor, ";\n    }\n    \n    .shape2 {\n      stroke-dasharray: 6000;\n      stroke-width: 5px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.lineColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -6000;\n    }\n    \n    \n    .text {\n      font-size: ").concat(size.fontSizeTitle, ";\n      \n      letter-spacing: 8px;\n      position: relative;\n      top: ").concat(size.titleTop, "px;\n\n    }\n    \n    .sub--container {\n      position: absolute;\n      white-space: nowrap;\n      overflow: hidden;\n      left: 20px;\n      top: -7%;\n    }\n    .sloganContainer {\n      position: relative;\n      top: -30px;\n      left: 45%;\n      white-space: nowrap;\n      overflow: hidden;\n      width: 150px;\n    }\n    .titleContainer{\n      position: relative;\n      top: -").concat(size.titleContainerTop, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      width: ").concat(size.borderWidth, "px;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n    }\n    \n    \n    .sub{\n      position: relative;\n      top: ").concat(size.subTop, "px;\n      font-size : ").concat(size.fontSizeSub, ";\n    }\n    \n    .slogan{\n      position: relative;\n      top: -").concat(size.subTop, "px;\n      font-size : ").concat(size.fontSizeSub, ";\n    }\n    \n      \n  ");
    }
  }]);

  return SvgBorder;
}(MotorCortex.API.Clip);

module.exports = SvgBorder;