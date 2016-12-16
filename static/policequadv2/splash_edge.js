/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'splash_bg',
            type:'image',
            rect:['0px','0px','1014px','652px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"splash_bg.jpg",'0px','0px']
         },
         {
            id:'stars',
            type:'rect',
            rect:['-61','-100','auto','auto','auto','auto']
         },
         {
            id:'logo_ship',
            type:'image',
            rect:['131px','103px','227px','191px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_ship.png",'0px','0px']
         },
         {
            id:'earthNew',
            type:'image',
            rect:['346px','171px','306px','294px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"earthNew.png",'0px','0px']
         },
         {
            id:'logo_shapes',
            type:'image',
            rect:['486px','202px','251px','232px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_shapes.png",'0px','0px'],
            transform:[[],[],[],['-1']]
         },
         {
            id:'characterGlow',
            display:'none',
            type:'image',
            rect:['268px','43px','466px','602px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"characterGlow.png",'0px','0px']
         },
         {
            id:'shield_mid',
            display:'none',
            type:'image',
            rect:['387px','245px','239px','274px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"shield_mid.png",'0px','0px']
         },
         {
            id:'shield_left',
            display:'none',
            type:'image',
            rect:['346px','357px','220px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shield_left.png",'0px','0px']
         },
         {
            id:'shield_right',
            display:'none',
            type:'image',
            rect:['577px','357px','220px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shield_right.png",'0px','0px']
         },
         {
            id:'logoGlow',
            display:'none',
            type:'image',
            rect:['13px','109px','987px','370px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logoGlow.png",'0px','0px']
         },
         {
            id:'kata_new',
            display:'none',
            type:'image',
            rect:['425px','119px','112px','331px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kata_new.png",'0px','0px']
         },
         {
            id:'gio_new',
            display:'none',
            type:'image',
            rect:['497px','171px','91px','270px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gio_new.png",'0px','0px']
         },
         {
            id:'police_text',
            display:'none',
            type:'image',
            rect:['204px','315px','348px','152px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"police_text.png",'0px','0px']
         },
         {
            id:'quad_text',
            display:'none',
            type:'image',
            rect:['501px','326px','283px','157px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"quad_text.png",'0px','0px']
         },
         {
            id:'btn_Start',
            type:'rect',
            rect:['832','598','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         },
         {
            id:'btn_Instructions',
            type:'rect',
            rect:['12','598','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'stars',
            symbolName:'stars'
         },
         {
            id:'btn_Start',
            symbolName:'btn_Start'
         },
         {
            id:'btn_Instructions',
            symbolName:'btn_Instructions'
         }
         ]
      },
   states: {
      "Base State": {
         "${_shield_left}": [
            ["style", "top", '357px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.5703125'],
            ["style", "left", '363px'],
            ["style", "width", '89px']
         ],
         "${_characterGlow}": [
            ["style", "top", '220px'],
            ["style", "height", '331px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '373px'],
            ["style", "width", '256px']
         ],
         "${_police_text}": [
            ["style", "top", '315px'],
            ["style", "opacity", '1'],
            ["style", "left", '204px'],
            ["style", "display", 'none']
         ],
         "${_earthNew}": [
            ["style", "top", '171px'],
            ["transform", "rotateZ", '10deg'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '346px']
         ],
         "${_quad_text}": [
            ["style", "top", '326px'],
            ["style", "left", '501px'],
            ["style", "display", 'none']
         ],
         "${_stars}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0']
         ],
         "${_shield_right}": [
            ["style", "top", '357px'],
            ["style", "height", '100px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '553px'],
            ["style", "width", '89px']
         ],
         "${_kata_new}": [
            ["style", "top", '156px'],
            ["style", "height", '294px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.328125'],
            ["style", "left", '425px'],
            ["style", "width", '112px']
         ],
         "${_shield_mid}": [
            ["style", "top", '313px'],
            ["style", "height", '133px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '441px'],
            ["style", "width", '116px']
         ],
         "${_logoGlow}": [
            ["style", "top", '222px'],
            ["style", "height", '370px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '177px'],
            ["style", "width", '654px']
         ],
         "${_btn_Start}": [
            ["style", "left", '1022px'],
            ["style", "cursor", 'pointer']
         ],
         "${_splash_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_logo_ship}": [
            ["style", "top", '103px'],
            ["transform", "scaleY", '0.23348'],
            ["transform", "rotateZ", '10deg'],
            ["transform", "scaleX", '0.23348'],
            ["style", "opacity", '0'],
            ["style", "left", '131px'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_gio_new}": [
            ["style", "top", '209px'],
            ["style", "height", '232px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '497px'],
            ["style", "width", '91px']
         ],
         "${_btn_Instructions}": [
            ["style", "display", 'block'],
            ["style", "left", '-177px'],
            ["style", "overflow", 'visible']
         ],
         "${_logo_shapes}": [
            ["style", "top", '202px'],
            ["transform", "rotateZ", '20deg'],
            ["transform", "scaleX", '-1'],
            ["style", "opacity", '0'],
            ["style", "left", '486px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid350", tween: [ "style", "${_quad_text}", "display", 'block', { fromValue: 'none'}], position: 1205, duration: 0 },
            { id: "eid407", tween: [ "style", "${_characterGlow}", "width", '589px', { fromValue: '256px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid425", tween: [ "style", "${_characterGlow}", "width", '508px', { fromValue: '589px'}], position: 1750, duration: 130, easing: "easeInOutQuad" },
            { id: "eid405", tween: [ "style", "${_characterGlow}", "height", '760px', { fromValue: '331px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid423", tween: [ "style", "${_characterGlow}", "height", '655px', { fromValue: '760px'}], position: 1750, duration: 130, easing: "easeInOutQuad" },
            { id: "eid376", tween: [ "style", "${_kata_new}", "height", '331px', { fromValue: '294px'}], position: 1360, duration: 140, easing: "easeOutCirc" },
            { id: "eid304", tween: [ "style", "${_shield_mid}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
            { id: "eid303", tween: [ "style", "${_earthNew}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutCirc" },
            { id: "eid406", tween: [ "style", "${_characterGlow}", "top", '-54px', { fromValue: '220px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid424", tween: [ "style", "${_characterGlow}", "top", '14px', { fromValue: '-54px'}], position: 1750, duration: 130, easing: "easeInOutQuad" },
            { id: "eid390", tween: [ "style", "${_gio_new}", "height", '270px', { fromValue: '232px'}], position: 1500, duration: 130, easing: "easeOutCirc" },
            { id: "eid339", tween: [ "style", "${_shield_right}", "top", '357px', { fromValue: '357px'}], position: 1065, duration: 0 },
            { id: "eid341", tween: [ "style", "${_shield_right}", "top", '357px', { fromValue: '357px'}], position: 1205, duration: 0 },
            { id: "eid3", tween: [ "style", "${_splash_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCirc" },
            { id: "eid316", tween: [ "style", "${_shield_mid}", "left", '387px', { fromValue: '441px'}], position: 1000, duration: 165 },
            { id: "eid321", tween: [ "style", "${_shield_left}", "display", 'block', { fromValue: 'none'}], position: 1065, duration: 0 },
            { id: "eid347", tween: [ "style", "${_shield_right}", "opacity", '1', { fromValue: '0'}], position: 1065, duration: 140 },
            { id: "eid345", tween: [ "style", "${_shield_right}", "width", '220px', { fromValue: '89px'}], position: 1065, duration: 140 },
            { id: "eid360", tween: [ "style", "${_logoGlow}", "top", '220px', { fromValue: '222px'}], position: 1120, duration: 85 },
            { id: "eid383", tween: [ "style", "${_gio_new}", "width", '91px', { fromValue: '91px'}], position: 1500, duration: 0, easing: "easeOutCirc" },
            { id: "eid387", tween: [ "style", "${_gio_new}", "width", '91px', { fromValue: '91px'}], position: 1630, duration: 0, easing: "easeOutCirc" },
            { id: "eid337", tween: [ "style", "${_shield_right}", "height", '100px', { fromValue: '100px'}], position: 1065, duration: 0 },
            { id: "eid343", tween: [ "style", "${_shield_right}", "height", '100px', { fromValue: '100px'}], position: 1205, duration: 0 },
            { id: "eid327", tween: [ "style", "${_shield_left}", "opacity", '1', { fromValue: '0'}], position: 1065, duration: 140 },
            { id: "eid481", tween: [ "style", "${_stars}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid378", tween: [ "style", "${_kata_new}", "opacity", '1', { fromValue: '0.328125'}], position: 1360, duration: 140, easing: "easeOutCirc" },
            { id: "eid478", tween: [ "style", "${_stars}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_shield_mid}", "top", '245px', { fromValue: '313px'}], position: 1000, duration: 165 },
            { id: "eid38", tween: [ "transform", "${_logo_shapes}", "rotateZ", '0deg', { fromValue: '20deg'}], position: 750, duration: 250, easing: "easeOutExpo" },
            { id: "eid348", tween: [ "style", "${_police_text}", "display", 'block', { fromValue: 'none'}], position: 1205, duration: 0 },
            { id: "eid351", tween: [ "style", "${_logoGlow}", "display", 'block', { fromValue: 'none'}], position: 1120, duration: 0 },
            { id: "eid84", tween: [ "style", "${_btn_Instructions}", "left", '12px', { fromValue: '-177px'}], position: 2000, duration: 210, easing: "easeOutBack" },
            { id: "eid346", tween: [ "style", "${_shield_right}", "left", '577px', { fromValue: '553px'}], position: 1065, duration: 140 },
            { id: "eid22", tween: [ "style", "${_logo_shapes}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid334", tween: [ "style", "${_shield_right}", "display", 'block', { fromValue: 'none'}], position: 1065, duration: 0 },
            { id: "eid408", tween: [ "style", "${_characterGlow}", "left", '212px', { fromValue: '373px'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid426", tween: [ "style", "${_characterGlow}", "left", '253px', { fromValue: '212px'}], position: 1750, duration: 130, easing: "easeInOutQuad" },
            { id: "eid313", tween: [ "style", "${_shield_mid}", "height", '274px', { fromValue: '133px'}], position: 1000, duration: 165 },
            { id: "eid409", tween: [ "style", "${_characterGlow}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250, easing: "easeInOutQuad" },
            { id: "eid320", tween: [ "style", "${_shield_mid}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 165 },
            { id: "eid393", tween: [ "style", "${_characterGlow}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid532", tween: [ "style", "${_btn_Instructions}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "transform", "${_logo_ship}", "scaleX", '1', { fromValue: '0.23348'}], position: 250, duration: 360, easing: "easeInExpo" },
            { id: "eid301", tween: [ "transform", "${_earthNew}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 0, duration: 750, easing: "easeOutCirc" },
            { id: "eid14", tween: [ "style", "${_logo_ship}", "-webkit-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid549", tween: [ "style", "${_logo_ship}", "-moz-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid550", tween: [ "style", "${_logo_ship}", "-ms-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid551", tween: [ "style", "${_logo_ship}", "msTransformOrigin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid552", tween: [ "style", "${_logo_ship}", "-o-transform-origin", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 250, duration: 0 },
            { id: "eid47", tween: [ "transform", "${_logo_ship}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 250, duration: 360, easing: "easeInExpo" },
            { id: "eid392", tween: [ "style", "${_gio_new}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 130, easing: "easeOutCirc" },
            { id: "eid379", tween: [ "style", "${_gio_new}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutCirc" },
            { id: "eid368", tween: [ "style", "${_kata_new}", "width", '112px', { fromValue: '112px'}], position: 1360, duration: 0 },
            { id: "eid372", tween: [ "style", "${_kata_new}", "width", '112px', { fromValue: '112px'}], position: 1500, duration: 0 },
            { id: "eid362", tween: [ "style", "${_logoGlow}", "left", '13px', { fromValue: '177px'}], position: 1120, duration: 85 },
            { id: "eid333", tween: [ "style", "${_shield_left}", "left", '217px', { fromValue: '363px'}], position: 1065, duration: 140 },
            { id: "eid366", tween: [ "style", "${_kata_new}", "left", '425px', { fromValue: '425px'}], position: 1360, duration: 0 },
            { id: "eid370", tween: [ "style", "${_kata_new}", "left", '425px', { fromValue: '425px'}], position: 1500, duration: 0 },
            { id: "eid85", tween: [ "style", "${_btn_Start}", "left", '832px', { fromValue: '1022px'}], position: 2250, duration: 210, easing: "easeOutBack" },
            { id: "eid364", tween: [ "style", "${_kata_new}", "display", 'block', { fromValue: 'none'}], position: 1360, duration: 0 },
            { id: "eid328", tween: [ "style", "${_shield_left}", "width", '220px', { fromValue: '89px'}], position: 1065, duration: 140 },
            { id: "eid377", tween: [ "style", "${_kata_new}", "top", '119px', { fromValue: '156px'}], position: 1360, duration: 140, easing: "easeOutCirc" },
            { id: "eid381", tween: [ "style", "${_gio_new}", "left", '497px', { fromValue: '497px'}], position: 1500, duration: 0, easing: "easeOutCirc" },
            { id: "eid385", tween: [ "style", "${_gio_new}", "left", '497px', { fromValue: '497px'}], position: 1630, duration: 0, easing: "easeOutCirc" },
            { id: "eid363", tween: [ "style", "${_logoGlow}", "opacity", '1', { fromValue: '0'}], position: 1120, duration: 85 },
            { id: "eid349", tween: [ "style", "${_police_text}", "opacity", '1', { fromValue: '1'}], position: 1205, duration: 0 },
            { id: "eid361", tween: [ "style", "${_logoGlow}", "width", '987px', { fromValue: '654px'}], position: 1120, duration: 85 },
            { id: "eid19", tween: [ "style", "${_logo_ship}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 360, easing: "easeInExpo" },
            { id: "eid330", tween: [ "style", "${_shield_left}", "top", '357px', { fromValue: '357px'}], position: 1065, duration: 0 },
            { id: "eid332", tween: [ "style", "${_shield_left}", "top", '357px', { fromValue: '357px'}], position: 1205, duration: 0 },
            { id: "eid315", tween: [ "style", "${_shield_mid}", "width", '239px', { fromValue: '116px'}], position: 1000, duration: 165 },
            { id: "eid296", tween: [ "style", "${_earthNew}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid16", tween: [ "transform", "${_logo_ship}", "scaleY", '1', { fromValue: '0.23348'}], position: 250, duration: 360, easing: "easeInExpo" },
            { id: "eid391", tween: [ "style", "${_gio_new}", "top", '171px', { fromValue: '209px'}], position: 1500, duration: 130, easing: "easeOutCirc" }         ]
      }
   }
},
"btn_Start": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'btn_Start_up',
      type: 'image',
      rect: ['0px','0px','170px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_Start_up.png','0px','0px']
   },
   {
      rect: ['27px','7px','auto','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',20,'rgba(0,0,0,1)','700','none',''],
      id: 'Text',
      text: 'Let\'s Start',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-weight", '700'],
            ["style", "left", '27px'],
            ["style", "font-size", '20px']
         ],
         "${_btn_Start_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '170px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn_Instructions": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'btn_Instructions_up',
      type: 'image',
      rect: ['0px','0px','170px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_Instructions_up.png','0px','0px']
   },
   {
      rect: ['32px','11px','auto','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','700','none',''],
      id: 'Text',
      text: 'Instructions',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '11px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '32px'],
            ["style", "font-size", '16px']
         ],
         "${_btn_Instructions_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '170px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"stars": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      transform: [],
      display: 'none',
      rect: ['0px','0px','1135px','851px','auto','auto'],
      id: 'stars_newCopy2',
      fill: ['rgba(0,0,0,0)','images/stars_new.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_stars_newCopy2}": [
            ["transform", "rotateZ", '-28deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '1px'],
            ["style", "width", '1135px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1.33829'],
            ["style", "height", '851px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '851px'],
            ["style", "width", '1135px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5500,
         autoPlay: true,
         timeline: [
            { id: "eid464", tween: [ "style", "${_stars_newCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "style", "${_stars_newCopy2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid514", tween: [ "style", "${_stars_newCopy2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "transform", "${_stars_newCopy2}", "rotateZ", '0deg', { fromValue: '-28deg'}], position: 0, duration: 4000, easing: "easeOutSine" },
            { id: "eid473", tween: [ "transform", "${_stars_newCopy2}", "scaleY", '1.34', { fromValue: '1.33829'}], position: 0, duration: 4000, easing: "easeOutSine" },
            { id: "eid468", tween: [ "transform", "${_stars_newCopy2}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "splash");
