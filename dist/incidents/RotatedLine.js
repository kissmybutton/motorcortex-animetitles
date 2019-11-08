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

var Size = function Size(fontSizeLeft, fontSizeRigth, lineWidth, lineHeight, gap) {
  _classCallCheck(this, Size);

  this.fontSizeLeft = fontSizeLeft;
  this.fontSizeRigth = fontSizeRigth;
  this.lineWidth = lineWidth;
  this.lineHeight = lineHeight;
  this.gap = gap;
};

var size;

var RotatedLine =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(RotatedLine, _MotorCortex$API$Clip);

  function RotatedLine() {
    _classCallCheck(this, RotatedLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(RotatedLine).apply(this, arguments));
  }

  _createClass(RotatedLine, [{
    key: "buildTree",
    value: function buildTree() {
      var rotateAminmeEnd = new Anime.Anime({
        animatedAttrs: {
          transform: {
            rotate: 0
          }
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".wrapper"
      });
      var widthLIne = new Anime.Anime({
        animatedAttrs: {
          height: size.lineHeight
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      });
      var leftTextAnimate = new Anime.Anime({
        animatedAttrs: {
          right: "".concat(size.gap, "%")
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".text-left"
      });

      for (var i = 1; i <= 3; i++) {
        var rightTextAnimate = new Anime.Anime({
          animatedAttrs: {
            right: "-".concat(size.gap, "%")
          },
          attrs: {
            easing: "easeOutExpo"
          }
        }, {
          duration: this.attrs.duration * 0.15 * i,
          selector: ".text-right" + i
        });
        this.addIncident(rightTextAnimate, this.attrs.duration * 0.25);
      }

      var rightTextAnimateIn = new Anime.Anime({
        animatedAttrs: {
          right: "100%"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".text-right"
      });
      var leftTextAnimateIn = new Anime.Anime({
        animatedAttrs: {
          right: "-100%"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".text-left"
      });
      var rotateAminmeStartOut = new Anime.Anime({
        animatedAttrs: {
          transform: {
            rotate: 90
          }
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".wrapper"
      });
      var widthLIneOut = new Anime.Anime({
        animatedAttrs: {
          height: "0rem"
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      });
      this.addIncident(widthLIne, 0);
      this.addIncident(rotateAminmeEnd, this.attrs.duration * 0.075);
      this.addIncident(leftTextAnimate, this.attrs.duration * 0.15);
      this.addIncident(rightTextAnimateIn, this.attrs.duration * 0.7);
      this.addIncident(leftTextAnimateIn, this.attrs.duration * 0.7);
      this.addIncident(rotateAminmeStartOut, this.attrs.duration * 0.85);
      this.addIncident(widthLIneOut, this.attrs.duration * 0.925);
    }
  }, {
    key: "html",
    get: function get() {
      return "\n          <div class=\"wrapper\">\n            <div class=\"text--container text--container-left\">\n              <div class=\"text-left\">".concat(this.attrs.title, "</div>\n            </div>\n            <div class=\"line\"></div>\n            <div class=\"text--container text--container-right\">\n              <div class=\"text-right text-right1\">").concat(this.attrs.subTitle1, "</div>\n              <div class=\"text-right text-right2\">").concat(this.attrs.subTitle2, "</div>\n              <div class=\"text-right text-right3\">").concat(this.attrs.subTitle3, "</div>\n            </div>\n          </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size = new Size("1.5rem", "1rem", "0.2rem", "5rem", 3);
          break;

        case "M":
          size = new Size("2rem", "1.2rem", "0.3rem", "7rem", 4);
          break;

        case "L":
          size = new Size("2.5rem", "1.5rem", "0.3rem", "9rem", 4);
          break;

        case "XL":
          size = new Size("3rem", "2rem", "0.3rem", "11rem", 4);
          break;

        default:
      }

      return "\n\n    body{\n     font-size: 62.5%;\n    }\n     .wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transform: rotate(90deg);\n        white-space: nowrap;\n        overflow: hidden;\n        width : 100%;\n        width : ".concat(this.attrs.width + size.lineWidth, "px;\n        color : ").concat(this.attrs.textColor, "\n        \n      }\n      .line {\n        width: 3px;\n        background: ").concat(this.attrs.lineColor, " ;\n        height: 0rem;\n      }\n      \n      .text-left {\n        position: relative;\n        right : -100%;\n        font-size: ").concat(size.fontSizeLeft, ";\n        text-align: right;\n      }\n      \n      .text-right {\n        position: relative;\n        right: 100%;\n        font-size: ").concat(size.fontSizeRigth, ";\n\n      }\n      \n      .text--container {\n        white-space: nowrap;\n        overflow: hidden;\n        position: relative;\n        width :").concat(this.attrs.width / 2, "px;\n        \n      } \n      ");
    }
  }]);

  return RotatedLine;
}(MotorCortex.API.Clip);

module.exports = RotatedLine;