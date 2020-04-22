const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
class Size {
  constructor(svgWidth, svgHeight, lineSize) {
    this.svgWidth = svgWidth;
    this.svgHeight = svgHeight;
    this.lineSize = lineSize;
  }
}
let size;

class SvgDrow extends MotorCortex.API.Clip {
  get html() {
    switch (this.attrs.size) {
      case "S":
        size = new Size(200, 100, "");

        break;
      case "M":
        size = new Size(300, 200, "5rem");

        break;
      case "L":
        size = new Size(500, 400, "7rem");
        break;
      default:
    }
    return `<div class="svg-wrapper">${this.attrs.svg} </div>`;
  }

  get css() {
    return `

    .svg-wrapper{
      position: relative;
      width: ${size.svgWidth * 1.5}px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg{
      width: ${size.svgWidth}px;
      height: ${size.svgHeight}px;
    }

    .svgContainer{
      height:100vh;
    }
    svg path
    {
      stroke-dasharray: ${this.attrs.StrokeDashArray};
      stroke-dashoffset: ${this.attrs.strokeDashOffset};
      
    }
    
  `;
  }

  buildTree() {
    const textDrow = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.75,
        selector: `svg path`,
        easing: "easeInSine"
      }
    );

    const textBigBack = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scaleX: 1.3,
            scaleY: 1.3
          }
        }
      },
      {
        duration: this.attrs.duration * 0.425,
        selector: `svg`,
        id: "transform2",
        easing: "easeOutElastic"
      }
    );

    const textErase = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: this.attrs.strokeDashOffset
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.75,
        selector: `svg path`,
        easing: "easeInSine"
      }
    );

    this.addIncident(textDrow, 0);
    this.addIncident(textBigBack, this.attrs.duration * 0.75);
    const delayEnd = this.attrs.delayEnd || 0;
    if (!this.attrs.stopOnLast) {
      this.addIncident(textErase, this.attrs.duration * 0.95 + delayEnd);
    }
  }
}

module.exports = SvgDrow;
