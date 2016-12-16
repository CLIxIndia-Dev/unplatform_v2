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
            id:'m01_feedback',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"feed"
         },
         {
            id:'m02_feedback',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"feed"
         },
         {
            id:'m03_feedback',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"feed"
         },
         {
            id:'m04_feedback',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"feed"
         }],
         symbolInstances: [
         {
            id:'m02_feedback',
            symbolName:'m02_feedback'
         },
         {
            id:'m03_feedback',
            symbolName:'m03_feedback'
         },
         {
            id:'m04_feedback',
            symbolName:'m04_feedback'
         },
         {
            id:'m01_feedback',
            symbolName:'m01_feedback'
         }
         ]
      },
   states: {
      "Base State": {
         "${_m03_feedback}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_m01_feedback}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1014px'],
            ["style", "height", '652px'],
            ["style", "overflow", 'hidden']
         ],
         "${_m04_feedback}": [
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
      userClass: 'cont_txt',
      font: ['Verdana, Geneva, sans-serif',20,'rgba(0,0,0,1)','700','none',''],
      align: 'center',
      id: 'Text',
      text: 'CONTINUE',
      type: 'text',
      rect: ['27px','7px','auto','auto','auto','auto']
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
"match_mc": {
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
      userClass: 'mtch_txt',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text8',
      text: 'MATCH',
      align: 'center',
      rect: ['-41px','0px','182px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text8}": [
            ["style", "top", '0px'],
            ["style", "font-size", '30px'],
            ["style", "display", 'block'],
            ["style", "font-weight", '400'],
            ["style", "left", '-41px'],
            ["style", "width", '182px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '97px']
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
            { id: "eid4", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"m02_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      userClass: 'coinToken',
      id: 'coin200',
      type: 'image',
      rect: ['402px','389px','48px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      userClass: 'coinToken',
      id: 'coin50',
      type: 'image',
      rect: ['561px','389px','48px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_list',
      type: 'image',
      rect: ['244px','201px','433px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_list.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['612px','170px','214px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape.png','0px','0px']
   },
   {
      id: 'feedback_star',
      type: 'image',
      rect: ['341px','151px','110px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star.png','0px','0px']
   },
   {
      id: 'feedback_alien',
      type: 'image',
      rect: ['50px','209px','186px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_alien.png','0px','0px']
   },
   {
      userClass: 'matchShape',
      id: '_28_normal',
      type: 'image',
      rect: ['137px','392px','37px','37px','auto','auto'],
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      userClass: 'matchShape',
      id: '_28_normalCopy',
      type: 'image',
      rect: ['644px','201px','152px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      transform: [[0,0],['-11']],
      id: 'cord22',
      type: 'image',
      rect: ['605px','531px','115px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      transform: [[0,0],['-144']],
      id: 'cord2',
      type: 'image',
      rect: ['432px','600px','89px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      transform: [[0,0],['-273']],
      id: 'cord2Copy',
      type: 'image',
      rect: ['540px','575px','89px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text7',
      text: 'X 1',
      rect: ['455px','399px','43px','auto','auto','auto'],
      userClass: 'token'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text7Copy',
      text: 'X 6',
      rect: ['613px','399px','43px','auto','auto','auto'],
      userClass: 'token'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text3',
      text: '02',
      rect: ['405px','171px','auto','auto','auto','auto'],
      userClass: 'star '
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'Tokens preserved',
      align: 'center',
      rect: ['474px','353px','auto','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'Great Job!',
      rect: ['398px','63px','271px','auto','auto','auto'],
      userClass: 'job'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',31,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'You solved the case!',
      rect: ['351px','105px','376px','auto','auto','auto'],
      userClass: 'solved'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Your<br>Score',
      align: 'right',
      rect: ['485px','477px','auto','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text6',
      text: '50',
      rect: ['537px','471px','62px','auto','auto','auto'],
      userClass: 'scoretxt'
   },
   {
      id: 'match_mc',
      type: 'rect',
      rect: ['671px','259px','auto','auto','auto','auto'],
      transform: []
   },
   {
      userClass: 'cont_btn',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['832px','598px','auto','auto','auto','auto']
   },
   {
      userClass: 'quest2',
      rect: ['274px','232px','347px','87px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '232px'],
            ["style", "height", '87px'],
            ["style", "left", '274px'],
            ["style", "width", '347px']
         ],
         "${_cord2}": [
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '600px'],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_Text3}": [
            ["style", "top", '171px'],
            ["style", "font-weight", '700'],
            ["style", "left", '405px'],
            ["style", "font-size", '20px']
         ],
         "${_coin200}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text2}": [
            ["style", "top", '105px'],
            ["style", "font-size", '31px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "width", '376px']
         ],
         "${_cord2Copy}": [
            ["style", "top", '575px'],
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '613px'],
            ["style", "width", '43px']
         ],
         "${_Text4}": [
            ["style", "top", '353px'],
            ["style", "font-weight", '400'],
            ["style", "left", '474px'],
            ["style", "font-size", '16px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_feedback_star}": [
            ["style", "top", '151px'],
            ["style", "left", '341px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_feedback_shape}": [
            ["style", "left", '612px'],
            ["style", "top", '170px']
         ],
         "${_match_mc}": [
            ["style", "top", '259px'],
            ["style", "left", '671px']
         ],
         "${_cord22}": [
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '531px'],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '455px'],
            ["style", "font-size", '20px']
         ],
         "${_feedback_list}": [
            ["style", "left", '244px'],
            ["style", "top", '201px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '42px'],
            ["style", "left", '537px'],
            ["style", "width", '62px']
         ],
         "${__28_normal}": [
            ["style", "height", '37px'],
            ["style", "top", '392px'],
            ["style", "left", '137px'],
            ["style", "width", '37px']
         ],
         "${_Text}": [
            ["style", "top", '63px'],
            ["style", "font-size", '36px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '398px'],
            ["style", "width", '271px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${__28_normalCopy}": [
            ["style", "top", '201px'],
            ["style", "height", '152px'],
            ["style", "left", '644px'],
            ["style", "width", '152px']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "top", '477px'],
            ["style", "left", '485px'],
            ["style", "font-size", '18px']
         ],
         "${_feedback_alien}": [
            ["style", "top", '209px'],
            ["style", "left", '50px']
         ],
         "${_coin50}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
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
"m01_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_m1_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_alienCopy',
      type: 'image',
      rect: ['50px','209px','186px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_alien.png','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      userClass: 'coinToken',
      id: 'coin200',
      type: 'image',
      rect: ['402px','389px','48px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      userClass: 'coinToken',
      id: 'coin50',
      type: 'image',
      rect: ['561px','389px','48px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_list',
      type: 'image',
      rect: ['244px','201px','433px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_list.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['612px','170px','214px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape.png','0px','0px']
   },
   {
      id: 'feedback_star',
      type: 'image',
      rect: ['481px','151px','110px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star.png','0px','0px']
   },
   {
      userClass: 'matchShape',
      id: '_28_normal',
      type: 'image',
      rect: ['137px','392px','37px','37px','auto','auto'],
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      userClass: 'matchShape',
      id: '_28_normalCopy',
      type: 'image',
      rect: ['644px','201px','152px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      transform: [[0,0],['-11']],
      id: 'cord22',
      type: 'image',
      rect: ['605px','531px','115px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      transform: [[0,0],['-144']],
      id: 'cord2',
      type: 'image',
      rect: ['432px','600px','89px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      transform: [[0,0],['-273']],
      id: 'cord2Copy',
      type: 'image',
      rect: ['540px','575px','89px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text7',
      text: 'X 1',
      rect: ['455px','399px','43px','auto','auto','auto'],
      userClass: 'token'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text7Copy',
      text: 'X 6',
      rect: ['613px','399px','43px','auto','auto','auto'],
      userClass: 'token'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text3',
      text: '02',
      rect: ['545px','171px','auto','auto','auto','auto'],
      userClass: 'star '
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'Tokens preserved',
      align: 'center',
      rect: ['474px','353px','auto','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'Great Job!',
      rect: ['398px','63px','271px','auto','auto','auto'],
      userClass: 'job'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',31,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'You solved the case!',
      rect: ['351px','105px','376px','auto','auto','auto'],
      userClass: 'solved'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Your<br>Score',
      align: 'right',
      rect: ['485px','477px','auto','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text6',
      text: '50',
      rect: ['537px','471px','62px','auto','auto','auto'],
      userClass: 'scoretxt'
   },
   {
      id: 'match_mc',
      type: 'rect',
      rect: ['671px','259px','auto','auto','auto','auto'],
      transform: []
   },
   {
      userClass: 'cont_btn',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['832px','598px','auto','auto','auto','auto']
   },
   {
      userClass: 'quest2',
      rect: ['274px','232px','347px','87px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'CaseEnd_M1',
      type: 'rect',
      rect: ['747','517','auto','auto','auto','auto'],
      userClass: 'additionalText'
   }],
   symbolInstances: [
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   },
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   },
   {
      id: 'CaseEnd_M1',
      symbolName: 'CaseEnd_M1'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '87px'],
            ["style", "top", '232px'],
            ["style", "left", '274px'],
            ["style", "width", '347px']
         ],
         "${__28_normal}": [
            ["style", "top", '392px'],
            ["style", "height", '37px'],
            ["style", "left", '137px'],
            ["style", "width", '37px']
         ],
         "${_Text3}": [
            ["style", "top", '171px'],
            ["style", "font-weight", '700'],
            ["style", "left", '545px'],
            ["style", "font-size", '20px']
         ],
         "${_coin200}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text2}": [
            ["style", "top", '105px'],
            ["style", "width", '376px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "font-size", '31px']
         ],
         "${_cord2Copy}": [
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '575px'],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '613px'],
            ["style", "font-size", '20px']
         ],
         "${_Text4}": [
            ["style", "top", '353px'],
            ["style", "font-weight", '400'],
            ["style", "left", '474px'],
            ["style", "font-size", '16px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_coin50}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_feedback_shape}": [
            ["style", "left", '612px'],
            ["style", "top", '170px']
         ],
         "${_cord22}": [
            ["style", "top", '531px'],
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '455px'],
            ["style", "width", '43px']
         ],
         "${_cord2}": [
            ["style", "top", '600px'],
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_feedback_alienCopy}": [
            ["style", "top", '209px'],
            ["style", "left", '50px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "width", '62px'],
            ["style", "left", '537px'],
            ["style", "font-size", '42px']
         ],
         "${_match_mc}": [
            ["style", "top", '259px'],
            ["style", "left", '671px']
         ],
         "${_Text}": [
            ["style", "top", '63px'],
            ["style", "width", '271px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '398px'],
            ["style", "font-size", '36px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${__28_normalCopy}": [
            ["style", "height", '152px'],
            ["style", "top", '201px'],
            ["style", "left", '644px'],
            ["style", "width", '152px']
         ],
         "${_feedback_list}": [
            ["style", "left", '244px'],
            ["style", "top", '201px']
         ],
         "${_Text5}": [
            ["style", "top", '477px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "line-height", '20px'],
            ["style", "left", '485px'],
            ["style", "font-size", '18px']
         ],
         "${_feedback_star}": [
            ["style", "top", '151px'],
            ["style", "left", '481px']
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
"m03_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_m3_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_alien',
      type: 'image',
      rect: ['50px','209px','186px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_alien.png','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      userClass: 'coinToken',
      id: 'coin200',
      type: 'image',
      rect: ['402px','389px','48px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      userClass: 'coinToken',
      id: 'coin50',
      type: 'image',
      rect: ['561px','389px','48px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['432px','143px','214px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape_m3.png','0px','0px']
   },
   {
      id: 'feedback_star',
      type: 'image',
      rect: ['306px','275px','110px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star.png','0px','0px']
   },
   {
      userClass: 'matchShape',
      id: '_28_normal',
      type: 'image',
      rect: ['137px','392px','37px','37px','auto','auto'],
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      userClass: 'matchShape',
      id: '_28_normalCopy',
      type: 'image',
      rect: ['464px','174px','152px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      transform: [[0,0],['-11']],
      id: 'cord22',
      type: 'image',
      rect: ['605px','531px','115px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      transform: [[0,0],['-144']],
      id: 'cord2',
      type: 'image',
      rect: ['432px','600px','89px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      transform: [[0,0],['-273']],
      id: 'cord2Copy',
      type: 'image',
      rect: ['540px','575px','89px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text7',
      text: 'X 1',
      rect: ['455px','399px','43px','auto','auto','auto'],
      userClass: 'token'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text7Copy',
      text: 'X 6',
      rect: ['613px','399px','43px','auto','auto','auto'],
      userClass: 'token'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text3',
      text: '02',
      rect: ['370px','295px','26px','auto','auto','auto'],
      userClass: 'star '
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'Tokens preserved',
      align: 'center',
      rect: ['474px','353px','auto','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'Great Job!',
      rect: ['398px','63px','271px','auto','auto','auto'],
      userClass: 'job'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',31,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'You solved the case!',
      rect: ['351px','99px','376px','auto','auto','auto'],
      userClass: 'solved'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Your<br>Score',
      align: 'right',
      rect: ['485px','477px','auto','auto','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text6',
      text: '50',
      rect: ['537px','471px','62px','auto','auto','auto'],
      userClass: 'scoretxt'
   },
   {
      id: 'match_mc',
      type: 'rect',
      rect: ['491px','232px','auto','auto','auto','auto'],
      transform: []
   },
   {
      userClass: 'cont_btn',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['832px','598px','auto','auto','auto','auto']
   },
   {
      id: 'CaseEnd_M32',
      type: 'rect',
      rect: ['720px','557px','auto','auto','auto','auto'],
      userClass: 'additionalText'
   },
   {
      id: 'go2',
      type: 'image',
      rect: ['732px','190px','266px','343px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/go.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'CaseEnd_M32',
      symbolName: 'CaseEnd_M3'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   },
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_cord2}": [
            ["style", "top", '600px'],
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_Text3}": [
            ["style", "top", '295px'],
            ["style", "font-size", '20px'],
            ["style", "font-weight", '700'],
            ["style", "left", '370px'],
            ["style", "width", 'auto']
         ],
         "${_coin200}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text2}": [
            ["style", "top", '99px'],
            ["style", "width", '376px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "font-size", '31px']
         ],
         "${_cord2Copy}": [
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '575px'],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_coin50}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '613px'],
            ["style", "font-size", '20px']
         ],
         "${_feedback_alien}": [
            ["style", "top", '209px'],
            ["style", "left", '50px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_Text4}": [
            ["style", "top", '353px'],
            ["style", "font-weight", '400'],
            ["style", "left", '474px'],
            ["style", "font-size", '16px']
         ],
         "${_cord22}": [
            ["style", "top", '531px'],
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_feedback_shape}": [
            ["style", "left", '432px'],
            ["style", "top", '143px']
         ],
         "${_match_mc}": [
            ["style", "top", '232px'],
            ["style", "left", '491px']
         ],
         "${_go2}": [
            ["style", "left", '732px'],
            ["style", "top", '190px']
         ],
         "${_Text5}": [
            ["style", "top", '477px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "line-height", '20px'],
            ["style", "left", '485px'],
            ["style", "font-size", '18px']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '455px'],
            ["style", "width", '43px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "width", '62px'],
            ["style", "left", '537px'],
            ["style", "font-size", '42px']
         ],
         "${__28_normal}": [
            ["style", "top", '392px'],
            ["style", "height", '37px'],
            ["style", "left", '137px'],
            ["style", "width", '37px']
         ],
         "${_Text}": [
            ["style", "top", '63px'],
            ["style", "width", '271px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '398px'],
            ["style", "font-size", '36px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${__28_normalCopy}": [
            ["style", "height", '152px'],
            ["style", "top", '174px'],
            ["style", "left", '464px'],
            ["style", "width", '152px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_CaseEnd_M32}": [
            ["style", "top", '557px'],
            ["style", "left", '720px']
         ],
         "${_feedback_star}": [
            ["style", "top", '275px'],
            ["style", "left", '306px']
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
"CaseEnd_M1": {
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
      rect: ['0px','0px','290px','64px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(218,220,185,1.00)']
   },
   {
      userClass: 'additionalTextVal',
      type: 'text',
      font: ['Verdana, Geneva, sans-serif',16,'rgba(49,72,116,1.00)','normal','none','normal'],
      id: 'Text8',
      text: 'Looks like there is another case for you to solve.',
      align: 'left',
      rect: ['15px','13px','235px','37px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "height", '64px'],
            ["color", "background-color", 'rgba(218,220,185,1)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "height", '37px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(49,72,116,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '290px']
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
"CaseEnd_M3": {
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
      rect: ['0px','0px','290px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(218,220,185,1.00)']
   },
   {
      rect: ['15px','13px','235px','51px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',16,'rgba(49,72,116,1.00)','normal','none','normal'],
      userClass: 'additionalTextVal',
      id: 'Text8',
      text: 'Looks like you have another case to solve.<br>',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(218,220,185,1.00)']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'normal'],
            ["color", "color", 'rgba(49,72,116,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '77px'],
            ["style", "width", '290px']
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
"m04_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_m3_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      rect: ['402px','389px','48px','45px','auto','auto'],
      id: 'coin200',
      userClass: 'coinToken',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      rect: ['561px','389px','48px','45px','auto','auto'],
      id: 'coin50',
      userClass: 'coinToken',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['432px','127px','230px','229px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape_m3.png','0px','0px']
   },
   {
      id: 'feedback_star',
      type: 'image',
      rect: ['316px','294px','110px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star.png','0px','0px']
   },
   {
      id: 'gio_new',
      type: 'image',
      rect: ['89px','185px','153px','454px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gio_new.png','0px','0px']
   },
   {
      rect: ['605px','531px','115px','100px','auto','auto'],
      id: 'cord22',
      transform: [[],['-11']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      rect: ['432px','600px','89px','60px','auto','auto'],
      id: 'cord2',
      transform: [[],['-144']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      rect: ['540px','575px','89px','60px','auto','auto'],
      id: 'cord2Copy',
      transform: [[],['-273']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      rect: ['455px','399px','43px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      userClass: 'token',
      id: 'Text7',
      text: 'X 1',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['613px','399px','43px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      userClass: 'token',
      id: 'Text7Copy',
      text: 'X 6',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['380px','314px','26px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      userClass: 'star ',
      id: 'Text3',
      text: '02',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['346px','43px','auto','auto','auto','auto'],
      id: 'oppCopy',
      transform: [[],[],[],['0.447','0.447']],
      type: 'rect',
      userClass: 'opp'
   },
   {
      rect: ['474px','353px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text4',
      text: 'Tokens preserved',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['398px','63px','271px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none',''],
      userClass: 'job',
      id: 'Text',
      text: 'Great Job!',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['351px','99px','376px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',31,'rgba(255,255,255,1)','400','none','normal'],
      userClass: 'solved',
      id: 'Text2',
      text: 'You solved the case!',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['485px','477px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal'],
      id: 'Text5',
      text: 'Your<br>Score',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['537px','471px','62px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      userClass: 'scoretxt',
      id: 'Text6',
      text: '50',
      align: 'left',
      type: 'text'
   },
   {
      id: 'match_mc',
      type: 'rect',
      transform: [],
      rect: ['316px','193px','auto','auto','auto','auto']
   },
   {
      rect: ['832px','598px','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'cont_btn',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      id: 'CaseEnd_M32',
      type: 'rect',
      userClass: 'additionalText',
      rect: ['747','512px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'CaseEnd_M32',
      symbolName: 'CaseEnd_M3'
   },
   {
      id: 'oppCopy',
      symbolName: 'opp'
   },
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   }   ]
   },
   states: {
      "Base State": {
         "${_cord2}": [
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '600px'],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_Text3}": [
            ["style", "top", '314px'],
            ["style", "width", 'auto'],
            ["style", "font-weight", '700'],
            ["style", "left", '380px'],
            ["style", "font-size", '20px']
         ],
         "${_oppCopy}": [
            ["transform", "scaleX", '0.44715'],
            ["style", "left", '346px'],
            ["transform", "scaleY", '0.44715'],
            ["style", "top", '43px']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "top", '477px'],
            ["style", "left", '485px'],
            ["style", "font-size", '18px']
         ],
         "${_CaseEnd_M32}": [
            ["style", "top", '512px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '613px'],
            ["style", "width", '43px']
         ],
         "${_Text4}": [
            ["style", "top", '353px'],
            ["style", "font-weight", '400'],
            ["style", "left", '474px'],
            ["style", "font-size", '16px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_coin200}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_feedback_star}": [
            ["style", "top", '294px'],
            ["style", "left", '316px']
         ],
         "${_feedback_shape}": [
            ["style", "top", '127px'],
            ["style", "height", '229px'],
            ["style", "left", '432px'],
            ["style", "width", '230px']
         ],
         "${_match_mc}": [
            ["style", "top", '193px'],
            ["style", "left", '316px']
         ],
         "${_cord2Copy}": [
            ["style", "top", '575px'],
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${_gio_new}": [
            ["style", "top", '185px'],
            ["style", "height", '454px'],
            ["style", "left", '89px'],
            ["style", "width", '153px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '42px'],
            ["style", "left", '537px'],
            ["style", "width", '62px']
         ],
         "${_Text2}": [
            ["style", "top", '99px'],
            ["style", "font-size", '31px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "width", '376px']
         ],
         "${_Text}": [
            ["style", "top", '63px'],
            ["style", "font-size", '36px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '398px'],
            ["style", "width", '271px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${_cord22}": [
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '531px'],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '455px'],
            ["style", "font-size", '20px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_coin50}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
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
      rect: ['0px','-1px','381px','381px','auto','auto'],
      id: '_4x4grid2',
      userClass: 'boxGrid',
      type: 'image',
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
            ["style", "left", '89px'],
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
            ["style", "left", '370px'],
            ["style", "top", '-11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '385px']
         ],
         "${_circle}": [
            ["style", "left", '-10px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy18}": [
            ["style", "left", '85px'],
            ["style", "top", '-11px']
         ],
         "${__5x5grid}": [
            ["style", "height", '380px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '380px']
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
            ["style", "left", '182px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy3}": [
            ["style", "left", '275px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy4}": [
            ["style", "left", '370px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy19}": [
            ["style", "left", '-10px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy20}": [
            ["style", "left", '370px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy11}": [
            ["style", "left", '279px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy21}": [
            ["style", "left", '275px'],
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
            ["style", "left", '370px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy5}": [
            ["style", "left", '370px'],
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
            { id: "eid132", tween: [ "style", "${_circleCopy20}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_circleCopy2}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_circleCopy15}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_circleCopy11}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_circleCopy3}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_circleCopy14}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_circleCopy23}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_circleCopy17}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_circleCopy8}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_circleCopy24}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "style", "${_circleCopy18}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_circleCopy7}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid133", tween: [ "style", "${_circleCopy22}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid212", tween: [ "style", "${_circleCopy15}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_circleCopy6}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_circleCopy}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_circleCopy3}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_circleCopy21}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid213", tween: [ "style", "${_circleCopy5}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_circleCopy16}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_circleCopy4}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_circleCopy16}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid209", tween: [ "style", "${_circleCopy10}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid210", tween: [ "style", "${_circleCopy4}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_circleCopy8}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_circleCopy13}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_circleCopy6}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_circleCopy5}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_circleCopy12}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_circleCopy23}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_circle}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_circleCopy9}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid211", tween: [ "style", "${_circleCopy20}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_circleCopy18}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_circleCopy10}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_circleCopy19}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid214", tween: [ "style", "${_circleCopy17}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_circleCopy7}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_circleCopy22}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_circle}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 }         ]
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
      userClass: 'grid4',
      rect: ['-428px','8px','auto','auto','auto','auto']
   },
   {
      id: 'g5x5Copy',
      type: 'rect',
      userClass: 'grid5',
      rect: ['-428px','8px','auto','auto','auto','auto']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "feedback");
