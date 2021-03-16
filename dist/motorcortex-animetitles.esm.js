import MotorCortex from '@kissmybutton/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  return function () {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (_isNativeReflectConstruct$1()) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}
/*
 * anime.js v3.1.5
 * (c) 2021 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

/*
 * anime.js v3.1.2
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults


var defaultInstanceSettings = {};
var defaultTweenSettings = {
  duration: 1000,
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
};

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  return eases;
}(); // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    };
    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function getProperties(tweenSettings, params) {
  var properties = [];

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.duration;
    tween.isPath = false;
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return anim.duration;
  })) : tweenSettings.duration;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration
  });
} // Public Instance


function anime(params) {
  if (params === void 0) {
    params = {};
  }

  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function seekChild(time, child) {
    if (child) {
      child.seek(time);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start, 0, tween.duration) / tween.duration;
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        value = fromNumber + elapsed * (toNumber - fromNumber);

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insTime = engineTime;
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
    }

    setAnimationsProgress(insTime);
    instance.currentTime = minMax(insTime, 0, insDuration);

    if (engineTime >= insDuration) {
      instance.paused = true;

      if (!instance.completed) {
        instance.completed = true;

        if (!instance.passThrough && 'Promise' in window) {
          resolve();
          promise = makePromise(instance);
        }
      }
    }
  }

  instance.reset = function () {
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.completed = false;
    instance.reversePlayback = false;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.seek = function (time) {
    setInstanceProgress(time);
  };

  instance.reset();
  return instance;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path) {
  return {
    el: path,
    svg: getParentSvg(path),
    totalLength: getTotalLength(path),
    deltaCorrections: {
      x: 4,
      y: 5
    }
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;

    var _progress = progress * path.totalLength;

    var l = _progress + offset >= 1 ? _progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = 1; //isPathTargetInsideSVG ? 1 : svg.w / svg.vW;

  var scaleY = 1; //isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  return {
    x: (p.x - svg.x) * scaleX,
    y: (p.y - svg.y) * scaleY,
    angle: Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI
  };
}

anime.version = '3.1.0';
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.penner = penner;
anime.path = getPath;
anime.getPathProgress = getPathProgress;
var anime_es = anime;
var transform = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"];
var compositeAttributes = {
  transform: transform
};

function getMatrix2D(win, element) {
  var transform = win.getComputedStyle(element).transform;

  if (transform === "" || transform === "none") {
    return {};
  }

  var values = transform.split("(")[1].split(")")[0].split(",");

  var qrDecompone = function qrDecompone(a) {
    var angle = Math.atan2(a[1], a[0]),
        denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
        denom2 = Math.pow(a[2], 2) + Math.pow(a[3], 2),
        scaleX = Math.sqrt(denom),
        scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
        skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom),
        skewY = Math.atan2(a[1] * a[3] + a[0] * a[2], denom2);
    return {
      rotate: angle / (Math.PI / 180) + "deg",
      // this is rotation angle in degrees
      scaleX: scaleX,
      // scaleX factor
      scaleY: scaleY,
      // scaleY factor
      skewX: (denom === 1 ? skewX / (Math.PI / 180) : 0) + "deg",
      // skewX angle degrees
      skewY: (denom2 === 1 ? skewY / (Math.PI / 180) : 0) + "deg",
      // skewY angle degrees
      translateX: a[4] + "px",
      // translation point  x
      translateY: a[5] + "px" // translation point  y

    };
  };

  return qrDecompone(values);
}

var Anime = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits$1(Anime, _MotorCortex$Effect);

  var _super = _createSuper$1(Anime);

  function Anime() {
    _classCallCheck$1(this, Anime);

    return _super.apply(this, arguments);
  }

  _createClass$1(Anime, [{
    key: "onGetContext",
    value: function onGetContext() {
      var options = {};

      if (Object.prototype.hasOwnProperty.call(compositeAttributes, this.attributeKey)) {
        var compoAttribute = compositeAttributes[this.attributeKey];

        for (var i = 0; i < compoAttribute.length; i++) {
          if (!Object.prototype.hasOwnProperty.call(this.targetValue, compoAttribute[i])) {
            continue;
          }

          options[compoAttribute[i]] = [this.getInitialValue()[compoAttribute[i]], this.targetValue[compoAttribute[i]]];
        }
      } else {
        options[this.attributeKey] = [this.getInitialValue(), this.targetValue];
      }

      this.target = anime_es(_objectSpread2({
        autoplay: false,
        duration: this.props.duration,
        easing: "linear",
        targets: this.element
      }, (this.attrs || {}).attrs || {}, {}, options)); // handle first render initial values
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      if (this.attributeKey === "transform") {
        var obj = {};
        var transform = compositeAttributes[this.attributeKey];
        var currentTransform = getMatrix2D(this.context.window, this.element);

        for (var i = 0; i < transform.length; i++) {
          if (Object.prototype.hasOwnProperty.call(currentTransform, transform[i])) {
            obj[transform[i]] = currentTransform[transform[i]];
          } else {
            obj[transform[i]] = anime_es.get(this.element, transform[i]);
          }
        }

        return obj;
      }

      return anime_es.get(this.element, this.attributeKey);
    }
    /**
     * @param {number} f
     */

  }, {
    key: "onProgress",
    value: function onProgress(f) {
      return this.target.seek(this.target.duration * f);
    }
  }]);

  return Anime;
}(MotorCortex.Effect);
/**
 * Takes as attributes:
 * {
 *  animatedAttrs: {
 *      positionOn: {
 *          pathElement: "selector of the path element"
 *      }
 *  }
 * }
 }
**/


var MotionPath = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits$1(MotionPath, _MotorCortex$Effect);

  var _super = _createSuper$1(MotionPath);

  function MotionPath() {
    _classCallCheck$1(this, MotionPath);

    return _super.apply(this, arguments);
  }

  _createClass$1(MotionPath, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.pixelsAccuracy = this.attrs.pixelsAccuracy || 4;
      this.calculatedPoints = [];
      var svgEl = this.context.getElements(this.targetValue.pathElement)[0];
      this.path = anime_es.path(svgEl);
      this.isPathTargetInsideSVG = this.element instanceof SVGElement;
    }
  }, {
    key: "onProgress",
    value: function onProgress(f) {
      var toSet;
      var distance = Math.round(this.path.totalLength / this.pixelsAccuracy * f) * this.pixelsAccuracy;

      if (this.calculatedPoints[distance] !== null && this.calculatedPoints[distance] !== undefined) {
        toSet = this.calculatedPoints[distance];
      } else {
        var position = anime_es.getPathProgress(this.path, distance / this.path.totalLength, this.isPathTargetInsideSVG); // console.log(position);

        toSet = "\n            translateX(".concat(position.x, "px)\n            translateY(").concat(position.y, "px)\n            rotate(").concat(position.angle, "deg)\n        ");
        this.calculatedPoints[distance] = toSet;
      }

      this.element.style.transform = toSet;
    }
  }]);

  return MotionPath;
}(MotorCortex.Effect);

