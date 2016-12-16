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
         "${_level_03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_level_02}": [
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
"BG12b": {
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
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'You are onto another case. In this case take the help of G8 to identify the culprit. Query the robot to shortlist the culprit.<br><br>Click next to move onto the instruction Screen.<br>',
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
            ["style", "top", '289px'],
            ["style", "text-align", 'left'],
            ["style", "height", '124px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
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
"BG12": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG12.jpg','0px','0px']
   },
   {
      rect: ['471px','26px','128px','49px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['122','29','148','120','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointer',
         rect: ['30px','25px','35px','104px','auto','auto'],
         transform: [[0,0],['-131'],[],['0.689']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['6px','0px','142px','53px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['18px','8px','117px','38px','auto','auto'],
         id: 'Text',
         text: 'That was some good work! ',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['817','37','154','169','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy2',
         rect: ['58px','-50px','35px','104px','auto','auto'],
         transform: [[0,0],['-149'],[],['0.689','1.216']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['12px','0px','142px','69px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['24px','8px','117px','61px','auto','auto'],
         id: 'TextCopy2',
         text: 'Hello! Hello!  What? Another water robbery!<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      id: 'Group4',
      type: 'group',
      rect: ['34','339','242','162','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy3',
         rect: ['157px','-21px','35px','104px','auto','auto'],
         transform: [[0,0],['-219'],[],['0.689','0.885']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','207px','92px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['12px','11px','183px','69px','auto','auto'],
         id: 'TextCopy3',
         text: 'This is bad, Geo. Now they are stealing water from water tanks. It’s the Judic gang again.',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      id: 'Group4Copy',
      type: 'group',
      rect: ['417px','339px','242','162','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy5',
         rect: ['53px','-58px','35px','104px','auto','auto'],
         transform: [[0,0],['-132'],[],['0.689','1.815']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['-72px','11px','207px','49px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['-60px','19px','172px','35px','auto','auto'],
         id: 'TextCopy5',
         text: 'G8 saw the robbery. <br>Let me get the robot in.',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      id: 'Group5',
      type: 'group',
      rect: ['114','439','92','108','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy4',
         rect: ['57px','-83px','35px','104px','auto','auto'],
         transform: [[0,0],['-153'],[],['0.689','0.885']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','92px','37px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['6px','9px','80px','20px','auto','auto'],
         id: 'TextCopy4',
         text: 'Hmmm…<br>',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
      }]
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['324','63','80','120','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy',
         rect: ['45px','-71px','35px','104px','auto','auto'],
         transform: [[0,0],['-151'],[],['0.689','0.887']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','80px','53px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      }]
   },
   {
      type: 'text',
      rect: ['334px','71px','63px','38px','auto','auto'],
      id: 'TextCopy',
      text: 'Thank you sir.<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['486px','32px','98px','37px','auto','auto'],
      id: 'Text2',
      text: 'Just then the phone rings.<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['127px','579px','22px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['140px','547px','117px','86px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['151px','565px','90px','53px','auto','auto'],
      id: 'Text4',
      text: 'A few bad eggs and we all get a bad name!<br>',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      rect: ['117px','570px','11px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '6px'],
            ["style", "width", '142px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "height", '92px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '207px']
         ],
         "${_Text2}": [
            ["style", "top", '32px'],
            ["style", "text-align", 'center'],
            ["style", "height", '37px'],
            ["style", "left", '486px'],
            ["style", "width", '98px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '-58px'],
            ["transform", "scaleY", '1.81498'],
            ["transform", "rotateZ", '-132deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '53px'],
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
         "${_RoundRectCopy5}": [
            ["style", "top", '11px'],
            ["style", "height", '49px'],
            ["style", "left", '-72px'],
            ["style", "width", '207px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '0px'],
            ["style", "height", '37px'],
            ["style", "left", '0px'],
            ["style", "width", '92px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '8px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '61px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '24px'],
            ["style", "width", '117px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '-83px'],
            ["transform", "scaleY", '0.88462'],
            ["transform", "rotateZ", '-153deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '57px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text4}": [
            ["style", "top", '565px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'center'],
            ["style", "height", '53px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '151px'],
            ["style", "width", '90px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '9px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '6px'],
            ["style", "width", '80px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '11px'],
            ["style", "width", '183px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '12px'],
            ["style", "font-size", '14px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '26px'],
            ["style", "height", '49px'],
            ["style", "left", '471px'],
            ["style", "width", '128px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '19px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '35px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '-60px'],
            ["style", "width", '172px']
         ],
         "${_Ellipse}": [
            ["style", "top", '547px'],
            ["style", "height", '86px'],
            ["style", "left", '140px'],
            ["style", "width", '117px']
         ],
         "${_Ellipse2}": [
            ["style", "left", '117px'],
            ["style", "top", '570px']
         ],
         "${_Group4Copy}": [
            ["style", "left", '417px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '20px'],
            ["style", "top", '579px'],
            ["style", "left", '127px'],
            ["style", "width", '22px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '-21px'],
            ["transform", "scaleY", '0.88462'],
            ["transform", "rotateZ", '-219deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '157px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '117px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '18px'],
            ["style", "font-size", '14px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '-50px'],
            ["transform", "scaleY", '1.21603'],
            ["transform", "rotateZ", '-149deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '58px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '0px'],
            ["style", "height", '69px'],
            ["style", "left", '12px'],
            ["style", "width", '142px']
         ],
         "${_pointer}": [
            ["style", "top", '25px'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '30px'],
            ["transform", "rotateZ", '-131deg']
         ],
         "${_TextCopy}": [
            ["style", "top", '71px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '334px'],
            ["style", "width", '63px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '-71px'],
            ["transform", "scaleY", '0.88718'],
            ["transform", "rotateZ", '-151deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '45px'],
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
      fill: ['rgba(0,0,0,0)','images/BG10.jpg','0px','0px']
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['42','34','319','265','auto','auto'],
      c: [
      {
         rect: ['0px','0px','305px','131px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         transform: [[0,0],['-206'],[],['0.745','1.454']],
         id: 'pointer',
         type: 'image',
         rect: ['220px','13px','35px','120px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text5',
         text: 'The robot on duty, G2 witnessed the robbery. I’ve called G2 over to answer our questions. But G2 can only reply with “Yes”, “No” and “I don’t know.” You know that, right?<br>',
         align: 'left',
         rect: ['25px','21px','255px','90px','auto','auto']
      }]
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['117','196','101','138','auto','auto'],
      c: [
      {
         transform: [[0,0],['-160'],[],['0.745','1.092']],
         id: 'pointerCopy',
         type: 'image',
         rect: ['52px','-80px','35px','120px','auto','auto'],
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
         type: 'text',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         rect: ['20px','10px','68px','19px','auto','auto'],
         id: 'Text5Copy',
         text: 'Yes Sir.',
         align: 'center',
         transform: []
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_BG10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "height", '131px'],
            ["style", "left", '0px'],
            ["style", "width", '305px']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '38px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text5Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '68px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '19px']
         ],
         "${_pointer}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '1.45422'],
            ["transform", "rotateZ", '-206deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '220px'],
            ["style", "height", '120px']
         ],
         "${_Text5}": [
            ["style", "top", '21px'],
            ["style", "text-align", 'left'],
            ["style", "height", '90px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '25px'],
            ["style", "width", '255px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '-80px'],
            ["transform", "scaleY", '1.09167'],
            ["transform", "rotateZ", '-160deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "height", '120px'],
            ["style", "left", '52px'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}]
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
      id: 'BG12',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'BG12b',
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
      id: 'BG12',
      symbolName: 'BG12'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'BG12b',
      symbolName: 'BG12b'
   },
   {
      id: 'btn_nextCopy',
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
         "${_BG12b}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_BG12}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
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
            { id: "eid40", tween: [ "style", "${_BG12b}", "left", '0px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
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
      id: 'BG13',
      type: 'rect',
      rect: ['419','297','auto','auto','auto','auto']
   },
   {
      id: 'BG14',
      type: 'rect',
      rect: ['527','437','auto','auto','auto','auto']
   },
   {
      id: 'BG12b',
      type: 'rect',
      rect: ['-2px','-8px','auto','auto','auto','auto']
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick mainSND',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_nextCopy',
      userClass: 'btnClick ',
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
      id: 'BG14',
      symbolName: 'BG14'
   },
   {
      id: 'BG13',
      symbolName: 'BG13'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'BG12b',
      symbolName: 'BG12b'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
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
         "${_BG13}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_BG12b}": [
            ["style", "left", '1014px'],
            ["style", "top", '-8px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px'],
            ["style", "top", '593px']
         ],
         "${_BG14}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
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
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid12", tween: [ "style", "${_BG14}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid20", tween: [ "style", "${_BG12b}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid30", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid29", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 540, duration: 0 },
            { id: "eid28", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid11", tween: [ "style", "${_BG14}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid8", tween: [ "style", "${_BG13}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid9", tween: [ "style", "${_BG13}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_btn_next}", "left", '459px', { fromValue: '953px'}], position: 750, duration: 0, easing: "easeOutCirc" }         ]
      }
   }
},
"BG13": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG13.jpg','0px','0px']
   },
   {
      rect: ['38px','37px','345px','53px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointerCopy5',
      rect: ['118px','115px','35px','104px','auto','auto'],
      transform: [[0,0],['-253'],[],['0.689','1.183']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['56px','155px','95px','123px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['67px','163px','71px','108px','auto','auto'],
      id: 'TextCopy5',
      text: 'Really?<br>Hmm…<br>Ok.<br>Hmmm.<br>Ok.<br>Yes Sir!',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['52px','47px','316px','33px','auto','auto'],
      id: 'Text2',
      text: 'Just when the two are about to call it a day, Chief of Police Kata gets a phone call.',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['694px','266px','22px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['720px','242px','30px','27px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['735px','163px','117px','86px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      rect: ['749px','180px','90px','53px','auto','auto'],
      id: 'Text4',
      text: 'I wonder what it is now !',
      align: 'center',
      transform: []
   },
   {
      rect: ['674px','286px','11px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '53px'],
            ["style", "top", '37px'],
            ["style", "left", '38px'],
            ["style", "width", '345px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '163px'],
            ["style", "width", '71px'],
            ["style", "text-align", 'center'],
            ["style", "height", '108px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '67px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '47px'],
            ["style", "text-align", 'left'],
            ["style", "height", '33px'],
            ["style", "left", '52px'],
            ["style", "width", '316px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '115px'],
            ["transform", "scaleY", '1.18269'],
            ["transform", "rotateZ", '-253deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '118px'],
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
         "${_Text4}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '749px'],
            ["style", "font-size", '14px'],
            ["style", "top", '180px'],
            ["style", "text-align", 'center'],
            ["style", "height", '53px'],
            ["transform", "scaleY", '1'],
            ["style", "width", '90px'],
            ["style", "font-style", 'normal']
         ],
         "${_Ellipse}": [
            ["style", "height", '86px'],
            ["style", "top", '163px'],
            ["style", "left", '735px'],
            ["style", "width", '117px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "height", '27px'],
            ["style", "top", '242px'],
            ["style", "left", '720px'],
            ["style", "width", '30px']
         ],
         "${_Ellipse2}": [
            ["style", "left", '674px'],
            ["style", "top", '286px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '266px'],
            ["style", "height", '20px'],
            ["style", "left", '694px'],
            ["style", "width", '22px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "height", '123px'],
            ["style", "top", '155px'],
            ["style", "left", '56px'],
            ["style", "width", '95px']
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
"BG14": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG14.jpg','0px','0px']
   },
   {
      transform: [[0,0],['-204'],[],['0.689','0.827']],
      id: 'pointerCopy5',
      type: 'image',
      rect: ['94px','18px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['43px','40px','220px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy5',
      text: 'Geo, the ringleaders of this gang of water robbers are still around. Now they are diverting pipes.',
      align: 'left',
      rect: ['55px','55px','193px','71px','auto','auto']
   },
   {
      transform: [[0,0],['-239'],[],['0.689','1.894']],
      id: 'pointerCopy7',
      type: 'image',
      rect: ['658px','-15px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['580px','50px','161px','57px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy7',
      text: 'Yes. Geo, we have to find these guys.',
      align: 'left',
      rect: ['591px','60px','140px','38px','auto','auto']
   },
   {
      transform: [[0,0],['-248'],[],['0.689','1.703']],
      id: 'pointerCopy10',
      type: 'image',
      rect: ['779px','345px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['701px','394px','206px','71px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy10',
      text: 'Don’t worry sir, I will work with G2 to release the innocent Judics.<br>',
      align: 'left',
      rect: ['717px','403px','178px','57px','auto','auto']
   },
   {
      transform: [[0,0],['-165'],[],['0.689','0.827']],
      id: 'pointerCopy6',
      type: 'image',
      rect: ['307px','115px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['226px','161px','129px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy6',
      text: 'Really? Is that what they are up to now?<br>',
      align: 'left',
      rect: ['240px','171px','102px','57px','auto','auto']
   },
   {
      transform: [[0,0],['-111'],[],['0.689','0.827']],
      id: 'pointerCopy8',
      type: 'image',
      rect: ['596px','92px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['586px','166px','149px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy8',
      text: 'Has G2 spotted the robber in any of these cases?',
      align: 'left',
      rect: ['600px','176px','129px','57px','auto','auto']
   },
   {
      transform: [[0,0],['-126'],[],['0.689','0.962']],
      id: 'pointerCopy9',
      type: 'image',
      rect: ['676px','253px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['643px','296px','149px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy9',
      text: 'Yes, Geo. Sorry to say it’s those  Judics  again. <br>',
      align: 'left',
      rect: ['657px','306px','121px','57px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy9}": [
            ["style", "top", '306px'],
            ["style", "width", '121px'],
            ["style", "text-align", 'left'],
            ["style", "height", '57px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '657px'],
            ["style", "font-size", '14px']
         ],
         "${_pointerCopy6}": [
            ["style", "top", '115px'],
            ["transform", "scaleY", '0.82692'],
            ["transform", "rotateZ", '-165deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '307px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy8}": [
            ["style", "top", '166px'],
            ["style", "height", '77px'],
            ["style", "left", '586px'],
            ["style", "width", '149px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '18px'],
            ["transform", "scaleY", '0.82692'],
            ["transform", "rotateZ", '-204deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '94px'],
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
            ["style", "height", '57px'],
            ["style", "top", '50px'],
            ["style", "left", '580px'],
            ["style", "width", '161px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '403px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '717px'],
            ["style", "width", '178px']
         ],
         "${_pointerCopy8}": [
            ["style", "top", '92px'],
            ["transform", "scaleY", '0.82692'],
            ["transform", "rotateZ", '-111deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '596px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy5}": [
            ["style", "top", '55px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '71px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '55px'],
            ["style", "width", '193px']
         ],
         "${_RoundRectCopy10}": [
            ["style", "top", '394px'],
            ["style", "height", '71px'],
            ["style", "left", '701px'],
            ["style", "width", '206px']
         ],
         "${_pointerCopy9}": [
            ["style", "top", '253px'],
            ["transform", "scaleY", '0.96154'],
            ["transform", "rotateZ", '-126deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '676px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy10}": [
            ["style", "top", '345px'],
            ["transform", "scaleY", '1.70255'],
            ["transform", "rotateZ", '-248deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '779px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy6}": [
            ["style", "height", '77px'],
            ["style", "top", '161px'],
            ["style", "left", '226px'],
            ["style", "width", '129px']
         ],
         "${_RoundRectCopy9}": [
            ["style", "height", '77px'],
            ["style", "top", '296px'],
            ["style", "left", '643px'],
            ["style", "width", '149px']
         ],
         "${_TextCopy8}": [
            ["style", "top", '176px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '600px'],
            ["style", "width", '129px']
         ],
         "${_pointerCopy7}": [
            ["style", "top", '-15px'],
            ["transform", "scaleY", '1.89385'],
            ["transform", "rotateZ", '-239deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '658px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy7}": [
            ["style", "top", '60px'],
            ["style", "width", '140px'],
            ["style", "text-align", 'left'],
            ["style", "height", '38px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '591px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '171px'],
            ["style", "width", '102px'],
            ["style", "text-align", 'left'],
            ["style", "height", '57px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '240px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "top", '40px'],
            ["style", "height", '100px'],
            ["style", "left", '43px'],
            ["style", "width", '220px']
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
      rect: ['155px','277px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'You are onto another case. In this case take the help of G8 to identify the culprit. Query the robot to shortlist the culprit.<br><br>Click next to move onto the instruction Screen.<br>',
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
})(jQuery, AdobeEdge, "trans");
