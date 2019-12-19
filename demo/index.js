const MotorCortex = require("@kissmybutton/motorcortex/");
const Player = require("@kissmybutton/motorcortex-player/");
const TitlesPlugin = require("../src/main");
const Titles = MotorCortex.loadPlugin(TitlesPlugin);

const css = `
body { 
  background-color : white; 
}              
  .container { 
    position: relative; 
    background:linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%);
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
   }
   .row{
    display: flex;
    justify-content: space-around;
    align-items: center;
    
   
   }
   .cel{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
   }
  `;
const html = `<div class="container">

  <div class="row" >
    <div class="cel"> <div class="rolingtext"></div>  </div>
    <div class="cel"><div class="svgborder"></div> </div>
    <div class="cel"> <div class="rotatedline"></div> </div>
    <div class="cel"> <div class="rotatedlinereveal"></div> </div>
    <div class="cel"><div class="svgdrow"></div> </div>
    <div class="cel"><div class="circle"></div> </div>
    <div class="cel"><div class="logobox"></div> </div>
    <div class="cel"><div class="textwriting"></div> </div>
  </div>

</div>`;

const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%"
};

const clip = new MotorCortex.Clip({
  css,
  html,
  audioSources: [
    {
      src: "./d2.mp3",
      id: "my-wav",
      base64: false,
    }
  ],
  host,
  containerParams,
  id: "root"
});

const songPlayback = new MotorCortex.AudioPlayback(
  {},
  {
    selector: "~#my-wav",
    startFrom: 1,
    duration: 35845
  }
);

clip.addIncident(songPlayback, 1);