var nu = ["cm", "mm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%"];
var ru = ["deg", "rad", "grad", "turn"];
var _MEASUREMENT = "measurement";
var _COLOR = "color";
var animatedAttrs = {
  type: "object",
  // strict : true,
  props: {
    background: {
      optional: true,
      type: _COLOR
    },
    backgroundColor: {
      optional: true,
      type: _COLOR
    },
    backgroundPosition: {
      optional: true,
      type: "string"
    },
    backgroundSize: {
      optional: true,
      type: "string"
    },
    border: {
      optional: true,
      type: "string"
    },
    borderBottom: {
      optional: true,
      type: "string"
    },
    borderBottomColor: {
      optional: true,
      type: _COLOR
    },
    borderBottomLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderBottomWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderColor: {
      optional: true,
      type: _COLOR
    },
    borderEndEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderEndStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderImageOutset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageSlice: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderImageWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    borderLeft: {
      optional: true,
      type: "string"
    },
    borderLeftColor: {
      optional: true,
      type: _COLOR
    },
    borderLeftWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderRight: {
      optional: true,
      type: "string"
    },
    borderRightColor: {
      optional: true,
      type: _COLOR
    },
    borderRightWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartEndRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderStartStartRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTop: {
      optional: true,
      type: "string"
    },
    borderTopColor: {
      optional: true,
      type: _COLOR
    },
    borderTopLeftRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopRightRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderTopWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    borderWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    bottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    boxShadow: {
      optional: true,
      type: "string"
    },
    caretColor: {
      optional: true,
      type: _COLOR
    },
    color: {
      optional: true,
      type: _COLOR
    },
    columnCount: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columnRule: {
      optional: true,
      type: "string"
    },
    columnRuleColor: {
      optional: true,
      type: _COLOR
    },
    columnRuleWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    columns: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    columnWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flex: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexBasis: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    flexGrow: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    flexShrink: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    font: {
      optional: true,
      type: "string"
    },
    fontSize: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    fontSizeAdjust: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    fontStretch: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"]
    },
    fontWeight: {
      optional: true,
      type: "string"
    },
    gap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridColumnGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridRowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateColumns: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    gridTemplateRows: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    height: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    inset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    insetBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    insetInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    left: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    letterSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    lineClamp: {
      optional: true,
      type: "number",
      min: 0,
      integer: true
    },
    lineHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    margin: {
      optional: true,
      type: "string"
    },
    marginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    marginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    maskBorder: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maskPosition: {
      optional: true,
      type: "string"
    },
    maskSize: {
      optional: true,
      type: "string"
    },
    maxHeight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    maxWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu,
      min: 0
    },
    objectPosition: {
      optional: true,
      type: "string"
    },
    offset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetAnchor: {
      optional: true,
      type: "string"
    },
    offsetDistance: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    offsetPath: {
      optional: true,
      type: "string"
    },
    offsetPosition: {
      optional: true,
      type: "string"
    },
    offsetRotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    opacity: {
      optional: true,
      type: "number",
      min: 0,
      max: 1
    },
    order: {
      optional: true,
      type: "number",
      integer: true
    },
    outline: {
      optional: true,
      type: "string"
    },
    outlineColor: {
      optional: true,
      type: _COLOR
    },
    outlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadius: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusBottomright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopleft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineRadiusTopright: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    outlineWidth: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    padding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    paddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspective: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    perspectiveOrigin: {
      optional: true,
      type: "string"
    },
    right: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    rotate: {
      optional: true,
      type: _MEASUREMENT,
      units: ru
    },
    rowGap: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scale: {
      optional: true,
      type: "number",
      min: 0
    },
    scrollbarColor: {
      optional: true,
      type: _COLOR
    },
    scrollMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollMarginTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPadding: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlock: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBlockStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingBottom: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInline: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineEnd: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingInlineStart: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingLeft: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingRight: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollPaddingTop: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    scrollSnapCoordinate: {
      optional: true,
      type: "string"
    },
    scrollSnapDestination: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeImageThreshold: {
      optional: true,
      type: "string"
    },
    shapeMargin: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    shapeOutside: {
      optional: true,
      type: "string"
    },
    tabSize: {
      optional: true,
      type: "string"
    },
    textDecoration: {
      optional: true,
      type: "string"
    },
    textDecorationColor: {
      optional: true,
      type: _COLOR
    },
    textDecorationThickness: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textEmphasis: {
      optional: true,
      type: "string"
    },
    textEmphasisColor: {
      optional: true,
      type: _COLOR
    },
    textFillColor: {
      optional: true,
      type: _COLOR
    },
    textIndent: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    textShadow: {
      optional: true,
      type: "string"
    },
    textStroke: {
      optional: true,
      type: "string"
    },
    textStrokeColor: {
      optional: true,
      type: _COLOR
    },
    textUnderlineOffset: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    top: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    transform: {
      optional: true,
      type: "object",
      props: {
        translateX: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateY: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        translateZ: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        },
        rotate: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        rotateZ: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        scale: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleX: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleY: {
          type: "number",
          min: 0,
          optional: true
        },
        scaleZ: {
          type: "number",
          min: 0,
          optional: true
        },
        skewX: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        skewY: {
          type: _MEASUREMENT,
          units: ru,
          optional: true
        },
        perspective: {
          type: _MEASUREMENT,
          units: nu,
          optional: true
        }
      }
    },
    transformOrigin: {
      optional: true,
      type: "string"
    },
    verticalAlign: {
      optional: true,
      type: "string"
    },
    visibility: {
      optional: true,
      type: "string"
    },
    width: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    wordSpacing: {
      optional: true,
      type: _MEASUREMENT,
      units: nu
    },
    zIndex: {
      optional: true,
      type: "number",
      integer: true
    },
    zoom: {
      optional: true,
      type: _MEASUREMENT,
      units: ["%"],
      min: 0
    }
  },
  transformOrigin: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  },
  visibility: {
    type: "string"
  },
  width: {
    type: _MEASUREMENT,
    units: nu
  },
  wordSpacing: {
    type: _MEASUREMENT,
    units: nu
  },
  zIndex: {
    type: "number",
    integer: true
  },
  zoom: {
    type: _MEASUREMENT,
    units: ["%"],
    min: 0
  }
};
var name = "@kissmybutton/motorcortex-anime";
var version = "2.1.11";
var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: Anime,
    name: "Anime",
    attributesValidationRules: {
      animatedAttrs: animatedAttrs
    }
  }, {
    exportable: MotionPath,
    name: "MotionPath",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          positionOn: {
            type: "object",
            props: {
              pathElement: {
                type: "string"
              }
            }
          }
        }
      }
    }
  }],
  compositeAttributes: compositeAttributes
};

var Anime$1 = MotorCortex.loadPlugin(index);

var Size = function Size(fontSizeLeft, fontSizeRigth, lineWidth, lineHeight, gap) {
  _classCallCheck(this, Size);

  this.fontSizeLeft = fontSizeLeft;
  this.fontSizeRigth = fontSizeRigth;
  this.lineWidth = lineWidth;
  this.lineHeight = lineHeight;
  this.gap = gap;
};

var size;

