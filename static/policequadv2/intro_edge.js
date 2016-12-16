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
            id:'BG01',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'BG02',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG03',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG04',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG05',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG06',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG07',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG08',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG09',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'btn_next',
            type:'rect',
            rect:['955px','593px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         },
         {
            id:'btn_back',
            display:'none',
            type:'rect',
            rect:['10','593','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         },
         {
            id:'Rectangle',
            display:'none',
            type:'rect',
            rect:['867px','587px','147px','65px','auto','auto'],
            borderRadius:["33px 33px","33px 33px","33px 33px","33px 33px"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Symbol_12',
            display:'none',
            type:'rect',
            rect:['875px','595','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"menu btnCLICKsnd2"
         },
         {
            id:'skip_btn',
            type:'rect',
            rect:['480','632','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         }],
         symbolInstances: [
         {
            id:'BG04',
            symbolName:'BG04'
         },
         {
            id:'BG08',
            symbolName:'BG_08'
         },
         {
            id:'BG03',
            symbolName:'BG03'
         },
         {
            id:'BG07',
            symbolName:'BG07'
         },
         {
            id:'skip_btn',
            symbolName:'skip_btn'
         },
         {
            id:'btn_back',
            symbolName:'btn_back'
         },
         {
            id:'BG02',
            symbolName:'BG02'
         },
         {
            id:'BG01',
            symbolName:'BG01'
         },
         {
            id:'btn_next',
            symbolName:'btn_next'
         },
         {
            id:'Symbol_12',
            symbolName:'Symbol_1'
         },
         {
            id:'BG05',
            symbolName:'BG05'
         },
         {
            id:'BG06',
            symbolName:'BG06'
         },
         {
            id:'BG09',
            symbolName:'BG09'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_12}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_BG09}": [
            ["style", "left", '1014px']
         ],
         "${_skip_btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_BG02}": [
            ["style", "left", '1014px']
         ],
         "${_BG07}": [
            ["style", "left", '1014px']
         ],
         "${_BG04}": [
            ["style", "left", '1014px']
         ],
         "${_BG05}": [
            ["style", "left", '1014px']
         ],
         "${_BG08}": [
            ["style", "left", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '867px'],
            ["style", "width", '147px'],
            ["style", "top", '587px'],
            ["style", "border-bottom-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '65px'],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px'],
            ["style", "height", '652px'],
            ["style", "overflow", 'hidden']
         ],
         "${_BG06}": [
            ["style", "left", '1014px']
         ],
         "${_BG03}": [
            ["style", "left", '1014px']
         ],
         "${_btn_back}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_btn_next}": [
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid44", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid43", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid24", tween: [ "style", "${_BG04}", "left", '2028px', { fromValue: '1014px'}], position: 750, duration: 42, easing: "easeOutCirc" },
            { id: "eid18", tween: [ "style", "${_BG04}", "left", '1014px', { fromValue: '2028px'}], position: 792, duration: 42, easing: "easeOutCirc" },
            { id: "eid32", tween: [ "style", "${_BG04}", "left", '0px', { fromValue: '1014px'}], position: 833, duration: 167, easing: "easeOutCirc" },
            { id: "eid53", tween: [ "style", "${_BG08}", "left", '0px', { fromValue: '1014px'}], position: 1750, duration: 250, easing: "easeOutCirc" },
            { id: "eid27", tween: [ "style", "${_BG05}", "left", '2028px', { fromValue: '1014px'}], position: 1000, duration: 83, easing: "easeOutCirc" },
            { id: "eid19", tween: [ "style", "${_BG05}", "left", '1014px', { fromValue: '2028px'}], position: 1083, duration: 42, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_BG05}", "left", '0px', { fromValue: '1014px'}], position: 1125, duration: 125, easing: "easeOutCirc" },
            { id: "eid25", tween: [ "style", "${_BG07}", "left", '0px', { fromValue: '1014px'}], position: 1500, duration: 250, easing: "easeOutCirc" },
            { id: "eid41", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_BG09}", "left", '2028px', { fromValue: '1014px'}], position: 2000, duration: 208, easing: "easeOutCirc" },
            { id: "eid22", tween: [ "style", "${_BG09}", "left", '0px', { fromValue: '2028px'}], position: 2208, duration: 42, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_BG06}", "left", '2028px', { fromValue: '1014px'}], position: 1250, duration: 125, easing: "easeOutCirc" },
            { id: "eid20", tween: [ "style", "${_BG06}", "left", '1014px', { fromValue: '2028px'}], position: 1375, duration: 42, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_BG06}", "left", '0px', { fromValue: '1014px'}], position: 1417, duration: 83, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_Symbol_12}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Symbol_12}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid16", tween: [ "style", "${_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" }         ]
      }
   }
},
"BG01": {
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
      id: 'BG1',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG01.jpg','0px','0px']
   },
   {
      rect: ['27px','27px','383px','29px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['38px','32px','362px','19px','auto','auto'],
      id: 'Text',
      text: 'Year 2040, a space ship is headed towards Earth.<br>',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','400','none','italic'],
      type: 'text'
   },
   {
      rect: ['157px','279px','216px','29px','auto','auto'],
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['166px','284px','192px','19px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','400','none','italic'],
      id: 'TextCopy',
      text: 'It makes a soft landing…',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['420px','555px','216px','63px','auto','auto'],
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['431px','561px','192px','51px','auto','auto'],
      id: 'TextCopy2',
      text: '…but it has been spotted, and the police arrive to check on the visitors.<br>',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','400','none','italic'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '29px'],
            ["style", "top", '27px'],
            ["style", "left", '27px'],
            ["style", "width", '383px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '38px'],
            ["style", "font-size", '14px'],
            ["style", "top", '32px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '19px'],
            ["style", "width", '362px']
         ],
         "${_TextCopy2}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '431px'],
            ["style", "font-size", '14px'],
            ["style", "top", '561px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '51px'],
            ["style", "width", '192px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "height", '29px'],
            ["style", "top", '279px'],
            ["style", "left", '157px'],
            ["style", "width", '216px']
         ],
         "${_BG1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '166px'],
            ["style", "font-size", '14px'],
            ["style", "top", '284px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '192px'],
            ["style", "height", '19px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "top", '555px'],
            ["style", "height", '63px'],
            ["style", "left", '420px'],
            ["style", "width", '216px']
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
"BG02": {
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
      id: 'BG2',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG02.jpg','0px','0px']
   },
   {
      rect: ['29px','26px','390px','72px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['38px','35px','368px','58px','auto','auto'],
      id: 'Text2',
      text: 'As the police get closer, the hatch of the spaceship opens and strange beings step out; one of them seems to be their leader!<br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','400','none','italic']
   },
   {
      rect: ['646px','26px','122px','78px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['659px','147px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['791px','130px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['673px','120px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['768px','120px','16px','16px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['749px','98px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['697px','42px','auto','auto','auto','auto'],
      id: 'Text3',
      text: '?',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',36,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['467px','236px','auto','auto','auto','auto'],
      transform: [[0,0],['10']],
      font: ['Tahoma, Geneva, sans-serif',13,'rgba(0,0,0,1)','400','none','normal'],
      id: 'Text',
      text: 'PEACE',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '14px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '120px'],
            ["style", "height", '18px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '673px'],
            ["style", "width", '18px']
         ],
         "${_Text2}": [
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '400'],
            ["style", "height", '58px'],
            ["style", "width", '368px']
         ],
         "${_Text3}": [
            ["style", "top", '42px'],
            ["style", "font-style", 'normal'],
            ["style", "left", '697px'],
            ["style", "font-size", '36px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '120px'],
            ["style", "height", '16px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '768px'],
            ["style", "width", '16px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '72px'],
            ["style", "width", '390px']
         ],
         "${_Text}": [
            ["style", "top", '236px'],
            ["style", "font-weight", '400'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '10deg'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '467px'],
            ["style", "font-size", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_BG2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_Ellipse2Copy4}": [
            ["style", "top", '98px'],
            ["style", "height", '22px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '749px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '130px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '791px'],
            ["style", "width", '10px']
         ],
         "${_Ellipse}": [
            ["style", "top", '26px'],
            ["style", "left", '646px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
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
"BG03": {
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
      id: 'BG3',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG03.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle4',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['24px','21px','278px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['262px','139px','140px','38px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['339px','77px','26px','66px','auto','auto'],
      transform: [[0,0],['16']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['499px','121px','26px','66px','auto','auto'],
      transform: [[0,0],['227'],['0','45']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['263px','96px','26px','66px','auto','auto'],
      transform: [[0,0],['-50'],['0','11'],['1','1.683']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['512px','118px','264px','77px','auto','auto'],
      id: 'RoundRect3Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['330px','417px','122px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect3Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['442px','352px','26px','66px','auto','auto'],
      transform: [[0,0],['40'],[],['1','1.683']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy4',
      rect: ['547px','452px','26px','66px','auto','auto'],
      transform: [[0,0],['-44'],[],['1','1.683']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['551px','500px','193px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect3Copy3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['31px','24px','264px','33px','auto','auto'],
      id: 'Text3',
      text: 'The police take the leader of the aliens to the Council of Elders.',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['278px','149px','102px','18px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'Text4',
      text: 'Who are you? <br>',
      transform: [],
      type: 'text'
   },
   {
      rect: ['346px','431px','90px','38px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'Text4Copy2',
      text: 'And what do you want?',
      transform: [],
      type: 'text'
   },
   {
      rect: ['563px','513px','170px','52px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'Text4Copy3',
      text: 'We are Judics, and we come from Planus, a planet far from Earth.',
      transform: [],
      type: 'text'
   },
   {
      rect: ['522px','131px','243px','52px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'center',
      id: 'Text4Copy',
      text: 'Greetings to the council. My name is Geo, and I speak for all those who have landed on your Earth.<br>',
      transform: [],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "top", '352px'],
            ["transform", "scaleY", '1.68253'],
            ["transform", "rotateZ", '40deg'],
            ["style", "height", '66px'],
            ["style", "left", '442px'],
            ["style", "width", '26px']
         ],
         "${_Text3}": [
            ["style", "top", '24px'],
            ["style", "width", '264px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '33px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '31px'],
            ["style", "font-size", '13px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '513px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '1'],
            ["style", "height", '52px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '563px'],
            ["style", "width", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '21px'],
            ["style", "left", '24px'],
            ["style", "height", '38px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '278px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '131px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '52px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '522px'],
            ["style", "width", '243px']
         ],
         "${_RoundRect3}": [
            ["style", "top", '139px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '262px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '140px']
         ],
         "${_RoundRect3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '118px'],
            ["style", "left", '512px'],
            ["style", "height", '77px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '264px']
         ],
         "${_RoundRect3Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '500px'],
            ["style", "left", '551px'],
            ["style", "height", '77px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '193px']
         ],
         "${_BG3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '452px'],
            ["transform", "scaleY", '1.68253'],
            ["transform", "rotateZ", '-44deg'],
            ["style", "height", '66px'],
            ["style", "left", '547px'],
            ["style", "width", '26px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '121px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '227deg'],
            ["style", "height", '66px'],
            ["transform", "skewY", '44.51deg'],
            ["style", "left", '499px'],
            ["style", "width", '26px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '431px'],
            ["style", "text-align", 'center'],
            ["style", "height", '38px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '346px'],
            ["style", "width", '90px']
         ],
         "${_RoundRect3Copy2}": [
            ["style", "top", '417px'],
            ["style", "border-width", '1px'],
            ["style", "height", '66px'],
            ["style", "border-style", 'none'],
            ["style", "left", '330px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_pointer}": [
            ["style", "top", '77px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '16deg'],
            ["style", "height", '66px'],
            ["style", "left", '339px'],
            ["style", "width", '26px']
         ],
         "${_Text4}": [
            ["style", "top", '149px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '278px'],
            ["style", "width", '102px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '96px'],
            ["transform", "scaleY", '1.68253'],
            ["transform", "rotateZ", '-50deg'],
            ["style", "height", '66px'],
            ["transform", "skewY", '11.37deg'],
            ["style", "left", '263px'],
            ["style", "width", '26px']
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
"BG04": {
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
      id: 'BG4',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG04.jpg','0px','0px']
   },
   {
      rect: ['79px','25px','284px','32px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      transform: [[0,0],[],['37']],
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['692px','26px','295px','34px','auto','auto'],
      id: 'Rectangle',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['600px','528px','191px','96px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['732px','400px','117px','54px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['-65'],[],['1','1.206']],
      id: 'pointer',
      type: 'image',
      rect: ['550px','514px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-227'],['0','30']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['261px','418px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-126'],['0','-46'],['1','1.113']],
      id: 'pointerCopy4',
      type: 'image',
      rect: ['587px','285px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-39'],[],['0.519','0.519']],
      id: 'pointerCopy',
      type: 'image',
      rect: ['927px','419px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['108'],[],['0.519','0.327']],
      id: 'pointerCopy2',
      type: 'image',
      rect: ['843px','375px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',15,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: 'Planus is ruled by Ra-Haka. ',
      align: 'center',
      rect: ['137px','32px','226px','18px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',15,'rgba(0,0,0,1.00)','400','none','normal'],
      type: 'text',
      id: 'TextCopy',
      text: 'Ra-Haka is cruel. He ill-treated us.',
      align: 'left',
      rect: ['715px','33px','272px','20px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy2',
      text: 'So we fled from Planus. Now we wish to live on Earth, where we hope to live with dignity.<br>',
      align: 'center',
      rect: ['609px','538px','171px','75px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy3',
      text: 'Where are we going Geo?',
      align: 'center',
      rect: ['739px','410px','103px','34px','auto','auto']
   },
   {
      rect: ['912px','482px','75px','32px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy4',
      text: 'Earth',
      align: 'center',
      rect: ['920px','489px','59px','17px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '25px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "skewX", '36.87deg'],
            ["style", "left", '79px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "top", '26px'],
            ["style", "height", '34px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '692px'],
            ["style", "width", '295px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '32px'],
            ["style", "top", '482px'],
            ["style", "left", '912px'],
            ["style", "width", '75px']
         ],
         "${_pointerCopy4}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '-45.62deg'],
            ["transform", "rotateZ", '-126deg'],
            ["transform", "scaleY", '1.11282'],
            ["style", "left", '587px'],
            ["style", "top", '285px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '489px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '17px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '920px'],
            ["style", "width", '59px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '410px'],
            ["style", "width", '103px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '739px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '400px'],
            ["style", "height", '54px'],
            ["style", "left", '732px'],
            ["style", "width", '117px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '528px'],
            ["style", "left", '600px'],
            ["style", "width", '191px']
         ],
         "${_BG4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '418px'],
            ["transform", "skewY", '30.04deg'],
            ["style", "left", '261px'],
            ["transform", "rotateZ", '-227deg']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '375px'],
            ["transform", "scaleY", '0.32692'],
            ["transform", "rotateZ", '108deg'],
            ["transform", "scaleX", '0.51923'],
            ["style", "left", '843px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '15px'],
            ["style", "top", '32px'],
            ["style", "text-align", 'center'],
            ["style", "height", '18px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '226px'],
            ["style", "font-style", 'normal']
         ],
         "${_TextCopy2}": [
            ["style", "top", '538px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '75px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '609px'],
            ["style", "width", '171px']
         ],
         "${_pointer}": [
            ["style", "top", '514px'],
            ["transform", "scaleY", '1.20562'],
            ["style", "left", '550px'],
            ["transform", "rotateZ", '-65deg']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '715px'],
            ["style", "font-size", '15px'],
            ["style", "top", '33px'],
            ["style", "text-align", 'left'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '272px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '419px'],
            ["transform", "scaleY", '0.51923'],
            ["transform", "rotateZ", '-39deg'],
            ["transform", "scaleX", '0.51923'],
            ["style", "left", '927px']
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
"BG05": {
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
      id: 'BG5',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG05.jpg','0px','0px']
   },
   {
      transform: [[0,0],['142'],[],['1','2.693']],
      id: 'pointer2',
      type: 'image',
      rect: ['203px','119px','35px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['329'],[],['1','2.619']],
      id: 'pointer2Copy',
      type: 'image',
      rect: ['220px','408px','35px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['179px','153px','242px','59px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['657px','81px','189px','59px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],['225'],[],['1','1.83']],
      id: 'pointer2Copy2',
      type: 'image',
      rect: ['757px','45px','35px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['401'],[],['1','1.56']],
      id: 'pointer2Copy3',
      type: 'image',
      rect: ['794px','478px','35px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['227px','511px','242px','66px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['676px','532px','242px','45px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2Copy3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [],
      rect: ['244px','526px','204px','39px','auto','auto'],
      type: 'text',
      id: 'Text2Copy',
      text: 'We will work with you to make Earth a happier place.<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      rect: ['198px','163px','204px','39px','auto','auto'],
      type: 'text',
      id: 'Text2',
      text: 'What can Judics offer Earth in return, Geo?<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      rect: ['672px','94px','162px','34px','auto','auto'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'How did you escape from Planus, Geo?<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      rect: ['685px','546px','226px','18px','auto','auto'],
      type: 'text',
      id: 'Text2Copy3',
      text: 'Ra-Haka had a spaceship… <br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointer2Copy2}": [
            ["style", "top", '45px'],
            ["transform", "scaleY", '1.83027'],
            ["transform", "rotateZ", '225deg'],
            ["style", "height", '78px'],
            ["style", "left", '757px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '242px'],
            ["style", "top", '511px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '66px'],
            ["style", "left", '227px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '242px'],
            ["style", "top", '153px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '59px'],
            ["style", "left", '179px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '546px'],
            ["style", "width", '226px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '18px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '685px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '163px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '198px'],
            ["style", "width", '204px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '526px'],
            ["style", "width", '204px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '244px'],
            ["style", "font-size", '14px']
         ],
         "${_BG5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pointer2Copy}": [
            ["style", "top", '408px'],
            ["transform", "scaleY", '2.61862'],
            ["transform", "rotateZ", '329deg'],
            ["style", "height", '71px'],
            ["style", "left", '220px']
         ],
         "${_pointer2}": [
            ["style", "top", '119px'],
            ["transform", "scaleY", '2.69309'],
            ["transform", "rotateZ", '142deg'],
            ["style", "height", '75px'],
            ["style", "left", '203px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '94px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '672px'],
            ["style", "width", '162px']
         ],
         "${_pointer2Copy3}": [
            ["style", "top", '478px'],
            ["transform", "scaleY", '1.55989'],
            ["transform", "rotateZ", '401deg'],
            ["style", "height", '76px'],
            ["style", "left", '794px']
         ],
         "${_RoundRect2Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '189px'],
            ["style", "top", '81px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '59px'],
            ["style", "left", '657px']
         ],
         "${_RoundRect2Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '676px'],
            ["style", "width", '242px'],
            ["style", "top", '532px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '45px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
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
"BG06": {
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
      id: 'BG6',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG06.jpg','0px','0px']
   },
   {
      rect: ['45px','18px','342px','52px','auto','auto'],
      transform: [[0,0],[],['20'],['1.03']],
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['483px','25px','365px','36px','auto','auto'],
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['763px','439px','231px','52px','auto','auto'],
      id: 'Rectangle3Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['369px','579px','428px','52px','auto','auto'],
      id: 'Rectangle3Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',15,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: '… we built it for him. Some of us knew how to fly it.<br>',
      align: 'center',
      rect: ['60px','23px','312px','41px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',15,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy',
      text: 'Ra-Haka kept it locked with a secret code.<br>',
      align: 'right',
      rect: ['500px','35px','325px','16px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',15,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy2',
      text: 'One night, we sneaked out, boarded the spaceship.<br>',
      align: 'right',
      rect: ['762px','444px','220px','41px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',15,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy3',
      text: 'We cracked the code with a little bit of reasoning.<br>',
      align: 'center',
      rect: ['389px','591px','388px','27px','auto','auto']
   },
   {
      transform: [[0,0],['-69'],['0','-16'],['1','1.566']],
      id: 'pointer2',
      type: 'image',
      rect: ['276px','505px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-133'],['-8','-16'],['1','2.204']],
      id: 'pointer2Copy',
      type: 'image',
      rect: ['403px','213px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-159'],['12','-16'],['1','0.693']],
      id: 'pointer2Copy2',
      type: 'image',
      rect: ['144px','213px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointer2Copy2}": [
            ["style", "top", '213px'],
            ["transform", "scaleY", '0.69346'],
            ["transform", "rotateZ", '-159deg'],
            ["transform", "skewY", '-15.87deg'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '144px'],
            ["transform", "skewX", '11.94deg']
         ],
         "${_Text3Copy}": [
            ["style", "top", '35px'],
            ["style", "width", '325px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '500px'],
            ["style", "font-size", '15px']
         ],
         "${_Text3}": [
            ["style", "top", '23px'],
            ["style", "width", '312px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '60px'],
            ["style", "font-size", '15px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '444px'],
            ["style", "width", '220px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '762px'],
            ["style", "font-size", '15px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '591px'],
            ["style", "width", '388px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '389px'],
            ["style", "font-size", '15px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '18px'],
            ["transform", "skewX", '20.32deg'],
            ["transform", "scaleX", '1.02959'],
            ["style", "height", '52px'],
            ["style", "left", '45px'],
            ["style", "width", '342px']
         ],
         "${_pointer2Copy}": [
            ["style", "top", '213px'],
            ["transform", "scaleY", '2.20435'],
            ["transform", "rotateZ", '-133deg'],
            ["transform", "skewX", '-7.82deg'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '403px'],
            ["transform", "skewY", '-15.87deg']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '36px'],
            ["style", "left", '483px'],
            ["style", "width", '365px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_BG6}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointer2}": [
            ["style", "top", '505px'],
            ["transform", "scaleY", '1.56572'],
            ["transform", "rotateZ", '-69deg'],
            ["style", "left", '276px'],
            ["transform", "skewY", '-15.87deg']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "top", '439px'],
            ["style", "left", '763px'],
            ["style", "width", '231px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "top", '579px'],
            ["style", "left", '369px'],
            ["style", "width", '428px']
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
"BG07": {
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
      id: 'BG7',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG07.jpg','0px','0px']
   },
   {
      rect: ['416px','281px','202px','57px','auto','auto'],
      transform: [],
      id: 'RectangleCopy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['416px','22px','527px','37px','auto','auto'],
      id: 'Rectangle',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['151','44','175','96','auto','auto'],
      c: [
      {
         rect: ['48px','0px','127px','39px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'image',
         id: 'pointer',
         rect: ['31px','5px','35px','104px','auto','auto'],
         transform: [[0,0],['-125'],[],['0.612']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         type: 'text',
         rect: ['65px','11px','auto','auto','auto','auto'],
         id: 'Text4',
         text: 'And flew out.<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group7',
      type: 'group',
      rect: ['496','401','185','84','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3Copy4',
         rect: ['20px','-23px','35px','104px','auto','auto'],
         transform: [[0,0],['294'],[],['0.612','0.705']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['58px','0px','127px','84px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy7',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['72px','8px','99px','67px','auto','auto'],
         id: 'Text4Copy10',
         text: 'We want you, Geo, to assist our Police Squad.<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      type: 'text',
      rect: ['428px','31px','auto','auto','auto','auto'],
      id: 'Text4Copy4',
      text: 'The elders ask Geo to wait outside while they discuss his request.<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['428px','290px','190px','36px','auto','auto'],
      id: 'Text4Copy9',
      text: 'After a few minutes they call him back.<br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','italic']
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['469','73','76','71','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3',
         rect: ['13px','-9px','35px','104px','auto','auto'],
         transform: [[0,0],['-135'],[],['0.612','0.558']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','76px','37px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['11px','10px','auto','auto','auto','auto'],
         id: 'Text4Copy5',
         text: 'Clever…',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['545','124','135','98','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3Copy',
         rect: ['80px','-27px','35px','104px','auto','auto'],
         transform: [[0,0],['-33'],[],['0.612','0.81']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','62px','135px','37px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy4',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['16px','72px','auto','auto','auto','auto'],
         id: 'Text4Copy6',
         text: 'Hard working…<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group4',
      type: 'group',
      rect: ['712','123','108','120','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3Copy2',
         rect: ['35px','-28px','35px','104px','auto','auto'],
         transform: [[0,0],['34'],[],['0.612','0.81']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','62px','104px','58px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy5',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['12px','72px','80px','37px','auto','auto'],
         id: 'Text4Copy7',
         text: 'I’m not so sure...<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group5',
      type: 'group',
      rect: ['862','69','109','100','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3Copy3',
         rect: ['43px','14px','35px','104px','auto','auto'],
         transform: [[0,0],['138'],[],['0.612','0.705']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','109px','58px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy6',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['12px','11px','86px','37px','auto','auto'],
         id: 'Text4Copy8',
         text: 'Can we trust them?<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group6',
      type: 'group',
      rect: ['635','281','181','132','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3Copy5',
         rect: ['51px','40px','35px','104px','auto','auto'],
         transform: [[0,0],['142'],[],['0.612','0.81']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','181px','73px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy8',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['13px','11px','155px','52px','auto','auto'],
         id: 'Text4Copy11',
         text: 'Geo, we welcome you and your people to live with us in peace.<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group8',
      type: 'group',
      rect: ['696','465','187','148','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer3Copy6',
         rect: ['125px','14px','35px','104px','auto','auto'],
         transform: [[0,0],['390'],[],['0.612','1.348']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','96px','142px','52px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy9',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['11px','103px','120px','37px','auto','auto'],
         id: 'Text4Copy12',
         text: 'It will be an honour, ma’am.<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointer3Copy3}": [
            ["style", "top", '14px'],
            ["transform", "scaleY", '0.705'],
            ["transform", "rotateZ", '138deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '43px']
         ],
         "${_BG7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointer3Copy5}": [
            ["style", "top", '40px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '142deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '51px']
         ],
         "${_pointer3Copy6}": [
            ["style", "top", '14px'],
            ["transform", "scaleY", '1.34772'],
            ["transform", "rotateZ", '390deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '125px']
         ],
         "${_pointer3Copy2}": [
            ["style", "top", '-28px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '34deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '35px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect3Copy9}": [
            ["style", "top", '96px'],
            ["style", "height", '52px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '142px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "top", '0px'],
            ["style", "left", '48px'],
            ["style", "width", '127px']
         ],
         "${_Text4Copy5}": [
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '11px'],
            ["style", "font-size", '14px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '281px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '416px'],
            ["style", "width", '202px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect3Copy4}": [
            ["style", "top", '62px'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '135px']
         ],
         "${_pointer3Copy}": [
            ["style", "top", '-27px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '-33deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '80px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointer3}": [
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.55769'],
            ["transform", "rotateZ", '-135deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '13px']
         ],
         "${_Text4Copy12}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "width", '120px'],
            ["style", "top", '103px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '37px'],
            ["style", "font-size", '14px']
         ],
         "${_Text4Copy8}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '12px'],
            ["style", "font-size", '14px'],
            ["style", "top", '11px'],
            ["style", "text-align", 'center'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '86px']
         ],
         "${_RoundRect3}": [
            ["style", "top", '0px'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '76px']
         ],
         "${_Text4Copy9}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '428px'],
            ["style", "font-size", '14px'],
            ["style", "top", '290px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '190px'],
            ["style", "height", '36px']
         ],
         "${_RoundRect3Copy5}": [
            ["style", "top", '62px'],
            ["style", "height", '58px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '104px']
         ],
         "${_Text4Copy11}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '13px'],
            ["style", "font-size", '14px'],
            ["style", "top", '11px'],
            ["style", "text-align", 'center'],
            ["style", "height", '52px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '155px']
         ],
         "${_RoundRect3Copy8}": [
            ["style", "top", '0px'],
            ["style", "height", '73px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '181px']
         ],
         "${_RoundRect3Copy6}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '109px']
         ],
         "${_pointer3Copy4}": [
            ["style", "top", '-23px'],
            ["transform", "scaleY", '0.705'],
            ["transform", "rotateZ", '294deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '20px']
         ],
         "${_RoundRect3Copy7}": [
            ["style", "top", '0px'],
            ["style", "height", '84px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '58px'],
            ["style", "width", '127px']
         ],
         "${_Text4Copy10}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '72px'],
            ["style", "width", '99px'],
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '67px'],
            ["style", "font-size", '14px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '527px']
         ],
         "${_Text4Copy6}": [
            ["style", "top", '72px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '16px'],
            ["style", "font-size", '14px']
         ],
         "${_Text4Copy4}": [
            ["style", "top", '31px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '428px'],
            ["style", "font-size", '14px']
         ],
         "${_pointer}": [
            ["style", "top", '5px'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '31px'],
            ["transform", "rotateZ", '-125deg']
         ],
         "${_Text4Copy7}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '12px'],
            ["style", "font-size", '14px'],
            ["style", "top", '72px'],
            ["style", "text-align", 'center'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '80px']
         ],
         "${_Text4}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '65px'],
            ["style", "font-size", '14px']
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
      id: 'BG8',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Intro_BG08.jpg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,205,255,1.00)','700','none',''],
      type: 'text',
      id: 'Text',
      text: 'WANTED',
      align: 'right',
      rect: ['541px','297px','72px','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['26px','24px','437px','50px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text5',
      text: 'The Judics settle down on Earth. But life is not always easy. And some Judics are misled and create trouble.<br>',
      align: 'left',
      rect: ['45px','31px','399px','35px','auto','auto']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['511','428','338','130','auto','auto'],
      c: [
      {
         rect: ['138px','5px','200px','125px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['0px','0px','20px','20px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['33px','12px','30px','30px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['77px','20px','50px','50px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text6',
         text: 'I must help the innocent Judics. They suffer because of the bad deeds of some. <br>',
         align: 'center',
         rect: ['165px','27px','146px','92px','auto','auto']
      }]
   },
   {
      transform: [[0,0],[],['0','3']],
      type: 'text',
      align: 'left',
      id: 'Text2',
      text: 'School Denies Admission to Judic Children',
      rect: ['876px','345px','113px','50px','auto','auto'],
      font: ['Georgia, Times New Roman, Times, serif',12,'rgba(255,255,255,1)','700','none','normal']
   },
   {
      transform: [[0,0],[],['0','-4']],
      type: 'text',
      align: 'left',
      id: 'Text3',
      text: 'Street Lights Broken:\rJudic Gang Suspected',
      rect: ['45px','295px','146px','30px','auto','auto'],
      font: ['Georgia, Times New Roman, Times, serif',12,'rgba(255,255,255,1.00)','700','none','normal']
   },
   {
      transform: [[0,0],[],['0','-14']],
      type: 'text',
      align: 'left',
      id: 'Text3Copy',
      text: 'Human Refuses to \rSit next to Judic.\r',
      rect: ['26px','460px','124px','50px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '0px'],
            ["style", "height", '20px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '20px']
         ],
         "${_Text3Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '26px'],
            ["style", "width", '124px'],
            ["style", "top", '460px'],
            ["transform", "skewY", '-14deg'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "text-align", 'left']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '12px'],
            ["style", "height", '30px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '33px'],
            ["style", "width", '30px']
         ],
         "${_Text6}": [
            ["style", "top", '27px'],
            ["style", "text-align", 'center'],
            ["style", "height", '92px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '165px'],
            ["style", "width", '146px']
         ],
         "${_Text5}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'left'],
            ["style", "height", '35px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '45px'],
            ["style", "width", '399px']
         ],
         "${_BG8}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '20px'],
            ["style", "height", '50px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '77px'],
            ["style", "width", '50px']
         ],
         "${_Text4Copy5}": [
            ["style", "text-align", '']
         ],
         "${_Ellipse}": [
            ["style", "top", '5px'],
            ["style", "height", '125px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '138px'],
            ["style", "width", '200px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '24px'],
            ["style", "height", '50px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '26px'],
            ["style", "width", '437px']
         ],
         "${_Text}": [
            ["style", "top", '297px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'right'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(0,205,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '541px'],
            ["style", "width", '72px']
         ],
         "${_Text2}": [
            ["style", "top", '345px'],
            ["transform", "skewY", '3deg'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "width", '113px']
         ],
         "${_Text3}": [
            ["style", "top", '295px'],
            ["style", "text-align", 'left'],
            ["transform", "skewY", '-4deg'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '45px'],
            ["style", "width", '146px']
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','132px','45px','auto','auto'],
      id: 'btn_ask_up',
      fill: ['rgba(0,0,0,0)','images/btn_ask_up.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',24,'rgba(0,0,0,1.00)','700','none',''],
      id: 'Text',
      text: 'GAME',
      type: 'text',
      rect: ['27px','8px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_ask_up}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '45px'],
            ["style", "left", '0px'],
            ["style", "width", '132px']
         ],
         "${_Text}": [
            ["style", "top", '8px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '27px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '132px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_btn_ask_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_ask_up}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }         ]
      }
   }
},
"skip_btn": {
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
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,239,0,1.00)','700','none',''],
      id: 'Text',
      text: 'skip',
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,239,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '17px'],
            ["style", "width", '27px']
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
"BG_08": {
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
      id: 'BG08',
      type: 'image',
      rect: ['-1014px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M0_BG01.jpg','0px','0px']
   },
   {
      rect: ['29px','26px','451px','34px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'The Judics and the humans are getting to know each other.',
      rect: ['39px','34px','430px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['16px','325px','193px','49px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['128px','268px','35px','104px','auto','auto'],
      transform: [[0,0],['168'],['0','10'],['0.497','1.255']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['384px','463px','35px','104px','auto','auto'],
      transform: [[0,0],['317'],['0','29'],['0.497','0.471']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['25px','332px','178px','34px','auto','auto'],
      id: 'Text2',
      text: 'Look Dad - humans! Don’t they all look alike?<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['580px','325px','211px','65px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['596px','285px','35px','104px','auto','auto'],
      transform: [[0,0],['170'],['0','10'],['0.497','1.46']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['920px','465px','35px','104px','auto','auto'],
      transform: [[0,0],['188'],['0','-7'],['0.497','0.625']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['580px','333px','193px','49px','auto','auto'],
      id: 'Text2Copy2',
      text: 'What are those strange things mom? They all look just the same to me!<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['875px','396px','108px','173px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['881px','403px','95px','160px','auto','auto'],
      id: 'Text2Copy3',
      text: 'They are Judics, little one. Look carefully. They have different shape markers on their chests.<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['368px','558px','178px','65px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['379px','566px','156px','49px','auto','auto'],
      id: 'Text2Copy',
      text: 'Not really, Sola. Look at their faces; no two faces look alike.<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy2}": [
            ["style", "top", '285px'],
            ["transform", "skewY", '9.61deg'],
            ["transform", "rotateZ", '170deg'],
            ["transform", "scaleX", '0.49695'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '596px'],
            ["transform", "scaleY", '1.46039']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '29px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '396px'],
            ["style", "height", '173px'],
            ["style", "left", '875px'],
            ["style", "width", '108px']
         ],
         "${_RoundRect}": [
            ["style", "top", '325px'],
            ["style", "height", '49px'],
            ["style", "left", '16px'],
            ["style", "width", '193px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '465px'],
            ["transform", "skewY", '-6.87deg'],
            ["transform", "rotateZ", '188deg'],
            ["transform", "scaleX", '0.49695'],
            ["transform", "scaleY", '0.625'],
            ["style", "left", '920px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy}": [
            ["style", "top", '566px'],
            ["style", "text-align", 'center'],
            ["style", "height", '49px'],
            ["style", "left", '379px'],
            ["style", "width", '156px']
         ],
         "${_Text2}": [
            ["style", "top", '332px'],
            ["style", "text-align", 'center'],
            ["style", "left", '25px'],
            ["style", "width", '178px']
         ],
         "${_Text}": [
            ["style", "top", '34px'],
            ["style", "width", '430px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '39px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '65px'],
            ["style", "top", '558px'],
            ["style", "left", '368px'],
            ["style", "width", '178px']
         ],
         "${_BG08}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "height", '65px'],
            ["style", "top", '325px'],
            ["style", "left", '580px'],
            ["style", "width", '211px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '333px'],
            ["style", "text-align", 'center'],
            ["style", "height", '49px'],
            ["style", "left", '580px'],
            ["style", "width", '193px']
         ],
         "${_pointer}": [
            ["style", "top", '268px'],
            ["transform", "skewY", '9.61deg'],
            ["transform", "rotateZ", '168deg'],
            ["transform", "scaleX", '0.49695'],
            ["transform", "scaleY", '1.25496'],
            ["style", "left", '128px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "height", '160px'],
            ["style", "left", '881px'],
            ["style", "width", '95px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '463px'],
            ["transform", "skewY", '28.96deg'],
            ["transform", "rotateZ", '317deg'],
            ["transform", "scaleX", '0.49695'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '384px'],
            ["transform", "scaleY", '0.47115']
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
})(jQuery, AdobeEdge, "intro");
