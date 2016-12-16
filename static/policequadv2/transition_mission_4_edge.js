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
            id:'level_03',
            type:'rect',
            rect:['350','260','auto','auto','auto','auto'],
            userClass:"lvlScreen"
         },
         {
            id:'level_02',
            type:'rect',
            rect:['2','0','auto','auto','auto','auto'],
            userClass:"lvlScreen"
         }],
         symbolInstances: [
         {
            id:'level_03',
            symbolName:'level_03'
         },
         {
            id:'level_02',
            symbolName:'level_02'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_level_02}": [
            ["style", "left", '0px']
         ],
         "${_level_03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
            { id: "eid5", tween: [ "style", "${_level_03}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid4", tween: [ "style", "${_level_03}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid1", tween: [ "style", "${_level_02}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"btn_back": {
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
      rect: ['-8px','-8px','66px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'btn_back',
      type: 'image',
      rect: ['0px','0px','49px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_back_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Ellipse}": [
            ["style", "height", '66px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "width", '66px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '49px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"M4_BG04b": {
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
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      rect: ['155px','277px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'Hide your frame from Rahaka’s army.<br><br>Then try and capture their teleporting frame before they locate yours. Locating all four vertices of a frame deactivates it.<br><br>Click next to move onto the instruction screen.<br><br>',
      align: 'left',
      rect: ['152px','286px','298px','124px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',34,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6Copy',
      text: 'MISSION BRIEF',
      align: 'center',
      rect: ['155px','227px','288px','39px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_Text6}": [
            ["style", "top", '286px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '152px'],
            ["style", "width", '298px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "width", '288px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "font-size", '34px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"M4_BG03": {
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
      id: 'BG04',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG03.jpg','0px','0px']
   },
   {
      rect: ['353px','83px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['-253']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['42px','29px','270px','57px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'left',
      id: 'Text',
      text: 'We have deactivated quite a few frames, Geo.',
      rect: ['51px','36px','246px','69px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['677px','494px','35px','104px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[0,0],['-127']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['709px','373px','270px','85px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'left',
      id: 'TextCopy2',
      text: 'Alert the team about this. Now let’s go for it; we must deactivate all Ra-haka’s frames..',
      rect: ['718px','387px','246px','69px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['298px','446px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['-253']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['23px','369px','477px','59px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'left',
      id: 'TextCopy',
      text: 'Yes, but Ra-haka is using different kinds of frames to confuse us.    Human Team Member: Yes, look at the different frames our c-Ray cameras have captured.<br>',
      rect: ['30px','373px','461px','69px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '29px'],
            ["style", "height", '57px'],
            ["style", "left", '42px'],
            ["style", "width", '270px']
         ],
         "${_Text}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '51px'],
            ["style", "width", '246px'],
            ["style", "top", '36px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '69px'],
            ["style", "font-size", '14px']
         ],
         "${_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '59px'],
            ["style", "top", '369px'],
            ["style", "left", '23px'],
            ["style", "width", '477px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "height", '85px'],
            ["style", "top", '373px'],
            ["style", "left", '709px'],
            ["style", "width", '270px']
         ],
         "${_TextCopy2}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '718px'],
            ["style", "width", '246px'],
            ["style", "top", '387px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '14px'],
            ["style", "height", '69px']
         ],
         "${_pointerCopy2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-127deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '677px'],
            ["style", "top", '494px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-253deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '353px'],
            ["style", "top", '83px']
         ],
         "${_TextCopy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '30px'],
            ["style", "width", '461px'],
            ["style", "top", '373px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '14px'],
            ["style", "height", '69px']
         ],
         "${_pointerCopy}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-253deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '298px'],
            ["style", "top", '446px']
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
"level_02": {
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
      id: 'M4_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG03b',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'mainSND',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick mainSND',
      id: 'btn_nextCopy',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'mainSND',
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'M4_BG03b',
      symbolName: 'M4_BG03b'
   },
   {
      id: 'M4_BG03',
      symbolName: 'M4_BG03'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M4_BG03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M4_BG03b}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '304px'],
            ["style", "left", '461px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_M4_BG03b}", "left", '0px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 }         ]
      }
   }
},
"btn_next": {
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
      rect: ['-8px','-8px','66px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'btn_next',
      type: 'image',
      rect: ['0px','0px','49px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_next_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_next}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '66px'],
            ["style", "width", '66px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '49px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"level_03": {
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
      id: 'M4_BG04',
      type: 'rect',
      rect: ['419','297','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG04B',
      type: 'rect',
      rect: ['-2px','-8px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'btn_next',
      rect: ['953px','593px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'btnClick mainSND'
   },
   {
      id: 'btn_nextCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      rect: ['8px','593px','auto','auto','auto','auto'],
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      userClass: 'mainSND'
   },
   {
      type: 'rect',
      id: 'btn_nextCopy2',
      rect: ['953px','593px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'mainSND'
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M4_BG04',
      symbolName: 'M4_BG04'
   },
   {
      id: 'M4_BG04B',
      symbolName: 'M4_BG04b'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_nextCopy2',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_M4_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M4_BG04B}": [
            ["style", "left", '1014px'],
            ["style", "top", '-8px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_btn_nextCopy2}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px'],
            ["style", "top", '593px']
         ],
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "display", 'none'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px'],
            ["style", "top", '593px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid9", tween: [ "style", "${_M4_BG04}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid169", tween: [ "style", "${_btn_nextCopy2}", "left", '953px', { fromValue: '953px'}], position: 250, duration: 0 },
            { id: "eid170", tween: [ "style", "${_btn_nextCopy2}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid171", tween: [ "style", "${_btn_nextCopy2}", "top", '593px', { fromValue: '593px'}], position: 250, duration: 0 },
            { id: "eid172", tween: [ "style", "${_btn_nextCopy2}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid20", tween: [ "style", "${_M4_BG04B}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_btn_next}", "left", '459px', { fromValue: '953px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid8", tween: [ "style", "${_M4_BG04}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid30", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid168", tween: [ "style", "${_btn_nextCopy2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"M4_BG04": {
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
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG04.jpg','0px','0px']
   },
   {
      rect: ['271px','-30px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[0,0],['-148'],['0','-32'],['0.689','0.916']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['219px','55px','275px','59px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['203px','24px','291px','27px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['224px','58px','270px','69px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy5',
      text: 'I wanted to thank you for saving me. Geo. I was in the frame you deactivated in the airfield.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['763px','-74px','35px','104px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[0,0],['-148'],['0','-32'],['0.689','0.916']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['715px','25px','206px','44px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['720px','29px','193px','41px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy7',
      text: 'With you as IBI Chief, we are all safe on Earth.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['852px','327px','35px','104px','auto','auto'],
      id: 'pointerCopy7',
      transform: [[0,0],['-121'],['0','-32'],['0.689','0.916']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['813px','331px','177px','114px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['821px','335px','169px','104px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy9',
      text: 'Yes. But we can outsmart him. I am sure we can deactivate the remaining frames while we hide ours better.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['246px','187px','35px','104px','auto','auto'],
      id: 'pointerCopy3',
      transform: [[0,0],['37'],['0','-32'],['0.689','0.398']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['26px','275px','275px','27px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['33px','280px','270px','16px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy6',
      text: 'It’s an honour, Sir, and a pleasure.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['185px','234px','35px','104px','auto','auto'],
      id: 'pointerCopy8',
      transform: [[0,0],['199'],['0','-32'],['0.472','0.733']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['20px','331px','397px','27px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['27px','336px','390px','16px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy10',
      text: 'But Ra-haka comes up with newer and newer frames. ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['391px','515px','35px','104px','auto','auto'],
      id: 'pointerCopy9',
      transform: [[0,0],['402'],['0','-32'],['0.472','0.733']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['174px','600px','408px','27px','auto','auto'],
      id: 'RoundRectCopy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['185px','605px','390px','16px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy11',
      text: 'His army is also getting smarter at finding our frames.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['756px','143px','24px','148px','auto','auto'],
      id: 'pointerCopy6',
      transform: [[0,0],['37'],['0','-32'],['0.689','0.398']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['529px','275px','275px','27px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['536px','280px','270px','16px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy8',
      text: 'Thank you, Sir, for your appreciation.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['208px','28px','312px','16px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy4',
      text: 'The President of Quadri has called Geo.',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy11}": [
            ["style", "top", '605px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '185px'],
            ["style", "width", '390px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '24px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["style", "left", '203px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '291px']
         ],
         "${_pointerCopy6}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '37deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '756px'],
            ["style", "width", '24px'],
            ["style", "top", '143px'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "height", '148px'],
            ["transform", "scaleY", '0.39756']
         ],
         "${_RoundRectCopy8}": [
            ["style", "height", '114px'],
            ["style", "top", '331px'],
            ["style", "left", '813px'],
            ["style", "width", '177px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '-30px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-148deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '271px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRectCopy7}": [
            ["style", "height", '27px'],
            ["style", "top", '275px'],
            ["style", "left", '529px'],
            ["style", "width", '275px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '336px'],
            ["style", "width", '390px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '27px'],
            ["style", "font-size", '14px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '-74px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-148deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '763px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_TextCopy4}": [
            ["style", "top", '28px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '208px'],
            ["style", "width", '312px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '58px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '69px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '224px'],
            ["style", "width", '270px']
         ],
         "${_RoundRectCopy10}": [
            ["style", "height", '27px'],
            ["style", "top", '600px'],
            ["style", "left", '174px'],
            ["style", "width", '408px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '58px'],
            ["style", "width", '270px'],
            ["style", "text-align", 'left'],
            ["style", "height", '69px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '224px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '280px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '33px'],
            ["style", "width", '270px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '275px'],
            ["style", "height", '27px'],
            ["style", "left", '26px'],
            ["style", "width", '275px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '29px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '720px'],
            ["style", "width", '193px']
         ],
         "${_TextCopy9}": [
            ["style", "top", '335px'],
            ["style", "width", '169px'],
            ["style", "text-align", 'left'],
            ["style", "height", '104px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '821px'],
            ["style", "font-size", '14px']
         ],
         "${_pointerCopy7}": [
            ["style", "top", '327px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-121deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '852px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy6}": [
            ["style", "top", '25px'],
            ["style", "height", '44px'],
            ["style", "left", '715px'],
            ["style", "width", '206px']
         ],
         "${_TextCopy8}": [
            ["style", "top", '280px'],
            ["style", "width", '270px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '536px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy9}": [
            ["style", "height", '27px'],
            ["style", "top", '331px'],
            ["style", "left", '20px'],
            ["style", "width", '397px']
         ],
         "${_pointerCopy8}": [
            ["style", "top", '234px'],
            ["transform", "scaleY", '0.73321'],
            ["transform", "rotateZ", '199deg'],
            ["transform", "scaleX", '0.47233'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '185px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy3}": [
            ["style", "top", '187px'],
            ["transform", "scaleY", '0.39756'],
            ["transform", "rotateZ", '37deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '246px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_pointerCopy9}": [
            ["style", "top", '515px'],
            ["transform", "scaleY", '0.73321'],
            ["transform", "rotateZ", '402deg'],
            ["transform", "scaleX", '0.47233'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '391px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_RoundRectCopy5}": [
            ["style", "height", '59px'],
            ["style", "top", '55px'],
            ["style", "left", '219px'],
            ["style", "width", '275px']
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
"M4_BG03b": {
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
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      rect: ['155px','277px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['150px','278px','303px','149px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'Hide your frame from Rahaka’s army.<br><br>Then try and capture their teleporting frame before they locate yours. Locating all four vertices of a frame deactivates it.<br><br>Click next to move onto the instruction Screen.<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['155px','227px','288px','39px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',34,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: 'MISSION BRIEF',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '278px'],
            ["style", "text-align", 'left'],
            ["style", "height", '149px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '150px'],
            ["style", "width", '303px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "font-size", '34px'],
            ["style", "text-align", 'center'],
            ["style", "height", '39px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "trans4");
