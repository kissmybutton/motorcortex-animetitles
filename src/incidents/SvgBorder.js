import { HTMLClip, loadPlugin, Group } from "@kissmybutton/motorcortex";
import AnimeDefinition from "@kissmybutton/motorcortex-anime";
const Anime = loadPlugin(AnimeDefinition);

export default class SvgBorder extends HTMLClip {
  get html() {
    switch (this.attrs.size) {
      case "S":
        this.size = this.generateSize(600, 70, "2rem", "1rem", 130, 50, 17, 50);
        break;
      case "M":
        this.size = this.generateSize(700, 90, "3rem", "2rem", 230, 50, 34, 70);
        break;
      case "L":
        this.size = this.generateSize(
          1000,
          110,
          "3.5rem",
          "2.5rem",
          250,
          55,
          45,
          80
        );
        break;
    }

    return `
      <div class="svg-wrapper">
        <svg height="${this.size.borderHeight}" width="${this.size.borderWidth}" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape2" height="${this.size.borderHeight}" width="${this.size.borderWidth}" />
        </svg>
        <div class="sub--container">
          <div class="sub">${this.attrs.subTitle}</div>
        </div>
        <div class="titleContainer">
          <div class="text">${this.attrs.title}</div>
        </div>
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
        font-family: ${this.attrs.fontFamily} !important;
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
        font-size: ${this.size.fontSizeTitle};
        letter-spacing: 8px;
        position: relative;
        top: ${this.size.titleTop}px;
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
        top: -${this.size.titleContainerTop}px;
        white-space: nowrap;
        overflow: hidden;
        width: ${this.size.borderWidth}px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .sub{
        position: relative;
        top: ${this.size.subTop}px;
        font-size : ${this.size.fontSizeSub};
      }
      
      .slogan{
        position: relative;
        top: -${this.size.subTop}px;
        font-size : ${this.size.fontSizeSub};
      }
    `;
  }

  generateSize(
    borderWidth,
    borderHeight,
    fontSizeTitle,
    fontSizeSub,
    subGap,
    titleTop,
    subTop,
    titleContainerTop
  ) {
    return {
      borderWidth,
      borderHeight,
      fontSizeTitle,
      fontSizeSub,
      subGap,
      titleTop,
      subTop,
      titleContainerTop
    };
  }

  buildTree() {
    const delayEnd = this.attrs.delayEnd || 0;
    const borderAnimete = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: ` -${this.size.subGap}px`
        },
        attrs: {}
      },
      {
        duration: Math.round(this.attrs.duration * 0.28),
        selector: `.shape2`,
        easing: "easeInOutQuart"
      }
    );

    const titleAnimete = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.12,
        selector: `.text`
      }
    );

    const subAnimate = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.12,
        selector: `.sub`,
        easing: "easeInOutQuart"
      }
    );

    const sloganAnimate = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.12,
        selector: `.slogan`,
        easing: "easeInOutQuart"
      }
    );

    const borderAnimeteLeft = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: "-6000px"
        },
        attrs: {}
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
        attrs: {}
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
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.sub`,
        easing: "easeInOutQuart"
      }
    );

    const sloganAnimateLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "150px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.16,
        selector: `.slogan`,
        easing: "easeInOutQuart"
      }
    );

    this.addIncident(borderAnimete, 0);
    this.addIncident(titleAnimete, this.attrs.duration * 0.12);
    this.addIncident(subAnimate, this.attrs.duration * 0.24);
    this.addIncident(sloganAnimate, this.attrs.duration * 0.24);
    const grupMc = new Group();
    grupMc.addIncident(borderAnimeteLeft, this.attrs.duration * 0.16);
    grupMc.addIncident(titleAnimeteLeft, this.attrs.duration * 0.08);
    grupMc.addIncident(subAnimateLeft, this.attrs.duration * 0.08);
    grupMc.addIncident(sloganAnimateLeft, this.attrs.duration * 0.08);

    if (!this.attrs.stopOnLast) {
      this.addIncident(grupMc, this.attrs.duration * 0.6 + delayEnd);
    }
  }
}
