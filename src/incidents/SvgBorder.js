const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
class Size {
  constructor(
    borderWidth,
    borderHeight,
    fontSizeTitle,
    fontSizeSub,
    subGap,
    titleTop,
    subTop,
    titleContainerTop
  ) {
    this.borderWidth = borderWidth;
    this.borderHeight = borderHeight;
    this.fontSizeTitle = fontSizeTitle;
    this.fontSizeSub = fontSizeSub;
    this.subGap = subGap;
    this.titleTop = titleTop;
    this.subTop = subTop;
    this.titleContainerTop = titleContainerTop;
  }
}
let size;

class SvgBorder extends MotorCortex.API.Clip {
  get html() {
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
    return `
    <div class="svg-wrapper">
    <svg height="${size.borderHeight}" width="${size.borderWidth}" xmlns="http://www.w3.org/2000/svg">
      <rect class="shape2" height="${size.borderHeight}" width="${size.borderWidth}" />
      </svg>
      <div class="sub--container"><div class="sub">${this.attrs.subTitle}</div></div>
      <div class="titleContainer"><div class="text">${this.attrs.title}</div></div>
    <div class="sloganContainer">
      <div class="slogan">${this.attrs.slogan}</div>
    </div>
    </div>
        `;
  }

  get css() {
    return `
    body{
     font-size: 62.5%;
    }
    .svg-wrapper {
      position: relative;
      top :10px;
     
      height: 100%;
      color:  ${this.attrs.textColor};
    }
    
    .shape2 {
      stroke-dasharray: 6000;
      stroke-width: 5px;
      fill: transparent;
      stroke: ${this.attrs.lineColor};
      border-bottom: 5px solid black;
      stroke-dashoffset: -6000;
    }
    
    
    .text {
      font-size: ${size.fontSizeTitle};
      
      letter-spacing: 8px;
      position: relative;
      top: ${size.titleTop}px;

    }
    
    .sub--container {
      position: absolute;
      white-space: nowrap;
      overflow: hidden;
      left: 20px;
      top: -7%;
    }
    .sloganContainer {
      position: relative;
      top: -30px;
      left: 45%;
      white-space: nowrap;
      overflow: hidden;
      width: 150px;
    }
    .titleContainer{
      position: relative;
      top: -${size.titleContainerTop}px;
      white-space: nowrap;
      overflow: hidden;
      width: ${size.borderWidth}px;
      height: 50px;
      display: flex;
      justify-content: center;
    }
    
    
    .sub{
      position: relative;
      top: ${size.subTop}px;
      font-size : ${size.fontSizeSub};
    }
    
    .slogan{
      position: relative;
      top: -${size.subTop}px;
      font-size : ${size.fontSizeSub};
    }
    
      
  `;
  }

  buildTree() {

    let delayEnd = this.attrs.delayEnd || 0
    const borderAnimete = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: ` -${size.subGap}`
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.28,
        selector: `.shape2`
      }
    );

    const titleAnimete = new Anime.Anime(
      {
        animatedAttrs: {
          top: 0
        },
        attrs: {
          easing: "linear"
        }
      },
      {
        duration: this.attrs.duration * 0.12,
        selector: `.text`
      }
    );
    const subAnimate = new Anime.Anime(
      {
        animatedAttrs: {
          top: 0
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.12,
        selector: `.sub`
      }
    );

    const sloganAnimate = new Anime.Anime(
      {
        animatedAttrs: {
          top: 0
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.12,
        selector: `.slogan`
      }
    );

    const borderAnimeteLeft = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: "-6000"
        },
        attrs: {
          easing: "linear"
        }
      },
      {
        duration: this.attrs.duration * 0.24,
        selector: `.shape2`
      }
    );

    const titleAnimeteLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "100%"
        },
        attrs: {
          easing: "linear"
        }
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.text`
      }
    );
    const subAnimateLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "100%"
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.sub`
      }
    );

    const sloganAnimateLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "150px"
        },
        attrs: {
          easing: "easeInOutQuart"
        }
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.slogan`
      }
    );

    //
    this.addIncident(borderAnimete, 0);
    this.addIncident(titleAnimete, this.attrs.duration * 0.12);
    this.addIncident(subAnimate, this.attrs.duration * 0.24);
    this.addIncident(sloganAnimate, this.attrs.duration * 0.24);
    const grupMc = new MotorCortex.Group();
    grupMc.addIncident(borderAnimeteLeft, this.attrs.duration * 0.16);
    grupMc.addIncident(titleAnimeteLeft, this.attrs.duration * 0.08);
    grupMc.addIncident(subAnimateLeft, this.attrs.duration * 0.08);
    grupMc.addIncident(sloganAnimateLeft, this.attrs.duration * 0.08);

    if (!this.attrs.stopOnLast) {
      this.addIncident(grupMc, (this.attrs.duration * 0.6) + delayEnd);
    }
  }
}

module.exports = SvgBorder;
