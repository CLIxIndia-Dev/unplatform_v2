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
            id:'mainGameUI',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"mainGameUI"
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['38px','518px','147px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['190px','518px','111px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'RectangleCopy2',
            type:'rect',
            rect:['313px','518px','155px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'RectangleCopy3',
            type:'rect',
            rect:['478px','518px','155px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         }],
         symbolInstances: [
         {
            id:'mainGameUI',
            symbolName:'mainGameUI'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "left", '']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '518px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '313px'],
            ["style", "width", '155px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1014px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["style", "top", '518px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '38px'],
            ["style", "width", '147px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '518px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '478px'],
            ["style", "width", '155px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '518px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '190px'],
            ["style", "width", '111px']
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
            { id: "eid296", tween: [ "style", "${_Text}", "left", '', { fromValue: '0'}], position: 0, duration: 0 }         ]
      }
   }
},
"mainGameUI": {
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
      id: 'bg',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg.png','0px','0px']
   },
   {
      id: 'wires_M3',
      type: 'image',
      rect: ['18px','427px','643px','265px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wires_M3.png','0px','0px']
   },
   {
      rect: ['325px','-23px','876px','361px','auto','auto'],
      id: 'wires_M3Copy',
      transform: [[],['90']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/wires_M3.png','0px','0px']
   },
   {
      id: 'coinBox',
      type: 'rect',
      rect: ['847','89','auto','auto','auto','auto']
   },
   {
      id: 'questionPanelBg_M3',
      type: 'image',
      rect: ['0px','427px','1014px','223px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/questionPanelBg_M3.png','0px','0px']
   },
   {
      id: 'shapesScreen',
      type: 'rect',
      rect: ['8','54','auto','auto','auto','auto']
   },
   {
      id: 'btn_done',
      type: 'rect',
      userClass: 'done',
      rect: ['757','512','auto','auto','auto','auto']
   },
   {
      id: 'topBand2',
      type: 'rect',
      userClass: 'HUD',
      rect: ['10','-20','auto','auto','auto','auto']
   },
   {
      rect: ['30px','564px','631px','85px','auto','auto'],
      userClass: 'quest',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.10)']
   },
   {
      id: 'btn_ask2',
      type: 'rect',
      userClass: 'ask',
      rect: ['594','678','auto','auto','auto','auto']
   },
   {
      id: 'btn_ask_1',
      type: 'rect',
      userClass: 'btn_discard',
      rect: ['808','684','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7',
      type: 'rect',
      userClass: 'genrate',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'scanAnimation',
      type: 'rect',
      userClass: 'animEff',
      rect: ['690','459','auto','auto','auto','auto']
   },
   {
      id: 'scanInvalid',
      type: 'rect',
      userClass: 'invalidEff',
      rect: ['690','459','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_ask2',
      symbolName: 'btn_ask'
   },
   {
      id: 'scanAnimation',
      symbolName: 'scanAnimation'
   },
   {
      id: 'Symbol_7',
      symbolName: 'Symbol_7'
   },
   {
      id: 'topBand2',
      symbolName: 'topBand'
   },
   {
      id: 'btn_done',
      symbolName: 'btn_done'
   },
   {
      id: 'coinBox',
      symbolName: 'coinBox'
   },
   {
      id: 'btn_ask_1',
      symbolName: 'btn_ask_1'
   },
   {
      id: 'scanInvalid',
      symbolName: 'scanInvalid'
   },
   {
      id: 'shapesScreen',
      symbolName: 'shapesScreen'
   }   ]
   },
   states: {
      "Base State": {
         "${_coinBox}": [
            ["style", "top", '75px'],
            ["style", "left", '852px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '564px'],
            ["style", "height", '85px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '30px'],
            ["style", "width", '631px']
         ],
         "${_shapesScreen}": [
            ["style", "left", '5px'],
            ["style", "top", '53px']
         ],
         "${_wires_M3}": [
            ["style", "top", '427px'],
            ["style", "left", '18px']
         ],
         "${_btn_ask2}": [
            ["style", "left", '563px'],
            ["style", "top", '459px']
         ],
         "${_btn_ask_1}": [
            ["style", "left", '893px'],
            ["style", "top", '596px']
         ],
         "${_topBand2}": [
            ["style", "display", 'block']
         ],
         "${_btn_done}": [
            ["style", "left", '888px'],
            ["style", "top", '485px']
         ],
         "${_wires_M3Copy}": [
            ["style", "top", '-23px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '361px'],
            ["style", "left", '325px'],
            ["style", "width", '876px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_questionPanelBg_M3}": [
            ["style", "left", '0px'],
            ["style", "top", '427px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '5px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,124,35,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '502px'],
            ["style", "font-size", '18px']
         ],
         "${_Symbol_7}": [
            ["style", "top", '465px'],
            ["style", "left", '695px']
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
            { id: "eid539", tween: [ "style", "${_btn_ask_1}", "left", '893px', { fromValue: '893px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_Symbol_7}", "left", '695px', { fromValue: '695px'}], position: 0, duration: 0 },
            { id: "eid506", tween: [ "style", "${_btn_done}", "left", '888px', { fromValue: '888px'}], position: 0, duration: 0 },
            { id: "eid550", tween: [ "style", "${_Symbol_7}", "top", '465px', { fromValue: '465px'}], position: 0, duration: 0 },
            { id: "eid541", tween: [ "style", "${_btn_ask2}", "left", '563px', { fromValue: '563px'}], position: 0, duration: 0 },
            { id: "eid542", tween: [ "style", "${_btn_ask2}", "top", '459px', { fromValue: '459px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_topBand2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid513", tween: [ "style", "${_coinBox}", "left", '852px', { fromValue: '852px'}], position: 0, duration: 0 },
            { id: "eid562", tween: [ "style", "${_shapesScreen}", "top", '53px', { fromValue: '53px'}], position: 0, duration: 0 },
            { id: "eid505", tween: [ "style", "${_btn_done}", "top", '485px', { fromValue: '485px'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_btn_ask_1}", "top", '596px', { fromValue: '596px'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_coinBox}", "top", '75px', { fromValue: '75px'}], position: 0, duration: 0 },
            { id: "eid516", tween: [ "style", "${_shapesScreen}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 }         ]
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
      type: 'text',
      userClass: 'mission',
      rect: ['44px','27px','143px','34px','auto','auto'],
      id: 'Text',
      text: 'MISSION 0',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none','']
   },
   {
      type: 'text',
      userClass: 'level',
      rect: ['44px','27px','143px','34px','auto','auto'],
      id: 'TextCopy',
      text: 'LEVEL 0',
      align: 'left',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none','']
   },
   {
      type: 'text',
      userClass: 'star',
      rect: ['44px','27px','143px','34px','auto','auto'],
      id: 'TextCopy2',
      text: '00',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_topBand}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
            ["style", "display", 'block'],
            ["style", "width", '143px']
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
            ["style", "width", '143px'],
            ["style", "display", 'block']
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
            ["style", "display", 'block'],
            ["style", "width", '61px']
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
            { id: "eid3", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_TextCopy2}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "color", "${_TextCopy}", "color", 'rgba(56,64,75,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(56,64,75,1.00)'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_TextCopy2}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_TextCopy}", "top", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Text}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_TextCopy2}", "left", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_TextCopy}", "left", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_TextCopy2}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 }         ]
      }
   }
},
"shapesScreen": {
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
      id: 'PanelBg_M3',
      type: 'image',
      rect: ['0px','0px','761px','390px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/PanelBg_M3.png','0px','0px']
   },
   {
      rect: ['9px','45px','340','336','auto','auto'],
      id: 'Group',
      type: 'group',
      userClass: 'allowed',
      c: [
      {
         id: 'Symbol_7',
         type: 'rect',
         userClass: 'grid',
         rect: ['-4px','0px','auto','auto','auto','auto']
      },
      {
         id: 'Symbol_7Copy',
         type: 'rect',
         userClass: 'grid',
         rect: ['-4px','0px','auto','auto','auto','auto']
      },
      {
         id: 'Symbol_7Copy2',
         type: 'rect',
         userClass: 'grid',
         rect: ['-4px','0px','auto','auto','auto','auto']
      },
      {
         id: 'Symbol_7Copy3',
         type: 'rect',
         userClass: 'grid',
         rect: ['-4px','0px','auto','auto','auto','auto']
      }]
   },
   {
      rect: ['369px','45px','340','336','auto','auto'],
      id: 'Group2',
      type: 'group',
      userClass: 'blocked',
      c: [
      {
         id: 'Symbol_7Copy7',
         type: 'rect',
         userClass: 'grid',
         rect: ['-364px','0px','auto','auto','auto','auto']
      },
      {
         id: 'Symbol_7Copy6',
         type: 'rect',
         userClass: 'grid',
         rect: ['-364px','0px','auto','auto','auto','auto']
      },
      {
         id: 'Symbol_7Copy5',
         type: 'rect',
         userClass: 'grid',
         rect: ['-364px','0px','auto','auto','auto','auto']
      },
      {
         id: 'Symbol_7Copy4',
         type: 'rect',
         userClass: 'grid',
         rect: ['-364px','0px','auto','auto','auto','auto']
      }]
   },
   {
      rect: ['143px','5px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Allowed',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(67,207,80,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['507px','5px','auto','auto','auto','auto'],
      id: 'TextCopy',
      text: 'Blocked',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(235,103,43,1.00)','700','none',''],
      type: 'text'
   },
   {
      id: 'tool1',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','84','auto','auto','auto','auto']
   },
   {
      id: 'tool2',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','177','auto','auto','auto','auto']
   },
   {
      id: 'tool3',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','268','auto','auto','auto','auto']
   },
   {
      id: 'btn_reset',
      type: 'rect',
      userClass: 'reset',
      rect: ['334','5','auto','auto','auto','auto']
   },
   {
      rect: ['-158px','0px','auto','auto','auto','auto'],
      id: 'ToolB',
      userClass: 'toolb',
      display: 'none',
      type: 'rect'
   },
   {
      rect: ['710','295','auto','auto','auto','auto'],
      id: 'tool4',
      userClass: 'tool',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'Symbol_7Copy4',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy2',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy7',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy3',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7',
      symbolName: 'Symbol_7'
   },
   {
      id: 'ToolB',
      symbolName: 'Symbol_1'
   },
   {
      id: 'tool2',
      symbolName: 'tool2'
   },
   {
      id: 'tool1',
      symbolName: 'tool1'
   },
   {
      id: 'Symbol_7Copy6',
      symbolName: 'Symbol_7'
   },
   {
      id: 'btn_reset',
      symbolName: 'btn_reset'
   },
   {
      id: 'tool3',
      symbolName: 'tool3'
   },
   {
      id: 'Symbol_7Copy5',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy',
      symbolName: 'Symbol_7'
   },
   {
      id: 'tool4',
      symbolName: 'Symbol_6'
   }   ]
   },
   states: {
      "Base State": {
         "${_Symbol_7Copy7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_tool4}": [
            ["style", "top", '172px'],
            ["transform", "scaleY", '0.96154'],
            ["transform", "scaleX", '0.96154'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1020px']
         ],
         "${symbolSelector}": [
            ["style", "height", '401px'],
            ["style", "width", '788px']
         ],
         "${_Symbol_7Copy5}": [
            ["style", "left", '0px'],
            ["style", "top", '168px']
         ],
         "${_Symbol_7}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Symbol_7Copy2}": [
            ["style", "left", '0px'],
            ["style", "top", '168px']
         ],
         "${_tool3}": [
            ["style", "top", '156px'],
            ["transform", "scaleX", '0.83333'],
            ["style", "left", '723px'],
            ["transform", "scaleY", '0.83333']
         ],
         "${_Group2}": [
            ["style", "left", '369px'],
            ["style", "top", '45px']
         ],
         "${_Symbol_7Copy4}": [
            ["style", "left", '170px'],
            ["style", "top", '168px']
         ],
         "${_Symbol_7Copy3}": [
            ["style", "left", '170px'],
            ["style", "top", '168px']
         ],
         "${_tool2}": [
            ["style", "top", '249px'],
            ["transform", "scaleX", '0.83333'],
            ["style", "left", '725px'],
            ["transform", "scaleY", '0.83333']
         ],
         "${_Text}": [
            ["style", "top", '5px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(67,207,80,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '143px'],
            ["style", "font-size", '18px']
         ],
         "${_Group}": [
            ["style", "left", '9px'],
            ["style", "top", '45px']
         ],
         "${_ToolB}": [
            ["style", "top", '249px'],
            ["transform", "scaleY", '0.76923'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "left", '587px'],
            ["transform", "scaleX", '0.76923']
         ],
         "${_Symbol_7Copy6}": [
            ["style", "left", '170px'],
            ["style", "top", '0px']
         ],
         "${_Symbol_7Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '170px'],
            ["style", "overflow", 'hidden']
         ],
         "${_btn_reset}": [
            ["style", "left", '458px'],
            ["style", "top", '406px']
         ],
         "${_TextCopy}": [
            ["style", "top", '5px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,124,35,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '502px'],
            ["style", "font-size", '18px']
         ],
         "${_tool1}": [
            ["style", "top", '67px'],
            ["transform", "scaleX", '0.83333'],
            ["style", "left", '724px'],
            ["transform", "scaleY", '0.83333']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23,
         autoPlay: false,
         timeline: [
            { id: "eid422", tween: [ "style", "${_Symbol_7Copy5}", "top", '168px', { fromValue: '168px'}], position: 0, duration: 0 },
            { id: "eid574", tween: [ "transform", "${_tool1}", "scaleX", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid558", tween: [ "color", "${_TextCopy}", "color", 'rgba(255,124,35,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,124,35,1.00)'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_ToolB}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "transform", "${_tool3}", "scaleY", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid575", tween: [ "transform", "${_tool1}", "scaleY", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid523", tween: [ "style", "${_Symbol_7Copy7}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "style", "${_Symbol_7Copy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid545", tween: [ "style", "${_btn_reset}", "left", '458px', { fromValue: '458px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_Symbol_7Copy3}", "left", '170px', { fromValue: '170px'}], position: 0, duration: 0 },
            { id: "eid471", tween: [ "style", "${_Symbol_7Copy6}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "style", "${_tool3}", "top", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
            { id: "eid444", tween: [ "style", "${_tool1}", "top", '66px', { fromValue: '67px'}], position: 0, duration: 23 },
            { id: "eid470", tween: [ "style", "${_Symbol_7Copy7}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid401", tween: [ "style", "${_Symbol_7}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid635", tween: [ "style", "${_ToolB}", "top", '249px', { fromValue: '249px'}], position: 0, duration: 0 },
            { id: "eid181", tween: [ "transform", "${_ToolB}", "scaleY", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid445", tween: [ "transform", "${_tool3}", "scaleX", '1.02', { fromValue: '0.83333'}], position: 0, duration: 23 },
            { id: "eid434", tween: [ "transform", "${_tool4}", "scaleY", '0.96154', { fromValue: '0.96154'}], position: 0, duration: 0 },
            { id: "eid564", tween: [ "transform", "${_tool2}", "scaleY", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid557", tween: [ "style", "${_TextCopy}", "left", '502px', { fromValue: '502px'}], position: 0, duration: 0 },
            { id: "eid432", tween: [ "transform", "${_tool4}", "scaleX", '0.96154', { fromValue: '0.96154'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_Symbol_7Copy2}", "top", '168px', { fromValue: '168px'}], position: 0, duration: 0 },
            { id: "eid418", tween: [ "style", "${_Symbol_7Copy4}", "top", '168px', { fromValue: '168px'}], position: 0, duration: 0 },
            { id: "eid180", tween: [ "transform", "${_ToolB}", "scaleX", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid633", tween: [ "style", "${_ToolB}", "left", '587px', { fromValue: '587px'}], position: 0, duration: 0 },
            { id: "eid578", tween: [ "style", "${_tool2}", "left", '725px', { fromValue: '725px'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_Symbol_7}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid521", tween: [ "style", "${_Symbol_7Copy6}", "left", '170px', { fromValue: '170px'}], position: 0, duration: 0 },
            { id: "eid443", tween: [ "style", "${_tool1}", "left", '710px', { fromValue: '724px'}], position: 0, duration: 23 },
            { id: "eid467", tween: [ "style", "${_Symbol_7Copy3}", "top", '168px', { fromValue: '168px'}], position: 0, duration: 0 },
            { id: "eid522", tween: [ "style", "${_Symbol_7Copy4}", "left", '170px', { fromValue: '170px'}], position: 0, duration: 0 },
            { id: "eid647", tween: [ "style", "${_btn_reset}", "top", '406px', { fromValue: '406px'}], position: 0, duration: 0 },
            { id: "eid563", tween: [ "transform", "${_tool2}", "scaleX", '0.83333', { fromValue: '0.83333'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_Symbol_7Copy}", "left", '170px', { fromValue: '170px'}], position: 0, duration: 0 },
            { id: "eid576", tween: [ "style", "${_tool3}", "left", '723px', { fromValue: '723px'}], position: 0, duration: 0 },
            { id: "eid524", tween: [ "style", "${_Symbol_7Copy5}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid397", tween: [ "style", "${_Symbol_7Copy}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid566", tween: [ "style", "${_tool2}", "top", '249px', { fromValue: '249px'}], position: 0, duration: 0 }         ]
      }
   }
},
"tool1": {
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
      rect: ['0px','0px','78px','78px','auto','auto'],
      id: 'tool1_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool1_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool1_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
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
"tool2": {
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
      rect: ['0px','0px','78px','78px','auto','auto'],
      id: 'tool2_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
         ],
         "${_tool2_up}": [
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
"tool3": {
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
      rect: ['0px','0px','78px','78px','auto','auto'],
      id: 'tool3_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool3_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool3_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
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
"btn_release": {
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
      userClass: 'img',
      id: 'btn_release_up',
      type: 'image',
      rect: ['0px','0px','88px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_release_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,45,26,1.00)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'Release',
      rect: ['0px','4px','88px','auto','auto','auto'],
      userClass: 'txt'
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
         "${_Text2}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '88px']
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
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"btn_reset": {
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
      rect: ['0','0','88px','27px','auto','auto'],
      id: 'btn_common_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,45,26,1.00)','bold','none','normal'],
      rect: ['0px','4px','88px','auto','auto','auto'],
      type: 'text',
      id: 'Text2',
      text: 'Replay',
      align: 'center',
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '88px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
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
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"questionPanel": {
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
      id: 'questionPanelBg',
      type: 'image',
      rect: ['0px','0px','915px','241px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/questionPanelBg.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_questionPanelBg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '241px'],
            ["style", "width", '915px']
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
"dropDown": {
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
      rect: ['0px','0px','145px','29px','auto','auto'],
      id: 'dropDown_up',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/dropDown_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dropDown_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '145px']
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
            { id: "eid255", tween: [ "style", "${_dropDown_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"btn_ask": {
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
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','700','none',''],
      rect: ['0px','2px','86px','auto','auto','auto'],
      type: 'text',
      id: 'Text',
      text: 'Create',
      align: 'center',
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '92px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "width", '86px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '18px']
         ],
         "${_btn_common_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
      rect: ['3px','0px','85px','85px','auto','auto'],
      id: 'btn_send_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_send_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','700','none','normal'],
      rect: ['7px','35px','78px','28px','auto','auto'],
      type: 'text',
      id: 'Text2',
      text: 'Send Agent',
      align: 'center',
      userClass: 'txt'
   },
   {
      rect: ['29px','7px','31px','28px','auto','auto'],
      id: 'Arrow012',
      opacity: 0.5703125,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Arrow01.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '92px']
         ],
         "${_Arrow012}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0.5703125'],
            ["style", "left", '29px']
         ],
         "${_Text2}": [
            ["style", "top", '35px'],
            ["style", "width", '78px'],
            ["style", "line-height", '18px'],
            ["style", "height", '28px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '7px'],
            ["style", "font-size", '18px']
         ],
         "${_btn_send_up}": [
            ["style", "left", '3px'],
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
"robot": {
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
      id: 'robotGlow',
      type: 'image',
      rect: ['-123px','-111px','416px','416px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/robotGlow.png','0px','0px']
   },
   {
      id: 'robot',
      type: 'image',
      rect: ['0px','0px','169px','194px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/robot.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_robotGlow}": [
            ["style", "top", '-111px'],
            ["style", "left", '-123px']
         ],
         "${symbolSelector}": [
            ["style", "height", '194px'],
            ["style", "width", '169px']
         ],
         "${_robot}": [
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
      userClass: 'coin',
      id: 'coin50_orange',
      type: 'image',
      rect: ['53px','264px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50_orange.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50',
      type: 'image',
      rect: ['53px','202px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy',
      type: 'image',
      rect: ['53px','187px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy2',
      type: 'image',
      rect: ['53px','172px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy3',
      type: 'image',
      rect: ['53px','157px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy4',
      type: 'image',
      rect: ['53px','142px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy5',
      type: 'image',
      rect: ['53px','127px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin500_orange',
      type: 'image',
      rect: ['53px','65px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin500_orange.png','0px','0px']
   },
   {
      id: 'coinBox_highlight',
      type: 'image',
      rect: ['45px','46px','80px','291px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinBox_highlight.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(246,205,81,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'High Score',
      align: 'right',
      rect: ['54px','1px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['24px','11px','122px','46px','auto','auto'],
      align: 'center',
      id: 'Text4Copy',
      text: '0000',
      userClass: 'scoretxt',
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(246,205,81,1.00)','normal','none','normal']
   },
   {
      transform: [[0,0],['-50']],
      rect: ['96px','340px','69px','60px','auto','auto'],
      id: 'cord22',
      opacity: 0.75,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      transform: [[0,0],['126']],
      id: 'cord',
      type: 'image',
      rect: ['-53px','318px','104px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_coin50Copy}": [
            ["style", "top", '187px'],
            ["style", "left", '53px']
         ],
         "${_coin50Copy3}": [
            ["style", "top", '157px'],
            ["style", "left", '53px']
         ],
         "${_Text4}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(246,205,81,1.00)'],
            ["style", "left", '54px'],
            ["style", "font-size", '12px']
         ],
         "${_cord22}": [
            ["style", "top", '340px'],
            ["transform", "rotateZ", '-50deg'],
            ["style", "height", '60px'],
            ["style", "opacity", '0.75'],
            ["style", "left", '96px'],
            ["style", "width", '69px']
         ],
         "${_coin50Copy5}": [
            ["style", "top", '127px'],
            ["style", "left", '53px']
         ],
         "${_coin500_orange}": [
            ["style", "left", '53px'],
            ["style", "top", '65px']
         ],
         "${_coin50_orange}": [
            ["style", "top", '264px'],
            ["style", "left", '53px']
         ],
         "${_coin50Copy4}": [
            ["style", "top", '142px'],
            ["style", "left", '53px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '11px'],
            ["style", "text-align", 'center'],
            ["style", "width", '122px'],
            ["color", "color", 'rgba(246,205,81,1.00)'],
            ["style", "height", '46px'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_cord}": [
            ["style", "top", '318px'],
            ["transform", "rotateZ", '126deg'],
            ["style", "height", '70px'],
            ["style", "left", '-53px'],
            ["style", "width", '104px']
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
         "${_coin50Copy2}": [
            ["style", "top", '172px'],
            ["style", "left", '53px']
         ],
         "${_coin50}": [
            ["style", "top", '202px'],
            ["style", "left", '53px']
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
"questionField": {
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
      rect: ['0px','0px','525px','20px','auto','auto'],
      id: 'Text',
      text: 'Your Clue(s) will appear here...',
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(45,43,26,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['503px','0px','119px','20px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(45,43,26,1.00)','700','none',''],
      id: 'TextCopy2',
      text: 'Response',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['0px','20px','683px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(50,133,180,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '525px']
         ],
         "${_Rectangle}": [
            ["style", "height", '1px'],
            ["color", "background-color", 'rgba(50,133,180,1.00)']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "width", '525px'],
            ["color", "color", 'rgba(45,43,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy2}": [
            ["color", "color", 'rgba(45,43,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '503px'],
            ["style", "font-size", '16px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '119px']
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
"Symbol_1": {
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
      id: 'tool_bottom2',
      type: 'image',
      rect: ['97px','-58px','141px','193px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool_bottom.png','0px','0px']
   },
   {
      rect: ['107','15','auto','auto','auto','auto'],
      id: 'Symbol_5',
      userClass: 'tool2',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['58','15','auto','auto','auto','auto'],
      id: 'Symbol_32',
      userClass: 'tool2',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['5','15','auto','auto','auto','auto'],
      id: 'Symbol_22',
      userClass: 'tool2',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      id: 'Symbol_9',
      type: 'rect',
      rect: ['254','397','auto','auto','auto','auto'],
      userClass: 'tool2'
   },
   {
      id: 'tool1C_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1C_selected.png','0px','0px']
   },
   {
      id: 'tool1A_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1A_selected.png','0px','0px']
   },
   {
      id: 'tool1B_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1B_selected.png','0px','0px']
   },
   {
      rect: ['158px','0px','78px','78px','auto','auto'],
      userClass: 'toolA',
      id: 'tool2_selected',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/tool2_selected.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Symbol_9',
      symbolName: 'Symbol_9'
   },
   {
      id: 'Symbol_32',
      symbolName: 'Symbol_3'
   },
   {
      id: 'Symbol_22',
      symbolName: 'Symbol_2'
   },
   {
      id: 'Symbol_5',
      symbolName: 'Symbol_5'
   }   ]
   },
   states: {
      "Base State": {
         "${_tool_bottom2}": [
            ["style", "left", '97px'],
            ["style", "top", '-58px']
         ],
         "${_tool1A_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${_Symbol_9}": [
            ["style", "top", '77px'],
            ["style", "left", '149px']
         ],
         "${_Symbol_32}": [
            ["style", "top", '-8px'],
            ["style", "left", '115px'],
            ["style", "cursor", 'pointer']
         ],
         "${_tool2_selected}": [
            ["style", "top", '0px'],
            ["style", "left", '158px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Symbol_22}": [
            ["style", "top", '41px'],
            ["style", "left", '115px'],
            ["style", "cursor", 'pointer']
         ],
         "${_tool1C_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${_tool1B_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '236px']
         ],
         "${_Symbol_5}": [
            ["style", "top", '-46px'],
            ["style", "left", '149px'],
            ["style", "cursor", 'pointer']
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
            { id: "eid642", tween: [ "style", "${_Symbol_5}", "left", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid656", tween: [ "style", "${_Symbol_9}", "top", '77px', { fromValue: '77px'}], position: 0, duration: 0 },
            { id: "eid626", tween: [ "style", "${_Symbol_22}", "top", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid645", tween: [ "style", "${_Symbol_22}", "left", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid652", tween: [ "style", "${_Symbol_9}", "left", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid627", tween: [ "style", "${_Symbol_32}", "top", '-8px', { fromValue: '-8px'}], position: 0, duration: 0 },
            { id: "eid657", tween: [ "style", "${_Symbol_5}", "top", '-46px', { fromValue: '-46px'}], position: 0, duration: 0 },
            { id: "eid644", tween: [ "style", "${_Symbol_32}", "left", '115px', { fromValue: '115px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_2": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2A_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2A_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool2A_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"Symbol_3": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2B_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2B_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
         ],
         "${_tool2B_up}": [
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
"Symbol_4": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2C_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2C_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
         ],
         "${_tool2C_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
"Symbol_5": {
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
      id: 'Symbol_42',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Symbol_42',
      symbolName: 'Symbol_4'
   }   ]
   },
   states: {
      "Base State": {
         "${_Symbol_42}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"Symbol_6": {
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
      userClass: 'img',
      id: 'tool4_up',
      type: 'image',
      rect: ['0px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool4_up.png','0px','0px']
   },
   {
      userClass: 'txt',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(255,255,255,1.00)','400','none','normal'],
      id: 'Text3Copy9',
      text: 'Protractor <br>Tool',
      align: 'left',
      rect: ['84px','17px','91px','44px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy9}": [
            ["style", "top", '17px'],
            ["style", "font-size", '15px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '44px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '84px'],
            ["style", "width", '91px']
         ],
         "${_tool4_up}": [
            ["style", "height", '78px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '78px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
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
"Symbol_7": {
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
      rect: ['0px','0px','162px','162px','auto','auto'],
      userClass: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.01)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '162px'],
            ["color", "background-color", 'rgba(192,192,192,0.01)'],
            ["style", "left", '0px'],
            ["style", "width", '162px']
         ],
         "${symbolSelector}": [
            ["style", "height", '168px'],
            ["style", "width", '170px']
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
"Symbol_8": {
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
      transform: [],
      borderRadius: ['0px','0px','0px','0px'],
      rect: ['0px','0px','170px','15px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(224,212,25,1.00)']
   },
   {
      userClass: 'Rtxt',
      rect: ['0px','0','170px','auto','auto','auto'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'RELEASED',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none',''],
      transform: []
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(224,212,25,1.00)'],
            ["style", "height", '15px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["transform", "scaleY", '1'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'center'],
            ["style", "left", '0px'],
            ["style", "width", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '18px'],
            ["style", "width", '170px']
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
"btn_ask_1": {
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
      id: 'btn_reset_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_reset_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','700','none',''],
      rect: ['0px','2px','86px','auto','auto','auto'],
      type: 'text',
      id: 'Text',
      text: 'Discard',
      align: 'center',
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_reset_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '92px']
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
"Symbol_9": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2D_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2D_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool2D_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"scanAnimation": {
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
      rect: ['0px','0px','180px','180px','auto','auto'],
      id: 'scanTint2',
      opacity: 0.5,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/scanTint2.png','0px','0px']
   },
   {
      id: 'scanRay',
      type: 'image',
      rect: ['0','-36px','180px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scanRay.png','0px','0px']
   },
   {
      rect: ['0px','140px','178px','25px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      id: 'Rectangle3',
      opacity: 0.5,
      display: 'none',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['42px','140px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',20,'rgba(0,255,175,1.00)','400','none','italic'],
      align: 'center',
      id: 'Text',
      text: 'Evaluating',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['0','76','auto','auto','auto','auto'],
      id: 'text_allowed',
      userClass: 'allowedEff',
      display: 'none',
      type: 'rect'
   },
   {
      rect: ['0','76','auto','auto','auto','auto'],
      id: 'text_blocked',
      userClass: 'blockedEff',
      display: 'none',
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'text_blocked',
      symbolName: 'text_blocked'
   },
   {
      id: 'text_allowed',
      symbolName: 'text_allowed'
   }   ]
   },
   states: {
      "Base State": {
         "${_scanRay}": [
            ["style", "display", 'block'],
            ["style", "top", '-72px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0.5'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "top", '140px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(0,255,175,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '42px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '178px']
         ],
         "${_text_allowed}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_text_blocked}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_scanTint2}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0']
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
            { id: "eid663", tween: [ "style", "${_scanTint2}", "display", 'block', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid666", tween: [ "style", "${_scanTint2}", "opacity", '0.5', { fromValue: '0'}], position: 2250, duration: 250 },
            { id: "eid667", tween: [ "style", "${_scanTint2}", "opacity", '0', { fromValue: '0.5'}], position: 2500, duration: 250 },
            { id: "eid668", tween: [ "style", "${_scanTint2}", "opacity", '0.5', { fromValue: '0'}], position: 2750, duration: 250 },
            { id: "eid669", tween: [ "style", "${_scanTint2}", "opacity", '0', { fromValue: '0.5'}], position: 3000, duration: 250 },
            { id: "eid698", tween: [ "style", "${_scanTint2}", "opacity", '0.5', { fromValue: '0'}], position: 3250, duration: 250 },
            { id: "eid699", tween: [ "style", "${_scanTint2}", "opacity", '0', { fromValue: '0.5'}], position: 3500, duration: 250 },
            { id: "eid673", tween: [ "style", "${_scanRay}", "top", '142px', { fromValue: '-72px'}], position: 0, duration: 500 },
            { id: "eid674", tween: [ "style", "${_scanRay}", "top", '-36px', { fromValue: '142px'}], position: 500, duration: 500 },
            { id: "eid676", tween: [ "style", "${_scanRay}", "top", '142px', { fromValue: '-36px'}], position: 1000, duration: 500 },
            { id: "eid677", tween: [ "style", "${_scanRay}", "top", '-36px', { fromValue: '142px'}], position: 1500, duration: 500 },
            { id: "eid679", tween: [ "style", "${_scanRay}", "top", '142px', { fromValue: '-36px'}], position: 2000, duration: 500 },
            { id: "eid680", tween: [ "style", "${_scanRay}", "top", '-36px', { fromValue: '142px'}], position: 2500, duration: 500 },
            { id: "eid708", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid695", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0 },
            { id: "eid696", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid739", tween: [ "style", "${_text_allowed}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid670", tween: [ "style", "${_scanRay}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid675", tween: [ "style", "${_scanRay}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid678", tween: [ "style", "${_scanRay}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid697", tween: [ "style", "${_scanRay}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid741", tween: [ "style", "${_text_blocked}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid707", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid681", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0 },
            { id: "eid682", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid683", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid684", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid685", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid686", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid687", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid688", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid689", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid690", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid691", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid692", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid693", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid694", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid740", tween: [ "style", "${_text_allowed}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid738", tween: [ "style", "${_text_blocked}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 }         ]
      }
   }
},
"text_allowed": {
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
      rect: ['0px','0px','178px','29px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(39,19,90,1.00)']
   },
   {
      rect: ['0px','0px','178px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Allowed',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "font-size", '25px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '0px'],
            ["style", "width", '178px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(38,90,19,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '178px']
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
"text_blocked": {
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
      rect: ['0px','0px','178px','29px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(140,17,0,1.00)']
   },
   {
      rect: ['0px','0px','178px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Blocked',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '0px'],
            ["style", "width", '178px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '0px'],
            ["style", "font-size", '25px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(140,17,0,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '178px']
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
"scanInvalid": {
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
      rect: ['0px','140px','178px','25px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      id: 'Rectangle3',
      opacity: 0.5,
      display: 'none',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['42px','140px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',20,'rgba(0,255,175,1.00)','400','none','italic'],
      align: 'center',
      id: 'Text',
      text: 'Invalid',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,0,0,1.00)'],
            ["style", "opacity", '0.5'],
            ["style", "display", 'none'],
            ["style", "top", '76px']
         ],
         "${_Text}": [
            ["style", "top", '76px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '400'],
            ["style", "left", '61px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '178px'],
            ["style", "width", '178px'],
            ["style", "overflow", 'hidden']
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
            { id: "eid713", tween: [ "style", "${_Text}", "top", '76px', { fromValue: '76px'}], position: 45, duration: 0 },
            { id: "eid708", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid695", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0 },
            { id: "eid724", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid725", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid726", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid727", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid728", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid729", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid730", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid731", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid732", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid733", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid734", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid735", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid696", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid715", tween: [ "color", "${_Rectangle3}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 45, duration: 0 },
            { id: "eid707", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid681", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0 },
            { id: "eid682", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid683", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid684", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid685", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid686", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid687", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid688", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid689", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid690", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid691", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid692", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid693", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid694", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid714", tween: [ "style", "${_Rectangle3}", "top", '76px', { fromValue: '76px'}], position: 45, duration: 0 },
            { id: "eid712", tween: [ "style", "${_Text}", "left", '61px', { fromValue: '61px'}], position: 45, duration: 0 },
            { id: "eid711", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 45, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "mission3");
