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

var Size = function Size(fontSizeLeft, topMove, lineHeight, gap, topMove2) {
  _classCallCheck(this, Size);

  this.fontSizeLeft = fontSizeLeft;
  this.topMove = topMove;
  this.lineHeight = lineHeight;
  this.gap = gap;
  this.topMove2 = topMove2;
};

var size;

var RolingText =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(RolingText, _MotorCortex$API$Clip);

  function RolingText() {
    _classCallCheck(this, RolingText);

    return _possibleConstructorReturn(this, _getPrototypeOf(RolingText).apply(this, arguments));
  }

  _createClass(RolingText, [{
    key: "buildTree",
    value: function buildTree() {
      var animeLineHeight = new Anime.Anime({
        animatedAttrs: {
          height: size.lineHeight
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      });
      var animeTextLeft = new Anime.Anime({
        animatedAttrs: {
          left: "0"
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: 800,
        selector: ".textClip span"
      });
      var animeTextTop = new Anime.Anime({
        animatedAttrs: {
          top: size.topMove
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      });
      var animeTextTopNext = new Anime.Anime({
        animatedAttrs: {
          top: size.topMove2
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      });
      var animeTextLeftBack = new Anime.Anime({
        animatedAttrs: {
          left: "-".concat(this.attrs.width / 2, "px")
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      });
      var animeLineHeightBack = new Anime.Anime({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      });
      this.addIncident(animeLineHeight, 0);
      this.addIncident(animeTextLeft, this.attrs.duration * 0.075);
      this.addIncident(animeTextTop, this.attrs.duration * 0.375);
      this.addIncident(animeTextTopNext, this.attrs.duration * 0.575);

      if (!this.attrs.stopOnLast) {
        this.addIncident(animeTextLeftBack, this.attrs.duration * 0.75);
        this.addIncident(animeLineHeightBack, this.attrs.duration * 0.925);
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"line\"></div>\n        <div class=\"textClip\"> \n          <span> ".concat(this.attrs.subTitle1, "</span> <span> ").concat(this.attrs.subTitle2, " </span><span> ").concat(this.attrs.subTitle3, "</span>\n        </div>\n      </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size = new Size(1.5, "-26px", "30px", 0.5, "-52px");
          break;

        case "M":
          size = new Size(2, "-36px", "3rem", 1, "-73px");
          break;

        case "L":
          size = new Size(2.5, "-45px", "3rem", 1.5, "-87px");
          break;

        case "XL":
          size = new Size(3, "-50px", "4rem", 2, "-100px");
          break;

        case "XXL":
          size = new Size(3.5, "-60px", "4rem", 2, "-120px");
          break;

        case "XXXL":
          size = new Size(5, "-86px", "5rem", 2, "-172px");
          break;

        default:
      }

      return "\n    body{\n     font-size: 62.5%;\n    }\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      height: ".concat(size.lineHeight, ";\n      width : ").concat(this.attrs.width, "px;\n      justify-content: center;\n      align-items: center;\n    }\n  \n    .line{\n      position: relative; \n      height: 0;\n      width: 3px;\n      justify-content: center;\n      background: ").concat(this.attrs.lineColor, " ;\n      margin-right: ").concat(size.gap, "rem;\n    \n    }\n    \n    .textClip{\n      position: relative; \n      \n      position: relative;\n      display: flex;\n      flex-direction: column;\n      font-size: ").concat(size.fontSizeLeft, "rem;\n      white-space: nowrap;\n      overflow: hidden;\n      height: ").concat(size.fontSizeLeft, "rem;\n      \n    }\n  \n    .textClip span{\n      color : ").concat(this.attrs.textColor, ";\n      position: relative;\n      left : -").concat(this.attrs.width / 2, "px;\n      width : 100%;\n    }\n  ");
    }
  }]);

  return RolingText;
}(MotorCortex.API.Clip);

module.exports = RolingText;