const svgdrow = new Titles.SvgDrow(
  {
    duration: 3600,
    width: 900,
    size: "L",
    lineColor: "#ff0000",
    strokeDashOffset: 10000,
    StrokeDashArray: 10000,
    svg: `<svg class="logo" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1388.7 406.3"><defs><style>.cls-1{fill:none;stroke:#ff0000;stroke-miterlimit:10;stroke-width:7px;}</style></defs><title>modas</title><path class="cls-1" d="M1454.1,116.1l-2.7-11V103c0-3.3.8-8.2,2.2-14.8q0-5.2-.6-12.6c1.4-7.1,3.4-18.9,5.9-35.3l-1.1-4.2c-.9,0-1.8,1.4-2.6,4.2s-2.7,12.9-7.9,32.6q-2.1,18-4.2,18V86.1a20.3,20.3,0,0,0-1.1-4.7h-.5c-.5,0-1.2,1.1-2.1,3.1-2.3,14.5-4,24.1-5.3,29-5.3,9.5-7.9,16.3-7.9,20.6,0,1.9-2.6,12.9-7.9,33.1l1.1,9.9v3.3c-3.3,20.9-7,33.5-11.1,37.9-2.8,2.7-6.7,16-11.5,39.9h-.6a217.7,217.7,0,0,0-7.9-26.8c0-13.4-4.8-31.2-14.3-53.2q-7.2-11.5-7.2-13.2l2-8.3v-.6a32.8,32.8,0,0,0-.5-4.7c0-.4.2-.6.5-.6,0-6.1,2.3-15.1,6.9-26.8v-.5l-.6-2.6h-1.5q-3.6,9.3-9,12.6a33.8,33.8,0,0,0-1.1-4.7H1362c-.9,0-1.4.7-1.6,2h-1.1l-.4-5.2v-2.1a19.5,19.5,0,0,1,1.5-4.7c0-2.8-1.2-4.2-3.7-4.2s-3.3,1-4.2,3.1v1.1l1.6,2.6a61.9,61.9,0,0,0-1.1,9c-2.8-.4-4.2-1.7-4.2-3.8l-2.6.5v2.7l.6,3.7-18,17.9c-2.4,0-3.7,4.4-3.7,13.2-3.5,9.6-5.2,14.9-5.2,15.8v1.5a36.6,36.6,0,0,0,.6,5.8l-.2.6c-1.2-11.6-4.8-19.6-10.7-23.8,2.1-2.6,3.2-4.2,3.2-4.8q0-3.4-4.8-4.2h-3.1c-.9,0-1.4.7-1.6,2-2.1,0-5.1-1.7-8.9-5.3,0-1.5.9-2.5,2.6-3.1a7.8,7.8,0,0,0,4.2,1.1h1.1l2.6-.6v-.9c0-3.2-2.5-8.3-7.4-15.4,2.1-3.7,3.2-6,3.2-6.8a4.9,4.9,0,0,0-4.3-2.6,20.3,20.3,0,0,0-4.7,1.1h-.6a75.3,75.3,0,0,0-7.4-6.1c5.1-.7,8.6-1.9,10.4-3.9h1.5c0,1-.7,1.5-1.9,1.5v.9c2.2-.6,3.3-1.2,3.3-1.9,1.5,0,4.4-.8,8.6-2.4h3.4l22.9,1h3.9a32.9,32.9,0,0,0,7.1-1c-.1-.9-1.4-1.4-3.8-1.4h-3.3l-3.4.5c-2.3-2.3-10.9-3.4-25.8-3.4,0-1.3-.3-1.9-1-1.9a29.4,29.4,0,0,1,2.9-3.3v-.5c-.6,0-2-.7-4.3-1.9s-7.2.1-12,.4a7.2,7.2,0,0,1-2.8-.9l.9-1.4c-2.2-2-4.1-2.9-5.7-2.9a63.2,63.2,0,0,0-7.7.5,56.9,56.9,0,0,0-11-1.5h-1.4c-7.8,3.5-14.2,5.7-19.2,6.7-1.4,0-5.2-1.1-11.5-3.3l-3.8.5c-.6,0-1.9-.7-3.8-2h-6.5a5.1,5.1,0,0,0-2.7-.8,63.2,63.2,0,0,0-7.7.5,68.8,68.8,0,0,0-8.3-1.3l.3-.7v-.4c-.5-1-1-1.5-1.4-1.5h-1l-.5,2.4h-1.5c-2.2,1-4.3,1.9-6.3,2.6-.4-.7-.8-1.1-1.3-1.1-1-5.2-2-9.2-2.8-12-.5,0-1,.6-1.5,1.9s.2,4.2.5,8.6c0,1.8-1.1,2.7-3.3,2.9-.7,0-1.5-.6-2.4-1.9l-.5,2.4.5.9c-1.8.8-3.4,1.4-4.9,1.9s-4.9-1.5-8.6-2.8l-3.9.5c-.6,0-1.9-.7-3.8-2s-6.7-.1-12-.4c-1,0-5.2.4-12.4,1.4l-6.7-.5-4.3.5c-.5-1-1-1.4-1.4-1.4-1.1-5.2-2-9.2-2.9-12-.5,0-1,.6-1.5,1.9s.2,4.2.5,8.6c0,1.8-1.1,2.7-3.3,2.9-.7,0-1.5-.6-2.4-1.9l-.5,2.4.5.9c-4.3,1.9-7.8,2.9-10.5,2.9h-1.5c-6-1.3-9.6-1.9-11-1.9h-.5c-3,0-6.8,1.4-11.5,4.3-11.2.3-18.4,1-21.5,1.9h-.5a71.5,71.5,0,0,1-10-1.4,24.6,24.6,0,0,0-4.8,1.4c-16.6,6.1-31.9,9.1-45.9,9.1q0,2.1,18.6,4.8l-1.4,1.9c-4.8.8-7.2,1.4-7.2,1.9v.5l4.3.5a7,7,0,0,0,3.8-1c0,.3.4.5,1,.5v4.3c0,4.2,3.8,6.8,11.5,7.7s13.1,4,17.6,5.1q-2.9,5.1-4.8,5.1a5.4,5.4,0,0,0-3.5,5.5c-2.8,2.9-4.3,5.7-4.3,8.4-1.1,5-4.1,8.8-9.1,11.6-1.6,5-4.2,11.8-8,20.6a12.6,12.6,0,0,1,1.4,4.4v2.1a52.9,52.9,0,0,1-2.8,16c-3.6,3.5-5.8,6-6.7,7.5-1.9,9.7-4,16-6.2,18.9-.8,8.2-1.8,13.5-2.9,16.1-.7,10-1.9,15-3.4,15s-4.3,3.3-5.2,10v5.5c0,1.2-1.8,5.1-5.3,11.4-4.1,2.2-7.3,5.9-9.6,11.2s-2.2,7-3.8,8H968c-7.6,0-11.5-1.9-11.5-5.6a31.2,31.2,0,0,0,.5-4,.8.8,0,0,0-.8-.9h-.6c-1.2,0-2.6.8-4.3,2.5a10.6,10.6,0,0,1-2.4-2.1l-2.4.5a23.8,23.8,0,0,0,1-4l-.4-2.6c-2.9-11.1-4.3-17.3-4.3-18.4.5-10.3,1.5-18.3,2.9-24s3.2-7,3.2-8c7.6-26.2,11.5-41.7,11.5-46.5q4.1-15,7.2-15c.3-7.5.9-11.7,1.5-12.6,6.1-10.8,9.3-17.5,9.5-20a18.9,18.9,0,0,1-1-6,46.5,46.5,0,0,1,1-6.9c3.5-8.2,5.2-13.7,5.2-16.6v-.5c-1.8,0-4.8,3.5-9.1,10.5h-1.4v-1.4c0-1.7-.5-2.7-1.4-3.1a9.2,9.2,0,0,0-3.9,3.9,12.6,12.6,0,0,1-5.7-2.5q-4.8,0-9.6,6.6a21.4,21.4,0,0,0-6,3.2c-2.5-11.8-6.5-17.7-12.2-17.7a59.1,59.1,0,0,0-19.6-10.5c-24-5.1-39.3-7.7-45.9-7.7a12.5,12.5,0,0,0-5.3,1c0,1,.6,1.4,1.9,1.4-.2,1-1.2,1.5-2.8,1.5H838.4c-4.6,2.7-7.6,4.1-9.1,4.3a82.3,82.3,0,0,0-10.2.6l2.7-9.4v-1h-.4a5.7,5.7,0,0,0-3.1,1,69.8,69.8,0,0,1-5.2,10.6l-1.8.4c-1-.8-1.5-2.2-1.5-4.1h-1.6l-4.2,3.7.5-2.7v-1c-.4-1.4-1.8-2.4-4.2-3.1l-1.1.4L795,119c-9.4,2.2-14.2,4-14.2,5.3l-7.9,3.7-4.2,11c0,1.5.9,2.6,2.7,3.2a20.8,20.8,0,0,1-2.7,5.3v.4c0,.8.9,1.1,2.7,1.1q-12.9,10.8-17.4,18c-3.2,3.9-5.5,10.3-6.8,19.3q-6.3,9.9-6.3,13.8c-4.3,8.1-6.4,13-6.4,14.7H734c-.8-2.8-1.7-4.2-2.6-4.2,1.4-4,2-6.4,2-7.4v-2l-4.6-11.6c.8-2.2,1.9-3.3,3.1-3.3v-2.6c-3.2-6.9-4.8-11-4.8-12.1s.9-5.9,2.6-13.1v-1.6q0-11.8-4.2-14.7c-.8-6-1.4-10.6-2-13.8q-.6-12-2.1-12h-.5c-1.2,0-2.5,4.7-3.7,14.2-1.2-.1-2.5-1.1-3.7-3.1H713c-1.8.9-3,2.8-3.7,5.7h-.9a36.2,36.2,0,0,0,1.1-9.4c0-2.2,1.2-7.3,3.7-15.3l-.6-7.3q0-3,4.8-20.1c-.4,0-.6-.3-.6-1a4.6,4.6,0,0,0-3.6,1.6c-1.3,6.3-3.7,9.4-6.9,9.4l-.5-3.7c-2.2,0-3.9,1.4-5.3,4.2a14.6,14.6,0,0,1-7.9-3.6h-.4a6.6,6.6,0,0,0-5.9,3.1c0,3.3-3.3,7-9.9,11-5,1.7-7.4,5.4-7.4,11.2v1l.4,2.7c-.6.1-1.3,1-2,2.6a53.1,53.1,0,0,0,.5,6.8c-.3,4.3-.5,8.5-.5,12.6a42.6,42.6,0,0,1-1.6,7.9,6.6,6.6,0,0,0,1,2.6c-.3,0-.6.6-1,1.7-2.5.5-6.7,6.5-12.6,17.8-12,10.4-18,16.8-18,19-11.6,10.9-19.8,19.8-24.6,26.8q-8.2,16-10.5,18c1.3-3,2-5.1,2-6.4v-1.5q0-9.9-8.4-24.3c.5-2.1,1.4-3.1,2.6-3.1v-3.3c-4.2-7.4-6.3-12.6-6.3-15.8a49.2,49.2,0,0,0,1.1-9.9c-5-16.3-7.4-27.5-7.4-33.7,0-.7.2-3.8.6-9.5l-.6-3.1h-1.6a1,1,0,0,0-1.1,1c-.4,0-1,2.8-2,8.5l-2.2-2.2c-2.7,1.5-5.1,4.8-7.4,10.1l-5.2-1.1c-.7-4.2-2.2-6.3-4.7-6.3s-3.7,1.4-3.7,2.1v1.6c.5,3.2,1.9,4.7,4.2,4.7h.6c-1.3,3.3-4,7.7-7.9,13.1-.2-3-.3-5.4-.3-7.1s-1.2-6-3.6-9.1c-6.7-4.5-11.2-8.2-13.2-11.1-4.6-1.7-7.9-3.3-10.1-5,0-1.6-6.1-3-18.4-4.1H503c-8.7,0-18.2,4.2-28.6,12.6h-1.5a1,1,0,0,1-1.1-.9c.5-1,1-1.5,1.6-1.5v-1.7q0-.3-2.7-.3c-5.9,3.3-9.3,5-10.1,5-3.9,0-9.4,4.7-16.8,14.2v3.5a15.8,15.8,0,0,1-.4,3.8c-.1-2.2-.2-4-.2-5.4s-1.2-6-3.6-9.1c-6.8-4.5-11.2-8.2-13.3-11.1-4.5-1.7-7.8-3.3-10-5,0-1.6-6.1-3-18.4-4.1h-4.1c-8.7,0-18.2,4.2-28.6,12.6h-1.5a1,1,0,0,1-1.1-.9q.8-1.5,1.5-1.5v-1.7c0-.2-.8-.3-2.6-.3-6,3.3-9.4,5-10.2,5-3.8,0-9.4,4.7-16.7,14.2v3.5a14.6,14.6,0,0,1-2.2,8.2c-.8,4.7-1.6,7.6-2.5,8.5s-3.8,6.8-5.1,20.2c0,2.4.7,6.3,2.1,11.8a36.7,36.7,0,0,1,5.1,9.7v.4a.9.9,0,0,1-1,1,12.8,12.8,0,0,0,2.5,7.1c2.8,0,6,6.1,9.7,18.3,5.1,4.5,7.7,7.5,7.7,9l-3,2.6c0,1.8,1.8,4.1,5.5,7,.7,9.1,1.4,14.4,2,15.8h2a112.3,112.3,0,0,1,2.2-12.7h.5c.5,0,1.4,1.1,2.5,3.1h.5c1.6-4.7,3.1-7,4.6-7s.5.3,1.6.3c10.8,10.8,16.9,18.7,18.3,23.8-.7.2-1.4,1.6-2,4.1a108.8,108.8,0,0,1,1.4,11.3v4c0,5-1.5,8.5-4.6,10.7-1.4,3.3-7.1,5-17.2,5a.5.5,0,0,0-.6-.6l-.9.6c-5.4-.4-9.1-.9-11.3-1.6s-3.6-1-8.1-3.1c-.7,0-1,.4-1.1,1.1v.5c1.4,2.4,3.1,3.7,5.2,4.1v.6h-.5a20.7,20.7,0,0,1-11.4-3.6l.5-1.1v-2.5h-2.4c-2.1,0-3.8-1.4-5.2-4.1q-7.5-3.3-8.7-4.5c-7.1-11.6-10.6-20-10.6-25.3a44.4,44.4,0,0,1,.4-7.6q5.1-23,5.1-24.9l-1-.6h-1.5c-5.1,15.1-7.7,26.8-7.7,35,0,2,.7,7.4,2,16.2v.6c-.5,0-2.2-3-5.1-9.1h-1v4.1l.6,2.5h-.6c-1.6-5.1-2.7-7.7-3.1-7.7h-.9a5.4,5.4,0,0,1-.5,1.6c2.4,11,3.6,19.1,3.6,24.4l-1.1.3c-.9,0-1.4-.6-1.4-1.9h-2.2v1.6c0,.1.1.1.1.2l-2.5-1.8V302a21.8,21.8,0,0,1,5.3,1.2,4.9,4.9,0,0,0,1.7-.6c0-2.5-2.7-5.2-8.1-8a13.1,13.1,0,0,1-5.7-5.9l.6-.9v-3.1c0-.7.9-4.1,2.6-10.1,0-4,2.5-12.4,7.4-25.2a85.8,85.8,0,0,1,3.8-21.5c0-.5-.2-2.3-.6-5.3s1.9-6.7,5.8-9.5c.7-12.2,1.4-19,2.1-20.5,6-12.6,10.1-22.6,12.2-30.1-.4-20.6-1.2-33.3-2.2-37.9,0-.5.2-3.3.5-8.4-1.8-2.8-2.6-4.7-2.6-5.7a108.5,108.5,0,0,0,1-11.1h-.5a3.9,3.9,0,0,0-2.1.6c-.2,1.3-.8,2-1.6,2s-3.2,3.5-4.1,10.5h-.6a8.5,8.5,0,0,0-1.4-3.3l-.2-1h-1.2l-2.9.6v1.1l.5,2-.6,1.7-3.7-.5H294l-8.2,8.1a.5.5,0,0,0-.5-.3h-1.1a6.8,6.8,0,0,0-3.3,1.1c-4.9-4.2-8.4-6.2-10.4-6.2a252,252,0,0,0-25.9,1.2c-5.6,3.3-8.5,6.3-8.5,8.9-5,3.9-7.5,6.6-7.5,8.2-4.2,1.8-6.3,4.5-6.3,8v3.4a52.2,52.2,0,0,1-4,5.2l-2.9-.6h-2.2c-4.3,3.1-6.4,6-6.4,8.6-2.9,1.1-5.6,3.6-8,7.4-2.5,0-4.9,2.7-6.9,8q-12.7,13.1-19.5,15.6h-1.1q13.8-27.7,13.8-35.1a52.1,52.1,0,0,0-.6-8.5,109.3,109.3,0,0,0,.6-12,38.3,38.3,0,0,0-2.3-13.8c-4.6-7.6-7.1-13.8-7.6-18.4h-1.6l-1.2.7c.8,7.1,1.2,11.6,1.2,13.6v3.5c-2.7-1.3-4.1-2.6-4.1-3.9h-2.3v7.4l-.4,1.1c-7.2,0-12,3.2-14.4,9.8a12.6,12.6,0,0,1-7.5,5.7A49.5,49.5,0,0,1,138,149c-3,0-4.5,4.6-4.5,13.7,0,4.7-2,13.5-5.9,26.4,0,1.2.3,4.8.8,10.9-3.5,11.9-5.2,19.4-5.2,22.4a112.1,112.1,0,0,0-13.3-1.1l-3.4,1.6c-3.9-.3-6.9-.5-9.2-.5H93.8c-11,2.9-16.5,10.4-16.5,22.3v1.2c0,3.8.9,6.9,2.8,9.2,1.6-.6,2.3-1.2,2.3-1.8V242.4c0-4.3,2.5-7.7,7.4-10.4h.6a20.6,20.6,0,0,1-2.2,4.7v4.1c.8,0,2.7-.8,5.6-2.4q3,.9,3,3.3T95,245.3a45.3,45.3,0,0,0,1.2,6.8h5.1c0,2.8,1,5.8,2.9,9.3v.5c-6.6,7.1-10.7,10.8-12.6,10.9v1.1l.5,1.2c4.4-1.6,10-4.7,16.8-9.2,3.1,2.3,4.9,3.5,5.6,3.5a37.6,37.6,0,0,0-.5,5.1,222.3,222.3,0,0,0-5.9,33.3v.6l.8,1.2a3.7,3.7,0,0,0,2.2-.8c1.1.4,1.7,1.6,1.7,3.5v1.2a135.6,135.6,0,0,1-1.2,16c0,1.3,1.5,3.8,4.6,7.6v6.8c0,1.5.3,6.3,1.1,14.4,0,2.9-.4,11.9-1.1,26.9v.6h1.1c.9,0,1.5-1.8,1.8-5.2l6.9-35c1,0,2.4,1.9,4,5.8.7,0,1.4-1.3,2.3-4,0-9.6,2.5-16.1,7.4-19.5a110,110,0,0,1,4.7-22.4c-2.3-4.8-3.5-8.1-3.5-9.8,0-10.5,2.5-17,7.4-19.4h1.2a67.1,67.1,0,0,0,8-.6c11.7,3.8,18.3,5.7,20,5.7,16.1,6.8,25.3,10.2,27.7,10.2a6,6,0,0,0,3.9-1.7h1.2c2.3,0,10.3,2.4,24,7s20.6,8.6,22.4,8.6h.2a134.8,134.8,0,0,1-2.9,13.9q.5,0,2.1,6.3c0,1.6-.9,5.3-2.6,11.1a4.6,4.6,0,0,1,.5,2.1V341c-4.9,14.1-7.3,23.4-7.3,27.9v.5h.9a8,8,0,0,0,3.3-6.8c7.7-15.7,11.6-24.6,11.6-26.8a3.4,3.4,0,0,0,1.5.4c.3,3.5.9,5.3,1.6,5.3s2.7-2.4,3.7-4.7c0-5.9,2.4-10.8,7.3-14.8,1.8,0,3.8-4.5,5.9-13.6,2,.3,4.4,1.8,7.4,4.6l8.3,2.9-.3,3.1c3.7,6.1,7.6,9.9,11.7,11.6a4.1,4.1,0,0,1,1.9-.5h1.6c7.1,2.3,10.6,4.2,10.6,5.7,0,4.1,5.8,6.6,17.5,7.5l7.2-1.6c2,0,4.2,1.1,6.5,3.2h.5l9.8-2.6h4.6c1.8,0,4.2.2,7.1.5a14,14,0,0,0,8.2-3.1c8.5,0,15.6-3.7,21.4-11.1,1-2.4,2-4.5,2.9-6.2,3,4.1,6.2,6.9,9.4,8.2a4.1,4.1,0,0,1,1.9-.5h1.6c7.1,2.3,10.6,4.2,10.6,5.7,0,4.1,5.8,6.6,17.5,7.5l7.2-1.6c2,0,4.2,1.1,6.6,3.2h.4l9.8-2.6H479c1.8,0,4.2.2,7.2.5s5.2-1,8.1-3.1c8.5,0,15.7-3.7,21.4-11.1,3.6-8.2,6.2-12.9,7.7-14.1a20.6,20.6,0,0,0,5.6-4.4l.5.5v1.6c0,.3-.5,2.8-1.6,7.4v.5l.5,3.1a211.1,211.1,0,0,0-7.9,27.4v1.5h1.1c.9,0,2-2,3.1-6.2,6.1-12.7,10-21.1,11.6-25.3,1.3,0,2.1,1.6,2.6,4.8v.4c2.3,0,4.4-3.1,6.4-9.4,0-3.6,2.2-6,6.8-7.3a103.5,103.5,0,0,0,7.4-19.5,31.7,31.7,0,0,0-1.6-5.3v-3.7c0-2.5.2-3.7.5-3.7,0-6,2.5-10.2,7.4-12.6,4.9-12.7,7.3-21.7,7.3-26.9h.6c3,15.1,5.3,22.6,6.9,22.6h1c0-1,.3-1.5,1-1.5h.6c2.1,4.1,3.1,6.6,3.1,7.4v.5a8.6,8.6,0,0,1-2.6,6.3c-2,10.5-4.1,17.3-6.4,20.6v2.6l.6,1q1.5,0,4.2-2.7c4.7-10.5,7.5-16.3,8.4-17.3l1.1.6a86.4,86.4,0,0,1-2.1,9.5v2l.5,1.1c2.2,0,3.8-2.5,4.8-7.3l.9.4c2,6.3,3.4,10.1,4.4,11.6,2.1,9.1,3.5,13.6,4.1,13.7h.5l1.1-.5c0-6.1-1.4-15.5-4.2-28.5v-2a1.4,1.4,0,0,1,1.6,1.6h1c2.4,0,4.3-1.4,5.8-4.2,8-9.3,12.1-14.5,12.1-15.8A128.2,128.2,0,0,0,640,242.2h.5c-3.5,11.1-5.3,18.3-5.3,21.5v.6h2.2l1.1-3.2h.4v.6c0,7-2.4,20.5-7.3,40.4q2.1,8.8,2.1,9.6c0,2.7-.7,9.2-2.1,19.4v12.7c-5.6,18.6-8.5,30.6-8.5,35.7v1.1h.6c1.3,0,2.5-2.3,3.6-6.8q13.2-30.7,13.2-44.7c0-.5.7-.9,2.1-1.1v2.1c0,1.8.2,4.4.5,7.9h.6c1.8-1.2,4.2-11.1,7.3-29.5,5.3-8.3,7.9-12.9,7.9-13.7,1.8-8.2,5.8-21.6,12.2-40l-1.1-6.2a137.1,137.1,0,0,1,5.8-25.9c3.5-4.1,5.2-6.7,5.2-7.9,6.3-11.5,9.5-18.6,9.5-21l2.8-8q2.9,2.3,5.4,17.4c3.2,1.7,4.7,5,4.7,10.1l5.3,26.3v1.1q0,1.5-2.7,5.7l-3.1,10v1a7,7,0,0,0,2.2,4.8c2.7,6,4.3,9,4.7,9l-.5,2.6c-3.2,6.6-4.8,10.6-4.8,12.1V287a24.1,24.1,0,0,0,.6,4.6,309.9,309.9,0,0,0-12.7,30c-7.7,17.4-11.6,27.4-11.6,30.1,0,.7.4,1,1.1,1s1.1-.3,1.1-1l1,.4c0,4.9-2.4,13.5-7.4,25.9a20.6,20.6,0,0,1,1.1,6.8c0,2.3-1.4,6.2-4.2,11.6,0,6.9-2.5,13.4-7.4,19.5-3.1,8.9-5.6,14.7-7.4,17.4v1c0,.8.3,1.1,1,1.1s2.9-2.3,4.2-6.9a41,41,0,0,0,9-11.5q9.6-20,10.5-20.1l1.1.6a12.5,12.5,0,0,0-1.1,5.7v.6l.6,1c1.9,0,4.1-3.7,6.8-11s4.8-11.1,6.9-12.1,4.7-3.5,6.8-10.5c5.6-12.1,8.5-18.9,8.5-20.6v-1.1a36.7,36.7,0,0,0-.6-5.7,106,106,0,0,1,5.2-15.4l14,.9h2c.4.9.7,1.3.9,1.3a1,1,0,0,0,1.1-1.1v-.2c2.4,0,8.4-.8,18.1-2.4h.4l1,.5v.5c-3.7,1.8-5.8,3.1-6.2,3.8v.9h2.8l21.1-3.3h1l8.6,1.9c13.2-2.9,20.4-4.3,21.5-4.3l-.5,2.4c-3.2,10.5-4.8,17.7-4.8,21.5v1h1a4.1,4.1,0,0,0,1.9-2.4c0-2.5,3.2-10.6,9.6-24.4l.9.5c1.3,3.1,2.3,4.7,2.9,4.8h.5c1.7-7.7,3.6-11.5,5.7-11.5,12.1-5.5,20.3-8.3,24.4-8.6s5.6.1,9.1.4l16.8-4.7q25.8-9.1,40.5-20.4c-.1,2.7-.2,6-.2,9.8,1.7,12.2,6.8,24.3,15.3,36.2q14.1,23,46.3,22.9h5.3c13.9-2.9,23.5-7.6,28.7-13.9,3.6-8.5,6.7-14,9.5-16.6,5.5-7.4,9.3-13.9,11.5-19.5,7.3-26.1,10.9-43,10.9-50.5,5.2-5.1,7.8-8.4,7.8-10v-3a73.4,73.4,0,0,0-.6-8c.4-.8,1-3.7,1.9-8.6a49,49,0,0,0-1-7q0-6.9,3.9-19.5v-1c-.8-1.3-1.4-2-1.8-2,0-3.5,2.6-12.8,8-28v-1.4a2.4,2.4,0,0,1-1.3-.6l-1.1.6h-.4a65,65,0,0,1,2.3-12.6c-.9-1.9-1.5-2.9-1.9-2.9.4-3,.7-5.3.9-7,4-.4,6-1.3,6-2.5,2.4,0,8.7-1,18.7-2.9h4.8c0,1.9-1.3,7.1-3.8,15.8v.5c0,.6.3,1,.9,1a5.7,5.7,0,0,1-.9,2.8,16.3,16.3,0,0,0-3.9,11c-3.5,8.1-5.2,13.4-5.2,15.8-1.6,2.7-2.4,5-2.4,6.7-3.2,11-4.8,17.3-4.8,19.2q-19.6,56.7-19.6,63.1v2.9c0,2.6.1,5.9.4,10.1l-8.1,33.9c-.9,10.6-2.1,17.3-3.3,20.1a4.1,4.1,0,0,0,.4,1.5l2-1h.4a242.7,242.7,0,0,0-3.8,26.8c.3,4,.5,6.2.5,6.7v1h-.5l-.5-2.4h-.9a84.8,84.8,0,0,1,.9,11.4c0,5.9-.8,10.4-2.4,13.4v.5h4.3c1.1-6,2.5-9.1,4.3-9.1s1.3,1.3,2,3.9h.4q2.7-3.6,7.2-21.6c.7,0,1,.5,1,1.5h1.4c6.7-15.3,10.1-25.8,10.1-31.6a5.9,5.9,0,0,0-1-2.9c-.3-9.2-.5-15.1-.5-17.7v-1q3.8-4.7,3.9-9a16.2,16.2,0,0,0,3.8-9.1c2.8,0,6-9.1,9.5-27.3,3.6-7.8,6.7-17.9,9.6-30.2,0-8.2,2.1-13.8,6.2-16.7,0-1.4,2-5.2,5.8-11.5,0-8.4,2.2-15.5,6.7-21,1.8-7.1,3.4-10.6,4.8-10.6,1.6-6.8,4.2-11.6,7.6-14.3,2.7-4.3,4.6-10.6,5.8-19.2,0-.7-.2-2.4-.5-5.2,0-.9.1-1.8.2-2.8,4.1-.4,6.1-1.3,6.1-2.5,2.4,0,8.6-1,18.7-2.9h4.8c0,1.9-1.3,7.1-3.9,15.8v.5a.9.9,0,0,0,1,1,5,5,0,0,1-1,2.8,16.7,16.7,0,0,0-3.8,11c-3.5,8.1-5.2,13.4-5.2,15.8-1.6,2.7-2.4,5-2.4,6.7-3.2,11-4.8,17.3-4.8,19.2q-19.7,56.7-19.6,63.1v2.9c0,2.6.1,5.9.4,10.1l-8.1,33.9q-1.5,15.9-3.3,20.1a4.1,4.1,0,0,0,.4,1.5l1.9-1h.5a242.7,242.7,0,0,0-3.8,26.8c.3,4,.5,6.2.5,6.7v1h-.5l-.5-2.4h-.9a84.8,84.8,0,0,1,.9,11.4c0,5.9-.8,10.4-2.4,13.4v.5h4.3c1.1-6,2.5-9.1,4.3-9.1s1.3,1.3,2,3.9h.4q2.7-3.6,7.2-21.6c.6,0,1,.5,1,1.5h1.4c6.7-15.3,10-25.8,10-31.6a5.7,5.7,0,0,0-.9-2.9c-.3-9.2-.5-15.1-.5-17.7v-1c2.5-3.1,3.8-6.1,3.8-9a15.6,15.6,0,0,0,3.9-9.1c2.8,0,6-9.1,9.5-27.3,3.5-7.8,6.7-17.9,9.6-30.2,0-8.2,2.1-13.8,6.2-16.7,0-1.4,1.9-5.2,5.8-11.5,0-8.4,2.2-15.5,6.7-21,1.8-7.1,3.4-10.6,4.8-10.6,1.6-6.8,4.2-11.6,7.6-14.3,2.6-4.3,4.6-10.6,5.8-19.2,0-.7-.2-2.4-.5-5.2s1.1-8.8,3.3-15.8a63.2,63.2,0,0,1,7.7.5h1.4a34,34,0,0,0,17.7-5.3c6.4,0,12.1-.2,17.3-.7-10.8,3.6-17.4,7-19.7,10-8.7,6.2-14.3,11.4-16.8,15.8l.6,2c0,2.4-2.3,5.3-6.9,8.5a111.2,111.2,0,0,0-16.3,26.8v.6c0,.7.3,1,1,1h2.7c0,.8-1.6,6.6-4.8,17.5.3,0,1.4,1.4,3.2,4.1v2.7c-.8,0-1.5,4.2-2.1,12.5l-4.2,21.7v4.2l1,1.5c.8,0,2.2-3.6,4.2-11h.5v.5c-.3,3-.5,5.5-.5,7.4v2.7q0,39.2,25.9,59.4c12.3,7.3,22.8,11,31.6,11,.2-.3,1.7-.5,4.6-.5s10.9-4.9,24.3-12c7.6-2.8,17.9-11.1,31-24.8,2.1-2.8,4.1-5.5,5.9-8.1a97.5,97.5,0,0,1-2.4,12.4l2.6,5.9c-3.2,21.1-5.5,34.6-6.8,40.5v1c0,.7.3,1.1.9,1.1h1.1c0-2.6,4-13.8,12.1-33.7h2.1v2.1l.5,2.6h1.1l2.6-2c2.4-8.5,4.4-12.7,5.9-12.7,3.1,0,6.6-6.9,10.5-20.6-1.7-3.4-2.6-5.5-2.6-6.2,0-7.9,1.5-12.9,4.6-14.8s7.6-10.5,10.1-21.6q2.1,1.3,8.4,14.7c0,4.7,1.9,9.8,5.8,15.3,3.2,9.8,5.7,16.3,7.3,19.5,7.5,9,12.4,16,14.7,21.1,0,1.4-1.5,4.4-4.6,8.9v1a1,1,0,0,0,1.1,1.1h.9c.5,0,1.7-1,3.7-3.1h.6c0,2.3-1.2,6.1-3.7,11.5l-1.5-1h-2.2a1,1,0,0,0-1.1,1V324c0,.6.7,1.1,2.2,1.6l-1.1,3.7.5,1.1q3.8,0,6.3-4.8c1.5-3.8,3.2-5.8,5.3-5.8s1.5,1,1.5,1.6V324l7.9-1,5.3,1.5h1.1c4.5-3.5,7-5.2,7.4-5.2,1-3.2,2.6-4.7,4.7-4.7a85.9,85.9,0,0,1,8.9-10.1v-8.3c2.8-2.5,4.2-4.6,4.2-6.4v-7.9c0-1.8,1.8-10.2,5.3-25.2a45.3,45.3,0,0,1-1.6-8.5c0-2,3.5-17.6,10.6-46.8a327.9,327.9,0,0,0,10-46.3c0-.6-.4-1-1.1-1.1h-.5a13.4,13.4,0,0,1-1.6,3.2h-.5v-.5C1449.9,151.7,1451.3,138.1,1454.1,116.1Zm-166.7-8.2h1v.4h-1ZM1027,113.1h-1.4v-.9h1.4Zm-53.7,54.7h.5v1h-.5Zm-627.1,66h-1v-.4h1Zm-48.8,67h1.2v.7h-1.2ZM266.5,153.6h1.7v.6a4.1,4.1,0,0,0-1.7.4h-.7Zm-25.3,30.9v1.2h-1.1A1.1,1.1,0,0,1,241.2,184.5Zm-3.4,83.2a28.4,28.4,0,0,0-6.3-8c-11.4-3.7-19.8-7.3-25.3-10.9-18.2-2.3-28.3-4.4-30.4-6.4-3-4.2-5.9-6.3-8.6-6.3v-1.2c6,0,9.8-.5,11.5-1.7,6.9-5,11.7-7.9,14.4-8.6,5.4-6.4,8.8-9.7,10.3-9.7,1.1-3.2,3.5-6.4,7.4-9.7a10.3,10.3,0,0,0,4.6,1h1.2c10.4-12.8,19.3-19.6,26.8-20.5,6.3-5,10-9.6,10.9-13.8v-.5l-.5-2.9c3.5-6,5.6-9.5,6.4-10.4a29.5,29.5,0,0,0,11.8-4.7,17.7,17.7,0,0,0-.7,3.9L273,161c-.4,4.2-.8,6.5-1.1,6.8s.8,1.1,1.6,3.2c-.8,3.9-1.5,6.3-2.2,7.3-4.1,7.8-6.7,14-7.9,18.5a53.5,53.5,0,0,1,1.1,10.5v3.2a80.1,80.1,0,0,1-2.6,17.8v1.1c0,1.8.7,2.6,2.1,2.6-2.5,10.5-3.7,16.8-3.7,18.9v.6c.9,1.4,1.6,2.1,2.2,2.1,0,3.8-1.2,9.7-3.4,17.6-2,0-4.5.2-7.6.4A117.3,117.3,0,0,1,237.8,267.7ZM255,303.8h-.7v-1.2h.7Zm1.1-1.2V302l1.1.2c-.1.5-.1,1.1-.2,1.7Zm46.7-17.1h.6v1h-.6Zm0,5.6h.6a30.2,30.2,0,0,0,7.6,14.3v.3c-3.1,0-5.8-4.4-8.2-13.1ZM489.2,158.4h.4l-.9,1.4h-.6Zm-34.7,75h.9v.4h-.9Zm-74.6-75h.5l-.9,1.4h-.6Zm114.9,121a108.8,108.8,0,0,1,1.4,11.3v4c0,5-1.5,8.5-4.5,10.7-1.5,3.3-7.2,5-17.3,5a.5.5,0,0,0-.6-.6l-.9.6c-5.4-.4-9.1-.9-11.3-1.6s-3.5-1-8.1-3.1c-.6,0-1,.4-1.1,1.1v.5c1.4,2.4,3.1,3.7,5.2,4.1v.6h-.5a20.7,20.7,0,0,1-11.4-3.6l.5-1.1v-2.5h-2.4c-2.1,0-3.8-1.4-5.1-4.1-5.1-2.2-8-3.7-8.8-4.5q-2.7-4.5-4.8-8.4a75.5,75.5,0,0,0-5.6-22.6c.1-.8.2-1.4.3-1.9,3.3-15.3,5-23.6,5-24.9l-1-.6h-1.5a174.7,174.7,0,0,0-5.8,20.4c-3.3-5.5-11-16.3-23.3-32.5a89.3,89.3,0,0,1-12.8-9.6l.6-3.6v-.4c0-.6-1.3-1.6-4.1-3a25.2,25.2,0,0,0-6.7-11.8c0-4.3-.6-6.5-2-6.5a50.2,50.2,0,0,1,1.1-7.2c0-.2-.4-1.6-1.1-4v-.4c0-2.4,1.6-6.5,4.7-12.2,2-3.3,7-7.2,14.7-11.6,3.9-2.1,10.6-3.5,20-4.1a4.8,4.8,0,0,1,2.5,4.5c4.1,7.5,6.2,11.6,6.2,12.1,1.8,0,3.1,3.3,4.1,9.7-1.8,1.4-2.7,2.7-2.7,4.1l2.1.5a64.1,64.1,0,0,0-.5,7.6l.5,2.5h.6c.2,0,1-.8,2.5-2.5,1.2-6.8,2.3-10.2,3.4-10.2h.6q.6,3.6,2.1,3.6h.5c1.7-3.4,2.8-5.1,3.1-5.1h2.2c-.3,2.1-.5,4.4-.8,7a7.6,7.6,0,0,0,.1,1.5c-1,.8-1.5,1.3-1.5,1.7v2.5l.4,2.6h2.3a30.2,30.2,0,0,0,.9,3.5c2.6,3.9,4.3,7.1,5,9.7v.4c0,.7-.3,1-1,1a13.6,13.6,0,0,0,2.5,7.1c2.8,0,6.1,6.1,9.7,18.3,5.1,4.5,7.7,7.5,7.7,9l-3,2.6c0,1.8,1.8,4.1,5.5,7,.7,9.1,1.4,14.4,2,15.8h2.1a119.5,119.5,0,0,1,2.1-12.7h.5c.6,0,1.4,1.1,2.5,3.1h.5c1.6-4.7,3.1-7,4.7-7q0,.3,1.5.3c10.8,10.8,16.9,18.7,18.3,23.8C496.1,275.5,495.4,276.9,494.8,279.4Zm45.7,44.9H540v-1.1h.5Zm1.1-115.2c-1.1,7.1-3.5,18.3-7.3,33.6,0,1.1.8,2.7,2.6,4.8-.7,1.8-1.8,6.9-3.2,15.2-1.1,3.1-2,5.9-2.8,8.5a83.4,83.4,0,0,0-3.5-9q0-3.6-25-36.5a89.3,89.3,0,0,1-12.8-9.6l.6-3.6v-.4c0-.6-1.3-1.6-4-3a26.1,26.1,0,0,0-6.7-11.8c0-4.3-.7-6.5-2.1-6.5a50.2,50.2,0,0,1,1.1-7.2c0-.2-.4-1.6-1.1-4v-.4c0-2.4,1.6-6.5,4.7-12.2,2.1-3.3,7-7.2,14.7-11.6,3.9-2.1,10.6-3.5,20-4.1a4.7,4.7,0,0,1,2.5,4.5c4.1,7.5,6.2,11.6,6.2,12.1,1.8,0,3.1,3.3,4.1,9.7-1.8,1.4-2.6,2.7-2.6,4.1l2,.5c-.3,3.3-.5,5.9-.5,7.6l.5,2.5h.6c.2,0,1.1-.8,2.5-2.5,1.2-6.8,2.4-10.2,3.5-10.2h.6c.4,2.4,1,3.6,2,3.6h.5c1.7-3.4,2.8-5.1,3.1-5.1h1.7c.1.7.1,1.3.2,2-1.8,6.3-2.6,11-2.6,14.1v.6a11,11,0,0,0,1.5,5.3C542.6,200.4,542.3,203.4,541.6,209.1Zm82.6-7.9-2.1,2.6h-.5c1.2-2.1,2.1-3.2,2.6-3.2Zm14.3,57.3h-.6v-1.1h.6Zm47.1,143.7H685v-1h.6Zm67.6-70.5h-1.5v-1h1.5Zm194.9-82.3h.4v2h-1A3.6,3.6,0,0,0,948.1,249.4ZM867.5,111.6H869v.9h-1.5Zm-7.6,77a49.9,49.9,0,0,0,8.6-22.5c0-13.1-1.3-22.1-3.8-27.2,3.2.3,5.6.4,7.1.4h3.4l6.2-1.9h1a113.7,113.7,0,0,1,18.2,1.9c2.8,3.5,5.2,5.3,7.1,5.3,5.1,2,7.7,5.3,7.7,10v.5c-3.8,11.2-7.6,16.8-11.5,16.8h-5.3c-3.3,2.4-8.6,6.9-15.7,13.4-6.3,1.9-9.7,3.3-10.1,4.3a40.7,40.7,0,0,1-14.4,3.8H858C858.8,190.2,859.4,188.6,859.9,188.6Zm-.5,5.8v.4a3.9,3.9,0,0,0-1.4.5h-.5v-.5a3.3,3.3,0,0,0,1.4-.4Zm-1.9-56.5v2.4a6.9,6.9,0,0,1-3.4-2.9Zm-35.9-10.5-5,3.3a33,33,0,0,0,1.2-3.8h2.8Zm-34,65.9h.6v.5l-1.1,2.1h-.4A7.1,7.1,0,0,0,787.6,193.3ZM719.3,324.7l2.1-3.5a42.6,42.6,0,0,0,8.3-7.9q0,1.5.6,1.5c.7,3.7,1.3,6.6,1.8,9ZM824.5,180l-1.9,2.4c-.3,5.2-1.2,9.5-2.9,12.9,0,1.3.1,4.2.5,8.6a8.2,8.2,0,0,1-1,2.9l-3.3-.5-2,.5v1l1,1.4c0,.9-2.7,1.5-8.1,1.9-3.9-.3-7.8-.5-11.5-.5h-1l-1.4,1c-.3,0-.5.1-.5.5s5.9,3,17.7,4.7c0,.8-2.7,1.8-8.1,2.9,0,1.9,2.1,2.9,6.2,2.9l-.5.9c0,2.3,1.1,3.4,3.4,3.4h1.4c0,1.4-1.3,7.6-3.8,18.7a17.3,17.3,0,0,0,1.4,4.7,34.1,34.1,0,0,1-1.4,7.7c-5.8,18.7-8.6,29.7-8.6,33v2.9a5.2,5.2,0,0,0,2.4-1h.9c0,2.3-3.2,4.6-9.6,6.7q0,1,2.4,1.5v.9c-3.1,1.4-4.7,2.2-4.7,2.4q-20.6,4.7-22.5,7.2a31.6,31.6,0,0,1-15.8,6.7c-7.5,3.5-12.1,5.3-13.9,5.3h-3.8c-.1-2.7-.4-8.3-1-16.8.3-4.9,1.1-7.4,2.6-7.4s1.1.6,1.1,1.7h1.1a1,1,0,0,0,1-1.1v-3.2c0-5,1.4-8.6,4.3-11,2-8.5,4.2-14.3,6.8-17.4,3.6-12.6,6-19.9,7.3-22.1q7.2,0,11.1-14.7c2.1-10.5,3.8-15.8,5.3-15.8,2.8-7.4,7.7-14.3,14.7-20.6,4.7-8.7,10-22.4,15.8-41,5.6-5.8,8.3-11.8,8.3-18a32.9,32.9,0,0,0,2.3-4.6c3.3.6,10.8,1.1,22.6,1.4v.5l-.9,1.4v1c.5,2.5,1.1,3.8,1.9,3.8h2.4c1.9,0,2.9-1.1,2.9-3.3l2.3.4c3,0,4.7,2,5.3,5.8-.6,1.9-1.6,2.8-2.9,2.8s-7.1,3.9-12.9,11.5c-5.4,2.5-8.1,3.9-8.1,4.3-2.7,0-4.3,4.7-4.8,13.9v1.5Zm47.3,89.5c-6.7,1.9-10.6,3.3-11.9,4.3,0,3.4-4.5,6.3-13.4,8.6l-18.2,5.7q0-14,4.8-18.6c3.2,0,7.2-8.6,12-25.9l1.9,1c5.5,4.5,9.4,6.7,11.4,6.7,6.3,4.5,10.8,6.7,13.4,6.7,11.8,0,18.9,1.6,21.1,4.8C884.6,262.8,877.6,265,871.8,269.5Zm56.6-66.6c-7.9,12.1-12.9,23.1-15,33.2-1.8-1.4-3.5-2.9-5.2-4.4l-21-10.1v-.4a121.8,121.8,0,0,0,21-12.5c5.5-6.4,8.9-9.6,10.1-9.6A144.7,144.7,0,0,0,935,183,120.7,120.7,0,0,1,928.4,202.9Zm314.4-14.3a1,1,0,0,1-1.1,1.1v-1.1Zm-150.2,37h-.5v-1h.5Zm67.6,0h-.5v-1h.5Zm29.6-82.8h-.5a3.2,3.2,0,0,0,.5-1.9h.5a3.9,3.9,0,0,0,.5,1.4Zm104.6,69c0,5.4-2.9,13.7-8.5,24.7-2,2.8-3.4,8.9-4.2,18.4-3.5,7.6-7.2,12.9-11,15.8-2.3,3.9-6.2,5.8-11.6,5.8-10.5,3.9-16.2,5.8-17.4,5.8a24.6,24.6,0,0,1-10.5-2.6c-4.9,0-9.2-5-13.1-14.8-.6-6-1.1-9.7-1.6-11l2.6-3.7c2.3,0,3.7-6.8,4.2-20.6,0-8.9,3.7-18.7,11-29.4,8.3-7.4,13.8-14.1,16.4-20,9-11.8,13.6-19.1,13.7-21.6,4.3,2.5,7,3.7,7.8,3.7a72.9,72.9,0,0,0,9-1.1,148,148,0,0,1,11,13.8h2.2v-2.7a6.9,6.9,0,0,0-2.2-5.2v-.6l2.2-.5v-2.1l-5.3-5.3.5-1.1a8.9,8.9,0,0,0,3.7,1.1c7.6,5.8,12.7,12.5,15.3,20,0,.7-.3,1-1.1,1h-.6c-2.4-2.7-3.8-4.1-4.1-4.1h-1.6a4.6,4.6,0,0,1-.5,2.1,145,145,0,0,1,1.6,17.4,20,20,0,0,1-2.2,9.4C1297.1,206.9,1295.2,209.4,1294.4,211.8Zm91.3,5.9h-.5a4,4,0,0,0-.6-1.6v-1h.6a2.6,2.6,0,0,0,.5,1.5Zm55.8-131h-.6V84.5h.6Zm9.5,72.6h.4v2h-1A3.2,3.2,0,0,0,1451,159.3Z" transform="translate(-73.8 -32.6)"/></svg>`,
    stopOnLast: false,
    // delayEnd : 3000
  },
  {
    selector: ".svgdrow"
  }
);

