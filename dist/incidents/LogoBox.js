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

var LogoBox =
/*#__PURE__*/
function (_MotorCortex$API$Clip) {
  _inherits(LogoBox, _MotorCortex$API$Clip);

  function LogoBox() {
    _classCallCheck(this, LogoBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogoBox).apply(this, arguments));
  }

  _createClass(LogoBox, [{
    key: "buildTree",
    value: function buildTree() {
      var opacity = new Anime.Anime({
        animatedAttrs: {
          opacity: 1
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".redLineContainer"
      });
      var border = new Anime.Anime({
        animatedAttrs: {
          right: "0"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLine"
      });
      var conteiner = new Anime.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.75 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLineContainer"
      });

      for (var i = 1; i <= 3; i++) {
        var textLeft = new Anime.Anime({
          animatedAttrs: {
            left: "0px"
          },
          attrs: {}
        }, {
          duration: 500 * i,
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(textLeft, 500);
      }

      var conteinerMore = new Anime.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".redLineContainer"
      });
      var yellowW = new Anime.Anime({
        animatedAttrs: {
          width: "".concat(80 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".yellow"
      });
      var end = new Anime.Anime({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".wrapper"
      });
      this.addIncident(opacity, 0);
      this.addIncident(border, 0);
      this.addIncident(conteiner, 0);
      this.addIncident(conteinerMore, 1500);
      this.addIncident(yellowW, 1500);

      if (!this.attrs.stopOnLast) {
        this.addIncident(end, 3000);
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n    <div class=\"onemore\">\n    <div class=\"redLineContainer\">\n      <div class=\"yellow\">\n        <div class=\"logo\"><img src=\"./logo.png\" alt=\"Italian Trulli\"></div>\n      </div>\n      <div class=\"redLine\">\n        <div class=\"text text1\">".concat(this.attrs.subTitle1, "</div>\n        <div class=\"text text2\">").concat(this.attrs.subTitle2, "</div>\n        <div class=\"text text3\">").concat(this.attrs.subTitle3, "</div>\n      </div>\n     \n    </div>\n    </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n     \n    }\n    .redLineContainer {\n      white-space: nowrap;\n      width: 0px;\n      overflow: hidden;\n      background: ".concat(this.attrs.textColor, ";\n      display: flex;\n      \n      justify-content: center;\n      align-content: center;\n      opacity: 0;\n      border: ").concat(1 * this.attrs.size, "px solid ").concat(this.attrs.textColor, ";\n    }\n    \n    .redLine {\n      position: relative;\n      right:  100px;\n      overflow: hidden;\n      background: ").concat(this.attrs.bgColor, ";\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      height: ").concat(70 * this.attrs.size, "px;\n    }\n    \n    .yellow{\n      width: 0px;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .logo img{\n      width: ").concat(50 * this.attrs.size, "px;\n    }\n    .logo{\n      display: flex;\n      align-items: center;\n    }\n    \n    .text{ \n      left: ").concat(-100 * this.attrs.size, "px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      height: ").concat(22 * this.attrs.size, "px;\n      padding-left: 8%;\n      color: ").concat(this.attrs.textColor, ";\n      font-size :").concat(14 * this.attrs.size, "px;\n    }\n\n  ");
    }
  }]);

  return LogoBox;
}(MotorCortex.API.Clip);

module.exports = LogoBox;