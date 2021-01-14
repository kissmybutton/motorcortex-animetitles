const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class LetterScale extends MotorCortex.HTMLClip {
  get html() {
    this.list;
    this.list = this.attrs.text.split("");
    const divList = this.list
      .map((e, i) => {
        return `<div class="letter letter-item-${i}">${e}</div>`;
      })
      .join("");
    return `
    <div class="wrapper">
    <div class="letter-wrapper">
      ${divList}
    </div>
    </div>
        `;
  }

  get css() {
    const stroke =
      this.attrs.stroke === true
        ? `-webkit-text-stroke:${this.attrs.strokeSize}px ${this.attrs.strokeColor};`
        : ``;
    return `
    .wrapper{
      width:${this.attrs.width}px;
      height: ${this.attrs.height}px;
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .letter{
      font-size:${this.attrs.fontSize}px;
      color:${this.attrs.color};
      text-transform:uppercase;
      font-family: ${this.attrs.fontFamily};
      position: relative;
      ${stroke}
    }
    .letter-wrapper{
      width:${this.attrs.width}px;
      height: ${this.attrs.height}px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  `;
  }

  buildTree() {
    const left = new Anime.Anime(
      {
        animatedAttrs: {
          fontSize: `${this.attrs.fontSize}px`
        },
        initialValues: {
          fontSize: `${this.attrs.fontSize * 0.7}px`
        }
      },
      {
        duration: this.attrs.timing,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: `@stagger(0, ${this.attrs.timing},0.5,linear,omni)`
      }
    );
    this.addIncident(left, 0);
  }
}

module.exports = LetterScale;