var RotatedLine = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(RotatedLine, _MotorCortex$HTMLClip);

  var _super = _createSuper(RotatedLine);

  function RotatedLine() {
    _classCallCheck(this, RotatedLine);

    return _super.apply(this, arguments);
  }

  _createClass(RotatedLine, [{
    key: "buildTree",
    value: function buildTree() {
      var rotateAminmeEnd = new Anime$1.Anime({
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".wrapper",
        easing: "easeInOutQuart"
      });
      var widthLIne = new Anime$1.Anime({
        animatedAttrs: {
          height: size.lineHeight
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line",
        easing: "easeInOutQuart"
      });
      var leftTextAnimate = new Anime$1.Anime({
        animatedAttrs: {
          right: "".concat(size.gap, "%")
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".text-left",
        easing: "easeInOutQuart"
      });

      for (var i = 1; i <= 3; i++) {
        var rightTextAnimate = new Anime$1.Anime({
          animatedAttrs: {
            right: "-".concat(size.gap, "%")
          },
          attrs: {}
        }, {
          duration: this.attrs.duration * 0.15 * i,
          selector: ".text-right" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(rightTextAnimate, this.attrs.duration * 0.25);
      }

      var rightTextAnimateIn = new Anime$1.Anime({
        animatedAttrs: {
          right: "100%"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".text-right",
        easing: "easeOutExpo"
      });
      var leftTextAnimateIn = new Anime$1.Anime({
        animatedAttrs: {
          right: "-100%"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".text-left",
        easing: "easeOutExpo"
      });
      var rotateAminmeStartOut = new Anime$1.Anime({
        animatedAttrs: {
          transform: {
            rotate: "90deg"
          }
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".wrapper",
        easing: "easeInOutQuart"
      });
      var widthLIneOut = new Anime$1.Anime({
        animatedAttrs: {
          height: "0rem"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line",
        easing: "easeInOutQuart"
      });
      var delayEnd = this.attrs.delayEnd || 0;
      this.addIncident(widthLIne, 0);
      this.addIncident(rotateAminmeEnd, this.attrs.duration * 0.075);
      this.addIncident(leftTextAnimate, this.attrs.duration * 0.15);

      if (!this.attrs.stopOnLast) {
        this.addIncident(rightTextAnimateIn, this.attrs.duration * 0.7 + delayEnd);
        this.addIncident(leftTextAnimateIn, this.attrs.duration * 0.7 + delayEnd);
        this.addIncident(rotateAminmeStartOut, this.attrs.duration * 0.85 + delayEnd);
        this.addIncident(widthLIneOut, this.attrs.duration * 0.925 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n          <div class=\"wrapper\">\n            <div class=\"text--container text--container-left\">\n              <div class=\"text-left\">".concat(this.attrs.title, "</div>\n            </div>\n            <div class=\"line\"></div>\n            <div class=\"text--container text--container-right\">\n              <div class=\"text-right text-right1\">").concat(this.attrs.subTitle1, "</div>\n              <div class=\"text-right text-right2\">").concat(this.attrs.subTitle2, "</div>\n              <div class=\"text-right text-right3\">").concat(this.attrs.subTitle3, "</div>\n            </div>\n          </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size = new Size("1.5rem", "1rem", "0.2rem", "5rem", 3);
          break;

        case "M":
          size = new Size("2rem", "1.2rem", "0.3rem", "7rem", 4);
          break;

        case "L":
          size = new Size("2.5rem", "1.5rem", "0.3rem", "9rem", 4);
          break;

        case "XL":
          size = new Size("3rem", "2rem", "0.3rem", "11rem", 4);
          break;
      }

      return "\n\n    body{\n     font-size: 62.5%;\n    }\n     .wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transform: rotate(90deg);\n        white-space: nowrap;\n        overflow: hidden;\n        width : 100%;\n        width : ".concat(this.attrs.width + size.lineWidth, "px;\n        color : ").concat(this.attrs.textColor, ";\n        font-family: ").concat(this.attrs.fontFamily, " !important;\n        \n      }\n      .line {\n        width: 3px;\n        background: ").concat(this.attrs.lineColor, " ;\n        height: 0rem;\n      }\n      \n      .text-left {\n        position: relative;\n        right : -100%;\n        font-size: ").concat(size.fontSizeLeft, ";\n        text-align: right;\n      }\n      \n      .text-right {\n        position: relative;\n        right: 100%;\n        font-size: ").concat(size.fontSizeRigth, ";\n\n      }\n      \n      .text--container {\n        white-space: nowrap;\n        overflow: hidden;\n        position: relative;\n        width :").concat(this.attrs.width / 2, "px;\n        \n      } \n      ");
    }
  }]);

  return RotatedLine;
}(MotorCortex.HTMLClip);

var RotatedLine_1 = RotatedLine;

var Anime$2 = MotorCortex.loadPlugin(index);

var Size$1 = function Size(fontSizeLeft, topMove, lineHeight, gap, topMove2) {
  _classCallCheck(this, Size);

  this.fontSizeLeft = fontSizeLeft;
  this.topMove = topMove;
  this.lineHeight = lineHeight;
  this.gap = gap;
  this.topMove2 = topMove2;
};

var size$1;

var RolingText = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(RolingText, _MotorCortex$HTMLClip);

  var _super = _createSuper(RolingText);

  function RolingText() {
    _classCallCheck(this, RolingText);

    return _super.apply(this, arguments);
  }

  _createClass(RolingText, [{
    key: "buildTree",
    value: function buildTree() {
      var animeLineHeight = new Anime$2.Anime({
        animatedAttrs: {
          height: size$1.lineHeight
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      });
      var animeTextLeft = new Anime$2.Anime({
        animatedAttrs: {
          left: "0px"
        },
        attrs: {}
      }, {
        duration: 800,
        selector: ".textClip span"
      });
      var animeTextTop = new Anime$2.Anime({
        animatedAttrs: {
          top: size$1.topMove
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      });
      var animeTextTopNext = new Anime$2.Anime({
        animatedAttrs: {
          top: size$1.topMove2
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      });
      var animeTextLeftBack = new Anime$2.Anime({
        animatedAttrs: {
          left: "-".concat(this.attrs.width / 2, "px")
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.15,
        selector: ".textClip span"
      });
      var animeLineHeightBack = new Anime$2.Anime({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.075,
        selector: ".line"
      });
      this.addIncident(animeLineHeight, 0);
      this.addIncident(animeTextLeft, this.attrs.duration * 0.075);
      this.addIncident(animeTextTop, this.attrs.duration * 0.375);
      this.addIncident(animeTextTopNext, this.attrs.duration * 0.575);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(animeTextLeftBack, this.attrs.duration * 0.75 + delayEnd);
        this.addIncident(animeLineHeightBack, this.attrs.duration * 0.925 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"line\"></div>\n        <div class=\"textClip\"> \n          <span> ".concat(this.attrs.subTitle1, "</span> <span> ").concat(this.attrs.subTitle2, " </span><span> ").concat(this.attrs.subTitle3, "</span>\n        </div>\n      </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size$1 = new Size$1(21, "-21px", "31px", 0.5, "-42px");
          break;

        case "M":
          size$1 = new Size$1(28, "-28px", "38px", 1, "-56px");
          break;

        case "L":
          size$1 = new Size$1(35, "-35px", "45px", 1.5, "-70px");
          break;

        case "XL":
          size$1 = new Size$1(42, "-42px", "52px", 2, "-84px");
          break;

        case "XXL":
          size$1 = new Size$1(49, "-49px", "59px", 2, "-98px");
          break;

        case "XXXL":
          size$1 = new Size$1(70, "-70px", "80px", 2, "-140px", 86);
          break;
      }

      return "\n    body{\n     font-size: 62.5%;\n    }\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      height: ".concat(size$1.lineHeight, ";\n      width : ").concat(this.attrs.width, "px;\n      justify-content: center;\n      align-items: center;\n      font-family: ").concat(this.attrs.fontFamily, " !important;\n    }\n  \n    .line{\n      position: relative; \n      height: 0;\n      width: 3px;\n      justify-content: center;\n      background: ").concat(this.attrs.lineColor, " ;\n      margin-right: ").concat(size$1.gap, "rem;\n    \n    }\n    \n    .textClip{\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      font-size: ").concat(size$1.fontSizeLeft, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      height: ").concat(size$1.fontSizeLeft, "px;\n      \n    }\n  \n    .textClip span{\n      color : ").concat(this.attrs.textColor, ";\n      position: relative;\n      left : -").concat(this.attrs.width / 2, "px;\n      width : 100%;\n      height: ").concat(size$1.fontSizeLeft, "px;\n      align-items: center;\n      display: flex;\n    }\n  ");
    }
  }]);

  return RolingText;
}(MotorCortex.HTMLClip);

var RolingText_1 = RolingText;

var Anime$3 = MotorCortex.loadPlugin(index);

var Size$2 = function Size(borderWidth, borderHeight, fontSizeTitle, fontSizeSub, subGap, titleTop, subTop, titleContainerTop) {
  _classCallCheck(this, Size);

  this.borderWidth = borderWidth;
  this.borderHeight = borderHeight;
  this.fontSizeTitle = fontSizeTitle;
  this.fontSizeSub = fontSizeSub;
  this.subGap = subGap;
  this.titleTop = titleTop;
  this.subTop = subTop;
  this.titleContainerTop = titleContainerTop;
};

var size$2;

var SvgBorder = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SvgBorder, _MotorCortex$HTMLClip);

  var _super = _createSuper(SvgBorder);

  function SvgBorder() {
    _classCallCheck(this, SvgBorder);

    return _super.apply(this, arguments);
  }

  _createClass(SvgBorder, [{
    key: "buildTree",
    value: function buildTree() {
      var delayEnd = this.attrs.delayEnd || 0;
      var borderAnimete = new Anime$3.Anime({
        animatedAttrs: {
          strokeDashoffset: " -".concat(size$2.subGap, "px")
        },
        attrs: {}
      }, {
        duration: Math.round(this.attrs.duration * 0.28),
        selector: ".shape2",
        easing: "easeInOutQuart"
      });
      var titleAnimete = new Anime$3.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.12,
        selector: ".text"
      });
      var subAnimate = new Anime$3.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.12,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimate = new Anime$3.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.12,
        selector: ".slogan",
        easing: "easeInOutQuart"
      });
      var borderAnimeteLeft = new Anime$3.Anime({
        animatedAttrs: {
          strokeDashoffset: "-6000px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.24,
        selector: ".shape2"
      });
      var titleAnimeteLeft = new Anime$3.Anime({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".text"
      });
      var subAnimateLeft = new Anime$3.Anime({
        animatedAttrs: {
          left: "100%"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".sub",
        easing: "easeInOutQuart"
      });
      var sloganAnimateLeft = new Anime$3.Anime({
        animatedAttrs: {
          left: "150px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".slogan",
        easing: "easeInOutQuart"
      }); //

      this.addIncident(borderAnimete, 0);
      this.addIncident(titleAnimete, this.attrs.duration * 0.12);
      this.addIncident(subAnimate, this.attrs.duration * 0.24);
      this.addIncident(sloganAnimate, this.attrs.duration * 0.24);
      var grupMc = new MotorCortex.Group();
      grupMc.addIncident(borderAnimeteLeft, this.attrs.duration * 0.16);
      grupMc.addIncident(titleAnimeteLeft, this.attrs.duration * 0.08);
      grupMc.addIncident(subAnimateLeft, this.attrs.duration * 0.08);
      grupMc.addIncident(sloganAnimateLeft, this.attrs.duration * 0.08);

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, this.attrs.duration * 0.6 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size$2 = new Size$2(600, 70, "2rem", "1rem", 130, 50, 17, 50);
          break;

        case "M":
          size$2 = new Size$2(700, 90, "3rem", "2rem", 230, 50, 34, 70);
          break;

        case "L":
          size$2 = new Size$2(1000, 110, "3.5rem", "2.5rem", 250, 55, 45, 80);
          break;
      }

      return "\n    <div class=\"svg-wrapper\">\n    <svg height=\"".concat(size$2.borderHeight, "\" width=\"").concat(size$2.borderWidth, "\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect class=\"shape2\" height=\"").concat(size$2.borderHeight, "\" width=\"").concat(size$2.borderWidth, "\" />\n      </svg>\n      <div class=\"sub--container\"><div class=\"sub\">").concat(this.attrs.subTitle, "</div></div>\n      <div class=\"titleContainer\"><div class=\"text\">").concat(this.attrs.title, "</div></div>\n    <div class=\"sloganContainer\">\n      <div class=\"slogan\">").concat(this.attrs.slogan, "</div>\n    </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    body{\n     font-size: 62.5%;\n    }\n    .svg-wrapper {\n      position: relative;\n      top :10px;\n     \n      height: 100%;\n      color:  ".concat(this.attrs.textColor, ";\n      font-family: ").concat(this.attrs.fontFamily, " !important;\n    }\n    \n    .shape2 {\n      stroke-dasharray: 6000;\n      stroke-width: 5px;\n      fill: transparent;\n      stroke: ").concat(this.attrs.lineColor, ";\n      border-bottom: 5px solid black;\n      stroke-dashoffset: -6000;\n    }\n    \n    \n    .text {\n      font-size: ").concat(size$2.fontSizeTitle, ";\n      \n      letter-spacing: 8px;\n      position: relative;\n      top: ").concat(size$2.titleTop, "px;\n\n    }\n    \n    .sub--container {\n      position: absolute;\n      white-space: nowrap;\n      overflow: hidden;\n      left: 20px;\n      top: -7%;\n    }\n    .sloganContainer {\n      position: relative;\n      top: -30px;\n      left: 45%;\n      white-space: nowrap;\n      overflow: hidden;\n      width: 150px;\n    }\n    .titleContainer{\n      position: relative;\n      top: -").concat(size$2.titleContainerTop, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      width: ").concat(size$2.borderWidth, "px;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    \n    \n    .sub{\n      position: relative;\n      top: ").concat(size$2.subTop, "px;\n      font-size : ").concat(size$2.fontSizeSub, ";\n    }\n    \n    .slogan{\n      position: relative;\n      top: -").concat(size$2.subTop, "px;\n      font-size : ").concat(size$2.fontSizeSub, ";\n    }\n    \n      \n  ");
    }
  }]);

  return SvgBorder;
}(MotorCortex.HTMLClip);

var SvgBorder_1 = SvgBorder;

var Anime$4 = MotorCortex.loadPlugin(index);

var Size$3 = function Size(fontSize, fontSizeSub, lineSize, lineHeight) {
  _classCallCheck(this, Size);

  this.fontSize = fontSize;
  this.fontSizeSub = fontSizeSub;
  this.lineSize = lineSize;
  this.lineHeight = lineHeight;
};

var size$3;

var RotatadLineReveal = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(RotatadLineReveal, _MotorCortex$HTMLClip);

  var _super = _createSuper(RotatadLineReveal);

  function RotatadLineReveal() {
    _classCallCheck(this, RotatadLineReveal);

    return _super.apply(this, arguments);
  }

  _createClass(RotatadLineReveal, [{
    key: "buildTree",
    value: function buildTree() {
      var grupMc = new MotorCortex.Group();
      var lineRotateEnd = new Anime$4.Anime({
        animatedAttrs: {
          transform: {
            rotate: "0deg"
          }
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.24,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineMoveEnd = new Anime$4.Anime({
        animatedAttrs: {
          left: "".concat(this.attrs.leftEnd, "px")
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.4,
        selector: ".redLine",
        easing: "easeOutExpo"
      });
      var lineWidthEnd = new Anime$4.Anime({
        animatedAttrs: {
          width: "400px"
        },
        attrs: {
          easing: "easeOutExpo"
        }
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".redLine"
      });
      var moveText = new Anime$4.Anime({
        animatedAttrs: {
          left: "10px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.16,
        selector: ".text",
        easing: "easeOutExpo"
      });
      var moveSub = new Anime$4.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.08,
        selector: ".sub",
        easing: "easeOutExpo"
      });

      for (var i = 1; i <= 2; i++) {
        var moveTextOut = new Anime$4.Anime({
          animatedAttrs: {
            left: "-".concat(this.attrs.width, "px")
          },
          attrs: {}
        }, {
          duration: Math.round(this.attrs.duration * 0.34),
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        grupMc.addIncident(moveTextOut, this.attrs.duration * 0.625 + i * 100);
      }

      var lineHeight = new Anime$4.Anime({
        animatedAttrs: {
          height: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.08,
        selector: ".redLine",
        easing: "easeInSine"
      });
      this.addIncident(lineRotateEnd, 0);
      this.addIncident(lineMoveEnd, 0);
      this.addIncident(lineWidthEnd, this.attrs.duration * 0.24);
      this.addIncident(moveText, this.attrs.duration * 0.24);
      this.addIncident(moveSub, this.attrs.duration * 0.4);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(grupMc, delayEnd);
        this.addIncident(lineHeight, this.attrs.duration * 0.85 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size$3 = new Size$3("1.5rem", "1rem", "3.5rem", "55px");
          break;

        case "M":
          size$3 = new Size$3("2.5rem", "2rem", "5rem", "90px");
          break;

        case "L":
          size$3 = new Size$3("3.5rem", "2rem", "7rem", "100px");
          break;
      }

      return "\n    <div class=\"wrapper\">\n      <div class=\"redLine\">\n        <div class=\"text text1\"><div class=\"title \">".concat(this.attrs.title, "</div></div>\n        <div class=\"text text2\"><div class=\"sub\">").concat(this.attrs.subtitle, "</div></div>\n      </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .wrapper{\n      width:".concat(this.attrs.width, "px;\n      height:100%;\n      font-family: ").concat(this.attrs.fontFamily, " !important;\n    }\n     .redLine {\n      border-left: 2px solid ").concat(this.attrs.lineColor, ";\n      width: 0rem;\n      height: ").concat(size$3.lineHeight, ";\n      display: flex;\n      align-items: flex-start;\n      flex-direction: column;\n      transform: rotate(30deg);\n      position: relative;\n      left: 150%;\n      transform-origin: top left;\n      white-space: nowrap;\n      overflow: hidden;\n      color : ").concat(this.attrs.textColor, "\n    }\n    .title{\n      font-size: ").concat(size$3.fontSize, ";\n      font-weight: 600;\n    }\n    .sub{\n      font-size: ").concat(size$3.fontSizeSub, ";\n      top: -60px;\n      position: relative;\n    }\n\n    .text {\n      position: relative;\n      left: -50px;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n  ");
    }
  }]);

  return RotatadLineReveal;
}(MotorCortex.HTMLClip);

var RotatadLineReveal_1 = RotatadLineReveal;

var Anime$5 = MotorCortex.loadPlugin(index);

var Size$4 = function Size(svgWidth, svgHeight, lineSize) {
  _classCallCheck(this, Size);

  this.svgWidth = svgWidth;
  this.svgHeight = svgHeight;
  this.lineSize = lineSize;
};

var size$4;

var SvgDraw = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(SvgDraw, _MotorCortex$HTMLClip);

  var _super = _createSuper(SvgDraw);

  function SvgDraw() {
    _classCallCheck(this, SvgDraw);

    return _super.apply(this, arguments);
  }

  _createClass(SvgDraw, [{
    key: "buildTree",
    value: function buildTree() {
      var textDrow = new Anime$5.Anime({
        animatedAttrs: {
          strokeDashoffset: "0px"
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.75,
        selector: "svg path",
        easing: "easeInSine"
      });
      var textBigBack = new Anime$5.Anime({
        animatedAttrs: {
          transform: {
            scaleX: 1.3,
            scaleY: 1.3
          }
        }
      }, {
        duration: this.attrs.duration * 0.425,
        selector: "svg",
        id: "transform2",
        easing: "easeOutElastic"
      });
      var textErase = new Anime$5.Anime({
        animatedAttrs: {
          strokeDashoffset: this.attrs.strokeDashOffset
        },
        attrs: {}
      }, {
        duration: this.attrs.duration * 0.75,
        selector: "svg path",
        easing: "easeInSine"
      });
      this.addIncident(textDrow, 0);
      this.addIncident(textBigBack, this.attrs.duration * 0.75);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(textErase, this.attrs.duration * 0.95 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      switch (this.attrs.size) {
        case "S":
          size$4 = new Size$4(200, 100, "");
          break;

        case "M":
          size$4 = new Size$4(300, 200, "5rem");
          break;

        case "L":
          size$4 = new Size$4(500, 400, "7rem");
          break;
      }

      return "<div class=\"svg-wrapper\">".concat(this.attrs.svg, " </div>");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n    .svg-wrapper{\n      position: relative;\n      width: ".concat(size$4.svgWidth * 1.5, "px;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    svg{\n      width: ").concat(size$4.svgWidth, "px;\n      height: ").concat(size$4.svgHeight, "px;\n    }\n\n    .svgContainer{\n      height:100vh;\n    }\n    svg path\n    {\n      stroke-dasharray: ").concat(this.attrs.StrokeDashArray, ";\n      stroke-dashoffset: ").concat(this.attrs.strokeDashOffset, ";\n      \n    }\n    \n  ");
    }
  }]);

  return SvgDraw;
}(MotorCortex.HTMLClip);

var SvgDraw_1 = SvgDraw;

var Anime$6 = MotorCortex.loadPlugin(index);

var Circle = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(Circle, _MotorCortex$HTMLClip);

  var _super = _createSuper(Circle);

  function Circle() {
    _classCallCheck(this, Circle);

    return _super.apply(this, arguments);
  }

  _createClass(Circle, [{
    key: "buildTree",
    value: function buildTree() {
      var array = this.attrs.title.split("");
      var html3 = "";

      for (var i = 0; i < array.length; i++) {
        var html = "<span class='letter letter".concat(i + 1, "'>").concat(array[i], "</span>");
        html3 += html;
      }

      var word = new MotorCortex.HTMLClip({
        css: this.css,
        html: " <div class=\"wrapper\" >".concat(html3, " </div>"),
        selector: ".word"
      });
      this.addIncident(word, 0);
      var circleScale = new Anime$6.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width, "px"),
          height: "".concat(this.attrs.width, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".circle",
        easing: "easeOutExpo"
      });

      for (var _i = 0; _i < array.length; _i++) {
        var textAnimation = new Anime$6.Anime({
          animatedAttrs: {
            top: "0px",
            opacity: 1
          },
          attrs: {}
        }, {
          duration: 500,
          selector: ".letter" + (_i + 1),
          easing: "easeOutExpo"
        });
        word.addIncident(textAnimation, 500 + 100 * (_i + 1));
      }

      var circleScaleDown = new Anime$6.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.8, "px"),
          height: "".concat(this.attrs.width * 0.8, "px")
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      });
      var wrapperDown = new Anime$6.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.8, "px"),
          height: "".concat(this.attrs.width * 0.8, "px"),
          transform: {
            rotate: "10deg"
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".wrapper",
        easing: "easeOutElastic"
      });
      var maskDown = new Anime$6.Anime({
        animatedAttrs: {
          maskSize: "".concat(this.attrs.width * 0.8, "px"),
          transform: {
            rotate: "-10deg"
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle",
        easing: "easeOutElastic"
      });
      var subOut = new Anime$6.Anime({
        animatedAttrs: {
          top: "0px"
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".sub span",
        easing: "easeOutElastic"
      });
      var circleScaleDownEnd = new Anime$6.Anime({
        animatedAttrs: {
          transform: {
            scale: 0
          }
        },
        initialValues: {
          transform: {
            scale: 1
          }
        },
        attrs: {}
      }, {
        duration: 600,
        selector: ".circle,.sub span,.sub",
        easing: "easeOutElastic"
      });
      word.addIncident(wrapperDown, 2000);
      this.addIncident(circleScaleDown, 2000);
      this.addIncident(maskDown, 2000);
      this.addIncident(subOut, 2000);
      this.addIncident(circleScale, 0);
      var delayEnd = this.attrs.delayEnd || 0;

      if (!this.attrs.stopOnLast) {
        this.addIncident(circleScaleDownEnd, 3600 + delayEnd);
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\"  >\n    <div class=\"circle\">\n      <div class=\"word\">\n      </div>\n    </div>\n    <div class=\"sub\">\n          <span >".concat(this.attrs.subTitle, "</span>\n        </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: ".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.width, "px;\n      font-family: ").concat(this.attrs.fontFamily, " !important;\n    }\n    .circle{\n      width: 0px;\n      height: 0px;\n      background: ").concat(this.attrs.circleColor, ";\n      position: relative;\n      border-radius: 100%;\n      mask: url(./img.svg);\n      mask-position-y: 69px;\n      mask-size: 810px;\n    }  \n    .word{\n      overflow: hidden;\n      width: 9px;\n      height: 3px;\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n    }\n    \n    .letter{\n      font-size: ").concat(this.attrs.fontSize, "px;\n      color: ").concat(this.attrs.textColor, ";\n      left: 2.5px;\n      position: relative;\n      text-align: center;\n      top : ").concat(this.attrs.width, "px;\n      width: 100%;\n      background-color:#ffffff00\n      \n    }\n\n  .sub{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    top: 33%;\n    transform: rotate(-10deg);\n    width: 400px;\n    height: 400px;\n\n  }\n  .sub span{\n    font-size: ").concat(this.attrs.fontSize * 0.8, "px;\n    position: relative;\n    top:100%;\n    letter-spacing: 3px;\n  }\n\n\n  ");
    }
  }]);

  return Circle;
}(MotorCortex.HTMLClip);

var Circle_1 = Circle;

var Anime$7 = MotorCortex.loadPlugin(index);

var LogoBox = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(LogoBox, _MotorCortex$HTMLClip);

  var _super = _createSuper(LogoBox);

  function LogoBox() {
    _classCallCheck(this, LogoBox);

    return _super.apply(this, arguments);
  }

  _createClass(LogoBox, [{
    key: "buildTree",
    value: function buildTree() {
      var opacity = new Anime$7.Anime({
        animatedAttrs: {
          opacity: 1
        },
        attrs: {}
      }, {
        duration: 1,
        selector: ".redLineContainer"
      });
      var border = new Anime$7.Anime({
        animatedAttrs: {
          right: "0px"
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLine"
      });
      var conteiner = new Anime$7.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * 0.75 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 1000,
        selector: ".redLineContainer"
      });

      for (var i = 1; i <= 3; i++) {
        var textLeft = new Anime$7.Anime({
          animatedAttrs: {
            left: "0px"
          },
          attrs: {}
        }, {
          duration: 500 * i,
          selector: ".text" + i,
          easing: "easeOutExpo"
        });
        this.addIncident(textLeft, 500);
      }

      var conteinerMore = new Anime$7.Anime({
        animatedAttrs: {
          width: "".concat(this.attrs.width * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".redLineContainer"
      });
      var yellowW = new Anime$7.Anime({
        animatedAttrs: {
          width: "".concat(80 * this.attrs.size, "px")
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".yellow"
      });
      var end = new Anime$7.Anime({
        animatedAttrs: {
          width: "0%"
        },
        initialValues: {
          width: "100%"
        },
        attrs: {}
      }, {
        duration: 500,
        selector: ".wrapper"
      });
      this.addIncident(opacity, 0);
      this.addIncident(border, 0);
      this.addIncident(conteiner, 0);
      this.addIncident(conteinerMore, 1500);
      this.addIncident(yellowW, 1500);

      if (!this.attrs.stopOnLast) {
        this.addIncident(end, 3000);
      }
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n    <div class=\"onemore\">\n    <div class=\"redLineContainer\">\n      <div class=\"yellow\">\n        <div class=\"logo\"><img src=\"".concat(this.attrs.logoUrl, "\" alt=\"Italian Trulli\"></div>\n      </div>\n      <div class=\"redLine\">\n        <div class=\"text text1\">").concat(this.attrs.subTitle1, "</div>\n        <div class=\"text text2\">").concat(this.attrs.subTitle2, "</div>\n        <div class=\"text text3\">").concat(this.attrs.subTitle3, "</div>\n      </div>\n     \n    </div>\n    </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-family: ".concat(this.attrs.fontFamily, " !important;\n    }\n    .redLineContainer {\n      white-space: nowrap;\n      width: 0px;\n      overflow: hidden;\n      background: ").concat(this.attrs.textColor, ";\n      display: flex;\n      \n      justify-content: center;\n      align-content: center;\n      opacity: 0;\n      border: ").concat(1 * this.attrs.size, "px solid ").concat(this.attrs.textColor, ";\n    }\n    \n    .redLine {\n      position: relative;\n      right:  100px;\n      overflow: hidden;\n      background: ").concat(this.attrs.bgColor, ";\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      height: ").concat(70 * this.attrs.size, "px;\n    }\n    \n    .yellow{\n      width: 0px;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .logo img{\n      width: ").concat(50 * this.attrs.size, "px;\n    }\n    .logo{\n      display: flex;\n      align-items: center;\n    }\n    \n    .text{ \n      left: ").concat(-100 * this.attrs.size, "px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      height: ").concat(22 * this.attrs.size, "px;\n      padding-left: 8%;\n      color: ").concat(this.attrs.textColor, ";\n      font-size :").concat(14 * this.attrs.size, "px;\n    }\n\n  ");
    }
  }]);

  return LogoBox;
}(MotorCortex.HTMLClip);

var LogoBox_1 = LogoBox;

var Anime$8 = MotorCortex.loadPlugin(index);

var RightOpacity = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(RightOpacity, _MotorCortex$HTMLClip);

  var _super = _createSuper(RightOpacity);

  function RightOpacity() {
    _classCallCheck(this, RightOpacity);

    return _super.apply(this, arguments);
  }

  _createClass(RightOpacity, [{
    key: "buildTree",
    value: function buildTree() {
      var left = new Anime$8.Anime({
        animatedAttrs: {
          left: "@expression(index * ".concat(this.attrs.width / this.list.length, ")px")
        },
        initialValues: {
          left: "@expression((index * ".concat(this.attrs.width / this.list.length, ")+").concat(this.attrs.width / 2, ")px")
        }
      }, {
        duration: 1,
        selector: ".letter",
        delay: "@stagger(0, 0)"
      });
      this.addIncident(left, 0);
      var opacity = new Anime$8.Anime({
        animatedAttrs: {
          opacity: 1 // left: `@expression(index * ${this.attrs.width / this.list.length})px`

        },
        initialValues: {
          opacity: 0 // left: `@expression((index * ${this.attrs.width / this.list.length})+${this.attrs.width / 2})px`

        }
      }, {
        duration: 300,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: "@stagger(0, 300)"
      });
      this.addIncident(opacity, 10);
      var left2 = new Anime$8.Anime({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "".concat(this.attrs.width * 0.50, "px")
        }
      }, {
        duration: 300,
        selector: ".letter-wrapper",
        easing: "easeOutExpo" // delay: "@stagger(0, 300)"

      });
      this.addIncident(left2, 0);
      var leftLetter = new Anime$8.Anime({
        animatedAttrs: {
          left: "".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".letter",
        easing: "easeInQuad",
        delay: "@stagger(0, 300,0.5,easeInQuad,omni)"
      });
      this.addIncident(leftLetter, this.attrs.exitTime);
      var opacityback = new Anime$8.Anime({
        animatedAttrs: {
          opacity: 0
        }
      }, {
        duration: 300,
        selector: ".letter"
      });
      this.addIncident(opacityback, this.calculatedDuration - 300);
    }
  }, {
    key: "html",
    get: function get() {
      this.list;
      this.list = this.attrs.text.split("");
      var divList = this.list.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n    <div class=\"wrapper\">\n    <div class=\"letter-wrapper\">\n      ".concat(divList, "\n    </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      var stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
      return "\n    .wrapper{\n      width:".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .letter{\n      font-size:").concat(this.attrs.fontSize, "px;\n      color:").concat(this.attrs.color, ";\n      ").concat(stroke, "\n      text-transform:uppercase;\n      font-family: ").concat(this.attrs.fontFamily, ";\n      position: absolute;\n    }\n    .letter-wrapper{\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n  ");
    }
  }]);

  return RightOpacity;
}(MotorCortex.HTMLClip);

var RightOpacity_1 = RightOpacity;

var Anime$9 = MotorCortex.loadPlugin(index);

var FlushStroke = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(FlushStroke, _MotorCortex$HTMLClip);

  var _super = _createSuper(FlushStroke);

  function FlushStroke() {
    _classCallCheck(this, FlushStroke);

    return _super.apply(this, arguments);
  }

  _createClass(FlushStroke, [{
    key: "buildTree",
    value: function buildTree() {// const left = new Anime.Anime(
      //   {
      //     animatedAttrs: {
      //       color: `rgba(${this.attrs.strokeColor[0]},${this.attrs.strokeColor[1]},${this.attrs.strokeColor[2]},1)`
      //     },
      //     initialValues: {
      //       color: `rgba(${this.attrs.strokeColor[0]},${this.attrs.strokeColor[1]},${this.attrs.strokeColor[2]},0)`
      //     }
      //   },
      //   {
      //     duration: 150,
      //     selector: ".letter",
      //     delay: "@stagger(0, 300)"
      //   }
      // );
      // this.addIncident(left, 0)
    }
  }, {
    key: "html",
    get: function get() {
      var divList = this.attrs.text.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n    <div class=\"wrapper\">\n    \n      ".concat(divList, "\n    \n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width:".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n    }\n\n    .letter{\n      font-size:").concat(this.attrs.fontSize, "px;\n      color:rgba(").concat(this.attrs.strokeColor[0], ",").concat(this.attrs.strokeColor[1], ",").concat(this.attrs.strokeColor[2], ",0);\n      text-transform:uppercase;\n      font-family: ").concat(this.attrs.fontFamily, ";\n      -webkit-text-stroke:").concat(this.attrs.strokeSize, "px rgb(").concat(this.attrs.strokeColor[0], ",").concat(this.attrs.strokeColor[1], ",").concat(this.attrs.strokeColor[2], ");\n\n    }\n  ");
    }
  }]);

  return FlushStroke;
}(MotorCortex.HTMLClip);

var FlushStroke_1 = FlushStroke;

var Anime$a = MotorCortex.loadPlugin(index);

var LetterScale = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(LetterScale, _MotorCortex$HTMLClip);

  var _super = _createSuper(LetterScale);

  function LetterScale() {
    _classCallCheck(this, LetterScale);

    return _super.apply(this, arguments);
  }

  _createClass(LetterScale, [{
    key: "buildTree",
    value: function buildTree() {
      var left = new Anime$a.Anime({
        animatedAttrs: {
          fontSize: "".concat(this.attrs.fontSize, "px")
        },
        initialValues: {
          fontSize: "".concat(this.attrs.fontSize * 0.7, "px")
        }
      }, {
        duration: this.attrs.timing,
        selector: ".letter",
        easing: "easeOutExpo",
        delay: "@stagger(0, ".concat(this.attrs.timing, ",0.5,linear,omni)")
      });
      this.addIncident(left, 0);
    }
  }, {
    key: "html",
    get: function get() {
      this.list;
      this.list = this.attrs.text.split("");
      var divList = this.list.map(function (e, i) {
        return "<div class=\"letter letter-item-".concat(i, "\">").concat(e, "</div>");
      }).join("");
      return "\n    <div class=\"wrapper\">\n    <div class=\"letter-wrapper\">\n      ".concat(divList, "\n    </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      var stroke = this.attrs.stroke === true ? "-webkit-text-stroke:".concat(this.attrs.strokeSize, "px ").concat(this.attrs.strokeColor, ";") : "";
      return "\n    .wrapper{\n      width:".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .letter{\n      font-size:").concat(this.attrs.fontSize, "px;\n      color:").concat(this.attrs.color, ";\n      text-transform:uppercase;\n      font-family: ").concat(this.attrs.fontFamily, ";\n      position: relative;\n      ").concat(stroke, "\n    }\n    .letter-wrapper{\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n  ");
    }
  }]);

  return LetterScale;
}(MotorCortex.HTMLClip);

var LetterScale_1 = LetterScale;

var Anime$b = MotorCortex.loadPlugin(index);

var CircularText = /*#__PURE__*/function (_MotorCortex$HTMLClip) {
  _inherits(CircularText, _MotorCortex$HTMLClip);

  var _super = _createSuper(CircularText);

  function CircularText() {
    _classCallCheck(this, CircularText);

    return _super.apply(this, arguments);
  }

  _createClass(CircularText, [{
    key: "buildTree",
    value: function buildTree() {
      var left = new Anime$b.Anime({
        animatedAttrs: {
          transform: {
            rotate: "360deg"
          }
        }
      }, {
        duration: 1000 * this.attrs.timing,
        selector: ".circle svg",
        repeats: this.attrs.repeats
      });
      this.addIncident(left, 0);
    }
  }, {
    key: "html",
    get: function get() {
      return "\n    <div class=\"wrapper\">\n      <div class=\"circle\">\n        <svg viewBox=\"0 0 ".concat(this.attrs.viewBox, " ").concat(this.attrs.viewBox, "\">\n          <path d=\"M ").concat(this.attrs.viewBox / 2 - this.attrs.path, ",").concat(this.attrs.viewBox / 2, " a ").concat(this.attrs.path, ", ").concat(this.attrs.path, " 0 1, 1 0,1 z\" id=\"circular\" />\n        <text class=\"text\"><textPath xlink:href=\"#circular\">\n        ").concat(this.attrs.text, "\n          </textPath>\n        </text>\n        </svg>\n      </div>\n    </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .wrapper{\n      width:".concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-family: ").concat(this.attrs.fontFamily, " !important;\n    }\n\n    .circle path { fill: ").concat(this.attrs.fill, ";1px solid black; }\n\n    .circle {\n      width:").concat(this.attrs.width, "px;\n      height: ").concat(this.attrs.height, "px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      \n    }\n    .circle svg {\n      display: block;\n      overflow: visible;\n     \n     }\n    .text{\n      font-size: ").concat(this.attrs.fontSize, "px;\n    }\n    .circle text {\n      fill: ").concat(this.attrs.color, ";\n      font-family: ").concat(this.attrs.fontFamily, ";\n    }\n\n  ");
    }
  }]);

  return CircularText;
}(MotorCortex.HTMLClip);

var CircularText_1 = CircularText;

var _COLOR$1 = "color";
var RotatedLIneVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L", "XL"]
  },
  lineColor: {
    optional: true,
    type: _COLOR$1
  },
  textColor: {
    optional: true,
    type: _COLOR$1
  },
  subTitle1: {
    optional: false,
    type: "string"
  },
  subTitle2: {
    optional: false,
    type: "string"
  },
  subTitle3: {
    optional: false,
    type: "string"
  },
  title: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RolingTextVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L", "XL", "XXL", "XXXL"]
  },
  lineColor: {
    optional: true,
    type: _COLOR$1
  },
  textColor: {
    optional: true,
    type: _COLOR$1
  },
  subTitle1: {
    optional: false,
    type: "string"
  },
  subTitle2: {
    optional: false,
    type: "string"
  },
  subTitle3: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RotatadLineRevealVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR$1
  },
  textColor: {
    optional: true,
    type: _COLOR$1
  },
  title: {
    optional: false,
    type: "string"
  },
  subtitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  leftEnd: {
    optional: false,
    type: "number",
    min: 0
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SvgBorderVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR$1
  },
  textColor: {
    optional: true,
    type: _COLOR$1
  },
  title: {
    optional: false,
    type: "string"
  },
  slogan: {
    optional: false,
    type: "string"
  },
  subTitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var CircleVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  fontsize: {
    optional: true,
    type: "number",
    min: 1
  },
  circleColor: {
    optional: true,
    type: _COLOR$1
  },
  textColor: {
    optional: true,
    type: _COLOR$1
  },
  title: {
    optional: false,
    type: "string"
  },
  subTitle: {
    optional: false,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var SvgDrawVal = {
  duration: {
    optional: false,
    type: "number",
    min: 0
  },
  width: {
    optional: true,
    type: "number",
    min: 0
  },
  size: {
    type: "enum",
    values: ["S", "M", "L"]
  },
  lineColor: {
    optional: true,
    type: _COLOR$1
  },
  textColor: {
    optional: true,
    type: _COLOR$1
  },
  strokeDashOffset: {
    optional: true,
    type: "number"
  },
  StrokeDashArray: {
    optional: true,
    type: "number"
  },
  erase: {
    optional: true,
    type: "boolean"
  },
  svg: {
    optional: true,
    type: "string"
  },
  stopOnLast: {
    optional: false,
    type: "boolean"
  },
  delayEnd: {
    optional: true,
    type: "number",
    min: 0
  }
};
var RigthOpacityValidationVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  text: {
    optional: false,
    type: "string"
  },
  color: {
    optional: true,
    type: _COLOR$1
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  stroke: {
    optional: false,
    type: "boolean"
  },
  strokeSize: {
    optional: true,
    type: "number",
    min: 0
  },
  strokeColor: {
    optional: true,
    type: _COLOR$1
  },
  fontFamily: {
    optional: false,
    type: "string"
  },
  exitTime: {
    optional: false,
    type: "number",
    min: 0
  }
};
var LetterScaleValidationVal = {
  width: {
    optional: false,
    type: "number",
    min: 0
  },
  height: {
    optional: false,
    type: "number",
    min: 0
  },
  text: {
    optional: false,
    type: "string"
  },
  color: {
    optional: true,
    type: _COLOR$1
  },
  fontSize: {
    optional: false,
    type: "number",
    min: 0
  },
  stroke: {
    optional: false,
    type: "boolean"
  },
  strokeSize: {
    optional: true,
    type: "number",
    min: 0
  },
  strokeColor: {
    optional: true,
    type: _COLOR$1
  },
  fontFamily: {
    optional: false,
    type: "string"
  },
  timing: {
    optional: false,
    type: "number"
  }
};

var name$1 = "@kissmybutton/motorcortex-animetitles";
var version$1 = "1.1.5";

var index$1 = {
  npm_name: name$1,
  version: version$1,
  incidents: [{
    exportable: RotatedLine_1,
    name: "RotatedLine",
    attributesValidationRules: RotatedLIneVal
  }, {
    exportable: RolingText_1,
    name: "RolingText",
    attributesValidationRules: RolingTextVal
  }, {
    exportable: SvgBorder_1,
    name: "SvgBorder",
    attributesValidationRules: SvgBorderVal
  }, {
    exportable: RotatadLineReveal_1,
    name: "RotatadLineReveal",
    attributesValidationRules: RotatadLineRevealVal
  }, {
    exportable: SvgDraw_1,
    name: "SvgDraw",
    attributesValidationRules: SvgDrawVal
  }, {
    exportable: Circle_1,
    name: "Circle",
    attributesValidationRules: CircleVal
  }, {
    exportable: LogoBox_1,
    name: "LogoBox"
  }, {
    exportable: RightOpacity_1,
    name: "RightOpacity",
    attributesValidationRules: RigthOpacityValidationVal
  }, {
    exportable: FlushStroke_1,
    name: "FlushStroke" // attributesValidationRules: Circle

  }, {
    exportable: LetterScale_1,
    name: "LetterScale",
    attributesValidationRules: LetterScaleValidationVal
  }, {
    exportable: CircularText_1,
    name: "CircularText" // attributesValidationRules: CircularTextValidation

  }]
};

export default index$1;
