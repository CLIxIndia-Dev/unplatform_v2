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
            id:'ref_screen022',
            type:'image',
            rect:['0px','0px','1014px','652px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ref_screen02.png",'0px','0px']
         },
         {
            id:'bg_m4',
            type:'image',
            rect:['0px','0px','1014px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_m4.png",'0px','0px']
         },
         {
            id:'Phase1',
            type:'rect',
            rect:['279','69','auto','auto','auto','auto'],
            userClass:"draw"
         },
         {
            id:'Phase2',
            type:'rect',
            rect:['0','74','auto','auto','auto','auto'],
            userClass:"play"
         },
         {
            id:'topBand2',
            type:'rect',
            rect:['10','-20','auto','auto','auto','auto'],
            userClass:"HUD"
         }],
         symbolInstances: [
         {
            id:'topBand2',
            symbolName:'topBand'
         },
         {
            id:'Phase1',
            symbolName:'Phase1'
         },
         {
            id:'Phase2',
            symbolName:'Phase2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bg_m4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Phase2}": [
            ["style", "display", 'block']
         ],
         "${_ref_screen022}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px'],
            ["style", "height", '648px'],
            ["style", "overflow", 'hidden']
         ],
         "${_topBand2}": [
            ["style", "display", 'block']
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
            { id: "eid13", tween: [ "style", "${_Phase2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_Stage}", "height", '648px', { fromValue: '648px'}], position: 0, duration: 0 }         ]
      }
   }
},
"topBand": {
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
      id: 'topBand',
      rect: ['0px','0px','818px','95px','auto','auto'],
      userClass: 'hhd',
      fill: ['rgba(0,0,0,0)','images/topBand.png','0px','0px']
   },
   {
      rect: ['44px','27px','143px','34px','auto','auto'],
      userClass: 'mission',
      align: 'center',
      id: 'Text',
      text: 'MISSION 0',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['44px','27px','143px','34px','auto','auto'],
      userClass: 'level',
      align: 'left',
      id: 'TextCopy',
      text: 'LEVEL 0',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['44px','27px','143px','34px','auto','auto'],
      userClass: 'star',
      align: 'center',
      id: 'TextCopy2',
      text: '00',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_topBand}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '41px'],
            ["style", "font-size", '22px'],
            ["style", "top", '27px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '143px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '818px']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(56,64,75,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '215px'],
            ["style", "font-size", '22px'],
            ["style", "top", '27px'],
            ["style", "text-align", 'left'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "display", 'block'],
            ["style", "width", '143px']
         ],
         "${_TextCopy2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '662px'],
            ["style", "font-size", '28px'],
            ["style", "top", '20px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '61px'],
            ["style", "display", 'block']
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
            { id: "eid3", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_TextCopy}", "top", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_TextCopy2}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_TextCopy2}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_TextCopy}", "left", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_TextCopy2}", "left", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Text}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_TextCopy2}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "color", "${_TextCopy}", "color", 'rgba(56,64,75,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(56,64,75,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"btn_done": {
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
      id: 'btn_release_up',
      rect: ['0px','0px','88px','27px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/btn_release_up.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['23px','4px','auto','auto','auto','auto'],
      id: 'Text4',
      text: 'Draw',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_release_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text4}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '23px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
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
"btn_Reset": {
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
      rect: ['0px','0px','88px','27px','auto','auto'],
      id: 'btn_common_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      rect: ['20px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text5',
      text: 'Clear',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
         ],
         "${_Text5}": [
            ["style", "left", '20px'],
            ["style", "top", '4px']
         ],
         "${_btn_common_up}": [
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
"Phase1": {
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
      id: 'bg_phase1_4x4',
      type: 'image',
      rect: ['0px','0px','464px','576px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg_phase1.png','0px','0px']
   },
   {
      id: 'g4x4',
      type: 'rect',
      userClass: 'grid4',
      rect: ['36','111','auto','auto','auto','auto']
   },
   {
      id: 'g5x5',
      type: 'rect',
      userClass: 'grid5',
      rect: ['36','111','auto','auto','auto','auto']
   },
   {
      id: 'btn_Reset',
      type: 'rect',
      userClass: 'reset_btn',
      rect: ['23px','526px','auto','auto','auto','auto']
   },
   {
      rect: ['344px','526px','auto','auto','auto','auto'],
      id: 'btn_done',
      userClass: 'drawBtn',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['29px','12px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Phase 1: Draw Teleporter',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,200,70,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['29px','39px','393px','42px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      userClass: 'teleporter1Shape',
      id: 'Text3',
      text: 'Draw a Rotated Square with edges that are NOT vertical or horizontal.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['432','607','auto','auto','auto','auto'],
      id: 'btn_Play',
      userClass: 'play_btn',
      display: 'none',
      type: 'rect'
   },
   {
      rect: ['16px','97px','438px','414px','auto','auto'],
      userClass: 'hideBOX',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   {
      id: 'btn_Reset',
      symbolName: 'btn_Reset'
   },
   {
      id: 'g5x5',
      symbolName: 'g5x5'
   },
   {
      id: 'g4x4',
      symbolName: 'g4x4'
   },
   {
      id: 'btn_Play',
      symbolName: 'btn_Play'
   },
   {
      id: 'btn_done',
      symbolName: 'btn_done'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_Play}": [
            ["style", "top", '526px'],
            ["style", "left", '341px'],
            ["style", "display", 'none']
         ],
         "${_bg_phase1_4x4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btn_Reset}": [
            ["style", "top", '526px'],
            ["style", "left", '23px'],
            ["style", "display", 'block']
         ],
         "${_btn_done}": [
            ["style", "top", '527px'],
            ["style", "left", '188px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '12px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(243,200,70,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '29px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '576px'],
            ["style", "width", '464px']
         ],
         "${_Text3}": [
            ["style", "top", '39px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '29px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.01)'],
            ["style", "height", '405px'],
            ["style", "display", 'block'],
            ["style", "left", '23px'],
            ["style", "width", '409px']
         ],
         "${_g5x5}": [
            ["style", "left", '36px'],
            ["style", "top", '112px']
         ],
         "${_g4x4}": [
            ["style", "display", 'block'],
            ["style", "left", '36px']
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
            { id: "eid172", tween: [ "style", "${_btn_Reset}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Rectangle}", "left", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "style", "${_Rectangle}", "width", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_btn_Play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_g4x4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,0.01)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.01)'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "style", "${_Rectangle}", "height", '405px', { fromValue: '405px'}], position: 0, duration: 0 }         ]
      }
   }
},
"inst_txt": {
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
      id: 'm4_txt_strip',
      type: 'image',
      rect: ['299px','0px','1014px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/m4_txt_strip.png','0px','0px']
   },
   {
      userClass: 'oppText',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(153,255,0,1.00)','400','none','normal'],
      align: 'left',
      id: 'Text6',
      text: 'Your teleporter must be a rectangle or a square. Can be a rotated.',
      type: 'text',
      rect: ['442px','1px','541px','27px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '1px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'left'],
            ["style", "height", '27px'],
            ["color", "color", 'rgba(153,255,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '442px'],
            ["style", "width", '541px']
         ],
         "${_m4_txt_strip}": [
            ["style", "left", '299px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
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
"coinBox": {
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
      id: 'coinPanel_bg2',
      type: 'image',
      rect: ['0px','0px','174px','361px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinPanel_bg2.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['54px','1px','auto','auto','auto','auto'],
      id: 'Text4',
      text: 'High Score',
      align: 'right',
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(246,205,81,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      userClass: 'scoretxt',
      rect: ['24px','11px','122px','46px','auto','auto'],
      id: 'Text4Copy',
      text: '0000',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(246,205,81,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'coin100_orange',
      rect: ['53px','267px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin100_orange.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin1102',
      rect: ['53px','199px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin110',
      rect: ['53px','181px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin110Copy',
      rect: ['53px','162px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin110Copy2',
      rect: ['53px','146px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin110Copy3',
      rect: ['53px','128px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin1000',
      rect: ['53px','57px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin1000.png','0px','0px']
   },
   {
      id: 'coinBox_highlight',
      type: 'image',
      rect: ['45px','46px','80px','291px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinBox_highlight.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coin110Copy3}": [
            ["style", "top", '128px'],
            ["style", "left", '53px']
         ],
         "${_coin1102}": [
            ["style", "left", '53px'],
            ["style", "top", '199px']
         ],
         "${_coin110Copy2}": [
            ["style", "top", '146px'],
            ["style", "left", '53px']
         ],
         "${_coin1000}": [
            ["style", "left", '53px'],
            ["style", "top", '57px']
         ],
         "${_coin100_orange}": [
            ["style", "left", '53px'],
            ["style", "top", '267px']
         ],
         "${_coin110Copy}": [
            ["style", "top", '162px'],
            ["style", "left", '53px']
         ],
         "${_coin110}": [
            ["style", "top", '181px'],
            ["style", "left", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '361px'],
            ["style", "width", '174px']
         ],
         "${_coinPanel_bg2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_coinBox_highlight}": [
            ["style", "left", '45px'],
            ["style", "top", '46px']
         ],
         "${_Text4}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(246,205,81,1.00)'],
            ["style", "left", '54px'],
            ["style", "font-size", '12px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '11px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(246,205,81,1.00)'],
            ["style", "height", '46px'],
            ["style", "left", '24px'],
            ["style", "width", '122px']
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
"btn_nextcase": {
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
      id: 'btn_round_up',
      type: 'image',
      rect: ['0px','0px','85px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_round_up.png','0px','0px']
   },
   {
      rect: ['21px','22px','44px','41px','auto','auto'],
      userClass: 'txt',
      align: 'center',
      id: 'Text7',
      text: 'Next Case',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','700','none','normal'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text7}": [
            ["style", "top", '22px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '21px'],
            ["style", "font-size", '18px']
         ],
         "${_btn_round_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '85px']
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
"Phase2": {
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
      type: 'rect',
      id: 'btn_nextcase',
      rect: ['907px','436px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'nextcase'
   },
   {
      id: 'bg_player',
      type: 'image',
      rect: ['7px','46px','434px','472px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg_player.png','0px','0px']
   },
   {
      id: 'bg_opponent',
      type: 'image',
      rect: ['449px','46px','434px','472px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg_opponent.png','0px','0px']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'Your Area',
      rect: ['75px','57px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,200,70,1.00)','700','none','']
   },
   {
      type: 'text',
      id: 'TextCopy',
      text: 'Opponent\'s Area',
      rect: ['490px','57px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(255,255,255,1.00)','700','none','']
   },
   {
      id: 'inst_txt_1',
      type: 'rect',
      rect: ['416','-36','auto','auto','auto','auto']
   },
   {
      id: 'inst_txtCopy',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'opp',
      type: 'rect',
      userClass: 'opp',
      rect: ['464','103','auto','auto','auto','auto']
   },
   {
      id: 'oppCopy',
      type: 'rect',
      userClass: 'player',
      rect: ['464','103','auto','auto','auto','auto']
   },
   {
      rect: ['20px','97px','438px','414px','auto','auto'],
      userClass: 'hideBOX',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'coinBox',
      type: 'rect',
      rect: ['867px','83px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'inst_txtCopy',
      symbolName: 'inst_txt'
   },
   {
      id: 'oppCopy',
      symbolName: 'opp'
   },
   {
      id: 'opp',
      symbolName: 'opp'
   },
   {
      id: 'btn_nextcase',
      symbolName: 'btn_nextcase'
   },
   {
      id: 'inst_txt_1',
      symbolName: 'inst_txt_1'
   },
   {
      id: 'coinBox',
      symbolName: 'coinBox'
   }   ]
   },
   states: {
      "Base State": {
         "${_coinBox}": [
            ["style", "left", '867px'],
            ["style", "top", '83px']
         ],
         "${_btn_nextcase}": [
            ["style", "top", '436px'],
            ["style", "left", '907px'],
            ["style", "cursor", 'pointer']
         ],
         "${_oppCopy}": [
            ["style", "left", '22px'],
            ["style", "top", '103px']
         ],
         "${_bg_opponent}": [
            ["style", "left", '449px'],
            ["style", "top", '46px']
         ],
         "${_bg_player}": [
            ["style", "left", '7px'],
            ["style", "top", '46px']
         ],
         "${_inst_txt_1}": [
            ["style", "left", '7px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '521px'],
            ["style", "width", '1040px']
         ],
         "${_Text}": [
            ["style", "top", '57px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(243,200,70,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '75px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.0078)'],
            ["style", "display", 'block'],
            ["style", "height", '405px'],
            ["style", "left", '20px'],
            ["style", "width", '409px']
         ],
         "${_TextCopy}": [
            ["style", "top", '57px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '490px'],
            ["style", "font-size", '18px']
         ],
         "${_inst_txtCopy}": [
            ["style", "left", '20px'],
            ["style", "top", '529px']
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
            { id: "eid250", tween: [ "style", "${_inst_txtCopy}", "top", '529px', { fromValue: '529px'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "style", "${_inst_txtCopy}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_oppCopy}", "top", '103px', { fromValue: '103px'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_inst_txt_1}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid259", tween: [ "style", "${_inst_txt_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_oppCopy}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0 }         ]
      }
   }
},
"g5x5": {
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
      rect: ['0px','0px','380px','380px','auto','auto'],
      id: '_5x5grid',
      userClass: 'boxGrid',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/5x5grid.png','0px','0px']
   },
   {
      id: 'circle',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy2',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy3',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy4',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy9',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy8',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy7',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy6',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy5',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy14',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy13',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy12',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy11',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy10',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy24',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy23',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy22',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy21',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy20',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy19',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy18',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy17',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy16',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy15',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'circleCopy12',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy13',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy2',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy16',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy23',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy3',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy15',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy4',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy19',
      symbolName: 'circle'
   },
   {
      id: 'circle',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy10',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy11',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy18',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy9',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy14',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy6',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy5',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy17',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy20',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy21',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy22',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy24',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy8',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy7',
      symbolName: 'circle'
   }   ]
   },
   states: {
      "Base State": {
         "${_circleCopy14}": [
            ["style", "left", '-10px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy13}": [
            ["style", "left", '85px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy9}": [
            ["style", "left", '-10px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy17}": [
            ["style", "left", '180px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy7}": [
            ["style", "left", '180px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy}": [
            ["style", "left", '85px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy23}": [
            ["style", "left", '85px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy15}": [
            ["style", "left", '368px'],
            ["style", "top", '-11px']
         ],
         "${__5x5grid}": [
            ["style", "height", '380px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '380px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '385px']
         ],
         "${_circleCopy18}": [
            ["style", "left", '85px'],
            ["style", "top", '-11px']
         ],
         "${_circle}": [
            ["style", "left", '-10px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy8}": [
            ["style", "left", '85px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy22}": [
            ["style", "left", '180px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy12}": [
            ["style", "left", '180px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy21}": [
            ["style", "left", '275px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy4}": [
            ["style", "left", '368px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy19}": [
            ["style", "left", '-10px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy3}": [
            ["style", "left", '275px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy11}": [
            ["style", "left", '275px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy20}": [
            ["style", "left", '368px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy24}": [
            ["style", "left", '-10px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy2}": [
            ["style", "left", '180px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy16}": [
            ["style", "left", '275px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy10}": [
            ["style", "left", '368px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy5}": [
            ["style", "left", '368px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy6}": [
            ["style", "left", '275px'],
            ["style", "top", '271px']
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
            { id: "eid136", tween: [ "style", "${_circleCopy21}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_circleCopy19}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid272", tween: [ "style", "${_circleCopy11}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_circleCopy22}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_circleCopy15}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_circleCopy11}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_circleCopy3}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_circleCopy14}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_circleCopy23}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_circleCopy17}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_circle}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
            { id: "eid264", tween: [ "style", "${_circleCopy13}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "style", "${_circleCopy18}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_circleCopy7}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid133", tween: [ "style", "${_circleCopy22}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid279", tween: [ "style", "${_circleCopy15}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_circleCopy12}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_circleCopy}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_circleCopy3}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_circleCopy4}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_circleCopy21}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid278", tween: [ "style", "${_circleCopy5}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_circleCopy13}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_circleCopy16}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_circleCopy6}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_circleCopy16}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid281", tween: [ "style", "${_circleCopy10}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid282", tween: [ "style", "${_circleCopy4}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_circleCopy7}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid132", tween: [ "style", "${_circleCopy20}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_circleCopy6}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_circleCopy18}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_circleCopy8}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_circleCopy23}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_circle}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_circleCopy9}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid280", tween: [ "style", "${_circleCopy20}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid271", tween: [ "style", "${_circleCopy12}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_circleCopy10}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_circleCopy5}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid214", tween: [ "style", "${_circleCopy17}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_circleCopy8}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_circleCopy2}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_circleCopy24}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 }         ]
      }
   }
},
"g4x4": {
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
      id: '_4x4grid2',
      rect: ['0px','-1px','381px','381px','auto','auto'],
      userClass: 'boxGrid',
      fill: ['rgba(0,0,0,0)','images/4x4grid2.png','0px','0px']
   },
   {
      id: 'circleCopy25',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy26',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy27',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy28',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy32',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy31',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy30',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy29',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy36',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy35',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy34',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy33',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy40',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy39',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy38',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy37',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   }],
   symbolInstances: [
   {
      id: 'circleCopy32',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy31',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy28',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy37',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy38',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy30',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy36',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy39',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy33',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy27',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy25',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy40',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy34',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy35',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy29',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy26',
      symbolName: 'circle'
   }   ]
   },
   states: {
      "Base State": {
         "${_circleCopy34}": [
            ["style", "top", '112px'],
            ["style", "left", '244px']
         ],
         "${__4x4grid2}": [
            ["style", "height", '381px'],
            ["style", "top", '-1px'],
            ["style", "left", '0px'],
            ["style", "width", '381px']
         ],
         "${_circleCopy31}": [
            ["style", "left", '118px'],
            ["style", "top", '239px']
         ],
         "${symbolSelector}": [
            ["style", "height", '378px'],
            ["style", "width", '386px']
         ],
         "${_circleCopy25}": [
            ["style", "left", '-7px'],
            ["style", "top", '364px']
         ],
         "${_circleCopy36}": [
            ["style", "left", '-9px'],
            ["style", "top", '112px']
         ],
         "${_circleCopy40}": [
            ["style", "left", '-9px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy26}": [
            ["style", "left", '118px'],
            ["style", "top", '364px']
         ],
         "${_circleCopy35}": [
            ["style", "left", '116px'],
            ["style", "top", '112px']
         ],
         "${_circleCopy28}": [
            ["style", "top", '364px'],
            ["style", "left", '372px']
         ],
         "${_circleCopy37}": [
            ["style", "top", '-11px'],
            ["style", "left", '370px']
         ],
         "${_circleCopy32}": [
            ["style", "left", '-7px'],
            ["style", "top", '239px']
         ],
         "${_circleCopy29}": [
            ["style", "top", '239px'],
            ["style", "left", '372px']
         ],
         "${_circleCopy33}": [
            ["style", "top", '112px'],
            ["style", "left", '370px']
         ],
         "${_circleCopy27}": [
            ["style", "top", '364px'],
            ["style", "left", '246px']
         ],
         "${_circleCopy30}": [
            ["style", "top", '239px'],
            ["style", "left", '246px']
         ],
         "${_circleCopy39}": [
            ["style", "left", '116px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy38}": [
            ["style", "top", '-11px'],
            ["style", "left", '244px']
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
            { id: "eid162", tween: [ "style", "${_circleCopy35}", "left", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_circleCopy25}", "top", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid153", tween: [ "style", "${_circleCopy31}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid161", tween: [ "style", "${_circleCopy35}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_circleCopy26}", "left", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_circleCopy29}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid144", tween: [ "style", "${_circleCopy25}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_circleCopy33}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_circleCopy38}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_circleCopy34}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_circleCopy32}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_circleCopy28}", "left", '372px', { fromValue: '372px'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_circleCopy36}", "left", '-9px', { fromValue: '-9px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "style", "${_circleCopy37}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_circleCopy30}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_circleCopy27}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_circleCopy33}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_circleCopy34}", "left", '244px', { fromValue: '244px'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "style", "${_circleCopy39}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_circleCopy40}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_circleCopy29}", "left", '372px', { fromValue: '372px'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "style", "${_circleCopy37}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_circleCopy36}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 }         ]
      }
   }
},
"opp": {
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
      id: 'g4x4Copy',
      type: 'rect',
      rect: ['-428px','8px','auto','auto','auto','auto'],
      userClass: 'grid4'
   },
   {
      id: 'g5x5Copy',
      type: 'rect',
      rect: ['-428px','8px','auto','auto','auto','auto'],
      userClass: 'grid5'
   }],
   symbolInstances: [
   {
      id: 'g5x5Copy',
      symbolName: 'g5x5'
   },
   {
      id: 'g4x4Copy',
      symbolName: 'g4x4'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '398px'],
            ["style", "width", '403px']
         ],
         "${_g5x5Copy}": [
            ["style", "top", '10px'],
            ["style", "left", '9px']
         ],
         "${_g4x4Copy}": [
            ["style", "top", '9px'],
            ["style", "left", '9px']
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
"gridPlayer": {
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
      id: '_5x5grid',
      type: 'image',
      rect: ['0px','0px','386px','378px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/5x5grid.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '378px'],
            ["style", "width", '386px']
         ],
         "${__5x5grid}": [
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
"circle": {
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
      rect: ['0px','0px','22px','22px','auto','auto'],
      id: 'white_circle2Copy74',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/white_circle2.png','0px','0px']
   },
   {
      rect: ['0px','0px','22px','22px','auto','auto'],
      id: 'blue_circle',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','blue_circle.png','0px','0px']
   },
   {
      id: 'green_circle',
      type: 'image',
      rect: ['0px','0px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','green_circle.png','0px','0px']
   },
   {
      id: 'red_circle',
      type: 'image',
      rect: ['0px','0px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','red_circle.png','0px','0px']
   },
   {
      id: 'yellow_circle',
      type: 'image',
      rect: ['0px','0px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','yellow_circle.png','0px','0px']
   },
   {
      rect: ['0px','0px','22px','22px','auto','auto'],
      id: 'bluetick-circle',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','bluetick-circle.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_blue_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_red_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '22px'],
            ["style", "width", '22px']
         ],
         "${_green_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_yellow_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_white_circle2Copy74}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bluetick-circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
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
"btn_Play": {
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
      rect: ['0px','0px','86px','26px','auto','auto'],
      id: 'btn_reset_up2',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_reset_up.png','0px','0px']
   },
   {
      rect: ['23px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text4',
      text: 'Done',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_reset_up2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
         ],
         "${_Text4}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '23px']
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
"inst_txt_1": {
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
      id: 'm4_txt_strip',
      type: 'image',
      rect: ['-8px','-2px','1014px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/m4_txt_strip.png','0px','0px']
   },
   {
      userClass: '',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(153,255,0,1.00)','400','none','normal'],
      align: 'center',
      id: 'Text6',
      text: 'Its your turn, select the point on the opponent’s grid.',
      type: 'text',
      rect: ['8px','1px','989px','27px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '1px'],
            ["style", "width", '989px'],
            ["color", "color", 'rgba(153,255,0,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-weight", '400'],
            ["style", "left", '8px'],
            ["style", "font-size", '20px']
         ],
         "${_m4_txt_strip}": [
            ["style", "left", '-8px'],
            ["style", "top", '-2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
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
})(jQuery, AdobeEdge, "mission4");
