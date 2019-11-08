const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
class Size {
  constructor(fontSizeLeft, fontSizeRigth, lineWidth, lineHeight, gap) {
    this.fontSizeLeft = fontSizeLeft;
    this.fontSizeRigth = fontSizeRigth;
    this.lineWidth = lineWidth;
    this.lineHeight = lineHeight;
    this.gap = gap;
  }
}
let size;

class RotatedLine extends MotorCortex.API.Clip {
  get html() {
    return `
          <div class="wrapper">
            <div class="text--container text--container-left">
              <div class="text-left">${this.attrs.title}</div>
            </div>
            <div class="line"></div>
            <div class="text--container text--container-right">
              <div class="text-right text-right1">${this.attrs.subTitle1}</div>
              <div class="text-right text-right2">${this.attrs.subTitle2}</div>
              <div class="text-right text-right3">${this.attrs.subTitle3}</div>
            </div>
          </div>
        `;
  }

  get css() {
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
    return `

    body{
     font-size: 62.5%;
    }
     .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(90deg);
        white-space: nowrap;
        overflow: hidden;
        width : 100%;
        width : ${this.attrs.width + size.lineWidth}px;
        color : ${this.attrs.textColor}
        
      }
      .line {
        width: 3px;
        background: ${this.attrs.lineColor} ;
        height: 0rem;
      }
      
      .text-left {
        position: relative;
        right : -100%;
        font-size: ${size.fontSizeLeft};
        text-align: right;
      }
      
      .text-right {
        position: relative;
        right: 100%;
        font-size: ${size.fontSizeRigth};

      }
      
      .text--container {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        width :${this.attrs.width / 2}px;
        
      } 
      `;
  }

  buildTree() {
    const rotateAminmeEnd = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            rotate: 0
          }
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: `.wrapper`
      }
    );

    const widthLIne = new Anime.Anime(
      {
        animatedAttrs: {
          height: size.lineHeight
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: `.line`
      }
    );

    const leftTextAnimate = new Anime.Anime(
      {
        animatedAttrs: {
          right: `${size.gap}%`
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: `.text-left`
      }
    );

    for (let i = 1; i <= 3; i++) {
      const rightTextAnimate = new Anime.Anime(
        {
          animatedAttrs: {
            right: `-${size.gap}%`
          },
          attrs: {
            easing: "easeOutExpo"
          }
        },
        {
          duration: this.attrs.duration * 0.15 * i,
          selector: ".text-right" + i
        }
      );

      this.addIncident(rightTextAnimate, this.attrs.duration * 0.25);
    }

    const rightTextAnimateIn = new Anime.Anime(
      {
        animatedAttrs: {
          right: "100%"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".text-right"
      }
    );

    const leftTextAnimateIn = new Anime.Anime(
      {
        animatedAttrs: {
          right: "-100%"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: `.text-left`
      }
    );

    const rotateAminmeStartOut = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            rotate: 90
          }
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: `.wrapper`
      }
    );

    const widthLIneOut = new Anime.Anime(
      {
        animatedAttrs: {
          height: "0rem"
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: `.line`
      }
    );

    this.addIncident(widthLIne, 0);
    this.addIncident(rotateAminmeEnd, this.attrs.duration * 0.075);
    this.addIncident(leftTextAnimate, this.attrs.duration * 0.15);
    this.addIncident(rightTextAnimateIn, this.attrs.duration * 0.7);
    this.addIncident(leftTextAnimateIn, this.attrs.duration * 0.7);
    this.addIncident(rotateAminmeStartOut, this.attrs.duration * 0.85);
    this.addIncident(widthLIneOut, this.attrs.duration * 0.925);
  }
}

module.exports = RotatedLine;
