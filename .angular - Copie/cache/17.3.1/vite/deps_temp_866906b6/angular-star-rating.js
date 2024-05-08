import {
  NG_VALUE_ACCESSOR
} from "./chunk-KNWSHWUE.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ML5P54LS.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-DL5KAAXZ.js";
import "./chunk-NE62TFAF.js";
import "./chunk-YU6WUDW3.js";
import "./chunk-A5BXWNBG.js";
import "./chunk-LXGWTRJR.js";
import "./chunk-SJQFV65P.js";

// node_modules/angular-star-rating/fesm2022/angular-star-rating.mjs
function StarRatingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.labelText);
  }
}
function StarRatingComponent_div_3_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("star-empty ", ctx_r0.classEmpty, "");
  }
}
function StarRatingComponent_div_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("star-half ", ctx_r0.classHalf, "");
  }
}
function StarRatingComponent_div_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("star-filled ", ctx_r0.classFilled, "");
  }
}
function StarRatingComponent_div_3__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 10);
    ɵɵelement(1, "use", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r0.pathEmpty, null, "xlink");
  }
}
function StarRatingComponent_div_3__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 12);
    ɵɵelement(1, "use", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r0.pathHalf, null, "xlink");
  }
}
function StarRatingComponent_div_3__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 13);
    ɵɵelement(1, "use", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r0.pathFilled, null, "xlink");
  }
}
function StarRatingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("mouseenter", function StarRatingComponent_div_3_Template_div_mouseenter_0_listener() {
      const star_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onStarHover(star_r3));
    })("click", function StarRatingComponent_div_3_Template_div_click_0_listener() {
      const star_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onStarClicked(star_r3));
    });
    ɵɵtemplate(1, StarRatingComponent_div_3_i_1_Template, 1, 3, "i", 6)(2, StarRatingComponent_div_3_i_2_Template, 1, 3, "i", 6)(3, StarRatingComponent_div_3_i_3_Template, 1, 3, "i", 6)(4, StarRatingComponent_div_3__svg_svg_4_Template, 2, 1, "svg", 7)(5, StarRatingComponent_div_3__svg_svg_5_Template, 2, 1, "svg", 8)(6, StarRatingComponent_div_3__svg_svg_6_Template, 2, 1, "svg", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.svgVisible());
  }
}
function StarRatingControlComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.labelText);
  }
}
function StarRatingControlComponent_div_3_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("star-empty ", ctx_r0.classEmpty, "");
  }
}
function StarRatingControlComponent_div_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("star-half ", ctx_r0.classHalf, "");
  }
}
function StarRatingControlComponent_div_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("star-filled ", ctx_r0.classFilled, "");
  }
}
function StarRatingControlComponent_div_3__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 10);
    ɵɵelement(1, "use", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r0.pathEmpty, null, "xlink");
  }
}
function StarRatingControlComponent_div_3__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 12);
    ɵɵelement(1, "use", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r0.pathHalf, null, "xlink");
  }
}
function StarRatingControlComponent_div_3__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 13);
    ɵɵelement(1, "use", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("href", ctx_r0.pathFilled, null, "xlink");
  }
}
function StarRatingControlComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("mouseenter", function StarRatingControlComponent_div_3_Template_div_mouseenter_0_listener() {
      const star_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onStarHover(star_r3));
    })("click", function StarRatingControlComponent_div_3_Template_div_click_0_listener() {
      const star_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onStarClicked(star_r3));
    });
    ɵɵtemplate(1, StarRatingControlComponent_div_3_i_1_Template, 1, 3, "i", 6)(2, StarRatingControlComponent_div_3_i_2_Template, 1, 3, "i", 6)(3, StarRatingControlComponent_div_3_i_3_Template, 1, 3, "i", 6)(4, StarRatingControlComponent_div_3__svg_svg_4_Template, 2, 1, "svg", 7)(5, StarRatingControlComponent_div_3__svg_svg_5_Template, 2, 1, "svg", 8)(6, StarRatingControlComponent_div_3__svg_svg_6_Template, 2, 1, "svg", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.svgVisible());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.svgVisible());
  }
}
var StarRatingConfig = class {
  // binding defaults
  numOfStars;
  size;
  speed;
  labelPosition;
  starType;
  staticColor;
  getColor;
  getHalfStarVisible;
  // statics
  classEmpty;
  classHalf;
  classFilled;
  assetsPath;
  svgPath;
  svgEmptySymbolId;
  svgHalfSymbolId;
  svgFilledSymbolId;
  svgPathEmpty;
  svgPathHalf;
  svgPathFilled;
};
var StarRatingUtils = class {
  //Static methods
  ///////////////////////////////////////////////////////////////////////////////////////////
  /*
   * getStarsArray
   *
   * returns an array of increasing numbers starting at 1
   *
   * @param numOfStars
   * @returns {Array}
   */
  static getStarsArray(numOfStars) {
    const stars = [];
    for (let i = 0; i < numOfStars; i++) {
      stars.push(i + 1);
    }
    return stars;
  }
  /*
   * getHalfStarVisible
   *
   * Returns true if there should be a half star visible, and false if not.
   *
   * @param rating
   * @returns {boolean}
   */
  static getHalfStarVisible(rating) {
    return Math.abs(rating % 1) > 0;
  }
  /*
   * getColor
   *
   * The default function for color calculation
   * based on the current rating and the the number of stars possible.
   * If a staticColor is set the function will use it as return value.
   *
   * @param rating
   * @param numOfStars
   * @param staticColor
   * @returns {starRatingColor}
   */
  static getColor(rating, numOfStars, staticColor) {
    rating = rating || 0;
    if (staticColor) {
      return staticColor;
    }
    const fractionSize = numOfStars / 3;
    let color = "default";
    if (rating > 0) {
      color = "negative";
    }
    if (rating > fractionSize) {
      color = "ok";
    }
    if (rating > fractionSize * 2) {
      color = "positive";
    }
    return color;
  }
  /*
   * isDigitKeyEventCode
   * detects digit key event sodes
   * @param eventCode
   * @returns {boolean}
   */
  static isDigitKeyEventCode(eventCode) {
    return eventCode.indexOf("Digit") === 0;
  }
};
var StarRatingConfigService = class {
  _classEmpty = "default-star-empty-icon";
  get classEmpty() {
    return this._classEmpty;
  }
  set classEmpty(classEmpty) {
    this._classEmpty = classEmpty;
  }
  _classHalf = "default-star-half-icon";
  get classHalf() {
    return this._classHalf;
  }
  set classHalf(classHalf) {
    this._classHalf = classHalf;
  }
  _classFilled = "default-star-filled-icon";
  get classFilled() {
    return this._classFilled;
  }
  set classFilled(classFilled) {
    this._classFilled = classFilled;
  }
  _numOfStars = 5;
  get numOfStars() {
    return this._numOfStars;
  }
  set numOfStars(numOfStars) {
    this._numOfStars = numOfStars;
  }
  _size = "medium";
  get size() {
    return this._size;
  }
  set size(size) {
    this._size = size;
  }
  _staticColor;
  get staticColor() {
    return this._staticColor;
  }
  set staticColor(value) {
    this._staticColor = value;
  }
  _labelPosition = "left";
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(labelPosition) {
    this._labelPosition = labelPosition;
  }
  _speed = "noticeable";
  get speed() {
    return this._speed;
  }
  set speed(speed) {
    this._speed = speed;
  }
  _starType = "svg";
  get starType() {
    return this._starType;
  }
  set starType(starType) {
    this._starType = starType;
  }
  _assetsPath = "assets/images/";
  get assetsPath() {
    return this._assetsPath;
  }
  set assetsPath(assetsPath) {
    this._assetsPath = assetsPath;
  }
  _svgPath = this.assetsPath + "star-rating.icons.svg";
  get svgPath() {
    return this._svgPath;
  }
  set svgPath(svgPath) {
    this._svgPath = svgPath;
  }
  _svgEmptySymbolId = "star-empty";
  get svgEmptySymbolId() {
    return this._svgEmptySymbolId;
  }
  set svgEmptySymbolId(svgEmptySymbolId) {
    this._svgEmptySymbolId = svgEmptySymbolId;
  }
  _svgHalfSymbolId = "star-half";
  get svgHalfSymbolId() {
    return this._svgHalfSymbolId;
  }
  set svgHalfSymbolId(svgHalfSymbolId) {
    this._svgHalfSymbolId = svgHalfSymbolId;
  }
  _svgFilledSymbolId = "star-filled";
  get svgFilledSymbolId() {
    return this._svgFilledSymbolId;
  }
  set svgFilledSymbolId(svgFilledSymbolId) {
    this._svgFilledSymbolId = svgFilledSymbolId;
  }
  _svgPathEmpty = this.svgPath + "#" + this.svgEmptySymbolId;
  get svgPathEmpty() {
    return this._svgPathEmpty;
  }
  set svgPathEmpty(svgPathEmpty) {
    this._svgPathEmpty = svgPathEmpty;
  }
  _svgPathHalf = this.svgPath + "#" + this.svgHalfSymbolId;
  get svgPathHalf() {
    return this._svgPathHalf;
  }
  set svgPathHalf(svgPathHalf) {
    this._svgPathHalf = svgPathHalf;
  }
  _svgPathFilled = this.svgPath + "#" + this.svgFilledSymbolId;
  get svgPathFilled() {
    return this._svgPathFilled;
  }
  set svgPathFilled(svgPathFilled) {
    this._svgPathFilled = svgPathFilled;
  }
  getColor(rating, numOfStars, staticColor) {
    rating = rating || 0;
    if (staticColor) {
      return staticColor;
    }
    const fractionSize = numOfStars / 3;
    let color = "default";
    if (rating > 0) {
      color = "negative";
    }
    if (rating > fractionSize) {
      color = "ok";
    }
    if (rating > fractionSize * 2) {
      color = "positive";
    }
    return color;
  }
  getHalfStarVisible(rating) {
    return Math.abs(rating % 1) > 0;
  }
};
var StarRating = class _StarRating {
  config;
  //CTRL ONLY
  ///////////////////////////////////////////////////////////////////////////////////////////
  classEmpty;
  classHalf;
  classFilled;
  pathEmpty;
  pathHalf;
  pathFilled;
  color;
  stars;
  ratingAsInteger;
  halfStarVisible;
  /**
   * showHalfStars
   */
  _showHalfStars;
  get showHalfStars() {
    return this._showHalfStars;
  }
  set showHalfStars(value) {
    this._showHalfStars = !!value;
    this.setHalfStarVisible();
  }
  /**
   * getColor
   */
  getColor;
  /////////////////////////////////////////////
  /**
   * getHalfStarVisible
   */
  getHalfStarVisible;
  /////////////////////////////////////////////
  //Inputs
  ///////////////////////////////////////////////////////////////////////////////////////////
  /**
   * id property to identify the DOM element
   */
  _id;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || "";
  }
  /////////////////////////////////////////////
  /**
   * focus
   */
  _focus;
  get focus() {
    return this._focus;
  }
  set focus(value) {
    this._focus = !!value;
  }
  /////////////////////////////////////////////
  /**
   * labelText
   */
  _labelText;
  get labelText() {
    return this._labelText;
  }
  set labelText(value) {
    this._labelText = value;
  }
  /////////////////////////////////////////////
  /**
   * labelPosition
   */
  _labelPosition;
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(value) {
    this._labelPosition = value || this.config.labelPosition;
  }
  /////////////////////////////////////////////
  /**
   * labelVisible
   */
  _labelVisible;
  get labelVisible() {
    return this._labelVisible;
  }
  set labelVisible(value) {
    this._labelVisible = !!value;
  }
  /////////////////////////////////////////////
  /**
   * hoverEnabled
   */
  _hoverEnabled;
  get hoverEnabled() {
    return this._hoverEnabled;
  }
  set hoverEnabled(value) {
    this._hoverEnabled = value !== void 0 ? !!value : false;
  }
  /////////////////////////////////////////////
  /**
   * staticColor
   */
  _staticColor;
  get staticColor() {
    return this._staticColor || this.config.staticColor || void 0;
  }
  set staticColor(value) {
    this._staticColor = value;
    this.setColor();
  }
  /////////////////////////////////////////////
  /**
   * direction
   */
  _direction;
  get direction() {
    return this._direction;
  }
  set direction(value) {
    this._direction = value || void 0;
  }
  /////////////////////////////////////////////
  /**
   * numOfStars
   */
  _numOfStars;
  get numOfStars() {
    return this._numOfStars;
  }
  set numOfStars(value) {
    this._numOfStars = value > 0 ? value : this.config.numOfStars;
    this.stars = StarRatingUtils.getStarsArray(this.numOfStars);
    this.setColor();
  }
  /////////////////////////////////////////////
  /**
   * hoverRating
   */
  _hoverRating;
  get hoverRating() {
    return this._hoverRating;
  }
  set hoverRating(value) {
    this._hoverRating = value > 0 ? value : 0;
  }
  /////////////////////////////////////////////
  /**
   * speed
   */
  _speed;
  get speed() {
    return this._speed;
  }
  set speed(value) {
    this._speed = value || this.config.speed;
  }
  /////////////////////////////////////////////
  /**
   * size
   */
  _size;
  get size() {
    return this._size || this.config.size;
  }
  set size(value) {
    this._size = value;
  }
  /////////////////////////////////////////////
  /**
   * starType
   */
  _starType;
  get starType() {
    return this._starType || this.config.starType;
  }
  set starType(value) {
    this._starType = value;
  }
  /////////////////////////////////////////////
  /**
   * space
   */
  _space;
  get space() {
    return this._space;
  }
  set space(value) {
    this._space = value;
  }
  /////////////////////////////////////////////
  /**
   * readOnly
   */
  _readOnly;
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(value) {
    this._readOnly = !!value;
  }
  /////////////////////////////////////////////
  /**
   * disabled
   */
  _disabled;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = !!value;
  }
  /////////////////////////////////////////////
  _step;
  get step() {
    return this._step;
  }
  set step(value) {
    this._step = value > 0 ? value : 1;
  }
  /////////////////////////////////////////////
  /**
   * rating
   */
  _rating;
  get rating() {
    return this._rating;
  }
  set rating(value) {
    this.setRating(value);
  }
  /**
   * setRating
   * I use a setter function instead of a set method to enable overrides for this function.
   * @param value
   */
  setRating(value) {
    let newRating = 0;
    if (value >= 0 && value <= this.numOfStars) {
      newRating = value;
    }
    if (value > this.numOfStars) {
      newRating = this.numOfStars;
    }
    this._rating = newRating;
    this.ratingAsInteger = parseInt(this._rating?.toString(), 10);
    this.setHalfStarVisible();
    this.setColor();
  }
  constructor(config) {
    this.config = config;
    this.classEmpty = this.config.classEmpty;
    this.classHalf = this.config.classHalf;
    this.classFilled = this.config.classFilled;
    this.pathEmpty = this.config.svgPathEmpty;
    this.pathHalf = this.config.svgPathHalf;
    this.pathFilled = this.config.svgPathFilled;
    if ("getColor" in this.config && typeof this.config.getColor === "function") {
      this.getColor = this.config.getColor;
    }
    if ("getHalfStarVisible" in this.config && typeof this.config.getHalfStarVisible === "function") {
      this.getHalfStarVisible = this.config.getHalfStarVisible;
    }
    this.numOfStars = this.config.numOfStars;
    this.rating = 0;
    this.step = 1;
  }
  svgVisible() {
    return this.starType === "svg";
  }
  interactionPossible() {
    return !this.readOnly && !this.disabled;
  }
  setColor(useHoverValue = false) {
    const ratingValue = useHoverValue ? this.hoverRating : this.rating;
    if (typeof this.getColor === "function") {
      this.color = this.getColor(ratingValue, this.numOfStars, this.staticColor);
    } else {
      this.color = StarRatingUtils.getColor(ratingValue, this.numOfStars, this.staticColor);
    }
  }
  setHalfStarVisible() {
    if (this.showHalfStars) {
      if (typeof this.getHalfStarVisible === "function") {
        this.halfStarVisible = this.getHalfStarVisible(this.rating);
      } else {
        this.halfStarVisible = StarRatingUtils.getHalfStarVisible(this.rating);
      }
    } else {
      this.halfStarVisible = false;
    }
  }
  getComponentClassNames() {
    const classNames = [];
    classNames.push(this.rating ? "value-" + this.ratingAsInteger : "value-0");
    classNames.push(this.halfStarVisible ? "half" : "");
    classNames.push(this.hoverEnabled ? "hover" : "");
    const hoverRating = this.hoverRating ? "hover-" + this.hoverRating : "hover-0";
    classNames.push(this.hoverEnabled ? hoverRating : "");
    classNames.push(this.space ? "space-" + this.space : "");
    classNames.push(this.labelPosition ? "label-" + this.labelPosition : "");
    classNames.push(this.color ? "color-" + this.color : "");
    classNames.push(this.starType ? "star-" + this.starType : "");
    classNames.push(this.speed);
    classNames.push(this.size);
    classNames.push(this.readOnly ? "read-only" : "");
    classNames.push(this.disabled ? "disabled" : "");
    classNames.push(this.direction ? "direction-" + this.direction : "");
    return classNames.join(" ");
  }
  increment() {
    const absDiff = Math.abs(this.rating % this.step);
    this.rating = this.rating + (absDiff > 0 ? this.step - absDiff : this.step);
  }
  decrement() {
    const absDiff = Math.abs(this.rating % this.step);
    this.rating = this.rating - (absDiff > 0 ? absDiff : this.step);
  }
  reset() {
    this.rating = 0;
  }
  static ɵfac = function StarRating_Factory(t) {
    return new (t || _StarRating)(ɵɵdirectiveInject(StarRatingConfigService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StarRating,
    selectors: [["placeholder-star-rating"]],
    inputs: {
      showHalfStars: "showHalfStars",
      id: "id",
      focus: "focus",
      labelText: "labelText",
      labelPosition: "labelPosition",
      labelVisible: "labelVisible",
      hoverEnabled: "hoverEnabled",
      staticColor: "staticColor",
      direction: "direction",
      numOfStars: "numOfStars",
      hoverRating: "hoverRating",
      speed: "speed",
      size: "size",
      starType: "starType",
      space: "space",
      readOnly: "readOnly",
      disabled: "disabled",
      step: "step",
      rating: "rating"
    },
    decls: 0,
    vars: 0,
    template: function StarRating_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRating, [{
    type: Component,
    args: [{
      // Metadata needed for Angular.
      template: ``,
      selector: "placeholder-star-rating"
    }]
  }], function() {
    return [{
      type: StarRatingConfigService
    }];
  }, {
    showHalfStars: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    focus: [{
      type: Input
    }],
    labelText: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    labelVisible: [{
      type: Input
    }],
    hoverEnabled: [{
      type: Input
    }],
    staticColor: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    numOfStars: [{
      type: Input
    }],
    hoverRating: [{
      type: Input
    }],
    speed: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    starType: [{
      type: Input
    }],
    space: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    rating: [{
      type: Input
    }]
  });
})();
var StarRatingComponent = class _StarRatingComponent extends StarRating {
  getHalfStarVisible = (rating) => false;
  // @ts-ignore
  getColor;
  starClickChange = new EventEmitter();
  ratingChange = new EventEmitter();
  hoverRatingChange = new EventEmitter();
  saveOnClick($event) {
    if (this.starClickChange) {
      this.starClickChange.emit($event);
    }
  }
  saveOnRatingChange($event) {
    if (this.ratingChange) {
      this.ratingChange.emit($event);
    }
  }
  saveOnHover($event) {
    if (this.hoverRatingChange) {
      this.hoverRatingChange.emit($event);
    }
  }
  /**ACCESSIBILITY **/
  //Keyboard events
  onKeyDown(event) {
    if (!this.interactionPossible()) {
      return;
    }
    const handlers = {
      //Decrement
      Minus: () => this.decrement(),
      ArrowDown: () => this.decrement(),
      ArrowLeft: () => this.decrement(),
      //Increment
      Plus: () => this.increment(),
      ArrowRight: () => this.increment(),
      ArrowUp: () => this.increment(),
      //Reset
      Backspace: () => this.reset(),
      Delete: () => this.reset(),
      Digit0: () => this.reset()
    };
    const handleDigits = (eventCode) => {
      const dStr = "Digit";
      const digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
      this.rating = digit;
    };
    if (handlers[event["code"]] || StarRatingUtils.isDigitKeyEventCode(event["code"])) {
      if (StarRatingUtils.isDigitKeyEventCode(event["code"])) {
        handleDigits(event["code"]);
      } else {
        handlers[event["code"]]();
      }
      event.preventDefault();
      event.stopPropagation();
    }
  }
  //Hover events
  onStarHover(rating) {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }
    this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
    this.setColor(true);
    const $event = {
      hoverRating: this.hoverRating
    };
    this.saveOnHover($event);
  }
  onStopHover() {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }
    this.hoverRating = 0;
    this.setColor();
  }
  constructor(config) {
    super(config);
  }
  //Overrides
  setRating(value) {
    const initValue = this.rating;
    super.setRating(value);
    if (initValue !== this.rating) {
      const $event = {
        rating: this.rating
      };
      this.saveOnRatingChange($event);
    }
  }
  /**
   * onStarClicked
   *
   * Is fired when a star is clicked. And updated the rating value.
   * This function returns if the disabled or readOnly
   * property is set. If provided it emits the onClick event
   * handler with the actual rating value.
   *
   * @param rating
   */
  onStarClicked(rating) {
    if (!this.interactionPossible()) {
      return;
    }
    this.rating = rating;
    const onClickEventObject = {
      rating: this.rating
    };
    this.saveOnClick(onClickEventObject);
  }
  static ɵfac = function StarRatingComponent_Factory(t) {
    return new (t || _StarRatingComponent)(ɵɵdirectiveInject(StarRatingConfigService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StarRatingComponent,
    selectors: [["star-rating"]],
    inputs: {
      getHalfStarVisible: "getHalfStarVisible",
      getColor: "getColor"
    },
    outputs: {
      starClickChange: "starClickChange",
      ratingChange: "ratingChange",
      hoverRatingChange: "hoverRatingChange"
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 6,
    consts: [["tabindex", "0", 3, "keydown", "mouseleave", "id"], ["class", "label-value", 4, "ngIf"], [1, "star-container"], ["class", "star", 3, "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "label-value"], [1, "star", 3, "mouseenter", "click"], [3, "class", 4, "ngIf"], ["class", "star-empty", 4, "ngIf"], ["class", "star-half", 4, "ngIf"], ["class", "star-filled", 4, "ngIf"], [1, "star-empty"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], [1, "star-half"], [1, "star-filled"]],
    template: function StarRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("keydown", function StarRatingComponent_Template_div_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("mouseleave", function StarRatingComponent_Template_div_mouseleave_0_listener() {
          return ctx.onStopHover();
        });
        ɵɵtemplate(1, StarRatingComponent_div_1_Template, 2, 1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, StarRatingComponent_div_3_Template, 7, 6, "div", 3);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMapInterpolate1("rating ", ctx.getComponentClassNames(), "");
        ɵɵpropertyInterpolate("id", ctx.id);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.labelText);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.stars);
      }
    },
    dependencies: [NgForOf, NgIf],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingComponent, [{
    type: Component,
    args: [{
      selector: "star-rating",
      template: '<div id="{{id}}" class="rating {{getComponentClassNames()}}" tabindex="0"\n  (keydown)="onKeyDown($event)" (mouseleave)="onStopHover()">\n  <div *ngIf="labelText" class="label-value">{{labelText}}</div>\n  <div class="star-container">\n    <div class="star" (mouseenter)="onStarHover(star)"\n      *ngFor="let star of stars" (click)="onStarClicked(star)">\n      <i *ngIf="!svgVisible()" class="star-empty {{classEmpty}}"></i>\n      <i *ngIf="!svgVisible()" class="star-half {{classHalf}}"></i>\n      <i *ngIf="!svgVisible()" class="star-filled {{classFilled}}"></i>\n      <svg *ngIf="svgVisible()" class="star-empty">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink"\n          [attr.xlink:href]="pathEmpty"></use>\n      </svg>\n      <svg *ngIf="svgVisible()" class="star-half">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink"\n          [attr.xlink:href]="pathHalf"></use>\n      </svg>\n      <svg *ngIf="svgVisible()" class="star-filled">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink"\n          [attr.xlink:href]="pathFilled"></use>\n      </svg>\n    </div>\n  </div>\n</div>\n'
    }]
  }], function() {
    return [{
      type: StarRatingConfigService
    }];
  }, {
    getHalfStarVisible: [{
      type: Input
    }],
    getColor: [{
      type: Input
    }],
    starClickChange: [{
      type: Output
    }],
    ratingChange: [{
      type: Output
    }],
    hoverRatingChange: [{
      type: Output
    }]
  });
})();
var STAR_RATING_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StarRatingControlComponent),
  multi: true
};
var StarRatingControlComponent = class _StarRatingControlComponent extends StarRating {
  starClickChange = new EventEmitter();
  ratingChange = new EventEmitter();
  hoverRatingChange = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/ban-types
  onTouch;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onModelChange;
  onModelChangeRegistered = false;
  onTouchRegistered = false;
  saveOnClick($event) {
    if (this.starClickChange) {
      this.starClickChange.emit($event);
    }
  }
  saveOnRatingChange($event) {
    if (this.ratingChange) {
      this.ratingChange.emit($event);
    }
  }
  saveOnHover($event) {
    if (this.hoverRatingChange) {
      this.hoverRatingChange.emit($event);
    }
  }
  saveOnTouch() {
    if (this.onTouchRegistered) {
      this.onTouch();
    }
  }
  saveOnModelChange(value) {
    if (this.onModelChangeRegistered) {
      this.onModelChange(value);
    }
  }
  /**ACCESSIBILITY **/
  //Keyboard events
  onKeyDown(event) {
    if (!this.interactionPossible()) {
      return;
    }
    const handlers = {
      //Decrement
      Minus: () => this.decrement(),
      ArrowDown: () => this.decrement(),
      ArrowLeft: () => this.decrement(),
      //Increment
      Plus: () => this.increment(),
      ArrowRight: () => this.increment(),
      ArrowUp: () => this.increment(),
      //Reset
      Backspace: () => this.reset(),
      Delete: () => this.reset(),
      Digit0: () => this.reset()
    };
    const handleDigits = (eventCode) => {
      const dStr = "Digit";
      const digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
      this.rating = digit;
    };
    if (handlers[event["code"]] || StarRatingUtils.isDigitKeyEventCode(event["code"])) {
      if (StarRatingUtils.isDigitKeyEventCode(event["code"])) {
        handleDigits(event["code"]);
      } else {
        handlers[event["code"]]();
      }
      event.preventDefault();
      event.stopPropagation();
    }
    this.saveOnTouch();
  }
  //Focus events
  onBlur(event) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.saveOnTouch();
  }
  onFocus(event) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.saveOnTouch();
  }
  //Hover events
  onStarHover(rating) {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }
    this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
    const $event = {
      hoverRating: this.hoverRating
    };
    this.saveOnHover($event);
  }
  /**Form Control - ControlValueAccessor implementation**/
  writeValue(obj) {
    this.rating = obj;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
    this.onModelChangeRegistered = true;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
    this.onTouchRegistered = true;
  }
  constructor(config) {
    super(config);
  }
  //Overrides
  setRating(value) {
    const initValue = this.rating;
    super.setRating(value);
    if (initValue !== this.rating) {
      const $event = {
        rating: this.rating
      };
      this.saveOnRatingChange($event);
      this.saveOnModelChange(this.rating);
    }
  }
  /**
   * onStarClicked
   *
   * Is fired when a star is clicked. And updated the rating value.
   * This function returns if the disabled or readOnly
   * property is set. If provided it emits the onClick event
   * handler with the actual rating value.
   *
   * @param rating
   */
  onStarClicked(rating) {
    if (!this.interactionPossible()) {
      return;
    }
    this.rating = rating;
    const onClickEventObject = {
      rating: this.rating
    };
    this.saveOnClick(onClickEventObject);
  }
  static ɵfac = function StarRatingControlComponent_Factory(t) {
    return new (t || _StarRatingControlComponent)(ɵɵdirectiveInject(StarRatingConfigService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StarRatingControlComponent,
    selectors: [["star-rating-control"]],
    outputs: {
      starClickChange: "starClickChange",
      ratingChange: "ratingChange",
      hoverRatingChange: "hoverRatingChange"
    },
    features: [ɵɵProvidersFeature([STAR_RATING_CONTROL_ACCESSOR]), ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 6,
    consts: [["tabindex", "0", 3, "keydown", "blur", "focus", "mouseleave", "id"], ["class", "label-value", 4, "ngIf"], [1, "star-container"], ["class", "star", 3, "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "label-value"], [1, "star", 3, "mouseenter", "click"], [3, "class", 4, "ngIf"], ["class", "star-empty", 4, "ngIf"], ["class", "star-half", 4, "ngIf"], ["class", "star-filled", 4, "ngIf"], [1, "star-empty"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], [1, "star-half"], [1, "star-filled"]],
    template: function StarRatingControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("keydown", function StarRatingControlComponent_Template_div_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("blur", function StarRatingControlComponent_Template_div_blur_0_listener($event) {
          return ctx.onBlur($event);
        })("focus", function StarRatingControlComponent_Template_div_focus_0_listener($event) {
          return ctx.onFocus($event);
        })("mouseleave", function StarRatingControlComponent_Template_div_mouseleave_0_listener() {
          return ctx.onStarHover(0);
        });
        ɵɵtemplate(1, StarRatingControlComponent_div_1_Template, 2, 1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, StarRatingControlComponent_div_3_Template, 7, 6, "div", 3);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMapInterpolate1("rating ", ctx.getComponentClassNames(), "");
        ɵɵpropertyInterpolate("id", ctx.id);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.labelText);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.stars);
      }
    },
    dependencies: [NgForOf, NgIf],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingControlComponent, [{
    type: Component,
    args: [{
      selector: "star-rating-control",
      providers: [STAR_RATING_CONTROL_ACCESSOR],
      template: '<div id="{{id}}" class="rating {{getComponentClassNames()}}" tabindex="0"\n  (keydown)="onKeyDown($event)" (blur)="onBlur($event)"\n  (focus)="onFocus($event)" (mouseleave)="onStarHover(0)">\n  <div *ngIf="labelText" class="label-value">{{labelText}}</div>\n  <div class="star-container">\n    <div class="star" (mouseenter)="onStarHover(star)"\n      *ngFor="let star of stars" (click)="onStarClicked(star)">\n      <i *ngIf="!svgVisible()" class="star-empty {{classEmpty}}"></i>\n      <i *ngIf="!svgVisible()" class="star-half {{classHalf}}"></i>\n      <i *ngIf="!svgVisible()" class="star-filled {{classFilled}}"></i>\n      <svg *ngIf="svgVisible()" class="star-empty">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink"\n          [attr.xlink:href]="pathEmpty"></use>\n      </svg>\n      <svg *ngIf="svgVisible()" class="star-half">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink"\n          [attr.xlink:href]="pathHalf"></use>\n      </svg>\n      <svg *ngIf="svgVisible()" class="star-filled">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink"\n          [attr.xlink:href]="pathFilled"></use>\n      </svg>\n    </div>\n  </div>\n</div>\n'
    }]
  }], function() {
    return [{
      type: StarRatingConfigService
    }];
  }, {
    starClickChange: [{
      type: Output
    }],
    ratingChange: [{
      type: Output
    }],
    hoverRatingChange: [{
      type: Output
    }]
  });
})();
var DECLARATIONS = [StarRatingComponent, StarRatingControlComponent];
var EXPORTS = [DECLARATIONS];
var StarRatingModule = class _StarRatingModule {
  static forRoot() {
    return {
      ngModule: _StarRatingModule,
      providers: [StarRatingConfigService]
    };
  }
  static forChild() {
    return {
      ngModule: _StarRatingModule,
      providers: []
    };
  }
  static ɵfac = function StarRatingModule_Factory(t) {
    return new (t || _StarRatingModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _StarRatingModule,
    declarations: [StarRatingComponent, StarRatingControlComponent],
    imports: [CommonModule],
    exports: [StarRatingComponent, StarRatingControlComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [DECLARATIONS],
      exports: [EXPORTS]
    }]
  }], null, null);
})();
export {
  StarRating,
  StarRatingComponent,
  StarRatingConfig,
  StarRatingConfigService,
  StarRatingControlComponent,
  StarRatingModule,
  StarRatingUtils
};
//# sourceMappingURL=angular-star-rating.js.map
