"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MotorCortex = require("@kissmybutton/motorcortex/");

var AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");

var Anime = MotorCortex.loadPlugin(AnimeDefinition);

var Circle =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(Circle, _MotorCortex$API$Clip);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: "buildTree",
    value: function buildTree() {
      var array = this.attrs.title.split("");

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        var html3 = html3 + html;
      }

      var word = new MotorCortex.Clip({
        css: this.css,
        html: " <div class=\"wrapper\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".word"
      });
      this.addIncident(word, 0);
      var circleScale = new Anime.Anime({
        animatedAttrs: {
          width: 500,
          height: 500
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: 500,
        selector: ".circle"
      });

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime.Anime({
          animatedAttrs: {
            top: "20px",
            opacity: 1
          },
          attrs: {
            easing: "easeOutExpo"
          }
        }, {
          duration: 500,
          selector: ".letter" + (_i + 1)
        });
        word.addIncident(textAnimation, 500 + 100 * (_i + 1));
      }

      var circleScaleDown = new Anime.Anime({
        animatedAttrs: {
          width: 400,
          height: 400
        },
        attrs: {
          easing: "easeOutElastic"
        }
      }, {
        duration: 600,
        selector: ".circle"
      });
      var wrapperDown = new Anime.Anime({
        animatedAttrs: {
          width: 400,
          height: 400,
          transform: {
            rotate: 10
          }
        },
        attrs: {
          easing: "easeOutElastic"
        }
      }, {
        duration: 600,
        selector: ".wrapper"
      });
      var maskDown = new Anime.Anime({
        animatedAttrs: {
          maskSize: "400px",
          transform: {
            rotate: -10
          }
        },
        attrs: {
          easing: "easeOutElastic"
        }
      }, {
        duration: 600,
        selector: ".circle"
      });
      var subOut = new Anime.Anime({
        animatedAttrs: {
          top: "0"
        },
        attrs: {
          easing: "easeOutElastic"
        }
      }, {
        duration: 600,
        selector: ".sub span"
      });
      var circleScaleDownEnd = new Anime.Anime({
        animatedAttrs: {
          width: 0,
          height: 0,
          fontSize: "0"
        },
        attrs: {
          easing: "easeOutElastic"
        }
      }, {
        duration: 600,
        selector: ".circle,.sub span"
      });
      word.addIncident(wrapperDown, 2000);
      this.addIncident(circleScaleDown, 2000);
      this.addIncident(maskDown, 2000);
      this.addIncident(subOut, 2000);
      this.addIncident(circleScale, 0);
      this.addIncident(circleScaleDownEnd, 3600);
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\" >\n    <div class=\"circle\">\n      <div class=\"word\">\n      </div>\n    </div>\n    <div class=\"sub\">\n          <span >".concat(this.attrs.sub, "</span>\n        </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      \n      width: 500px;\n      height: 500px;\n    }\n    .circle{\n      width: 0px;\n      height: 0px;\n      background: ".concat(this.attrs.circleColor, ";\n      position: relative;\n      border-radius: 50%;\n      mask: url(./img.svg);\n      mask-position-y: 69px;\n      mask-size: 810px;\n    }  \n    .word{\n      overflow: hidden;\n      width: 9px;\n      height: 3px;\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n    }\n    \n    .letter{\n      font-size: ").concat(this.attrs.fontSize, "px;\n      color: ").concat(this.attrs.textColor, ";\n      left: 2.5px;\n      position: relative;\n      text-align: center;\n      top : 300px;\n      width: 100%;\n      background-color:#ffffff00\n      \n    }\n\n  .sub{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    top: 33%;\n    transform: rotate(-10deg);\n    width: 400px;\n    height: 400px;\n\n  }\n  .sub span{\n    font-size: ").concat(this.attrs.fontSize * 0.8, "px;\n    position: relative;\n    top:100%;\n    letter-spacing: 3px;\n  }\n\n\n  ");
    }
  }]);

  return Circle;
}(MotorCortex.API.Clip);

module.exports = Circle;