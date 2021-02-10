import RotatedLIne from"./incidents/RotatedLine"
import RolingText from"./incidents/RolingText"
import SvgBorder from"./incidents/SvgBorder"
import RotatadLineReveal from"./incidents/RotatadLineReveal"
import SvgDraw from"./incidents/SvgDraw"
import Circle from"./incidents/Circle"
import LogoBox from"./incidents/LogoBox"
import RightOpacity from"./incidents/RightOpacity"
import FlushStroke from"./incidents/FlushStroke"
import LetterScale from"./incidents/LetterScale"
import CircularText from"./incidents/CircularText"
import {RotatedLIneVal,RolingTextVal,SvgBorderVal,RotatadLineRevealVal,SvgDrawVal,CircleVal,RigthOpacityValidationVal,LetterScaleValidationVal} from "./validation"
import {name,version}  from '../package.json'

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: RotatedLIne,
      name: "RotatedLine",
      attributesValidationRules: RotatedLIneVal
    },
    {
      exportable: RolingText,
      name: "RolingText",
      attributesValidationRules: RolingTextVal
    },
    {
      exportable: SvgBorder,
      name: "SvgBorder",
      attributesValidationRules: SvgBorderVal
    },
    {
      exportable: RotatadLineReveal,
      name: "RotatadLineReveal",
      attributesValidationRules: RotatadLineRevealVal
    },
    {
      exportable: SvgDraw,
      name: "SvgDraw",
      attributesValidationRules: SvgDrawVal
    },
    {
      exportable: Circle,
      name: "Circle",
      attributesValidationRules: CircleVal
    },
    {
      exportable: LogoBox,
      name: "LogoBox"
    },
    {
      exportable: RightOpacity,
      name: "RightOpacity",
      attributesValidationRules: RigthOpacityValidationVal
    },
    {
      exportable: FlushStroke,
      name: "FlushStroke"
      // attributesValidationRules: Circle
    },
    {
      exportable: LetterScale,
      name: "LetterScale",
      attributesValidationRules: LetterScaleValidationVal
    },
    {
      exportable: CircularText,
      name: "CircularText"
      // attributesValidationRules: CircularTextValidation
    }
  ]
};
