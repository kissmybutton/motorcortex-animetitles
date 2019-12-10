const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
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
        size = new Size(1.5, "-26px", "30px", 0.5, "-52px");

        break;
      case "M":
        size = new Size(2, "-36px", "3rem", 1, "-73px");

        break;
      case "L":
        size = new Size(2.5, "-45px", "3rem", 1.5, "-87px");

        break;
      case "XL":
        size = new Size(3, "-50px", "4rem", 2, "-100px");

        break;
      case "XXL":
        size = new Size(3.5, "-60px", "4rem", 2, "-120px");

        break;
      case "XXXL":
        size = new Size(5, "-86px", "5rem", 2, "-172px");

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
      font-size: ${size.fontSizeLeft}rem;
      white-space: nowrap;
      overflow: hidden;
      height: ${size.fontSizeLeft}rem;
      
    }
  
    .textClip span{
      color : ${this.attrs.textColor};
      position: relative;
      left : -${this.attrs.width / 2}px;
      width : 100%;
    }
  `;
  }

  buildTree() {

   
    const animeLineHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: size.lineHeight
        },
        attrs: {
          easing: "linear"
        }
      },
      {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      }
    );

    const animeTextLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0"
        },
        attrs: {
          easing: "linear"
        }
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
        attrs: {
          easing: "linear"
        }
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
        attrs: {
          easing: "linear"
        }
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
        attrs: {
          easing: "linear"
        }
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
        attrs: {
          easing: "linear"
        }
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
    
    let delayEnd = this.attrs.delayEnd || 0
    if (!this.attrs.stopOnLast) {
      this.addIncident(animeTextLeftBack, (this.attrs.duration * 0.75)+delayEnd);
      this.addIncident(animeLineHeightBack, (this.attrs.duration * 0.925)+delayEnd);
    }
  }
}

module.exports = RolingText;
