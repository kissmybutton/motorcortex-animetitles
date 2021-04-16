import { HTMLClip, loadPlugin, Group } from "@kissmybutton/motorcortex";
import AnimeDefinition from "@kissmybutton/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class RotatadLineReveal extends HTMLClip {
  get html() {
    switch (this.attrs.size) {
      case "S":
        this.size = this.generateSize("1.5rem", "1rem", "3.5rem", "55px");

        break;
      case "M":
        this.size = this.generateSize("2.5rem", "2rem", "5rem", "90px");

        break;
      case "L":
        this.size = this.generateSize("3.5rem", "2rem", "7rem", "100px");
        break;
      default:
    }
    return `
      <div class="wrapper">
        <div class="redLine">
          <div class="text text1"><div class="title ">${this.attrs.title}</div></div>
          <div class="text text2"><div class="sub">${this.attrs.subtitle}</div></div>
        </div>
      </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width:${this.attrs.width}px;
        height:100%;
        font-family: ${this.attrs.fontFamily} !important;
      }

      .redLine {
        border-left: 2px solid ${this.attrs.lineColor};
        width: 0rem;
        height: ${this.size.lineHeight};
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
        font-size: ${this.size.fontSize};
        font-weight: 600;
      }

      .sub{
        font-size: ${this.size.fontSizeSub};
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

  generateSize(fontSize, fontSizeSub, lineSize, lineHeight) {
    return {
      fontSize,
      fontSizeSub,
      lineSize,
      lineHeight
    };
  }

  buildTree() {
    const grupMc = new Group();

    const lineRotateEnd = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.24,
        selector: `.redLine`,
        easing: "easeOutExpo"
      }
    );

    const lineMoveEnd = new Anime.Anime(
      {
        animatedAttrs: {
          left: `${this.attrs.leftEnd}px`
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.4,
        selector: `.redLine`,
        easing: "easeOutExpo"
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
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.text`,
        easing: "easeOutExpo"
      }
    );

    const moveSub = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.08,
        selector: `.sub`,
        easing: "easeOutExpo"
      }
    );

    for (let i = 1; i <= 2; i++) {
      const moveTextOut = new Anime.Anime(
        {
          animatedAttrs: {
            left: `-${this.attrs.width}px`
          },
          attrs: {}
        },
        {
          duration: Math.round(this.attrs.duration * 0.34),
          selector: ".text" + i,
          easing: "easeOutExpo"
        }
      );

      grupMc.addIncident(moveTextOut, this.attrs.duration * 0.625 + i * 100);
    }

    const lineHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.08,
        selector: `.redLine`,
        easing: "easeInSine"
      }
    );

    this.addIncident(lineRotateEnd, 0);
    this.addIncident(lineMoveEnd, 0);
    this.addIncident(lineWidthEnd, this.attrs.duration * 0.24);
    this.addIncident(moveText, this.attrs.duration * 0.24);
    this.addIncident(moveSub, this.attrs.duration * 0.4);

    const delayEnd = this.attrs.delayEnd || 0;
    if (!this.attrs.stopOnLast) {
      this.addIncident(grupMc, delayEnd);
      this.addIncident(lineHeight, this.attrs.duration * 0.85 + delayEnd);
    }
  }
}
