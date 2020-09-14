const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
class Size {
  constructor(fontSizeLeft, topMove, lineHeight, gap, topMove2) {
    this.fontSizeLeft = fontSizeLeft;
    this.topMove = topMove;
    this.lineHeight = lineHeight;
    this.gap = gap;
    this.topMove2 = topMove2;
  }
}

let size;

class RolingText extends MotorCortex.API.Clip {
  get html() {
    return `
      <div class="wrapper">
        <div class="line"></div>
        <div class="textClip"> 
          <span> ${this.attrs.subTitle1}</span> <span> ${this.attrs.subTitle2} </span><span> ${this.attrs.subTitle3}</span>
        </div>
      </div>
        `;
  }

  get css() {
    switch (this.attrs.size) {
      case "S":
        size = new Size(21, "-21px", "21px", 0.5, "-42px");

        break;
      case "M":
        size = new Size(28, "-28px", "28px", 1, "-56px");

        break;
      case "L":
        size = new Size(35, "-35px", "35px", 1.5, "-70px");
        break;
      case "XL":
        size = new Size(42, "-42px", "42px", 2, "-84px");

        break;
      case "XXL":
        size = new Size(49, "-49px", "49px", 2, "-98px");

        break;
      case "XXXL":
        size = new Size(70, "-70px", "70px", 2, "-140px", 86);

        break;

      default:
    }
    return `
    body{
     font-size: 62.5%;
    }
    .wrapper{
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      height: ${size.lineHeight};
      width : ${this.attrs.width}px;
      justify-content: center;
      align-items: center;
    }
  
    .line{
      position: relative; 
      height: 0;
      width: 3px;
      justify-content: center;
      background: ${this.attrs.lineColor} ;
      margin-right: ${size.gap}rem;
    
    }
    
    .textClip{
      position: relative; 
      
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: ${size.fontSizeLeft}px;
      white-space: nowrap;
      overflow: hidden;
      height: ${size.fontSizeLeft}px;
      
    }
  
    .textClip span{
      color : ${this.attrs.textColor};
      position: relative;
      left : -${this.attrs.width / 2}px;
      width : 100%;
      height: ${size.fontSizeLeft}px;
    }
  `;
  }

  buildTree() {
    const animeLineHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: size.lineHeight
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      }
    );

    const animeTextLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0px"
        },
        attrs: {}
      },
      {
        duration: 800,
        selector: ".textClip span"
      }
    );

    const animeTextTop = new Anime.Anime(
      {
        animatedAttrs: {
          top: size.topMove
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      }
    );

    const animeTextTopNext = new Anime.Anime(
      {
        animatedAttrs: {
          top: size.topMove2
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      }
    );

    const animeTextLeftBack = new Anime.Anime(
      {
        animatedAttrs: {
          left: `-${this.attrs.width / 2}px`
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      }
    );

    const animeLineHeightBack = new Anime.Anime(
      {
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      }
    );

    this.addIncident(animeLineHeight, 0);
    this.addIncident(animeTextLeft, this.attrs.duration * 0.075);
    this.addIncident(animeTextTop, this.attrs.duration * 0.375);
    this.addIncident(animeTextTopNext, this.attrs.duration * 0.575);

    const delayEnd = this.attrs.delayEnd || 0;
    if (!this.attrs.stopOnLast) {
      this.addIncident(
        animeTextLeftBack,
        this.attrs.duration * 0.75 + delayEnd
      );
      this.addIncident(
        animeLineHeightBack,
        this.attrs.duration * 0.925 + delayEnd
      );
    }
  }
}

module.exports = RolingText;
