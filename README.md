# motorcortex-animetitles

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-animetitles
# OR
$ yarn add @kissmybutton/motorcortex-animetitles
```

## Loading

```javascript
const MotorCortex = require("@kissmybutton/motorcortex/");
const TitlesPlugin = require("../src/main");
const Titles = MotorCortex.loadPlugin(TitlesPlugin);
```

# Create incident

## RotatedLine

```javascript
const nameOfIncident = new Titles.RotatedLine(
  {
    duration: 4000,
    width: 400,
    size: "XL",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "test",
    subTitle2: "test2",
    subTitle3: "test3",
    title: "dokimi"
  },
  {
    selector: ".rotatedline"
  }
);
```

### RotateLine Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| duration     | is the total time that animation will play  | all positive numbers |
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L","XL"  |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 |  right texts |  normal text  |
| title |  left text |  normal text  |



## RolingText

```javascript
const nameOfIncident = new Titles.RolingText(
  {
    duration: 4000,
    width: 250,
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "test",
    subTitle2: "test2",
    subTitle3: "test3",
    stopOnLast: false
  },
  {
    selector: ".rolingtext"
  }
);
```

### Rolingtext Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| duration     | is the total time that animation will play  | all positive numbers |
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L","XL","XXL","XXXL"    |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 |  roling text lines |  normal text  |
| stopOnLast |  if you like to stop animation on last text line |  true,false |



## RotatadLineReveal

```javascript
const nameOfIncident = new Titles.RotatadLineReveal(
  {
    duration: 4000,
    width: 800,
    size: "M",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle1: "test",
    subTitle2: "test2",
    subTitle3: "test3",
    leftEnd: 100
  },
  {
    selector: ".rotatedlinereveal"
  }
);
```

### RotatadLineReveal Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| duration     | is the total time that animation will play  | all positive numbers |
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L"    |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 | text lines |  normal text  |
| leftEnd |  left distance of componet from the left side of container |  numbers |



## SvgBorder

```javascript
const nameOfIncident = new Titles.SvgBorder(
  {
    duration: 4000,
    width: 400,
    size: "L",
    lineColor: "#ff0000",
    textColor: "#000",
    subTitle: "Design by",
    slogan: "-dokimi-",
    title: "IOAN",
    titleWidth: 200
  },
  {
    selector: ".svgborder"
  }
);
```

### SvgBorder Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| duration     | is the total time that animation will play  | all positive numbers |
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L" |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle | top left text |  normal text  |
| slogan  | under border text |  normal text  |
| title  | title text |  normal text  |
| titleWidth |  The width of the title container  |  numbers |



## Circle

```javascript
const nameOfIncident = new Titles.Circle(
  {
    duration: 4000,
    fontSize: 40,
    circleColor: "#ff0000",
    textColor: "#000",
    title: "IOAN",
    sub: "BRAPAPAPA"
  },
  {
    selector: ".circle"
  }
);
```
## In order to use tin incident you should include the img.svg that is in demo folder in your clip.js directory
### Circle Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| duration     | is the total time that animation will play  | all positive numbers |
| width      | total width of clip container | all positive numbers |
| circleColor |  the color of circle |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle | top left text |  normal text  |
| title  | svg cobe with 1 path tag only|  svg text  |


## SvgDrow

```javascript
const nameOfIncident = new Titles.SvgDrow(
  {
 duration: 1600,
    width: 900,
    size: "M",
    lineColor: "#ff0000",
    strokeDashOffset: 10000,
    StrokeDashArray: 10000,
    erase: true,
    svg: `svg code`
  },
  {
    selector: ".svgdrow"
  }
);
```

### SvgDrow Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| duration     | is the total time that animation will play  | all positive numbers |
| width      | total width of clip container | all positive numbers |
| size |  scale of clip components   |  "S","M","L" |
| lineColor |  the color of line |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| strokeDashOffset: | The strokeDashOffset attribute is a presentation attribute defining an offset on the rendering of the associated dash array. |  number  |
| StrokeDashArray  | The StrokeDashArray attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape; |  number  |
| erase  | erase svg after drow it |  true, false  |
| svg |  The width of the title container  |  numbers |


## LogoBox

```javascript
const nameOfIncident = new Titles.LogoBox(
  {
    size: 2,
    textColor: "#fff",
    bgColor: "#000",
    subTitle1: "testdawdawddawd",
    subTitle2: "test2",
    subTitle3: "test3",
    width: 200
  },
  {
    selector: ".logobox"
  }
);
```
## In order to use tin incident you should include the logo.png image in your clip.js directory

### LogoBox Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| size     | change the size of element  | all positive numbers |
| size     | change the size of element  | all positive numbers |
| bgColor   |  the color of bg |  hex values or RGB  |
| textColor |  the color of text |  hex values or RGB  |
| subTitle1 , subTitle2 , subTitle3 |  right texts |  normal text  |
| width      | total width of text container | all positive numbers |

# Add incident to your clip

```javascript
clipName.addIncident(nameOfIncident, 0);

```



