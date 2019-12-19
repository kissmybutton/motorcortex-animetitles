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

var Size = function Size(fontSize, fontSizeSub, lineSize) {
  _classCallCheck(this, Size);

  this.fontSize = fontSize;
  this.fontSizeSub = fontSizeSub;
  this.lineSize = lineSize;
};

var size;

var RotatadLineReveal =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(RotatadLineReveal, _MotorCortex$API$Clip);

  function RotatadLineReveal() {
    _classCallCheck(this, RotatadLineReveal);

    return _possibleConstructorReturn(this, _getPrototypeOf(RotatadLineReveal).apply(this, arguments));
  }

  _createClass(RotatadLineReveal, [{
    key: "buildTree",
    value: function buildTree() {
      var grupMc = new MotorCortex.Group();
      var lineRotateEnd = new Anime.Anime({
        animatedAttrs: {
          transform: {
            rotate: 0
          }
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.24,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineMoveEnd = new Anime.Anime({
        animatedAttrs: {
          left: "".concat(this.attrs.leftEnd, "px")
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.4,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineWidthEnd = new Anime.Anime({
        animatedAttrs: {
          width: "400px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".redLine"
      });
      var moveText = new Anime.Anime({
        animatedAttrs: {
          left: "10px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".text",
        easing: "easeOutExpo"
      });
      var moveSub = new Anime.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.08,
        selector: ".sub",
        easing: "easeOutExpo"
      });

      for (var i = 1; i <= 2; i++) {
        var moveTextOut = new Anime.Anime({
          animatedAttrs: {
            left: "-".concat(this.attrs.width, "px")
          },
          attrs: {}
        }, {
          duration: Math.round(this.attrs.duration * 0.34),
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        grupMc.addIncident(moveTextOut, this.attrs.duration * 0.625 + i * 100);
      }

      var lineHeight = new Anime.Anime({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.08,
        selector: ".redLine",
        easing: "easeInSine"
      });
      this.addIncident(lineRotateEnd, 0);
      this.addIncident(lineMoveEnd, 0);
      this.addIncident(lineWidthEnd, this.attrs.duration * 0.24);
      this.addIncident(moveText, this.attrs.duration * 0.24);
      this.addIncident(moveSub, this.attrs.duration * 0.4);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, delayEnd);
        this.addIncident(lineHeight, this.attrs.duration * 0.85 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size = new Size("1.5rem", "1rem", "3.5rem");
          break;

        case "M":
          size = new Size("2.5rem", "2rem", "5rem");
          break;

        case "L":
          size = new Size("3.5rem", "2rem", "7rem");

        default:
      }

      return "\n    <div class=\"wrapper\">\n      <div class=\"redLine\">\n        <div class=\"text text1\"><div class=\"title \">".concat(this.attrs.title, "</div></div>\n        <div class=\"text text2\"><div class=\"sub\">").concat(this.attrs.subtitle, "</div></div>\n      </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .wrapper{\n      width:".concat(this.attrs.width, "px;\n      height:100%;\n    }\n     .redLine {\n      border-left: 2px solid ").concat(this.attrs.lineColor, ";\n      width: 0rem;\n      height: ").concat(size.lineHeight, ";\n      display: flex;\n      align-items: flex-start;\n      flex-direction: column;\n      transform: rotate(30deg);\n      position: relative;\n      left: 150%;\n      transform-origin: top left;\n      white-space: nowrap;\n      overflow: hidden;\n      color : ").concat(this.attrs.textColor, "\n    }\n    .title{\n      font-size: ").concat(size.fontSize, ";\n      font-weight: 600;\n    }\n    .sub{\n      font-size: ").concat(size.fontSizeSub, ";\n      top: -60px;\n      position: relative;\n    }\n\n    .text {\n      position: relative;\n      left: -50px;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n  ");
    }
  }]);

  return RotatadLineReveal;
}(MotorCortex.API.Clip);

module.exports = RotatadLineReveal;