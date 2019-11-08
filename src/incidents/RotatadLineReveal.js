const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
class Size {
  constructor(fontSize, fontSizeSub, lineSize) {
    this.fontSize = fontSize;
    this.fontSizeSub = fontSizeSub;
    this.lineSize = lineSize;
  }
}
let size;

class RotatadLineReveal extends MotorCortex.API.Clip {
  get html() {
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
    return `
    <div class="wrapper">
      <div class="redLine">
        <div class="text text1"><div class="title ">Kissmybutton</div></div>
        <div class="text text2"><div class="sub">web app development</div></div>
      </div>
    </div>
        `;
  }

  get css() {
    return `

    .wrapper{
      width:${this.attrs.width}px;
      height:100%;
    }
     .redLine {
      border-left: 2px solid ${this.attrs.lineColor};
      width: 0rem;
      height: ${size.lineHeight};
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      transform: rotate(30deg);
      position: relative;
      left: 150%;
      transform-origin: top left;
      white-space: nowrap;
      overflow: hidden;
      color : ${this.attrs.textColor}
    }
    .title{
      font-size: ${size.fontSize};
      font-weight: 600;
    }
    .sub{
      font-size: ${size.fontSizeSub};
      top: -60px;
      position: relative;
    }

    .text {
      position: relative;
      left: -50px;
      white-space: nowrap;
      overflow: hidden;
    }
  `;
  }

  buildTree() {
    const lineRotateEnd = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            rotate: 0
          }
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.24,
        selector: `.redLine`
      }
    );

    const lineMoveEnd = new Anime.Anime(
      {
        animatedAttrs: {
          left: `${this.attrs.leftEnd}px`
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.4,
        selector: `.redLine`
      }
    );

    const lineWidthEnd = new Anime.Anime(
      {
        animatedAttrs: {
          width: "400px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.redLine`
      }
    );

    const moveText = new Anime.Anime(
      {
        animatedAttrs: {
          left: "10px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.text`
      }
    );
    const moveSub = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.08,
        selector: `.sub`
      }
    );

    for (let i = 1; i <= 2; i++) {
      const moveTextOut = new Anime.Anime(
        {
          animatedAttrs: {
            left: `-${this.attrs.width}px`
          },
          attrs: {
            easing: "easeOutExpo"
          }
        },
        {
          duration: this.attrs.duration * 0.34,
          selector: ".text" + i
        }
      );

      this.addIncident(moveTextOut, this.attrs.duration * 0.625 + i * 100);
    }

    const lineHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: "0px"
        },
        attrs: {
          easing: "easeInSine"
        }
      },
      {
        duration: this.attrs.duration * 0.08,
        selector: `.redLine`
      }
    );

    this.addIncident(lineRotateEnd, 0);
    this.addIncident(lineMoveEnd, 0);
    this.addIncident(lineWidthEnd, this.attrs.duration * 0.24);
    this.addIncident(moveText, this.attrs.duration * 0.24);
    this.addIncident(moveSub, this.attrs.duration * 0.4);
    this.addIncident(lineHeight, this.attrs.duration * 0.85);
  }
}

module.exports = RotatadLineReveal;
