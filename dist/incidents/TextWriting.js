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

var TextWriting =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(TextWriting, _MotorCortex$API$Clip);

  function TextWriting() {
    _classCallCheck(this, TextWriting);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextWriting).apply(this, arguments));
  }

  _createClass(TextWriting, [{
    key: "buildTree",
    value: function buildTree() {
      var array = this.attrs.title.split("");

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        var html3 = html3 + html;
      }

      var word = new MotorCortex.Clip({
        css: this.css,
        html: " <div class=\"textContainer\" >".concat(html3.split("undefined")[1], " </div>"),
        selector: ".onemore"
      });
      var blink = new Anime.Anime({
        animatedAttrs: {
          borderRight: "2px solid rgba(".concat(this.attrs.cursorColor[0], ",").concat(this.attrs.cursorColor[1], ",").concat(this.attrs.cursorColor[2], ",0)")
        },
        initialValues: {
          borderRight: "2px solid rgba(".concat(this.attrs.cursorColor[0], ",").concat(this.attrs.cursorColor[1], ",").concat(this.attrs.cursorColor[2], ",1)")
        },
        attrs: {
          easing: "linear"
        }
      }, {
        duration: this.attrs.blinkingDuration,
        selector: ".onemore",
        repeats: 10,
        delay: this.attrs.blinkDelay
      });

      if (this.attrs.blinking) {
        this.addIncident(blink, 0);
      }

      this.addIncident(word, 0);
      var totalWidth = 0;

      for (var _i = 0; _i <= array.length; _i++) {
        totalWidth = totalWidth + 12 * this.attrs.size;
        var write = new Anime.Anime({
          animatedAttrs: {
            width: "".concat(totalWidth, "px")
          },
          attrs: {
            easing: "linear"
          }
        }, {
          duration: 50,
          selector: ".onemore",
          delay: 50
        });
        this.addIncident(write, 50 * _i);
      }

      for (var _i2 = 0; _i2 <= this.attrs.erase; _i2++) {
        totalWidth = totalWidth - 12 * this.attrs.size;
        var erase = new Anime.Anime({
          animatedAttrs: {
            width: "".concat(totalWidth, "px")
          },
          attrs: {
            easing: "linear"
          }
        }, {
          duration: 50,
          selector: ".onemore",
          delay: 50
        });
        this.addIncident(erase, 50 * array.length + 100 + 100 * (_i2 + 1));
      }

      if (this.attrs.eraseAll) {
        for (var _i3 = 0; _i3 <= array.length; _i3++) {
          totalWidth = totalWidth - 12 * this.attrs.size;

          var _erase = new Anime.Anime({
            animatedAttrs: {
              width: "".concat(totalWidth, "px")
            },
            attrs: {
              easing: "linear"
            }
          }, {
            duration: 50,
            selector: ".onemore",
            delay: 50
          });

          this.addIncident(_erase, 50 * array.length + 100 + 100 * (this.attrs.erase + 1) + 100 * (_i3 + 1) + this.attrs.delayIfEraseAll);
        }
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n     <div class=\"wrapper\">\n      <div class=\"onemore\">\n      \n      </div>\n    </div>";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      \n    }\n    .textContainer{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      padding-right: 2px;\n      width: ".concat(12 * this.attrs.size * this.attrs.title.length, "px;\n     \n    }\n    \n    .letter{\n      font-size: ").concat(14 * this.attrs.size, "px;\n      position: relative;\n      text-align: center;\n      width: ").concat(12 * this.attrs.size, "px;\n      display: flex;\n      justify-content: center;\n      flex: 1 0;\n      color: ").concat(this.attrs.textColor, "\n    }\n    .onemore{\n      white-space: nowrap;\n      overflow: hidden;\n      align-items: center;\n      padding-right: 2px;\n      width: 0px;\n\n    }\n\n  ");
    }
  }]);

  return TextWriting;
}(MotorCortex.API.Clip);

module.exports = TextWriting;