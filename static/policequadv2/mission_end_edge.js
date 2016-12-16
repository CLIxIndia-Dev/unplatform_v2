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
            id:'Mission1_end',
            type:'rect',
            rect:['-340px','0px','auto','auto','auto','auto'],
            userClass:"end1"
         },
         {
            id:'Mission2_end',
            type:'rect',
            rect:['-340','0','auto','auto','auto','auto'],
            userClass:"end1"
         },
         {
            id:'Mission3_end',
            type:'rect',
            rect:['-340px','0px','auto','auto','auto','auto'],
            userClass:"end1"
         },
         {
            id:'Mission4_end',
            type:'rect',
            rect:['-340px','0px','auto','auto','auto','auto'],
            userClass:"end1"
         }],
         symbolInstances: [
         {
            id:'Mission1_end',
            symbolName:'Mission1_end'
         },
         {
            id:'Mission4_end',
            symbolName:'Mission4_end'
         },
         {
            id:'Mission2_end',
            symbolName:'Mission2_end'
         },
         {
            id:'Mission3_end',
            symbolName:'Mission3_end'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Mission4_end}": [
            ["style", "left", '-340px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px'],
            ["style", "height", '652px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Mission1_end}": [
            ["style", "left", '-340px'],
            ["style", "top", '0px']
         ],
         "${_Mission3_end}": [
            ["style", "left", '-340px'],
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
         ]
      }
   }
},
"M02": {
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
      id: 'BG15',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG15.jpg','0px','0px']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['66px','84px','280','194','auto','auto'],
      c: [
      {
         rect: ['0px','-11px','232px','90px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['156px','-39px','35px','104px','auto','auto'],
         id: 'pointer',
         transform: [[0,0],['142'],[],['1','1.44']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['19px','0px','193px','79px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none',''],
         id: 'Text',
         text: 'We\'ve rounded up the ringleaders. Now our water is safe. Time for some rest, Geo. <br>',
         align: 'center',
         type: 'text'
      }]
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['721px','339px','204','139','auto','auto'],
      c: [
      {
         rect: ['55px','76px','149px','63px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['111px','2px','35px','104px','auto','auto'],
         id: 'pointerCopy',
         transform: [[0,0],['308'],[],['1','1.44']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['70px','100px','119px','16px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none',''],
         id: 'TextCopy',
         text: 'Goodnight, Sir.',
         align: 'center',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '-11px'],
            ["style", "height", '90px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '232px']
         ],
         "${_Group2}": [
            ["style", "left", '721px'],
            ["style", "top", '339px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '76px'],
            ["style", "height", '63px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '55px'],
            ["style", "width", '149px']
         ],
         "${_BG15}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "width", '193px'],
            ["style", "height", '79px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '19px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Group}": [
            ["style", "left", '66px'],
            ["style", "top", '84px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '142deg'],
            ["style", "left", '156px'],
            ["style", "top", '-39px']
         ],
         "${_TextCopy}": [
            ["style", "top", '100px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '70px'],
            ["style", "width", '119px']
         ],
         "${_pointerCopy}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '308deg'],
            ["style", "left", '111px'],
            ["style", "top", '2px']
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
"promotion_m1": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['478px','317px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      rect: ['421','563','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'mainMenu',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['330px','90px','auto','auto','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2',
      text: 'Congratulations!',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['195px','134px','654px','68px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy',
      text: 'You\'ve Been Promoted',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal'],
      rect: ['195px','486px','860px','39px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy7',
      text: 'Inspector',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_Text2}": [
            ["style", "top", '90px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_badge_star}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '478px']
         ],
         "${_Text2Copy7}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_promotion_strip}": [
            ["style", "top", '317px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.01']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid88", tween: [ "style", "${_Text2Copy7}", "left", '78px', { fromValue: '1025px'}], position: 3250, duration: 250, easing: "easeInOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1750, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 3500, duration: 250, easing: "easeOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" }         ]
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
      rect: ['25px','7px','auto','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',20,'rgba(0,0,0,1)','700','none',''],
      id: 'Text',
      text: 'CONTINUE',
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
            ["style", "font-weight", '700'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '25px'],
            ["style", "font-size", '20px']
         ],
         "${_btn_Start_up}": [
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
"Mission2_end": {
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
      id: 'M02',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m2',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'promotion_m2',
      symbolName: 'promotion_m2'
   },
   {
      id: 'M02',
      symbolName: 'M02'
   }   ]
   },
   states: {
      "Base State": {
         "${_promotion_m2}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ],
         "${_M02}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '1295px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid68", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m2}', [] ], ""], position: 0 },
            { id: "eid69", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m2}', [] ], ""], position: 250 }         ]
      }
   }
},
"Mission1_end": {
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
      id: 'M01',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m1',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'M01',
      symbolName: 'M01'
   },
   {
      id: 'promotion_m1',
      symbolName: 'promotion_m1'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_promotion_m1}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ],
         "${_M01}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1295px'],
            ["style", "top", '593px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid60", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m1}', [] ], ""], position: 0 },
            { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m1}', [0] ], ""], position: 250 }         ]
      }
   }
},
"promotion_m2": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['446px','317px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_starCopy',
      type: 'image',
      rect: ['509px','317px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      rect: ['421','563','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'mainMenu',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['330px','90px','auto','auto','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2',
      text: 'Congratulations!',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['195px','134px','654px','68px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy',
      text: 'You\'ve Been Promoted',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal'],
      rect: ['195px','486px','860px','39px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy6',
      text: 'Investigating Officer ',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["style", "top", '90px'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px']
         ],
         "${_Text2Copy6}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_badge_star}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '446px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_promotion_strip}": [
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.01'],
            ["style", "left", '0px'],
            ["style", "top", '317px']
         ],
         "${_badge_starCopy}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '509px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid38", tween: [ "style", "${_badge_starCopy}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1750, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" },
            { id: "eid87", tween: [ "style", "${_Text2Copy6}", "left", '78px', { fromValue: '1025px'}], position: 3250, duration: 250, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid37", tween: [ "transform", "${_badge_starCopy}", "scaleX", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 3500, duration: 250, easing: "easeOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid67", tween: [ "transform", "${_badge_starCopy}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2250, duration: 417, easing: "easeOutCirc" },
            { id: "eid39", tween: [ "transform", "${_badge_starCopy}", "scaleY", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"Mission3_end": {
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
      id: 'M03',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m3',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'promotion_m3',
      symbolName: 'promotion_m3'
   },
   {
      id: 'M03',
      symbolName: 'M03'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_M03}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_promotion_m3}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1295px'],
            ["style", "top", '593px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid74", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m3}', [] ], ""], position: 0 },
            { id: "eid75", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m3}', [] ], ""], position: 250 }         ]
      }
   }
},
"promotion_m3": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['446px','334px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star2',
      type: 'image',
      rect: ['509px','334px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star3',
      type: 'image',
      rect: ['479px','280px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      rect: ['421','563','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'mainMenu',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['330px','90px','auto','auto','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2',
      text: 'Congratulations!',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['195px','134px','654px','68px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy',
      text: 'You\'ve Been Promoted',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal'],
      rect: ['195px','486px','860px','39px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy5',
      text: 'Chief, International Bureau of Investigation (IBI). ',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy5}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_Text2Copy3}": [
            ["color", "color", 'rgba(6,253,253,1)'],
            ["style", "left", '78px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["style", "width", '860px']
         ],
         "${_Text2}": [
            ["style", "top", '90px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px']
         ],
         "${_badge_star3}": [
            ["style", "top", '280px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '479px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_badge_star}": [
            ["style", "top", '334px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '446px']
         ],
         "${_Text2Copy4}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["style", "width", '654px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_promotion_strip}": [
            ["style", "display", 'none'],
            ["style", "top", '317px'],
            ["transform", "scaleY", '0.01'],
            ["style", "left", '0px']
         ],
         "${_badge_star2}": [
            ["style", "top", '334px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '509px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4250,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 3250, duration: 615, easing: "easeOutBack" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1750, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid70", tween: [ "transform", "${_badge_star3}", "scaleX", '1', { fromValue: '5'}], position: 2750, duration: 500, easing: "easeOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 3250, duration: 615, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_badge_star2}", "scaleX", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "left", '78px', { fromValue: '1025px'}], position: 3750, duration: 250, easing: "easeInOutBack" },
            { id: "eid39", tween: [ "transform", "${_badge_star2}", "scaleY", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" },
            { id: "eid67", tween: [ "transform", "${_badge_star2}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2250, duration: 417, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_badge_star2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 4000, duration: 250, easing: "easeOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid71", tween: [ "style", "${_badge_star3}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500, easing: "easeOutBack" },
            { id: "eid72", tween: [ "transform", "${_badge_star3}", "scaleY", '1', { fromValue: '5'}], position: 2750, duration: 500, easing: "easeOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "transform", "${_badge_star3}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2750, duration: 417, easing: "easeOutCirc" }         ]
      }
   }
},
"Mission4_end": {
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
      id: 'M04',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m4',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'promotion_m4',
      symbolName: 'promotion_m4'
   },
   {
      id: 'M04',
      symbolName: 'M04'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ],
         "${_promotion_m4}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_M04}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1295px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid76", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m4}', [] ], ""], position: 0 },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m4}', [] ], ""], position: 250 }         ]
      }
   }
},
"promotion_m4": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['484px','282px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star2',
      type: 'image',
      rect: ['522px','323px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star3',
      type: 'image',
      rect: ['483px','365px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star4',
      type: 'image',
      rect: ['445px','323px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      rect: ['421','563','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'mainMenu',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['330px','90px','auto','auto','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2',
      text: 'Congratulations!',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal'],
      rect: ['195px','134px','654px','68px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy',
      text: 'You\'ve Been Promoted',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      type: 'text'
   },
   {
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal'],
      rect: ['195px','486px','860px','39px','auto','auto'],
      align: 'center',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text2Copy2',
      text: 'National Security Advisor.',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_Text2Copy2}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["style", "top", '90px'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px']
         ],
         "${_badge_star3}": [
            ["style", "top", '365px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '483px'],
            ["style", "width", '48px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_badge_star}": [
            ["style", "top", '282px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '484px'],
            ["style", "width", '48px']
         ],
         "${_badge_star2}": [
            ["style", "top", '323px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '522px'],
            ["style", "width", '48px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_promotion_strip}": [
            ["style", "top", '317px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.01'],
            ["style", "display", 'none']
         ],
         "${_badge_star4}": [
            ["style", "top", '323px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '445px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4083,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "transform", "${_badge_star2}", "scaleX", '1', { fromValue: '5'}], position: 1917, duration: 500, easing: "easeOutBack" },
            { id: "eid38", tween: [ "style", "${_badge_star2}", "opacity", '1', { fromValue: '0'}], position: 1917, duration: 500, easing: "easeOutBack" },
            { id: "eid71", tween: [ "style", "${_badge_star3}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1583, duration: 417, easing: "easeOutCirc" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 3083, duration: 615, easing: "easeOutBack" },
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid81", tween: [ "transform", "${_badge_star4}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2583, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid70", tween: [ "transform", "${_badge_star3}", "scaleX", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1583, duration: 500, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Text2Copy2}", "left", '78px', { fromValue: '1025px'}], position: 3583, duration: 250, easing: "easeInOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid80", tween: [ "transform", "${_badge_star4}", "scaleY", '1', { fromValue: '5'}], position: 2583, duration: 500, easing: "easeOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" },
            { id: "eid67", tween: [ "transform", "${_badge_star2}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1917, duration: 417, easing: "easeOutCirc" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1583, duration: 500, easing: "easeOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 3083, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_badge_star2}", "scaleY", '1', { fromValue: '5'}], position: 1917, duration: 500, easing: "easeOutBack" },
            { id: "eid78", tween: [ "transform", "${_badge_star4}", "scaleX", '1', { fromValue: '5'}], position: 2583, duration: 500, easing: "easeOutBack" },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 3833, duration: 250, easing: "easeOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1583, duration: 500, easing: "easeOutBack" },
            { id: "eid79", tween: [ "style", "${_badge_star4}", "opacity", '1', { fromValue: '0'}], position: 2583, duration: 500, easing: "easeOutBack" },
            { id: "eid72", tween: [ "transform", "${_badge_star3}", "scaleY", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 3083, duration: 615, easing: "easeOutBack" },
            { id: "eid73", tween: [ "transform", "${_badge_star3}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2250, duration: 417, easing: "easeOutCirc" }         ]
      }
   }
},
"M01": {
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
      id: 'BG15',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG15.jpg','0px','0px']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['66px','84px','280','194','auto','auto'],
      c: [
      {
         rect: ['0px','-11px','232px','101px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         transform: [[0,0],['142'],[],['1','1.44']],
         id: 'pointer',
         type: 'image',
         rect: ['156px','-39px','35px','104px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none',''],
         type: 'text',
         id: 'Text',
         text: 'Good work, Geo. We’ve both been promoted. You are Inspector now. And I am Investigating Officer.',
         align: 'center',
         rect: ['19px','3px','193px','79px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "left", '66px'],
            ["style", "top", '84px']
         ],
         "${_RoundRect}": [
            ["style", "top", '-11px'],
            ["style", "height", '101px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '232px']
         ],
         "${_Text}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "height", '79px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '19px'],
            ["style", "width", '193px']
         ],
         "${_BG15}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '142deg'],
            ["style", "left", '156px'],
            ["style", "top", '-39px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
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
"M03": {
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
      id: 'BG8',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M1_BG08.jpg','0px','0px']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['66px','67px','280','194','auto','auto'],
      c: [
      {
         rect: ['0px','-11px','292px','103px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'image',
         id: 'pointer',
         rect: ['156px','-39px','35px','104px','auto','auto'],
         transform: [[0,0],['142'],[],['1','1.44']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         type: 'text',
         rect: ['10px','-2px','271px','86px','auto','auto'],
         id: 'Text',
         text: 'Great job, Geo. Mr. G and his team are behind bars. Also, you have been selected to join the International Bureau of Investigation (IBI) as Special Officer. Congrats<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "left", '66px'],
            ["style", "top", '67px']
         ],
         "${_RoundRect}": [
            ["style", "top", '-11px'],
            ["style", "height", '103px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '292px']
         ],
         "${_Text}": [
            ["style", "top", '-2px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "height", '86px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '10px'],
            ["style", "width", '271px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '142deg'],
            ["style", "left", '156px'],
            ["style", "top", '-39px']
         ],
         "${_BG8}": [
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
         ]
      }
   }
},
"M04": {
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
      id: 'M4_BG05',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG05.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['37px','36px','347px','56px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Geo is being felicitated for finally outwitting Ra-haka and making Earth Ra-haka-free.',
      align: 'left',
      rect: ['51px','46px','320px','36px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '56px'],
            ["style", "left", '37px'],
            ["style", "width", '347px']
         ],
         "${_Text2}": [
            ["style", "top", '46px'],
            ["style", "text-align", 'left'],
            ["style", "height", '36px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '51px'],
            ["style", "width", '320px']
         ],
         "${_M4_BG05}": [
            ["style", "top", '0px'],
            ["style", "height", '650px'],
            ["style", "left", '0px'],
            ["style", "width", '1014px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "end2");
