const MotorCortex = require("@kissmybutton/motorcortex/");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime/dist/main");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class TextWriting extends MotorCortex.API.Clip {
  get html() {
    return `
     <div class="wrapper">
      <div class="onemore">
      
      </div>
    </div>`;
  }

  get css() {
    return `
    .wrapper{
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
    .textContainer{
      white-space: nowrap;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding-right: 2px;
      width: ${12 * this.attrs.size * this.attrs.title.length}px;
     
    }
    
    .letter{
      font-size: ${14 * this.attrs.size}px;
      position: relative;
      text-align: center;
      width: ${12 * this.attrs.size}px;
      display: flex;
      justify-content: center;
      flex: 1 0;
      color: ${this.attrs.textColor}
    }
    .onemore{
      white-space: nowrap;
      overflow: hidden;
      align-items: center;
      padding-right: 2px;
      width: 0px;

    }

  `;
  }

  buildTree() {
    const array = this.attrs.title.split("");

    for (let i = 0; i < array.length; i++) {
      const html = `<span class='letter letter${i + 1}'>${array[i]}</span>`;
      var html3 = html3 + html;
    }

    const word = new MotorCortex.Clip({
      css: this.css,
      html: ` <div class="textContainer" >${
        html3.split("undefined")[1]
      } </div>`,
      selector: ".onemore"
    });

    const blink = new Anime.Anime(
      {
        animatedAttrs: {
          borderRight: `2px solid rgba(${this.attrs.cursorColor[0]},${
            this.attrs.cursorColor[1]
          },${this.attrs.cursorColor[2]},0)`
        },
        initialValues: {
          borderRight: `2px solid rgba(${this.attrs.cursorColor[0]},${
            this.attrs.cursorColor[1]
          },${this.attrs.cursorColor[2]},1)`
        },
        attrs: {
          easing: "linear"
        }
      },
      {
        duration: this.attrs.blinkingDuration,
        selector: ".onemore",
        repeats: 10,
        delay: this.attrs.blinkDelay
      }
    );
    if (this.attrs.blinking) {
      this.addIncident(blink, 0);
    }

    this.addIncident(word, 0);

    let totalWidth = 0;

    for (let i = 0; i <= array.length; i++) {
      totalWidth = totalWidth + 12 * this.attrs.size;
      const write = new Anime.Anime(
        {
          animatedAttrs: {
            width: `${totalWidth}px`
          },

          attrs: {
            easing: "linear"
          }
        },
        {
          duration: 50,
          selector: ".onemore",
          delay: 50
        }
      );
      this.addIncident(write, 50 * i);
    }

    for (let i = 0; i <= this.attrs.erase; i++) {
      totalWidth = totalWidth - 12 * this.attrs.size;
      const erase = new Anime.Anime(
        {
          animatedAttrs: {
            width: `${totalWidth}px`
          },

          attrs: {
            easing: "linear"
          }
        },
        {
          duration: 50,
          selector: ".onemore",
          delay: 50
        }
      );

      this.addIncident(erase, 50 * array.length + 100 + 100 * (i + 1));
    }

    if (this.attrs.eraseAll) {
      for (let i = 0; i <= array.length; i++) {
        totalWidth = totalWidth - 12 * this.attrs.size;
        const erase = new Anime.Anime(
          {
            animatedAttrs: {
              width: `${totalWidth}px`
            },

            attrs: {
              easing: "linear"
            }
          },
          {
            duration: 50,
            selector: ".onemore",
            delay: 50
          }
        );

        this.addIncident(
          erase,
          50 * array.length +
            100 +
            100 * (this.attrs.erase + 1) +
            100 * (i + 1) +
            this.attrs.delayIfEraseAll
        );
      }
    }
  }
}

module.exports = TextWriting;
