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
            id:'audioControl',
            type:'rect',
            rect:['895','4','auto','auto','auto','auto']
         },
         {
            id:'menu_bg',
            type:'image',
            rect:['0px','0px','1014px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_bg.jpg",'0px','0px']
         },
         {
            id:'menu_btn_1',
            type:'rect',
            rect:['111px','71','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'menu_btn_2',
            type:'rect',
            rect:['307','71','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'menu_btn_3',
            type:'rect',
            rect:['689','286','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'menu_btn_4',
            type:'rect',
            rect:['866','393','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'btn_LAUNCH',
            type:'rect',
            rect:['359px','562','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCHCopy',
            display:'none',
            type:'rect',
            rect:['759px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCHCopy2',
            type:'rect',
            rect:['559px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCH1',
            type:'rect',
            rect:['163px','562','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'Mission_01',
            display:'none',
            type:'rect',
            rect:['478','253','auto','auto','auto','auto']
         },
         {
            id:'Mission_02',
            display:'none',
            type:'rect',
            rect:['0px','0','auto','auto','auto','auto'],
            userClass:"M1L1"
         },
         {
            id:'Mission_03',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'Mission_04',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Mission_01',
            symbolName:'Mission_01'
         },
         {
            id:'btn_LAUNCH1',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'menu_btn_2',
            symbolName:'menu_btn_2'
         },
         {
            id:'Mission_04',
            symbolName:'Mission_04'
         },
         {
            id:'Mission_03',
            symbolName:'Mission_03'
         },
         {
            id:'menu_btn_1',
            symbolName:'menu_btn_1'
         },
         {
            id:'btn_LAUNCHCopy2',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'btn_LAUNCHCopy',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'Mission_02',
            symbolName:'Mission_02'
         },
         {
            id:'menu_btn_3',
            symbolName:'menu_btn_3'
         },
         {
            id:'btn_LAUNCH',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'audioControl',
            symbolName:'audioControl'
         },
         {
            id:'menu_btn_4',
            symbolName:'menu_btn_4'
         }
         ]
      },
   states: {
      "Base State": {
         "${_menu_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btn_LAUNCH}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '542px']
         ],
         "${_Mission_03}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_audioControl}": [
            ["style", "overflow", 'visible']
         ],
         "${_Mission_02}": [
            ["style", "display", 'none'],
            ["style", "left", '0px']
         ],
         "${_Mission_01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_btn_LAUNCHCopy2}": [
            ["style", "top", '562px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '559px']
         ],
         "${_menu_btn_1}": [
            ["style", "top", '671px'],
            ["style", "opacity", '1'],
            ["style", "left", '111px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1014px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
         ],
         "${_btn_LAUNCHCopy}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '759px']
         ],
         "${_Mission_04}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_menu_btn_3}": [
            ["style", "top", '671px'],
            ["style", "opacity", '1'],
            ["style", "left", '507px']
         ],
         "${_menu_btn_4}": [
            ["style", "top", '671px'],
            ["style", "opacity", '1'],
            ["style", "left", '708px']
         ],
         "${_btn_LAUNCH1}": [
            ["style", "top", '542px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '163px']
         ],
         "${_menu_btn_2}": [
            ["style", "top", '671px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         labels: {
            "Label 1": 0
         },
         timeline: [
            { id: "eid43", tween: [ "style", "${_Mission_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Mission_02}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Mission_02}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutCirc" },
            { id: "eid55", tween: [ "style", "${_btn_LAUNCH1}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid56", tween: [ "style", "${_btn_LAUNCH1}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid24", tween: [ "style", "${_btn_LAUNCH}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid49", tween: [ "style", "${_btn_LAUNCH}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid30", tween: [ "style", "${_btn_LAUNCH}", "top", '562px', { fromValue: '542px'}], position: 1250, duration: 375, easing: "easeOutBack" },
            { id: "eid77", tween: [ "style", "${_Mission_01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_btn_LAUNCH1}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid58", tween: [ "style", "${_btn_LAUNCH1}", "opacity", '1', { fromValue: '1'}], position: 1625, duration: 0, easing: "easeOutBack" },
            { id: "eid54", tween: [ "style", "${_btn_LAUNCH1}", "top", '562px', { fromValue: '542px'}], position: 1250, duration: 375, easing: "easeOutBack" },
            { id: "eid22", tween: [ "style", "${_menu_btn_2}", "top", '71px', { fromValue: '671px'}], position: 250, duration: 500, easing: "easeOutBack" },
            { id: "eid33", tween: [ "style", "${_btn_LAUNCH}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 375, easing: "easeOutBack" },
            { id: "eid23", tween: [ "style", "${_menu_btn_1}", "top", '71px', { fromValue: '671px'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid60", tween: [ "style", "${_btn_LAUNCHCopy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid61", tween: [ "style", "${_btn_LAUNCHCopy}", "display", 'block', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid85", tween: [ "style", "${_btn_LAUNCHCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1667, duration: 83 },
            { id: "eid82", tween: [ "style", "${_btn_LAUNCHCopy}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0 },
            { id: "eid83", tween: [ "style", "${_btn_LAUNCHCopy}", "opacity", '1', { fromValue: '1'}], position: 1625, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Mission_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_menu_btn_4}", "top", '71px', { fromValue: '671px'}], position: 750, duration: 500, easing: "easeOutBack" },
            { id: "eid92", tween: [ "style", "${_Mission_04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_menu_btn_3}", "top", '71px', { fromValue: '671px'}], position: 500, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"audioControl": {
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
      id: 'audioControl_bg',
      type: 'image',
      rect: ['40px','0px','75px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/audioControl_bg.svg','0px','0px']
   },
   {
      rect: ['86px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',10,'rgba(239,96,0,1.00)','700','none','normal'],
      id: 'txt_OFF',
      text: 'OFF',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['52px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',10,'rgba(147,215,0,1.00)','700','none','normal'],
      id: 'txt_ON',
      text: 'ON',
      align: 'right',
      type: 'text'
   },
   {
      id: 'audioControl_switch',
      type: 'image',
      rect: ['42px','2px','36px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/audioControl_switch.svg','0px','0px']
   },
   {
      rect: ['0px','3px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'txt_Audio',
      text: 'Audio',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_audioControl_switch}": [
            ["style", "left", '42px'],
            ["style", "top", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '115px']
         ],
         "${_audioControl_bg}": [
            ["style", "top", '0px'],
            ["style", "left", '40px']
         ],
         "${_txt_Audio}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_txt_OFF}": [
            ["style", "top", '4px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(239,96,0,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '86px'],
            ["style", "font-size", '10px']
         ],
         "${_txt_ON}": [
            ["style", "top", '4px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(147,215,0,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '52px'],
            ["style", "font-size", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         labels: {
            "Audio_ON": 0,
            "Audio_OFF": 250
         },
         timeline: [
            { id: "eid6", tween: [ "style", "${_audioControl_switch}", "left", '75px', { fromValue: '42px'}], position: 0, duration: 250 }         ]
      }
   }
},
"menu_btn_1": {
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
      id: 'menu_button1_up',
      type: 'image',
      rect: ['1px','1px','212px','528px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button1_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'CRYSTAL CASE',
      align: 'center',
      rect: ['50px','403px','114px','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: '1',
      align: 'center',
      rect: ['151px','19px','13px','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4Copy',
      text: 'st',
      align: 'center',
      rect: ['166px','21px','13px','auto','auto','auto']
   },
   {
      transform: [[0,0],['90']],
      rect: ['137px','70px','auto','auto','auto','auto'],
      type: 'text',
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button1_up}": [
            ["style", "left", '1px'],
            ["style", "top", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "width", '114px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '28px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '16px'],
            ["style", "left", '166px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
         ],
         "${_Text4}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
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
"menu_btn_2": {
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
      id: 'menu_button2_up',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button2_up.png','0px','0px']
   },
   {
      rect: ['50px','403px','114px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'WATER ROBBERS',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy3',
      text: '2',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','21px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy2',
      text: 'nd',
      align: 'center',
      type: 'text'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['90']],
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      rect: ['137px','70px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button2_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '28px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '114px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '13px'],
            ["style", "left", '166px'],
            ["style", "font-size", '16px']
         ],
         "${_Text4Copy3}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '19px'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
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
"menu_btn_3": {
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
      id: 'menu_button_bg',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button3_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'SECRET AGENT',
      align: 'center',
      rect: ['50px','403px','114px','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: '3',
      align: 'center',
      rect: ['151px','19px','13px','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4Copy',
      text: 'rd',
      align: 'center',
      rect: ['166px','21px','13px','auto','auto','auto']
   },
   {
      transform: [[0,0],['90']],
      rect: ['137px','70px','auto','auto','auto','auto'],
      type: 'text',
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '28px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '114px']
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '19px'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '13px'],
            ["style", "left", '166px'],
            ["style", "font-size", '16px']
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
"menu_btn_4": {
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
      id: 'menu_button_bg',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button_bg.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'PORTAL PLAY',
      align: 'center',
      rect: ['50px','403px','114px','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: '4',
      align: 'center',
      rect: ['151px','19px','13px','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4Copy',
      text: 'th',
      align: 'center',
      rect: ['166px','21px','13px','auto','auto','auto']
   },
   {
      transform: [[0,0],['90']],
      rect: ['137px','70px','auto','auto','auto','auto'],
      type: 'text',
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "width", '114px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '28px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '16px'],
            ["style", "left", '166px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
         ],
         "${_Text4}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
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
"btn_LAUNCH": {
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
      rect: ['-32px','-473px','172px','490px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      id: 'btn_LAUNCH_up',
      type: 'image',
      rect: ['0px','0px','109px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_LAUNCH_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'LAUNCH',
      align: 'center',
      rect: ['21px','7px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '7px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '21px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["style", "height", '490px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${_btn_LAUNCH_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '109px']
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
            ["color", "background-color", 'rgba(0,0,0,1)'],
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
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '49px']
         ],
         "${_Ellipse}": [
            ["style", "height", '66px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '66px']
         ],
         "${_btn_next}": [
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
},
"BG11": {
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'Question G2 and use the responses to identify the culprit and release the innocent.<br><br>Click next to move onto the instruction Screen.<br>',
      align: 'left',
      rect: ['155px','289px','288px','124px','auto','auto']
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
         "${_Text6}": [
            ["style", "top", '289px'],
            ["style", "text-align", 'left'],
            ["style", "height", '124px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
"BG10": {
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
      id: 'BG10',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M2_BG10.jpg','0px','0px']
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['42','34','319','265','auto','auto'],
      c: [
      {
         rect: ['0px','0px','366px','131px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'image',
         id: 'pointer',
         rect: ['220px','13px','35px','120px','auto','auto'],
         transform: [[0,0],['-206'],[],['0.745','1.454']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         type: 'text',
         rect: ['25px','21px','330px','90px','auto','auto'],
         id: 'Text5',
         text: 'I have rounded up all the Judics in the area. The robot on duty, G2 witnessed the robbery. I’ve called G2 over to answer our questions. But G2 can only reply with “Yes”, “No” and “I don’t know.” You know that, right?<br>',
         align: 'left',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['117','196','101','138','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy',
         rect: ['52px','-80px','35px','120px','auto','auto'],
         transform: [[0,0],['-160'],[],['0.745','1.092']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','101px','38px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         transform: [],
         align: 'center',
         id: 'Text5Copy',
         text: 'Yes Sir.',
         type: 'text',
         rect: ['20px','10px','68px','19px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '38px'],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_RoundRect}": [
            ["style", "height", '131px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '366px']
         ],
         "${_BG10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_pointer}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '1.45422'],
            ["transform", "rotateZ", '-206deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "height", '120px'],
            ["style", "left", '220px'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text5Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '68px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '19px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1']
         ],
         "${_Text5}": [
            ["style", "top", '21px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '90px'],
            ["style", "font-style", 'normal'],
            ["style", "left", '25px'],
            ["style", "width", '330px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '-80px'],
            ["transform", "scaleY", '1.09167'],
            ["transform", "rotateZ", '-160deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '52px'],
            ["style", "height", '120px']
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
"Mission_02": {
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
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'BG10',
      type: 'rect',
      rect: ['-2px','0px','auto','auto','auto','auto']
   },
   {
      id: 'BG12',
      type: 'rect',
      rect: ['-2px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      userClass: 'mainSND btnClick',
      id: 'btn_nextCopy',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick',
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
      id: 'BG12',
      symbolName: 'BG11'
   },
   {
      id: 'BG09',
      symbolName: 'BG09'
   },
   {
      id: 'BG10',
      symbolName: 'BG10'
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
            ["style", "display", 'none'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_BG12}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_BG10}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "top", '304px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid40", tween: [ "style", "${_BG12}", "left", '-2px', { fromValue: '1012px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid41", tween: [ "style", "${_BG10}", "left", '-2px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 }         ]
      }
   }
},
"BG09": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG09.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['29px','27px','167px','46px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['515px','24px','374px','30px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'Geo is appointed as Inspector now. <br>',
      rect: ['42px','31px','142px','38px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['525px','29px','354px','20px','auto','auto'],
      id: 'Text2',
      text: 'Meanwhile there have been a series of robberies. ',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['523px','585px','374px','auto','auto','auto'],
      id: 'Text3',
      text: 'A gang of Judics is stealing water cans from shops, offices and homes.<br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','italic']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['173','51px','249','147','auto','auto'],
      c: [
      {
         rect: ['67px','0px','182px','115px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['20px','120px','22px','20px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['46px','93px','33px','30px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['87px','16px','142px','87px','auto','auto'],
         id: 'Text4',
         text: 'Geo is good. But we have a new set of cases. Will he be able to perform the same?<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      },
      {
         rect: ['0px','137px','11px','10px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '24px'],
            ["style", "left", '515px'],
            ["style", "height", '30px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '585px'],
            ["style", "left", '523px'],
            ["style", "width", '374px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '93px'],
            ["style", "height", '30px'],
            ["style", "left", '46px'],
            ["style", "width", '33px']
         ],
         "${_Text2}": [
            ["style", "height", '20px'],
            ["style", "top", '29px'],
            ["style", "left", '525px'],
            ["style", "width", '354px']
         ],
         "${_Ellipse2}": [
            ["style", "left", '0px'],
            ["style", "top", '137px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Group}": [
            ["style", "top", '51px']
         ],
         "${_Text}": [
            ["style", "top", '31px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '42px'],
            ["style", "width", '142px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '20px'],
            ["style", "top", '120px'],
            ["style", "left", '20px'],
            ["style", "width", '22px']
         ],
         "${_Rectangle}": [
            ["style", "height", '46px'],
            ["style", "width", '167px']
         ],
         "${_Ellipse}": [
            ["style", "left", '67px'],
            ["style", "top", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '16px'],
            ["style", "text-align", 'center'],
            ["style", "height", '87px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '87px'],
            ["style", "width", '142px']
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
"Mission_01": {
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
      id: 'M1_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M1_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M1_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      userClass: 'mainSND btnClick',
      id: 'btn_nextCopy',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick',
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
      id: 'M1_BG02',
      symbolName: 'M1_BG02'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M1_BG01',
      symbolName: 'M1_BG01'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M1_BG03',
      symbolName: 'M1_BG03'
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
         "${_M1_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M1_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M1_BG03}": [
            ["style", "left", '1014px'],
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
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid78", tween: [ "style", "${_M1_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid79", tween: [ "style", "${_M1_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 }         ]
      }
   }
},
"M1_BG01": {
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
      fill: ['rgba(0,0,0,0)','images/M1_BG01.jpg','0px','0px']
   },
   {
      rect: ['29px','27px','282px','55px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['26px','335px','285px','46px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['44px','36px','261px','46px','auto','auto'],
      id: 'Text',
      text: 'Geo starts assisting Inspector Kata. But there is trouble brewing…',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   },
   {
      rect: ['34px','341px','277px','33px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'The Judics have brought a few of the wonderful crystal trees from Planus.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['411px','335px','285px','30px','auto','auto'],
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['713px','335px','191px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['730px','351px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['160'],[],['0.571','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['419px','341px','277px','17px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy',
      text: 'Soon, everybody wants these crystals.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['724px','347px','170px','32px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy3',
      text: 'The crystals of the tree help purify water. ',
      align: 'center',
      type: 'text'
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['779px','441px','249','147','auto','auto'],
      c: [
      {
         rect: ['72px','17px','144px','115px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['82px','2px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['66px','-9px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['88px','34px','113px','87px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text4',
         text: 'They also have many properties, but I’m not going to tell you about those.',
         align: 'center',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '46px'],
            ["style", "top", '335px'],
            ["style", "left", '26px'],
            ["style", "width", '285px']
         ],
         "${_Text2Copy}": [
            ["style", "height", '17px'],
            ["style", "top", '341px'],
            ["style", "left", '419px'],
            ["style", "width", '277px']
         ],
         "${_Text2}": [
            ["style", "top", '341px'],
            ["style", "height", '33px'],
            ["style", "left", '34px'],
            ["style", "width", '277px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "height", '55px'],
            ["style", "width", '282px']
         ],
         "${_Text4}": [
            ["style", "top", '34px'],
            ["style", "width", '113px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '87px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '88px'],
            ["style", "font-size", '13px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '55px'],
            ["style", "top", '335px'],
            ["style", "left", '713px'],
            ["style", "width", '191px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '-9px'],
            ["style", "height", '14px'],
            ["style", "left", '66px'],
            ["style", "width", '15px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '335px'],
            ["style", "height", '30px'],
            ["style", "left", '411px'],
            ["style", "width", '285px']
         ],
         "${_Group}": [
            ["style", "top", '441px'],
            ["style", "left", '779px']
         ],
         "${_Ellipse}": [
            ["style", "top", '17px'],
            ["style", "left", '72px'],
            ["style", "width", '144px']
         ],
         "${_Text}": [
            ["style", "top", '36px'],
            ["style", "width", '261px'],
            ["style", "height", '46px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '44px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "font-style", ''],
            ["style", "height", '17px'],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_pointer}": [
            ["style", "top", '351px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '160deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "left", '730px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '347px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '724px'],
            ["style", "width", '170px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '82px'],
            ["style", "width", '25px']
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
"M1_BG02": {
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
      fill: ['rgba(0,0,0,0)','images/M1_BG02.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['29px','27px','191px','32px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text',
      text: 'At the police station…',
      type: 'text',
      rect: ['37px','34px','180px','19px','auto','auto']
   },
   {
      rect: ['411px','227px','246px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['277'],['0','-19'],['0.571','1.227']],
      id: 'pointer',
      type: 'image',
      rect: ['287px','71px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['237'],['0','-58'],['0.571','0.865']],
      id: 'pointerCopy',
      type: 'image',
      rect: ['300px','274px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['302'],['18','-31'],['0.429','0.97']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['393px','381px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['79'],['0','12'],['0.571','0.772']],
      id: 'pointerCopy2',
      type: 'image',
      rect: ['557px','322px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy3',
      text: 'Some Judics has just stolen crystals from a home garden. ',
      align: 'center',
      rect: ['423px','238px','222px','32px','auto','auto']
   },
   {
      rect: ['271px','293px','283px','90px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy4',
      text: 'All the Judics in the neighbourhood are here in this lockup. If you can find the real thief, we can let the others go. If not…',
      align: 'center',
      rect: ['281px','303px','260px','69px','auto','auto']
   },
   {
      rect: ['404px','467px','96px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy6',
      text: 'Oh, yes.',
      align: 'center',
      rect: ['414px','477px','78px','19px','auto','auto']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['336px','398px','246px','55px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      transform: [],
      align: 'center',
      id: 'Text2Copy5',
      text: 'Are all the witness statements in the system, sir?',
      type: 'text',
      rect: ['346px','408px','222px','35px','auto','auto']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['742px','439px','249','147','auto','auto'],
      c: [
      {
         rect: ['66px','-9px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['82px','2px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['89px','22px','115px','69px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text4',
         text: 'I must crack this. ',
         align: 'center',
         rect: ['106px','37px','78px','35px','auto','auto']
      }]
   },
   {
      id: 'GroupCopy',
      type: 'group',
      rect: ['279px','541px','249','147','auto','auto'],
      c: [
      {
         rect: ['41px','15px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['57px','26px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['87px','21px','180px','69px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text4Copy',
         text: 'Duh! As if that’ll help find the culprit!',
         align: 'center',
         rect: ['108px','38px','139px','35px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "top", '381px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.97017'],
            ["transform", "rotateZ", '302deg'],
            ["transform", "scaleX", '0.42857'],
            ["transform", "skewY", '-31.37deg'],
            ["style", "left", '393px'],
            ["transform", "skewX", '18.12deg']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '238px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '423px'],
            ["style", "width", '222px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '15px'],
            ["style", "height", '14px'],
            ["style", "left", '41px'],
            ["style", "width", '15px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "height", '17px'],
            ["style", "font-style", ''],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Text4}": [
            ["style", "top", '37px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '35px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '106px'],
            ["style", "width", '78px']
         ],
         "${_GroupCopy}": [
            ["style", "top", '541px'],
            ["style", "left", '279px']
         ],
         "${_Text}": [
            ["style", "top", '34px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '37px'],
            ["style", "width", '180px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '21px'],
            ["style", "height", '69px'],
            ["style", "left", '87px'],
            ["style", "width", '180px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '55px'],
            ["style", "top", '398px'],
            ["style", "left", '336px'],
            ["style", "width", '246px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '38px'],
            ["style", "width", '139px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '35px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '108px'],
            ["style", "font-size", '13px']
         ],
         "${_Ellipse}": [
            ["style", "height", '69px'],
            ["style", "top", '22px'],
            ["style", "left", '89px'],
            ["style", "width", '115px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '303px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "left", '281px'],
            ["style", "width", '260px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '90px'],
            ["style", "top", '293px'],
            ["style", "left", '271px'],
            ["style", "width", '283px']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '467px'],
            ["style", "height", '35px'],
            ["style", "left", '404px'],
            ["style", "width", '96px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '14px'],
            ["style", "top", '-9px'],
            ["style", "left", '66px'],
            ["style", "width", '15px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '227px'],
            ["style", "height", '55px'],
            ["style", "left", '411px'],
            ["style", "width", '246px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '477px'],
            ["style", "text-align", 'center'],
            ["style", "height", '19px'],
            ["style", "left", '414px'],
            ["style", "width", '78px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Group}": [
            ["style", "top", '439px'],
            ["style", "left", '742px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '408px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '35px'],
            ["style", "left", '346px'],
            ["style", "width", '222px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '322px'],
            ["transform", "scaleY", '0.77173'],
            ["transform", "rotateZ", '79deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '557px'],
            ["transform", "skewY", '12.42deg']
         ],
         "${_Rectangle}": [
            ["style", "height", '32px'],
            ["style", "width", '191px']
         ],
         "${_Ellipse2}": [
            ["style", "height", '23px'],
            ["style", "top", '26px'],
            ["style", "left", '57px'],
            ["style", "width", '25px']
         ],
         "${_pointer}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '1.22718'],
            ["transform", "rotateZ", '277deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '287px'],
            ["transform", "skewY", '-18.96deg']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '82px'],
            ["style", "width", '25px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '274px'],
            ["transform", "scaleY", '0.86538'],
            ["transform", "rotateZ", '237deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '-57.78deg'],
            ["style", "left", '300px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
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
"M1_BG03": {
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['155px','287px','288px','124px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'Use the clues in the system to find the culprit. Ask for a new clue if you need it. Release the innocent Judics based on each new clue.<br><br>Click next to move onto the instruction Screen.<br>',
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
            ["style", "top", '287px'],
            ["style", "text-align", 'left'],
            ["style", "height", '124px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
"Mission_03": {
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
      id: 'M3_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
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
      userClass: 'btnClick',
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'M3_BG02',
      symbolName: 'M3_BG02'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG03',
      symbolName: 'M3_BG03'
   },
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG01',
      symbolName: 'M3_BG01'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "display", 'none'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M3_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M3_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M3_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '304px'],
            ["style", "display", 'none'],
            ["style", "left", '461px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px'],
            ["style", "top", '593px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_M3_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid89", tween: [ "style", "${_M3_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" }         ]
      }
   }
},
"M3_BG01": {
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
      fill: ['rgba(0,0,0,0)','images/M3_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['24px','27px','318px','55px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'Geo is Investigating Officer now. He has his own team of humans and Judics.',
      rect: ['39px','36px','298px','33px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['476px','36px','267px','65px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['668px','-9px','35px','104px','auto','auto'],
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['485px','44px','249px','50px','auto','auto'],
      id: 'Text2Copy3',
      text: 'Geo, we traced the stolen crystals and stolen water to the tycoon, Mr. G’s factories.',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['55px','385px','267px','50px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['259px','322px','35px','104px','auto','auto'],
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['64px','393px','249px','33px','auto','auto'],
      id: 'Text2',
      text: 'What do you think he makes in those factories, Geo? ',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['651px','426px','249','147','auto','auto'],
      c: [
      {
         rect: ['72px','17px','221px','130px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['77px','3px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['55px','-6px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['106px','39px','154px','96px','auto','auto'],
         id: 'Text4',
         text: 'Humans do not know all the uses of the crystals. Maybe Mr.G is using the Judics to find out what these uses are.',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy}": [
            ["style", "top", '322px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '62.35deg'],
            ["style", "left", '259px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy3}": [
            ["style", "top", '44px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "left", '485px'],
            ["style", "width", '249px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '50px'],
            ["style", "top", '385px'],
            ["style", "left", '55px'],
            ["style", "width", '267px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '36px'],
            ["style", "height", '65px'],
            ["style", "left", '476px'],
            ["style", "width", '267px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '14px'],
            ["style", "top", '-6px'],
            ["style", "left", '55px'],
            ["style", "width", '15px']
         ],
         "${_pointer}": [
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '668px'],
            ["transform", "skewY", '62.35deg']
         ],
         "${_Text2}": [
            ["style", "top", '393px'],
            ["style", "text-align", 'center'],
            ["style", "height", '33px'],
            ["style", "left", '64px'],
            ["style", "width", '249px']
         ],
         "${_Group}": [
            ["style", "top", '426px'],
            ["style", "left", '651px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "height", '17px'],
            ["style", "font-style", ''],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Text}": [
            ["style", "top", '36px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '33px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '39px'],
            ["style", "width", '298px']
         ],
         "${_Ellipse}": [
            ["style", "height", '130px'],
            ["style", "top", '17px'],
            ["style", "left", '72px'],
            ["style", "width", '221px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle}": [
            ["style", "height", '55px'],
            ["style", "left", '24px'],
            ["style", "width", '318px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '3px'],
            ["style", "height", '23px'],
            ["style", "left", '77px'],
            ["style", "width", '25px']
         ],
         "${_Text4}": [
            ["style", "top", '39px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '96px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '106px'],
            ["style", "width", '154px']
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
"M3_BG02": {
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
      fill: ['rgba(0,0,0,0)','images/M3_BG02.jpg','0px','0px']
   },
   {
      rect: ['101px','24px','399px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['198px','-35px','35px','104px','auto','auto'],
      transform: [[0,0],['138'],['0','41'],['0.571','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy4',
      rect: ['182px','159px','35px','104px','auto','auto'],
      transform: [[0,0],['314'],['0','41'],['0.571','0.529']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['288px','313px','35px','104px','auto','auto'],
      transform: [[0,0],['230'],['0','-52'],['0.571','0.529']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['748px','290px','35px','104px','auto','auto'],
      transform: [[0,0],['145'],['0','12'],['0.571','0.772']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['116px','35px','371px','32px','auto','auto'],
      id: 'Text2Copy3',
      text: 'And he employs only Judics. That too, ones with certain special properties, I hear.',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['155px','253px','213px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['168px','264px','187px','32px','auto','auto'],
      id: 'Text2Copy',
      text: 'Let’s find out what he is up to. I have a plan…',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'image',
      id: 'pointerCopy5',
      rect: ['733px','466px','35px','104px','auto','auto'],
      transform: [[0,0],['307'],['0','41'],['0.571','0.94']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['625px','563px','213px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['638px','574px','187px','32px','auto','auto'],
      id: 'Text2Copy2',
      text: 'Great idea. Let’s start with the nearest factory. ',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['267px','337px','283px','90px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['284px','347px','249px','69px','auto','auto'],
      id: 'Text2Copy4',
      text: 'I will find Judics from my team who can be our secret agents in Mr. G’s factories. They will give us all the information we need.',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['674px','337px','316px','69px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text2Copy5',
      text: 'We just need to identify team members with properties that will allow them entry into these factories. ',
      rect: ['682px','344px','295px','55px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '264px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '168px'],
            ["style", "width", '187px']
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '253px'],
            ["style", "height", '55px'],
            ["style", "left", '155px'],
            ["style", "width", '213px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '466px'],
            ["transform", "scaleY", '0.93955'],
            ["transform", "rotateZ", '307deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '40.95deg'],
            ["style", "left", '733px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy2}": [
            ["style", "top", '574px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "font-style", ''],
            ["style", "left", '638px'],
            ["style", "width", '187px']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "height", '55px'],
            ["style", "top", '563px'],
            ["style", "left", '625px'],
            ["style", "width", '213px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "top", '337px'],
            ["style", "height", '69px'],
            ["style", "left", '674px'],
            ["style", "width", '316px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '159px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '314deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '182px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '337px'],
            ["style", "height", '90px'],
            ["style", "left", '267px'],
            ["style", "width", '283px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '55px'],
            ["style", "top", '24px'],
            ["style", "left", '101px'],
            ["style", "width", '399px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '344px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '55px'],
            ["style", "left", '682px'],
            ["style", "width", '295px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '347px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "left", '284px'],
            ["style", "width", '249px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '35px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '116px'],
            ["style", "width", '371px']
         ],
         "${_pointer}": [
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["transform", "rotateZ", '138deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '40.95deg'],
            ["style", "left", '198px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy2}": [
            ["style", "top", '290px'],
            ["transform", "scaleY", '0.77173'],
            ["transform", "rotateZ", '145deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '12.42deg'],
            ["style", "left", '748px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy}": [
            ["style", "top", '313px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '230deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '288px'],
            ["transform", "skewY", '-52.01deg']
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
"M3_BG03": {
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['151px','287px','298px','124px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'Identify the property that allows your agent entry into the factory.<br><br>Then call an agent who matches the description and send him in. <br><br>Click next to move onto the instruction Screen.<br>',
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
         "${_Text6}": [
            ["style", "top", '287px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '151px'],
            ["style", "width", '298px']
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
"Mission_04": {
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
      id: 'M4_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
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
      userClass: 'btnClick',
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
      id: 'M4_BG01',
      symbolName: 'M4_BG01'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
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
      id: 'M4_BG02',
      symbolName: 'M4_BG02'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px'],
            ["style", "top", '593px']
         ],
         "${_M4_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px'],
            ["style", "top", '304px']
         ],
         "${_M4_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M4_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid90", tween: [ "style", "${_M4_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_M4_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 }         ]
      }
   }
},
"M4_BG01": {
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
      fill: ['rgba(0,0,0,0)','images/M4_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['19px','23px','276px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['325px','24px','655px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'Geo now is Chief, International Bureau of Investigation (IBI). <br><br>',
      rect: ['22px','24px','249px','37px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'rect',
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['786px','345px','199px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      id: 'TextCopy2',
      text: 'Geo’s teammates are back with some useful leads.',
      rect: ['789px','346px','191px','39px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['23px','345px','317px','80px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['34px','299px','35px','104px','auto','auto'],
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['30px','353px','318px','50px','auto','auto'],
      id: 'Text2Copy3',
      text: 'I was on duty at the city’s bus terminus when a group of humans and Judics disappeared suddenly. Look what I caught on my special c-Ray camera…',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['641px','231px','153px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['781px','219px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['813px','192px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['650px','252px','136px','50px','auto','auto'],
      id: 'Text4',
      text: 'What IS happening to these people? ',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      id: 'TextCopy',
      text: '<br>He faces a tough challenge right away. Many humans and Judics have disappeared without a trace. No one knows why or how.<br>',
      rect: ['330px','9px','639px','37px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy3}": [
            ["style", "top", '353px'],
            ["style", "text-align", 'left'],
            ["style", "height", '50px'],
            ["style", "left", '30px'],
            ["style", "width", '318px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '24px'],
            ["style", "height", '38px'],
            ["style", "left", '325px'],
            ["style", "width", '655px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '345px'],
            ["style", "height", '38px'],
            ["style", "left", '786px'],
            ["style", "width", '199px']
         ],
         "${_Rectangle}": [
            ["style", "height", '38px'],
            ["style", "top", '23px'],
            ["style", "left", '19px'],
            ["style", "width", '276px']
         ],
         "${_Text4}": [
            ["style", "top", '252px'],
            ["style", "width", '136px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '50px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '650px'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '24px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '22px'],
            ["style", "width", '249px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '80px'],
            ["style", "top", '345px'],
            ["style", "left", '23px'],
            ["style", "width", '317px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '192px'],
            ["style", "height", '14px'],
            ["style", "left", '813px'],
            ["style", "width", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text}": [
            ["style", "top", '24px'],
            ["style", "width", '249px'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '22px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '369px'],
            ["style", "height", '50px'],
            ["style", "left", '27px'],
            ["style", "width", '380px']
         ],
         "${_Ellipse}": [
            ["style", "top", '231px'],
            ["style", "height", '80px'],
            ["style", "left", '641px'],
            ["style", "width", '153px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "font-style", ''],
            ["style", "height", '17px'],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '23px'],
            ["style", "top", '219px'],
            ["style", "left", '781px'],
            ["style", "width", '25px']
         ],
         "${_pointer}": [
            ["style", "top", '299px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '62.35deg'],
            ["style", "left", '34px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy}": [
            ["style", "top", '9px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '330px'],
            ["style", "width", '639px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '346px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '789px'],
            ["style", "width", '191px']
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
"M4_BG02": {
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
      fill: ['rgba(0,0,0,0)','images/M4_BG02.jpg','0px','0px']
   },
   {
      rect: ['32px','27px','336px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['23px','318px','170px','81px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['170px','549px','125px','81px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['195px','317px','274px','85px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['701px','25px','290px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['161px','-35px','117px','83px','auto','auto'],
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['149px','537px','117px','83px','auto','auto'],
      transform: [[0,0],['322'],['0','41'],['0.681','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['401px','312px','93px','77px','auto','auto'],
      transform: [[0,0],['212'],['0','41'],['0.449','0.805']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy4',
      rect: ['121px','331px','93px','77px','auto','auto'],
      transform: [[0,0],['212'],['0','41'],['0.449','0.805']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['793px','-35px','117px','83px','auto','auto'],
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['43px','35px','314px','42px','auto','auto'],
      id: 'Text2Copy3',
      text: 'I think I caught the same incident on my aerial camera. Look at this picture',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['29px','321px','158px','102px','auto','auto'],
      id: 'Text2',
      text: 'Ra-haka forced us to make these frames in Planus. But we brought away the frames with us when we came here. ',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['174px','554px','124px','102px','auto','auto'],
      id: 'Text2Copy4',
      text: 'Then, he must have got new ones made by some others.',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['205px','322px','267px','81px','auto','auto'],
      id: 'Text2Copy2',
      text: 'Geo, Ra-haka is behind this. He has hired some humans and Judics to place these frames in public areas to teleport people forcibly to Planus.',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['708px','31px','280px','62px','auto','auto'],
      id: 'Text2Copy',
      text: 'Oh no! That’s a teleporting frame. Ra-haka used them to teleport slaves to Planus. ',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['659px','447px','290px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointerCopy5',
      rect: ['662px','385px','117px','83px','auto','auto'],
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy6',
      rect: ['841px','262px','123px','109px','auto','auto'],
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['666px','453px','280px','62px','auto','auto'],
      id: 'Text2Copy6',
      text: 'Quick, let’s go. We must find their frames before they find ours!',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['657px','320px','331px','122px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['665px','327px','322px','110px','auto','auto'],
      id: 'Text2Copy5',
      text: 'First, we hide our frames in a secret facility so Ra-haka’s army doesn’t get more frames.<br><br>Then, we use special c-Ray devices to locate the frames laid out by Ra-haka’s army and deactivate them. <br><br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.4485'],
            ["style", "left", '401px'],
            ["style", "width", '93px'],
            ["style", "top", '312px'],
            ["transform", "scaleY", '0.80519'],
            ["style", "height", '77px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_Text2Copy}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'left'],
            ["style", "height", '62px'],
            ["style", "left", '708px'],
            ["style", "width", '280px']
         ],
         "${_pointerCopy6}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '841px'],
            ["style", "width", '123px'],
            ["style", "top", '262px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '109px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy6}": [
            ["style", "top", '447px'],
            ["style", "height", '55px'],
            ["style", "left", '659px'],
            ["style", "width", '290px']
         ],
         "${_Text2}": [
            ["style", "top", '321px'],
            ["style", "text-align", 'left'],
            ["style", "height", '102px'],
            ["style", "left", '29px'],
            ["style", "width", '158px']
         ],
         "${_pointerCopy5}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '662px'],
            ["style", "width", '117px'],
            ["style", "top", '385px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "height", '122px'],
            ["style", "top", '320px'],
            ["style", "left", '657px'],
            ["style", "width", '331px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '66px'],
            ["style", "top", '25px'],
            ["style", "left", '701px'],
            ["style", "width", '290px']
         ],
         "${_pointerCopy4}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.4485'],
            ["style", "left", '121px'],
            ["style", "width", '93px'],
            ["style", "top", '331px'],
            ["transform", "scaleY", '0.80519'],
            ["style", "height", '77px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '110px'],
            ["style", "top", '318px'],
            ["style", "left", '23px'],
            ["style", "width", '170px']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '317px'],
            ["style", "height", '85px'],
            ["style", "left", '195px'],
            ["style", "width", '274px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '453px'],
            ["style", "text-align", 'left'],
            ["style", "height", '62px'],
            ["style", "left", '666px'],
            ["style", "width", '280px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '27px'],
            ["style", "height", '55px'],
            ["style", "left", '32px'],
            ["style", "width", '336px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '322px'],
            ["style", "text-align", 'left'],
            ["style", "height", '81px'],
            ["style", "left", '205px'],
            ["style", "width", '267px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '327px'],
            ["style", "text-align", 'left'],
            ["style", "height", '110px'],
            ["style", "left", '665px'],
            ["style", "width", '322px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '554px'],
            ["style", "text-align", 'left'],
            ["style", "height", '102px'],
            ["style", "left", '174px'],
            ["style", "width", '124px']
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '549px'],
            ["style", "height", '81px'],
            ["style", "left", '170px'],
            ["style", "width", '125px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '35px'],
            ["style", "text-align", 'left'],
            ["style", "height", '42px'],
            ["style", "left", '43px'],
            ["style", "width", '314px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '161px'],
            ["style", "width", '117px'],
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_pointerCopy2}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '322deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '149px'],
            ["style", "width", '117px'],
            ["style", "top", '537px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_pointerCopy}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '793px'],
            ["style", "width", '117px'],
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
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
            { id: "eid93", tween: [ "style", "${_RoundRect2Copy}", "height", '110px', { fromValue: '110px'}], position: 0, duration: 0 }         ]
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
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      type: 'text',
      rect: ['151px','287px','298px','124px','auto','auto'],
      id: 'Text6',
      text: 'Hide your frame from Rahaka’s army.<br><br>Then try and capture their teleporting frame before they locate yours. Locating all four vertices of a frame deactivates it.<br><br>Click next to move onto the instruction Screen.<br>',
      align: 'left',
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['155px','227px','288px','39px','auto','auto'],
      id: 'Text6Copy',
      text: 'MISSION BRIEF',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',34,'rgba(255,255,255,1.00)','normal','none','normal']
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
            ["style", "top", '287px'],
            ["style", "text-align", 'left'],
            ["style", "height", '124px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '151px'],
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "book");