const rolinText = new Titles.RolingText(
  {
    duration: 6000,
    width: 350,
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "The",
    subTitle2: "MotorCortex Team",
    subTitle3: "Presents",
    stopOnLast: false,
    delayEnd: 1000
  },
  {
    selector: ".rolingtext"
  }
);

const rotatedlinereveal = new Titles.RotatadLineReveal(
  {
    duration: 5000,
    width: 800,
    size: "M",
    lineColor: "#ff0000",
    textColor: "#000",
    title: "Animetitle",
    subtitle: "MC Plugin",
    leftEnd: 100,
    stopOnLast: false,
    // delayEnd : 3000
  },
  {
    selector: ".rotatedlinereveal"
  }
);

const rotatedline = new Titles.RotatedLine(
  {
    duration: 6000,
    width: 400,
    size: "XL",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "Minimal",
    subTitle2: "Elegant",
    subTitle3: "Modern",
    title: "Title",
    stopOnLast: false,
    // delayEnd : 3000
  },
  {
    selector: ".rotatedline"
  }
);

const svgborder = new Titles.SvgBorder(
  {
    duration: 5000,
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle: "Develop by",
    slogan: "-KMB-",
    title: "MotorCortex Team",
    stopOnLast: false,
    // delayEnd : 3000
  },
  {
    selector: ".svgborder"
  }
);

const circle = new Titles.Circle(
  {
    duration: 5000,
    fontSize: 40,
    circleColor: "#ff0000",
    textColor: "#000",
    title: "ANIMATED",
    sub: "TITLES",
    stopOnLast: false,
    // delayEnd : 3000
  },
  {
    selector: ".circle"
  }
);

const logobox = new Titles.LogoBox(
  {
    size: 2,
    textColor: "#fff",
    bgColor: "#000",
    subTitle1: "TYPOGRAPHY",
    subTitle2: "ANIMATION",
    subTitle3: "BY",
    width: 200,
    stopOnLast: false,
  },
  {
    selector: ".logobox"
  }
);


clip.addIncident(rolinText, 0);
clip.addIncident(rotatedlinereveal, 7000);
clip.addIncident(svgborder, 11025);
clip.addIncident(rotatedline, 16025);
clip.addIncident(circle, 22025);
clip.addIncident(logobox, 26225);
clip.addIncident(svgdrow, 29725);

window.clip = clip;

new Player({ clip, pointerEvents: true });
