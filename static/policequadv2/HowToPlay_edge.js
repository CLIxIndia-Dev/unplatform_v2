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
            id:'Mission1',
            type:'rect',
            rect:['257','252','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'Mission2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'Mission3',
            type:'rect',
            rect:['314','233','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'Mission4',
            type:'rect',
            rect:['347','289','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'btn_XCopy',
            type:'rect',
            rect:['926px','18px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Mission2',
            symbolName:'Mission2'
         },
         {
            id:'Mission3',
            symbolName:'Mission3'
         },
         {
            id:'Mission4',
            symbolName:'Mission4'
         },
         {
            id:'Mission1',
            symbolName:'Mission1'
         },
         {
            id:'btn_XCopy',
            symbolName:'btn_X'
         }
         ]
      },
   states: {
      "Base State": {
         "${_btn_XCopy}": [
            ["style", "left", '39px'],
            ["style", "top", '23px']
         ],
         "${_Mission1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1014px'],
            ["style", "height", '652px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Mission3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Mission4}": [
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
            { id: "eid225", tween: [ "style", "${_Mission1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_Mission3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid545", tween: [ "style", "${_btn_XCopy}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid544", tween: [ "style", "${_btn_XCopy}", "left", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_Mission3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${_Mission4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Mission4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_Mission1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Mission2": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_screenshot',
      type: 'image',
      rect: ['68px','50px','877px','565px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m2.jpg','0px','0px']
   },
   {
      id: 'btn_done',
      type: 'rect',
      transform: [[],[],[],['0.847','0.847']],
      rect: ['716px','485px','auto','auto','auto','auto']
   },
   {
      rect: ['411px','2px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',32,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'How to Play',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1',
      text: 'This is the suspect Grid where all the suspects are line up. ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2',
      text: 'Click on respective tool kit button to understand properties like equal sides, type of angles and parallel lines!<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3',
      text: 'Ask a question to “Robotin” by framing a desired question and he will reply you back!<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4',
      text: 'See your questions aligned here with response from Robotin<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5',
      text: 'Innocent suspects must be released! Based on the witnesses statement (property), select and release one or more shape you think doesn’t match the culprit.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6',
      text: 'You have limited tokens i.e. life. A token will be taken away when an invalid question asked or when a wrong shape is eliminated. The game ends when you reach the base token (Last token)<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7',
      text: 'You can earn 2 stars if you clear the game with perfect score i.e. without using a single token.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8',
      text: 'When you think you have solved the case, Press “Done” button.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
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
      id: 'btn_done',
      symbolName: 'btn_done'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_Text7}": [
            ["style", "display", 'none'],
            ["style", "top", '128px'],
            ["style", "height", '57px'],
            ["style", "width", '203px']
         ],
         "${_Text3}": [
            ["style", "top", '315px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '56px'],
            ["style", "left", '106px'],
            ["style", "width", '185px']
         ],
         "${_Text5}": [
            ["style", "top", '101px'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "left", '478px'],
            ["style", "width", '270px']
         ],
         "${_btn_back}": [
            ["style", "top", '589px'],
            ["style", "display", 'none'],
            ["style", "left", '36px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_done}": [
            ["transform", "scaleX", '0.84706'],
            ["style", "left", '716px'],
            ["transform", "scaleY", '0.84706'],
            ["style", "top", '485px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '705px'],
            ["style", "width", '226px'],
            ["style", "top", '98px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '60px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text4}": [
            ["style", "top", '466px'],
            ["style", "display", 'none'],
            ["style", "height", '63px'],
            ["style", "left", '757px'],
            ["style", "width", '161px']
         ],
         "${_HTP_screenshot}": [
            ["style", "left", '68px'],
            ["style", "top", '50px']
         ],
         "${_Text1}": [
            ["style", "top", '108px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '39px'],
            ["style", "left", '717px'],
            ["style", "width", '201px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text6}": [
            ["style", "top", '132px'],
            ["style", "display", 'none'],
            ["style", "height", '94px'],
            ["style", "left", '519px'],
            ["style", "width", '250px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '411px'],
            ["style", "font-size", '32px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '98px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '312px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "left", '80px'],
            ["style", "width", '591px']
         ],
         "${_Text2}": [
            ["style", "top", '460px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '49px'],
            ["style", "left", '683px'],
            ["style", "font-size", '14px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '690px'],
            ["style", "top", '24px']
         ],
         "${_Text8}": [
            ["style", "top", '497px'],
            ["style", "height", '40px'],
            ["style", "display", 'none']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Text2}", "height", '49px', { fromValue: '49px'}], position: 250, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '312px', { fromValue: '312px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '253px', { fromValue: '312px'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '39px', { fromValue: '253px'}], position: 500, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Rectangle2}", "height", '138px', { fromValue: '39px'}], position: 750, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '138px'}], position: 1000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '299px', { fromValue: '31px'}], position: 1250, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '33px', { fromValue: '299px'}], position: 1500, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '80px', { fromValue: '33px'}], position: 1750, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '690px', { fromValue: '690px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '723px', { fromValue: '690px'}], position: 250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '123px', { fromValue: '723px'}], position: 500, duration: 0 },
            { id: "eid54", tween: [ "style", "${_pointer}", "left", '734px', { fromValue: '123px'}], position: 750, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '451px', { fromValue: '734px'}], position: 1000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '763px', { fromValue: '451px'}], position: 1250, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '643px', { fromValue: '763px'}], position: 1500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '668px', { fromValue: '643px'}], position: 1750, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3}", "height", '56px', { fromValue: '56px'}], position: 500, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text3}", "left", '106px', { fromValue: '106px'}], position: 500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Text3}", "left", '103px', { fromValue: '106px'}], position: 750, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Text1}", "height", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid45", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_Text2}", "top", '460px', { fromValue: '460px'}], position: 250, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text1}", "left", '717px', { fromValue: '717px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '24px', { fromValue: '24px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '342px', { fromValue: '24px'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '279px', { fromValue: '352px'}], position: 500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_pointer}", "top", '385px', { fromValue: '279px'}], position: 750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '7px', { fromValue: '395px'}], position: 1000, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '49px', { fromValue: '17px'}], position: 1250, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '13px', { fromValue: '59px'}], position: 1500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '411px', { fromValue: '23px'}], position: 1750, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text1}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '108px', { fromValue: '108px'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '445px', { fromValue: '98px'}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '302px', { fromValue: '454px'}], position: 500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '456px', { fromValue: '302px'}], position: 750, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '91px', { fromValue: '466px'}], position: 1000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '122px', { fromValue: '101px'}], position: 1250, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '117px', { fromValue: '132px'}], position: 1500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '486px', { fromValue: '127px'}], position: 1750, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid41", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '672px', { fromValue: '80px'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '92px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Rectangle2}", "left", '84px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '267px', { fromValue: '84px'}], position: 1000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '814px', { fromValue: '267px'}], position: 1250, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '615px', { fromValue: '814px'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '717px', { fromValue: '615px'}], position: 1750, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '591px', { fromValue: '591px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '130px', { fromValue: '591px'}], position: 250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '660px', { fromValue: '130px'}], position: 500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Rectangle2}", "width", '628px', { fromValue: '660px'}], position: 750, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '161px', { fromValue: '628px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '105px', { fromValue: '161px'}], position: 1250, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '105px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '80px', { fromValue: '84px'}], position: 1750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '82px', { fromValue: '60px'}], position: 250, duration: 0 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "height", '73px', { fromValue: '121px'}], position: 750, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '94px', { fromValue: '73px'}], position: 1000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '112px', { fromValue: '94px'}], position: 1250, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '80px', { fromValue: '112px'}], position: 1500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '58px', { fromValue: '80px'}], position: 1750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '153px', { fromValue: '98px'}], position: 250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '414px', { fromValue: '163px'}], position: 500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Rectangle2}", "top", '456px', { fromValue: '414px'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '91px', { fromValue: '466px'}], position: 1000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '122px', { fromValue: '101px'}], position: 1250, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '45px', { fromValue: '132px'}], position: 1500, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '484px', { fromValue: '55px'}], position: 1750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '-90deg'}], position: 250, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_pointer}", "rotateZ", '270deg', { fromValue: '180deg'}], position: 750, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '270deg'}], position: 1250, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1500, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 1750, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3}", "width", '185px', { fromValue: '185px'}], position: 500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '705px', { fromValue: '705px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '672px', { fromValue: '705px'}], position: 250, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '92px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "left", '747px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '468px', { fromValue: '752px'}], position: 1000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '509px', { fromValue: '468px'}], position: 1250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '615px', { fromValue: '509px'}], position: 1500, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '455px', { fromValue: '615px'}], position: 1750, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "top", '315px', { fromValue: '315px'}], position: 500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Text3}", "top", '292px', { fromValue: '315px'}], position: 750, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '252px', { fromValue: '226px'}], position: 250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '214px', { fromValue: '252px'}], position: 500, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "width", '182px', { fromValue: '265px'}], position: 750, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '290px', { fromValue: '182px'}], position: 1000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '272px', { fromValue: '290px'}], position: 1250, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '231px', { fromValue: '272px'}], position: 1500, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }         ]
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
      fill: ['rgba(0,0,0,0.10)']
   },
   {
      rect: ['0px','0px','49px','49px','auto','auto'],
      id: 'btn_next',
      userClass: 'img',
      type: 'image',
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
            ["color", "background-color", 'rgba(0,0,0,0.10)'],
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
      fill: ['rgba(0,0,0,0.10)']
   },
   {
      rect: ['0px','0px','49px','49px','auto','auto'],
      id: 'btn_back',
      userClass: 'img',
      type: 'image',
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
            ["color", "background-color", 'rgba(0,0,0,0.10)'],
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
"btn_X": {
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
      fill: ['rgba(0,0,0,0.10)']
   },
   {
      rect: ['0px','0px','49px','49px','auto','auto'],
      id: 'btn_next',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_X_up.png','0px','0px']
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
            ["color", "background-color", 'rgba(0,0,0,0.10)'],
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
      userClass: 'img',
      id: 'btn_done_up',
      type: 'image',
      rect: ['0px','0px','92px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_done_up.png','0px','0px']
   },
   {
      type: 'text',
      userClass: 'txt',
      rect: ['7px','49px','78px','28px','auto','auto'],
      id: 'Text2',
      text: 'Done',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','bold','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_done_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "font-size", '18px'],
            ["style", "height", '28px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "left", '7px'],
            ["style", "width", '78px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
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
"Mission1": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_screenshot',
      type: 'image',
      rect: ['68px','50px','877px','565px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m1.jpg','0px','0px']
   },
   {
      rect: ['411px','2px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',32,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'How to Play',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1',
      text: 'This space shows the shape markers of Judics rounded up by the police. Only one of these shapes belongs to the culprit, the others are innocent. You need to select the innocent ones and release them.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text1Copy',
      text: 'Suspect Grid',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['96px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text2',
      text: 'Clues',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['96px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2Copy',
      text: 'The set of clues help you to evaluate and eliminate the shapes in the suspect grid. Each clue is a property that the culprit has.<br><br>Use the options available on the top band of the Clue Box to generate a clue for G2. <br><br>And then click ‘Done’ to get the clue which appears in the space below. <br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text3',
      text: 'Tools',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      text: 'The toolkit on the screen allows you to check for certain properties when in doubt.<br><br>In this mission, you have 3 tools that will help you in case of doubt.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy2',
      text: 'Click the ‘Equal Side Marker’ tool to see which sides of the shapes are equal.<br>The ‘Parallel Line’ tool will highlight any parallel lines in the shapes.<br>Click the ‘Right Angle’ tool to estimate which angles of the shapes measure equal, less, or more than a right angle.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy3',
      text: '•<br><br>•<br><br>•',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['477px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text5',
      text: 'Action buttons',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['477px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy',
      text: 'These action buttons offer different courses of action to you while playing a case.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['477px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text5Copy3',
      text: 'Release Button',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['477px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy2',
      text: 'Click the ‘Release’ button to release the Judics whose shape markers you have selected.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['477px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text5Copy5',
      text: 'Reset Button',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['477px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy4',
      text: 'These action buttons offer different courses of action to you while playing a case.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6',
      text: 'The token counter contains some tokens to be claimed for every new case played. <br><br>At the end of a case, the points earned are calculated based on the tokens remaining on screen.<br><br>You have limited tokens i.e., life. A token will be taken away when an invalid question asked or when a wrong shape is eliminated. The game ends when you reach the base token (Last token).<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text6Copy',
      text: 'Token Counter',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text7',
      text: 'Stars tally',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: 'Every case solved without losing any token (i.e. no mistakes) can earn you two stars. Try to earn as many stars as you can in this mission.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['544px','503px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8',
      text: 'When you think you have solved the case, press ’Done’ button.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '126px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '76px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "height", '301px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '595px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '184px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '89px'],
            ["style", "left", '235px'],
            ["style", "width", '396px']
         ],
         "${_Text5Copy2}": [
            ["style", "top", '191px'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "left", '477px'],
            ["style", "width", '281px']
         ],
         "${_Text5Copy3}": [
            ["style", "top", '169px'],
            ["style", "height", '32px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '477px'],
            ["style", "width", '273px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '285px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '135px'],
            ["style", "left", '237px'],
            ["style", "width", '18px']
         ],
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '36px'],
            ["style", "top", '589px']
         ],
         "${_Text8}": [
            ["style", "height", '40px'],
            ["style", "display", 'none'],
            ["style", "left", '544px'],
            ["style", "top", '503px']
         ],
         "${_Text5}": [
            ["style", "top", '101px'],
            ["style", "height", '32px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '477px'],
            ["style", "width", '273px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text7}": [
            ["style", "top", '128px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "height", '29px'],
            ["style", "width", '203px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '705px'],
            ["style", "width", '226px'],
            ["style", "top", '126px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '169px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text7Copy}": [
            ["style", "display", 'none'],
            ["style", "top", '151px'],
            ["style", "height", '96px'],
            ["style", "width", '203px']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_HTP_screenshot}": [
            ["style", "left", '68px'],
            ["style", "top", '50px']
         ],
         "${_Text1}": [
            ["style", "top", '156px'],
            ["style", "width", '201px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '131px'],
            ["style", "left", '717px'],
            ["style", "font-size", '14px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '235px'],
            ["style", "width", '372px'],
            ["style", "top", '161px'],
            ["style", "text-align", 'left'],
            ["style", "height", '28px'],
            ["style", "display", 'none'],
            ["style", "font-size", '14px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '134px'],
            ["style", "display", 'none'],
            ["style", "height", '31px'],
            ["style", "font-weight", '700'],
            ["style", "left", '519px'],
            ["style", "width", '250px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '123px'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "left", '477px'],
            ["style", "width", '273px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '241px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '167px'],
            ["style", "left", '96px'],
            ["style", "width", '279px']
         ],
         "${_Text2}": [
            ["style", "top", '216px'],
            ["style", "height", '25px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '96px'],
            ["style", "font-size", '14px']
         ],
         "${_Text6}": [
            ["style", "top", '157px'],
            ["style", "height", '158px'],
            ["style", "display", 'none'],
            ["style", "left", '519px'],
            ["style", "width", '250px']
         ],
         "${_Text1Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '717px'],
            ["style", "font-size", '14px'],
            ["style", "top", '135px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "display", 'block'],
            ["style", "width", '201px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '411px'],
            ["style", "font-size", '32px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '285px'],
            ["style", "width", '372px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '135px'],
            ["style", "left", '252px'],
            ["style", "font-size", '14px']
         ],
         "${_Text5Copy5}": [
            ["style", "top", '240px'],
            ["style", "height", '32px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '477px'],
            ["style", "width", '273px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '690px'],
            ["style", "top", '52px']
         ],
         "${_Text5Copy4}": [
            ["style", "top", '262px'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "left", '477px'],
            ["style", "width", '273px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid231", tween: [ "style", "${_Text1Copy}", "top", '135px', { fromValue: '135px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '690px', { fromValue: '690px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '128px', { fromValue: '690px'}], position: 250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '620px', { fromValue: '105px'}], position: 500, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '451px', { fromValue: '620px'}], position: 750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '763px', { fromValue: '451px'}], position: 1000, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '643px', { fromValue: '763px'}], position: 1250, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '746px', { fromValue: '643px'}], position: 1500, duration: 0 },
            { id: "eid251", tween: [ "style", "${_Text3Copy2}", "top", '285px', { fromValue: '285px'}], position: 500, duration: 0 },
            { id: "eid252", tween: [ "style", "${_Text3Copy2}", "top", '292px', { fromValue: '285px'}], position: 750, duration: 0 },
            { id: "eid284", tween: [ "style", "${_Text5Copy5}", "height", '32px', { fromValue: '32px'}], position: 750, duration: 0 },
            { id: "eid276", tween: [ "style", "${_Text5Copy3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid277", tween: [ "style", "${_Text5Copy3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Text1Copy}", "height", '32px', { fromValue: '32px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '705px', { fromValue: '705px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '85px', { fromValue: '705px'}], position: 250, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '225px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '468px', { fromValue: '225px'}], position: 750, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '509px', { fromValue: '468px'}], position: 1000, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '615px', { fromValue: '509px'}], position: 1250, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '533px', { fromValue: '615px'}], position: 1500, duration: 0 },
            { id: "eid247", tween: [ "style", "${_Text3Copy}", "left", '235px', { fromValue: '235px'}], position: 500, duration: 0 },
            { id: "eid248", tween: [ "style", "${_Text3Copy}", "left", '103px', { fromValue: '235px'}], position: 750, duration: 0 },
            { id: "eid269", tween: [ "style", "${_Text5Copy}", "top", '123px', { fromValue: '123px'}], position: 750, duration: 0 },
            { id: "eid255", tween: [ "style", "${_Text3Copy2}", "height", '135px', { fromValue: '135px'}], position: 500, duration: 0 },
            { id: "eid296", tween: [ "style", "${_Text6Copy}", "top", '134px', { fromValue: '134px'}], position: 1000, duration: 0 },
            { id: "eid283", tween: [ "style", "${_Text5Copy4}", "height", '51px', { fromValue: '51px'}], position: 750, duration: 0 },
            { id: "eid285", tween: [ "style", "${_Text5Copy5}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid286", tween: [ "style", "${_Text5Copy5}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Text2}", "height", '25px', { fromValue: '25px'}], position: 250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid45", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid270", tween: [ "style", "${_Text5Copy}", "height", '51px', { fromValue: '51px'}], position: 750, duration: 0 },
            { id: "eid299", tween: [ "style", "${_Text7Copy}", "top", '151px', { fromValue: '151px'}], position: 1250, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid293", tween: [ "style", "${_Text6Copy}", "height", '31px', { fromValue: '31px'}], position: 1000, duration: 0 },
            { id: "eid264", tween: [ "style", "${_Text3Copy3}", "left", '237px', { fromValue: '237px'}], position: 500, duration: 0 },
            { id: "eid265", tween: [ "style", "${_Text3Copy3}", "left", '103px', { fromValue: '237px'}], position: 750, duration: 0 },
            { id: "eid241", tween: [ "style", "${_Text2Copy}", "width", '279px', { fromValue: '279px'}], position: 250, duration: 0 },
            { id: "eid279", tween: [ "style", "${_Text5Copy3}", "top", '169px', { fromValue: '169px'}], position: 750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid271", tween: [ "style", "${_Text5}", "height", '32px', { fromValue: '32px'}], position: 750, duration: 0 },
            { id: "eid301", tween: [ "style", "${_Text7}", "height", '29px', { fromValue: '29px'}], position: 1250, duration: 0 },
            { id: "eid294", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid295", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid292", tween: [ "style", "${_Text6}", "top", '157px', { fromValue: '157px'}], position: 1000, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3}", "width", '372px', { fromValue: '372px'}], position: 500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '301px', { fromValue: '301px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '301px'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '235px', { fromValue: '253px'}], position: 500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '138px'}], position: 750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '299px', { fromValue: '31px'}], position: 1000, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '33px', { fromValue: '299px'}], position: 1250, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '80px', { fromValue: '33px'}], position: 1500, duration: 0 },
            { id: "eid287", tween: [ "style", "${_Text5Copy5}", "top", '240px', { fromValue: '240px'}], position: 750, duration: 0 },
            { id: "eid259", tween: [ "style", "${_Text3Copy3}", "top", '285px', { fromValue: '285px'}], position: 500, duration: 0 },
            { id: "eid260", tween: [ "style", "${_Text3Copy3}", "top", '292px', { fromValue: '285px'}], position: 750, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '300px', { fromValue: '226px'}], position: 250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '413px', { fromValue: '300px'}], position: 500, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '296px', { fromValue: '413px'}], position: 750, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '272px', { fromValue: '296px'}], position: 1000, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '231px', { fromValue: '272px'}], position: 1250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Text1}", "height", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid297", tween: [ "style", "${_Text7Copy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid298", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid235", tween: [ "style", "${_Text1Copy}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid254", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid258", tween: [ "style", "${_Text3Copy2}", "width", '372px', { fromValue: '372px'}], position: 500, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid96", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '85px', { fromValue: '76px'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '669px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '267px', { fromValue: '84px'}], position: 750, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '814px', { fromValue: '267px'}], position: 1000, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '618px', { fromValue: '814px'}], position: 1250, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '795px', { fromValue: '615px'}], position: 1500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '595px', { fromValue: '595px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '694px', { fromValue: '595px'}], position: 250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '149px', { fromValue: '130px'}], position: 500, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '161px', { fromValue: '628px'}], position: 750, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '105px', { fromValue: '161px'}], position: 1000, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '105px'}], position: 1250, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '80px', { fromValue: '84px'}], position: 1500, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '126px', { fromValue: '126px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '446px', { fromValue: '126px'}], position: 250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '161px', { fromValue: '163px'}], position: 500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '94px', { fromValue: '466px'}], position: 750, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '122px', { fromValue: '101px'}], position: 1000, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '44px', { fromValue: '132px'}], position: 1250, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '490px', { fromValue: '55px'}], position: 1500, duration: 0 },
            { id: "eid266", tween: [ "style", "${_Text3Copy3}", "width", '18px', { fromValue: '18px'}], position: 500, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '-90deg'}], position: 250, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '450deg', { fromValue: '270deg'}], position: 500, duration: 0 },
            { id: "eid135", tween: [ "transform", "${_pointer}", "rotateZ", '270deg', { fromValue: '450deg'}], position: 750, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '270deg'}], position: 1000, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1250, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "top", '161px', { fromValue: '161px'}], position: 500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Text3}", "top", '292px', { fromValue: '161px'}], position: 750, duration: 0 },
            { id: "eid242", tween: [ "style", "${_Text3Copy}", "top", '184px', { fromValue: '184px'}], position: 500, duration: 0 },
            { id: "eid243", tween: [ "style", "${_Text3Copy}", "top", '292px', { fromValue: '184px'}], position: 750, duration: 0 },
            { id: "eid272", tween: [ "style", "${_Text5Copy2}", "top", '191px', { fromValue: '191px'}], position: 750, duration: 0 },
            { id: "eid289", tween: [ "style", "${_Text6}", "height", '158px', { fromValue: '158px'}], position: 1000, duration: 0 },
            { id: "eid240", tween: [ "style", "${_Text2Copy}", "height", '167px', { fromValue: '167px'}], position: 250, duration: 0 },
            { id: "eid262", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid263", tween: [ "style", "${_Text3Copy3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid273", tween: [ "style", "${_Text5Copy2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid274", tween: [ "style", "${_Text5Copy2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid267", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid268", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid282", tween: [ "style", "${_Text5Copy4}", "top", '262px', { fromValue: '262px'}], position: 750, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '52px', { fromValue: '52px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '309px', { fromValue: '52px'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '85px', { fromValue: '352px'}], position: 500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '7px', { fromValue: '85px'}], position: 750, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '49px', { fromValue: '17px'}], position: 1000, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '13px', { fromValue: '59px'}], position: 1250, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '417px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_Text2}", "top", '216px', { fromValue: '216px'}], position: 250, duration: 0 },
            { id: "eid244", tween: [ "style", "${_Text3Copy}", "height", '89px', { fromValue: '89px'}], position: 500, duration: 0 },
            { id: "eid288", tween: [ "style", "${_Text5Copy2}", "width", '281px', { fromValue: '281px'}], position: 750, duration: 0 },
            { id: "eid236", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid238", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid280", tween: [ "style", "${_Text5Copy4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid281", tween: [ "style", "${_Text5Copy4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid256", tween: [ "style", "${_Text3Copy2}", "left", '252px', { fromValue: '252px'}], position: 500, duration: 0 },
            { id: "eid257", tween: [ "style", "${_Text3Copy2}", "left", '103px', { fromValue: '252px'}], position: 750, duration: 0 },
            { id: "eid245", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid246", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '208px', { fromValue: '169px'}], position: 250, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Rectangle}", "height", '262px', { fromValue: '208px'}], position: 500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '222px', { fromValue: '283px'}], position: 750, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '269px', { fromValue: '94px'}], position: 1000, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '130px', { fromValue: '112px'}], position: 1250, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '58px', { fromValue: '80px'}], position: 1500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '156px', { fromValue: '156px'}], position: 0, duration: 0 },
            { id: "eid239", tween: [ "style", "${_Text2Copy}", "top", '241px', { fromValue: '241px'}], position: 250, duration: 0 },
            { id: "eid233", tween: [ "style", "${_Text1Copy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid41", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid261", tween: [ "style", "${_Text3Copy3}", "height", '135px', { fromValue: '135px'}], position: 500, duration: 0 },
            { id: "eid275", tween: [ "style", "${_Text5Copy2}", "height", '51px', { fromValue: '51px'}], position: 750, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '126px', { fromValue: '126px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '205px', { fromValue: '126px'}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '151px', { fromValue: '205px'}], position: 500, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '91px', { fromValue: '151px'}], position: 750, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '122px', { fromValue: '101px'}], position: 1000, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '117px', { fromValue: '132px'}], position: 1250, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '492px', { fromValue: '127px'}], position: 1500, duration: 0 },
            { id: "eid300", tween: [ "style", "${_Text7Copy}", "height", '96px', { fromValue: '96px'}], position: 1250, duration: 0 },
            { id: "eid234", tween: [ "style", "${_Text1Copy}", "left", '717px', { fromValue: '717px'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text1}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3}", "height", '28px', { fromValue: '28px'}], position: 500, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text3}", "left", '235px', { fromValue: '235px'}], position: 500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Text3}", "left", '103px', { fromValue: '235px'}], position: 750, duration: 0 },
            { id: "eid278", tween: [ "style", "${_Text5Copy3}", "height", '32px', { fromValue: '32px'}], position: 750, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text1}", "left", '717px', { fromValue: '717px'}], position: 0, duration: 0 },
            { id: "eid249", tween: [ "style", "${_Text3Copy}", "width", '396px', { fromValue: '396px'}], position: 500, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 }         ]
      }
   }
},
"Mission3": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_screenshot',
      type: 'image',
      rect: ['68px','50px','877px','565px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m3.jpg','0px','0px']
   },
   {
      rect: ['411px','2px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',32,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'How to Play',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text1',
      text: '‘Allowed’ Set<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1Copy',
      text: 'This space represents the set of aliens who are allowed in – that is, those who have the specified common property. ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['409px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text2',
      text: '‘Blocked’ Set<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['409px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2Copy',
      text: 'This space represents the set of aliens who are NOT allowed in – that is, those who do not have the specified property.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text3Copy5',
      text: 'Tools',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy4',
      text: 'The toolkit on the screen allows you to check for certain properties when in doubt.<br><br>In this mission, you have 3 tools that will help you in case of doubt.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy3',
      text: 'Click the ‘Equal Side Marker’ tool to see which sides of the shapes are equal.<br>The ‘Parallel Line’ tool will highlight any parallel lines in the shapes.<br>Click the ‘Right Angle’ tool to estimate which angles of the shapes measure equal, less, or more than a right angle.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy2',
      text: '•<br><br>•<br><br>•',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text3',
      text: 'Property selector<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      text: 'The property selector box allows you to choose property from the drop down from respective category. ',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text4',
      text: 'Create Shape button <br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4Copy',
      text: 'Clicking on the Create button generates a shape based on the described property, in the ‘Shape Selection’ box.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text5',
      text: 'Seelected shape',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy',
      text: 'A shape is generated here based on your described property.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text6',
      text: 'Send Agent button',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6Copy',
      text: 'Clicking on the ‘Send Agent’ button sends the shape in the Shape Selection Box to the ‘Allowed’ set, and ends case',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      align: 'left',
      id: 'Text6Copy2',
      text: 'if the properties match',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6Copy3',
      text: 'OR<br>Sends the shape in the Shape Selection Box to the ‘Blocked’ set',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      align: 'left',
      id: 'Text6Copy4',
      text: ' if the properties don’t match.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text7',
      text: 'Discard buton',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: 'Clicking on the ‘Discard’ button removes the generated shape if it does not match the property entered by you in the Property Description box with the pre-determined ‘common’ property for the current ‘Allowed’ set.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8',
      text: 'The token counter contains some tokens to be claimed for every new case played. <br>At the end of a case, the points earned are calculated based on the tokens remaining on screen.<br><br>You have limited tokens i.e., life. A token will be taken away when an invalid question asked or when a wrong shape is eliminated. The game ends when you reach the base token (Last token).<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text8Copy',
      text: 'Stars tally',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['631px','127px','259px','31px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','bold','none','normal'],
      align: 'left',
      id: 'Text9',
      text: 'Stars tally',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['631px','127px','259px','31px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','400','none','normal'],
      align: 'left',
      id: 'Text9Copy',
      text: 'Every case solved without losing any token (i.e. no mistakes) can earn you two stars. Try to earn as many stars as you can in this mission.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '98px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '73px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "height", '332px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '297px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '381px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '85px'],
            ["style", "left", '109px'],
            ["style", "width", '185px']
         ],
         "${_Text6Copy3}": [
            ["style", "top", '337px'],
            ["style", "display", 'none'],
            ["style", "height", '61px'],
            ["style", "left", '659px'],
            ["style", "width", '242px']
         ],
         "${_Text2}": [
            ["style", "top", '481px'],
            ["style", "height", '49px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '409px'],
            ["style", "font-size", '14px']
         ],
         "${_Text6Copy4}": [
            ["style", "top", '390px'],
            ["style", "height", '25px'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "left", '659px'],
            ["style", "width", '242px']
         ],
         "${_Text9Copy}": [
            ["style", "top", '151px'],
            ["style", "font-weight", '400'],
            ["style", "display", 'none']
         ],
         "${_Text7Copy}": [
            ["style", "top", '489px'],
            ["style", "display", 'none'],
            ["style", "height", '57px'],
            ["style", "left", '515px'],
            ["style", "width", '265px']
         ],
         "${_Text8Copy2}": [
            ["style", "top", '169px'],
            ["style", "display", 'none'],
            ["style", "height", '25px'],
            ["style", "font-weight", '700'],
            ["style", "left", '517px'],
            ["style", "width", '256px']
         ],
         "${_HTP_screenshot}": [
            ["style", "left", '68px'],
            ["style", "top", '50px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '263px'],
            ["style", "display", 'none'],
            ["style", "height", '144px'],
            ["style", "left", '659px'],
            ["style", "width", '242px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '349px'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "left", '668px'],
            ["style", "width", '258px']
         ],
         "${_Text9}": [
            ["style", "display", 'none'],
            ["style", "top", '127px']
         ],
         "${_Text8Copy}": [
            ["style", "top", '169px'],
            ["style", "display", 'none'],
            ["style", "height", '25px'],
            ["style", "font-weight", '700'],
            ["style", "left", '517px'],
            ["style", "width", '256px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_Text1Copy}": [
            ["style", "top", '496px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '39px'],
            ["style", "left", '124px'],
            ["style", "width", '201px']
         ],
         "${_Text5}": [
            ["style", "top", '326px'],
            ["style", "height", '31px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '668px'],
            ["style", "width", '258px']
         ],
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '36px'],
            ["style", "top", '589px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '112px'],
            ["style", "width", '226px'],
            ["style", "top", '462px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '117px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text3Copy5}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '235px'],
            ["style", "width", '372px'],
            ["style", "top", '161px'],
            ["style", "text-align", 'left'],
            ["style", "height", '28px'],
            ["style", "font-size", '14px'],
            ["style", "display", 'none']
         ],
         "${_Text1}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '124px'],
            ["style", "width", '201px'],
            ["style", "top", '472px'],
            ["style", "text-align", 'left'],
            ["style", "height", '39px'],
            ["style", "display", 'block'],
            ["style", "font-size", '14px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '184px'],
            ["style", "width", '396px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '89px'],
            ["style", "left", '235px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '504px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '49px'],
            ["style", "left", '409px'],
            ["style", "font-size", '14px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '285px'],
            ["style", "width", '18px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '135px'],
            ["style", "left", '237px'],
            ["style", "font-size", '14px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '528px'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "left", '310px'],
            ["style", "width", '197px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '109px'],
            ["style", "width", '185px'],
            ["style", "top", '358px'],
            ["style", "text-align", 'left'],
            ["style", "height", '56px'],
            ["style", "display", 'none'],
            ["style", "font-size", '14px']
         ],
         "${_Text6}": [
            ["style", "top", '238px'],
            ["style", "height", '25px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '659px'],
            ["style", "width", '250px']
         ],
         "${_Text7}": [
            ["style", "top", '465px'],
            ["style", "height", '57px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '515px'],
            ["style", "width", '203px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '411px'],
            ["style", "font-size", '32px']
         ],
         "${_Text8}": [
            ["style", "top", '195px'],
            ["style", "height", '198px'],
            ["style", "display", 'none'],
            ["style", "left", '517px'],
            ["style", "width", '256px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '285px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '135px'],
            ["style", "left", '252px'],
            ["style", "width", '372px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '207px'],
            ["style", "top", '362px']
         ],
         "${_Text4}": [
            ["style", "top", '505px'],
            ["style", "height", '63px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '310px'],
            ["style", "width", '161px']
         ],
         "${_Text6Copy2}": [
            ["style", "top", '316px'],
            ["style", "height", '25px'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "left", '659px'],
            ["style", "width", '242px']
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
            { id: "eid302", tween: [ "style", "${_Text1Copy}", "top", '496px', { fromValue: '496px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '207px', { fromValue: '207px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '506px', { fromValue: '207px'}], position: 250, duration: 0 },
            { id: "eid392", tween: [ "style", "${_pointer}", "left", '621px', { fromValue: '506px'}], position: 500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '126px', { fromValue: '600px'}], position: 750, duration: 0 },
            { id: "eid54", tween: [ "style", "${_pointer}", "left", '508px', { fromValue: '123px'}], position: 1000, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '725px', { fromValue: '734px'}], position: 1250, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '856px', { fromValue: '451px'}], position: 1500, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '778px', { fromValue: '763px'}], position: 1750, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '769px', { fromValue: '643px'}], position: 2000, duration: 0 },
            { id: "eid164", tween: [ "style", "${_pointer}", "left", '646px', { fromValue: '654px'}], position: 2250, duration: 0 },
            { id: "eid404", tween: [ "style", "${_Text3Copy2}", "top", '285px', { fromValue: '285px'}], position: 500, duration: 0 },
            { id: "eid405", tween: [ "style", "${_Text3Copy2}", "top", '292px', { fromValue: '285px'}], position: 750, duration: 0 },
            { id: "eid322", tween: [ "style", "${_Text4Copy}", "left", '310px', { fromValue: '310px'}], position: 1000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text1}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_Text3Copy}", "width", '185px', { fromValue: '185px'}], position: 750, duration: 0 },
            { id: "eid354", tween: [ "style", "${_Text6Copy4}", "height", '25px', { fromValue: '25px'}], position: 1500, duration: 0 },
            { id: "eid303", tween: [ "style", "${_Text1Copy}", "height", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '398px', { fromValue: '112px'}], position: 250, duration: 0 },
            { id: "eid399", tween: [ "style", "${_Rectangle}", "left", '220px', { fromValue: '398px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '95px', { fromValue: '387px'}], position: 750, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "left", '299px', { fromValue: '95px'}], position: 1000, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '658px', { fromValue: '299px'}], position: 1250, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '648px', { fromValue: '468px'}], position: 1500, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '499px', { fromValue: '509px'}], position: 1750, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '503px', { fromValue: '499px'}], position: 2000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Rectangle}", "left", '618px', { fromValue: '495px'}], position: 2250, duration: 0 },
            { id: "eid364", tween: [ "style", "${_Text8Copy}", "top", '169px', { fromValue: '169px'}], position: 2000, duration: 0 },
            { id: "eid366", tween: [ "style", "${_Text8Copy}", "top", '124px', { fromValue: '169px'}], position: 2250, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid339", tween: [ "style", "${_Text6Copy2}", "top", '316px', { fromValue: '316px'}], position: 1500, duration: 0 },
            { id: "eid423", tween: [ "style", "${_Text3Copy4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid424", tween: [ "style", "${_Text3Copy4}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid350", tween: [ "style", "${_Text6Copy3}", "width", '242px', { fromValue: '242px'}], position: 1500, duration: 0 },
            { id: "eid317", tween: [ "style", "${_Text3Copy}", "left", '109px', { fromValue: '109px'}], position: 750, duration: 0 },
            { id: "eid318", tween: [ "style", "${_Text3Copy}", "left", '103px', { fromValue: '109px'}], position: 1000, duration: 0 },
            { id: "eid312", tween: [ "style", "${_Text3Copy}", "top", '381px', { fromValue: '381px'}], position: 750, duration: 0 },
            { id: "eid313", tween: [ "style", "${_Text3Copy}", "top", '292px', { fromValue: '381px'}], position: 1000, duration: 0 },
            { id: "eid352", tween: [ "style", "${_Text6Copy4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid353", tween: [ "style", "${_Text6Copy4}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text7}", "left", '515px', { fromValue: '515px'}], position: 1750, duration: 0 },
            { id: "eid326", tween: [ "style", "${_Text5Copy}", "top", '349px', { fromValue: '349px'}], position: 1250, duration: 0 },
            { id: "eid406", tween: [ "style", "${_Text3Copy2}", "height", '135px', { fromValue: '135px'}], position: 500, duration: 0 },
            { id: "eid335", tween: [ "style", "${_Text6Copy}", "top", '263px', { fromValue: '263px'}], position: 1500, duration: 0 },
            { id: "eid147", tween: [ "style", "${_Text8}", "top", '195px', { fromValue: '195px'}], position: 2000, duration: 0 },
            { id: "eid167", tween: [ "style", "${_Text8}", "top", '126px', { fromValue: '138px'}], position: 2250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid45", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid433", tween: [ "style", "${_Text3Copy5}", "left", '235px', { fromValue: '235px'}], position: 500, duration: 0 },
            { id: "eid434", tween: [ "style", "${_Text3Copy5}", "left", '103px', { fromValue: '235px'}], position: 750, duration: 0 },
            { id: "eid372", tween: [ "style", "${_Text8Copy}", "width", '256px', { fromValue: '256px'}], position: 2000, duration: 0 },
            { id: "eid427", tween: [ "style", "${_Text3Copy4}", "width", '396px', { fromValue: '396px'}], position: 500, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Text2}", "height", '49px', { fromValue: '49px'}], position: 250, duration: 0 },
            { id: "eid355", tween: [ "style", "${_Text6Copy4}", "left", '659px', { fromValue: '659px'}], position: 1500, duration: 0 },
            { id: "eid138", tween: [ "style", "${_Text5}", "left", '668px', { fromValue: '668px'}], position: 1250, duration: 0 },
            { id: "eid351", tween: [ "style", "${_Text6Copy4}", "top", '390px', { fromValue: '390px'}], position: 1500, duration: 0 },
            { id: "eid430", tween: [ "style", "${_Text3Copy5}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid431", tween: [ "style", "${_Text3Copy5}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid432", tween: [ "style", "${_Text3Copy5}", "height", '28px', { fromValue: '28px'}], position: 500, duration: 0 },
            { id: "eid416", tween: [ "style", "${_Text3Copy3}", "height", '135px', { fromValue: '135px'}], position: 500, duration: 0 },
            { id: "eid41", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid360", tween: [ "style", "${_Text7Copy}", "top", '489px', { fromValue: '489px'}], position: 1750, duration: 0 },
            { id: "eid409", tween: [ "style", "${_Text3Copy2}", "left", '237px', { fromValue: '237px'}], position: 500, duration: 0 },
            { id: "eid410", tween: [ "style", "${_Text3Copy2}", "left", '103px', { fromValue: '237px'}], position: 750, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid373", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid387", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid304", tween: [ "style", "${_Text1Copy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid146", tween: [ "style", "${_Text8}", "left", '517px', { fromValue: '517px'}], position: 2000, duration: 0 },
            { id: "eid166", tween: [ "style", "${_Text8}", "left", '629px', { fromValue: '565px'}], position: 2250, duration: 0 },
            { id: "eid342", tween: [ "style", "${_Text6Copy2}", "height", '25px', { fromValue: '25px'}], position: 1500, duration: 0 },
            { id: "eid337", tween: [ "style", "${_Text6Copy}", "height", '144px', { fromValue: '144px'}], position: 1500, duration: 0 },
            { id: "eid417", tween: [ "style", "${_Text3Copy3}", "left", '252px', { fromValue: '252px'}], position: 500, duration: 0 },
            { id: "eid418", tween: [ "style", "${_Text3Copy3}", "left", '103px', { fromValue: '252px'}], position: 750, duration: 0 },
            { id: "eid325", tween: [ "style", "${_Text4Copy}", "height", '73px', { fromValue: '73px'}], position: 1000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '472px', { fromValue: '472px'}], position: 0, duration: 0 },
            { id: "eid347", tween: [ "style", "${_Text6Copy3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid348", tween: [ "style", "${_Text6Copy3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid343", tween: [ "style", "${_Text6Copy2}", "left", '659px', { fromValue: '659px'}], position: 1500, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid435", tween: [ "style", "${_Text3Copy5}", "width", '372px', { fromValue: '372px'}], position: 500, duration: 0 },
            { id: "eid331", tween: [ "style", "${_Text5}", "height", '31px', { fromValue: '31px'}], position: 1250, duration: 0 },
            { id: "eid334", tween: [ "style", "${_Text6Copy}", "left", '659px', { fromValue: '659px'}], position: 1500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '252px', { fromValue: '226px'}], position: 250, duration: 0 },
            { id: "eid402", tween: [ "style", "${_Rectangle}", "width", '419px', { fromValue: '252px'}], position: 500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '214px', { fromValue: '332px'}], position: 750, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "width", '227px', { fromValue: '265px'}], position: 1000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '280px', { fromValue: '227px'}], position: 1250, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '272px', { fromValue: '280px'}], position: 1500, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '298px', { fromValue: '272px'}], position: 1750, duration: 0 },
            { id: "eid363", tween: [ "style", "${_Rectangle}", "width", '284px', { fromValue: '298px'}], position: 2000, duration: 0 },
            { id: "eid330", tween: [ "style", "${_Text5Copy}", "width", '258px', { fromValue: '258px'}], position: 1250, duration: 0 },
            { id: "eid332", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid333", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid346", tween: [ "style", "${_Text6Copy3}", "height", '61px', { fromValue: '61px'}], position: 1500, duration: 0 },
            { id: "eid362", tween: [ "style", "${_Text8}", "width", '256px', { fromValue: '256px'}], position: 2000, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '301px', { fromValue: '297px'}], position: 250, duration: 0 },
            { id: "eid396", tween: [ "style", "${_Rectangle2}", "width", '146px', { fromValue: '301px'}], position: 500, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '540px', { fromValue: '104px'}], position: 750, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Rectangle2}", "width", '81px', { fromValue: '660px'}], position: 1000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '161px', { fromValue: '628px'}], position: 1250, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '161px'}], position: 1500, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '105px'}], position: 1750, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '100px', { fromValue: '84px'}], position: 2000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '106px'}], position: 2250, duration: 0 },
            { id: "eid305", tween: [ "style", "${_Text1Copy}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '329px', { fromValue: '332px'}], position: 250, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Rectangle2}", "height", '239px', { fromValue: '329px'}], position: 500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '39px', { fromValue: '239px'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '39px'}], position: 1000, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '164px', { fromValue: '138px'}], position: 1250, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '86px', { fromValue: '31px'}], position: 1500, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '33px', { fromValue: '299px'}], position: 1750, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '290px', { fromValue: '33px'}], position: 2000, duration: 0 },
            { id: "eid162", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '290px'}], position: 2250, duration: 0 },
            { id: "eid390", tween: [ "style", "${_Text9Copy}", "top", '151px', { fromValue: '151px'}], position: 2250, duration: 0 },
            { id: "eid324", tween: [ "style", "${_Text4Copy}", "width", '197px', { fromValue: '197px'}], position: 1000, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3}", "height", '56px', { fromValue: '56px'}], position: 750, duration: 0 },
            { id: "eid323", tween: [ "style", "${_Text4Copy}", "top", '528px', { fromValue: '528px'}], position: 1000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Text1}", "height", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid428", tween: [ "style", "${_Text3Copy5}", "top", '161px', { fromValue: '161px'}], position: 500, duration: 0 },
            { id: "eid429", tween: [ "style", "${_Text3Copy5}", "top", '292px', { fromValue: '161px'}], position: 750, duration: 0 },
            { id: "eid422", tween: [ "style", "${_Text3Copy4}", "height", '89px', { fromValue: '89px'}], position: 500, duration: 0 },
            { id: "eid357", tween: [ "style", "${_Text7Copy}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid358", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid306", tween: [ "style", "${_Text1Copy}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid320", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid321", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid407", tween: [ "style", "${_Text3Copy2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid408", tween: [ "style", "${_Text3Copy2}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid420", tween: [ "style", "${_Text3Copy4}", "top", '184px', { fromValue: '184px'}], position: 500, duration: 0 },
            { id: "eid421", tween: [ "style", "${_Text3Copy4}", "top", '292px', { fromValue: '184px'}], position: 750, duration: 0 },
            { id: "eid359", tween: [ "style", "${_Text7Copy}", "left", '515px', { fromValue: '515px'}], position: 1750, duration: 0 },
            { id: "eid411", tween: [ "style", "${_Text3Copy2}", "width", '18px', { fromValue: '18px'}], position: 500, duration: 0 },
            { id: "eid349", tween: [ "style", "${_Text6Copy3}", "left", '659px', { fromValue: '659px'}], position: 1500, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid96", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '73px', { fromValue: '73px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '369px', { fromValue: '73px'}], position: 250, duration: 0 },
            { id: "eid395", tween: [ "style", "${_Rectangle2}", "left", '670px', { fromValue: '369px'}], position: 500, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '95px', { fromValue: '566px'}], position: 750, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Rectangle2}", "left", '556px', { fromValue: '92px'}], position: 1000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '658px', { fromValue: '84px'}], position: 1250, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '828px', { fromValue: '267px'}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '830px', { fromValue: '814px'}], position: 1750, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '818px', { fromValue: '615px'}], position: 2000, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Rectangle2}", "left", '618px', { fromValue: '818px'}], position: 2250, duration: 0 },
            { id: "eid340", tween: [ "style", "${_Text6Copy2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid341", tween: [ "style", "${_Text6Copy2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid345", tween: [ "style", "${_Text6Copy3}", "top", '337px', { fromValue: '337px'}], position: 1500, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '98px', { fromValue: '98px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '98px', { fromValue: '98px'}], position: 250, duration: 0 },
            { id: "eid397", tween: [ "style", "${_Rectangle2}", "top", '158px', { fromValue: '98px'}], position: 500, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '491px', { fromValue: '163px'}], position: 750, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Rectangle2}", "top", '536px', { fromValue: '491px'}], position: 1000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '440px', { fromValue: '536px'}], position: 1250, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '456px', { fromValue: '440px'}], position: 1500, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '548px', { fromValue: '456px'}], position: 1750, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '127px', { fromValue: '548px'}], position: 2000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Rectangle2}", "top", '45px', { fromValue: '127px'}], position: 2250, duration: 0 },
            { id: "eid419", tween: [ "style", "${_Text3Copy3}", "width", '372px', { fromValue: '372px'}], position: 500, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 250, duration: 0 },
            { id: "eid394", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 750, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_pointer}", "rotateZ", '450deg', { fromValue: '180deg'}], position: 1000, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '450deg'}], position: 1250, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '540deg'}], position: 1500, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 1750, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid378", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 2250, duration: 0 },
            { id: "eid136", tween: [ "style", "${_Text4}", "left", '310px', { fromValue: '310px'}], position: 1000, duration: 0 },
            { id: "eid425", tween: [ "style", "${_Text3Copy4}", "left", '235px', { fromValue: '235px'}], position: 500, duration: 0 },
            { id: "eid426", tween: [ "style", "${_Text3Copy4}", "left", '103px', { fromValue: '235px'}], position: 750, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "top", '358px', { fromValue: '358px'}], position: 750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Text3}", "top", '292px', { fromValue: '358px'}], position: 1000, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3}", "width", '185px', { fromValue: '185px'}], position: 750, duration: 0 },
            { id: "eid336", tween: [ "style", "${_Text6Copy}", "width", '242px', { fromValue: '242px'}], position: 1500, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '462px', { fromValue: '462px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '466px', { fromValue: '462px'}], position: 250, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Rectangle}", "top", '150px', { fromValue: '466px'}], position: 500, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '345px', { fromValue: '139px'}], position: 750, duration: 0 },
            { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '496px', { fromValue: '345px'}], position: 1000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '315px', { fromValue: '496px'}], position: 1250, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '231px', { fromValue: '101px'}], position: 1500, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '455px', { fromValue: '231px'}], position: 1750, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '159px', { fromValue: '455px'}], position: 2000, duration: 0 },
            { id: "eid158", tween: [ "style", "${_Rectangle}", "top", '115px', { fromValue: '159px'}], position: 2250, duration: 0 },
            { id: "eid311", tween: [ "style", "${_Text2Copy}", "height", '49px', { fromValue: '49px'}], position: 250, duration: 0 },
            { id: "eid344", tween: [ "style", "${_Text6Copy2}", "width", '242px', { fromValue: '242px'}], position: 1500, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text3}", "left", '109px', { fromValue: '109px'}], position: 750, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Text3}", "left", '103px', { fromValue: '109px'}], position: 1000, duration: 0 },
            { id: "eid327", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid328", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid308", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid309", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid310", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '362px', { fromValue: '362px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '362px', { fromValue: '362px'}], position: 250, duration: 0 },
            { id: "eid393", tween: [ "style", "${_pointer}", "top", '153px', { fromValue: '362px'}], position: 500, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '354px', { fromValue: '194px'}], position: 750, duration: 0 },
            { id: "eid55", tween: [ "style", "${_pointer}", "top", '453px', { fromValue: '279px'}], position: 1000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '305px', { fromValue: '395px'}], position: 1250, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '319px', { fromValue: '17px'}], position: 1500, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '465px', { fromValue: '59px'}], position: 1750, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '79px', { fromValue: '23px'}], position: 2000, duration: 0 },
            { id: "eid165", tween: [ "style", "${_pointer}", "top", '11px', { fromValue: '11px'}], position: 2250, duration: 0 },
            { id: "eid72", tween: [ "style", "${_Text2}", "top", '481px', { fromValue: '481px'}], position: 250, duration: 0 },
            { id: "eid314", tween: [ "style", "${_Text3Copy}", "height", '85px', { fromValue: '85px'}], position: 750, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Text8}", "height", '198px', { fromValue: '198px'}], position: 2000, duration: 0 },
            { id: "eid338", tween: [ "style", "${_Text6}", "height", '25px', { fromValue: '25px'}], position: 1500, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid389", tween: [ "style", "${_Text9Copy}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Text5}", "top", '326px', { fromValue: '326px'}], position: 1250, duration: 0 },
            { id: "eid315", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid316", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid412", tween: [ "style", "${_Text3Copy3}", "top", '285px', { fromValue: '285px'}], position: 500, duration: 0 },
            { id: "eid413", tween: [ "style", "${_Text3Copy3}", "top", '292px', { fromValue: '285px'}], position: 750, duration: 0 },
            { id: "eid145", tween: [ "style", "${_Text7}", "top", '465px', { fromValue: '465px'}], position: 1750, duration: 0 },
            { id: "eid307", tween: [ "style", "${_Text2Copy}", "top", '504px', { fromValue: '504px'}], position: 250, duration: 0 },
            { id: "eid356", tween: [ "style", "${_Text6Copy4}", "width", '242px', { fromValue: '242px'}], position: 1500, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid141", tween: [ "style", "${_Text5}", "width", '258px', { fromValue: '258px'}], position: 1250, duration: 0 },
            { id: "eid369", tween: [ "style", "${_Text8Copy}", "left", '517px', { fromValue: '517px'}], position: 2000, duration: 0 },
            { id: "eid371", tween: [ "style", "${_Text8Copy}", "left", '523px', { fromValue: '517px'}], position: 2250, duration: 0 },
            { id: "eid361", tween: [ "style", "${_Text7Copy}", "width", '265px', { fromValue: '265px'}], position: 1750, duration: 0 },
            { id: "eid367", tween: [ "style", "${_Text8Copy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid386", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '118px', { fromValue: '117px'}], position: 250, duration: 0 },
            { id: "eid401", tween: [ "style", "${_Rectangle}", "height", '264px', { fromValue: '118px'}], position: 500, duration: 0 },
            { id: "eid403", tween: [ "style", "${_Rectangle}", "height", '121px', { fromValue: '300px'}], position: 750, duration: 0 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "height", '113px', { fromValue: '121px'}], position: 1000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '94px', { fromValue: '73px'}], position: 1250, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '193px', { fromValue: '94px'}], position: 1500, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '154px', { fromValue: '112px'}], position: 1750, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '241px', { fromValue: '80px'}], position: 2000, duration: 0 },
            { id: "eid391", tween: [ "style", "${_Rectangle}", "height", '124px', { fromValue: '241px'}], position: 2250, duration: 0 },
            { id: "eid368", tween: [ "style", "${_Text8Copy}", "height", '25px', { fromValue: '25px'}], position: 2000, duration: 0 },
            { id: "eid143", tween: [ "style", "${_Text6}", "top", '238px', { fromValue: '238px'}], position: 1500, duration: 0 },
            { id: "eid137", tween: [ "style", "${_Text4}", "top", '505px', { fromValue: '505px'}], position: 1000, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text1}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid414", tween: [ "style", "${_Text3Copy3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid415", tween: [ "style", "${_Text3Copy3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid329", tween: [ "style", "${_Text5Copy}", "left", '668px', { fromValue: '668px'}], position: 1250, duration: 0 },
            { id: "eid142", tween: [ "style", "${_Text6}", "left", '659px', { fromValue: '659px'}], position: 1500, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 }         ]
      }
   }
},
"Mission4": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_screenshot',
      type: 'image',
      rect: ['68px','50px','877px','565px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m4a.jpg','0px','0px']
   },
   /* {
      rect: ['467px','564px','81px','24px','auto','auto'],
      id: 'drawDummy',
      opacity: 0.8515625,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/drawDummy.png','0px','0px']
   }, */
   {
      rect: ['69px','51px','874px','562px','auto','auto'],
      id: 'HTP_m4b',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m4b.jpg','0px','0px']
   },
   {
      rect: ['411px','2px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',32,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'How to Play',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['632px','370px','22px','22px','auto','auto'],
      id: 'orange_circle',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/orange_circle.png','0px','0px']
   },
   {
      rect: ['712px','371px','22px','22px','auto','auto'],
      id: 'red_circle',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/red_circle.png','0px','0px']
   },
   {
      rect: ['550px','370px','22px','22px','auto','auto'],
      id: 'green_circle',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/green_circle.png','0px','0px']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['587px','196px','208px','62px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text13',
      text: 'Token Counter',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['587px','196px','208px','62px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text13Copy',
      text: 'The token counter contains some tokens to be claimed for every new case played. <br>At the end of a case, the points earned are calculated based on the tokens remaining on screen.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','130px','208px','49px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text14',
      text: 'Stars tally',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','130px','208px','49px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','400','none','normal'],
      align: 'left',
      id: 'Text14Copy',
      text: 'Every case solved without losing any token (i.e. no mistakes) can earn you two stars. Try to earn as many stars as you can in this mission.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text1',
      text: 'Phase 1<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1Copy',
      text: 'In phase 1 you need to hide the confiscated frame in the secret police facility. To do this, click on 4 points on the grid that determine the vertices of the frame. ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['409px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text2',
      text: 'Prompt box<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['409px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2Copy',
      text: 'Here you can see the class of shape required at the start of a case.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','700','none','normal'],
      align: 'left',
      id: 'Text3',
      text: 'Drawing Grid<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      text: 'The Player’s drawing grid is a 4x4 space (3x3 for Stage 6) within which you can hide/place your crystal frame.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text4',
      text: 'Draw/Reset button<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4Copy',
      text: 'These buttons are placed in the player’s area, close to the player’s grid. It has the function of generating a shape or clearing it. ',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4Copy2',
      text: '•<br><br><br><br><br>•',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4Copy3',
      text: 'Clicking on the ‘Draw’ button after the 4 points on the grid have been selected generates the shape defined by these 4 vertices.<br><br>Clicking on the ‘Reset’ button when there is a shape visible on the grid clears the shape.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text5',
      text: 'Done button<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy',
      text: 'Clicking on the ‘Done’ button will launch the Phase 2 (Locate Opponent’s Frame) of the game.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text6',
      text: 'Phase 2',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6Copy',
      text: 'In phase 2, the player and the ‘opponent’ (computer) take turns to try and locate the other’s frame.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text7',
      text: 'Player’s Area<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: 'An area of the screen depicting the player’s space - a secret police facility. Your drawing grid is placed in this area.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text8',
      text: 'Opponent’s Area<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8Copy',
      text: 'An area of the screen where the opponent’s grid is placed, with the frame hidden within. (The opponent is supposed to be using this frame to capture and teleport unwilling Judics back to their planet).',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text9',
      text: '‘Vertex Hit’ marker',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text9Copy',
      text: 'A ‘Vertex Hit’ marker indicates that a vertex of the shape has been hit at the selected point. It is a green circle with ‘V’ written on it. It becomes visible after the player/computer hits a vertex of the quadrilateral, and stays on the grid till the case ends.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['538px','270px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text10',
      text: '‘Edge Hit’ marker',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['538px','270px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text10Copy',
      text: 'An ‘Edge Hit’ marker indicates that an edge of the shape has been hit at the selected point. It is a yellow circle with ‘E’ written on it. It becomes visible after the player/computer hits an edge of the quadrilateral, and stays on the grid till the case ends.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['539px','269px','207px','49px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','700','none','normal'],
      align: 'left',
      id: 'Text11',
      text: '‘Miss’ marker ',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['539px','269px','207px','49px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text11Copy',
      text: 'A ‘Miss’ marker indicates that neither a vertex not an edge of the quadrilateral is located the selected point. It is shown as a red circle at the location of the selected coordinate. It becomes visible after the player does not hit either a vertex or a side of the quadrilateral, and stays on the grid till the case ends.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '107px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '493px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "left", '306px'],
            ["style", "width", '395px']
         ],
         "${_Text13Copy}": [
            ["style", "top", '221px'],
            ["style", "height", '127px'],
            ["style", "display", 'none'],
            ["style", "left", '607px'],
            ["style", "width", '184px']
         ],
         "${_Text10Copy}": [
            ["style", "display", 'none'],
            ["style", "top", '190px'],
            ["style", "left", '538px'],
            ["style", "height", '147px']
         ],
         "${_Text14Copy}": [
            ["style", "top", '148px'],
            ["style", "height", '97px'],
            ["style", "font-weight", '400'],
            ["style", "display", 'none'],
            ["style", "width", '202px']
         ],
         "${_Text8}": [
            ["style", "top", '59px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '460px'],
            ["style", "height", '49px']
         ],
         "${_HTP_m4b}": [
            ["style", "top", '51px'],
            ["style", "left", '69px'],
            ["style", "display", 'none']
         ],
         "${_Text9Copy}": [
            ["style", "height", '148px'],
            ["style", "display", 'none'],
            ["style", "left", '460px'],
            ["style", "top", '61px']
         ],
         "${_Text11Copy}": [
            ["style", "top", '195px'],
            ["style", "height", '125px'],
            ["style", "display", 'none'],
            ["style", "left", '540px'],
            ["style", "width", '279px']
         ],
         "${_green_circle}": [
            ["style", "top", '370px'],
            ["style", "left", '550px'],
            ["style", "display", 'none']
         ],
         "${_Text7Copy}": [
            ["style", "top", '83px'],
            ["style", "height", '57px'],
            ["style", "display", 'none'],
            ["style", "left", '80px'],
            ["style", "width", '364px']
         ],
         "${_Text4}": [
            ["style", "top", '305px'],
            ["style", "display", 'none'],
            ["style", "height", '63px'],
            ["style", "font-weight", '700'],
            ["style", "left", '104px'],
            ["style", "width", '161px']
         ],
         "${_HTP_screenshot}": [
            ["style", "left", '68px'],
            ["style", "top", '50px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '91px'],
            ["style", "height", '39px'],
            ["style", "display", 'none'],
            ["style", "left", '323px'],
            ["style", "width", '356px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '464px'],
            ["style", "height", '73px'],
            ["style", "display", 'none'],
            ["style", "left", '609px'],
            ["style", "width", '252px']
         ],
         "${_Text10}": [
            ["style", "top", '166px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '538px'],
            ["style", "height", '49px']
         ],
         "${_Text9}": [
            ["style", "top", '61px'],
            ["style", "height", '49px'],
            ["style", "font-weight", '700'],
            ["style", "left", '460px'],
            ["style", "display", 'none']
         ],
         "${_Text8Copy}": [
            ["style", "top", '82px'],
            ["style", "display", 'none'],
            ["style", "height", '49px'],
            ["style", "left", '460px'],
            ["style", "width", '421px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_Text1Copy}": [
            ["style", "top", '139px'],
            ["style", "width", '182px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '117px'],
            ["style", "left", '80px'],
            ["style", "font-size", '14px']
         ],
         "${_Text11}": [
            ["style", "top", '168px'],
            ["style", "font-weight", '700'],
            ["style", "left", '540px'],
            ["style", "display", 'none']
         ],
         "${_Text5}": [
            ["style", "top", '441px'],
            ["style", "display", 'none'],
            ["style", "height", '73px'],
            ["style", "font-weight", '700'],
            ["style", "left", '609px'],
            ["style", "width", '258px']
         ],
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "top", '589px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '36px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '68px'],
            ["style", "width", '213px'],
            ["style", "top", '107px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '149px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text1}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '80px'],
            ["style", "font-size", '14px'],
            ["style", "top", '117px'],
            ["style", "text-align", 'left'],
            ["style", "height", '39px'],
            ["style", "display", 'block'],
            ["style", "width", '201px']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '85px'],
            ["style", "width", '191px'],
            ["style", "top", '150px'],
            ["style", "text-align", 'left'],
            ["style", "height", '58px'],
            ["style", "display", 'none'],
            ["style", "font-size", '14px']
         ],
         "${_orange_circle}": [
            ["style", "top", '370px'],
            ["style", "left", '632px'],
            ["style", "display", 'none']
         ],
         "${_red_circle}": [
            ["style", "top", '371px'],
            ["style", "left", '712px'],
            ["style", "display", 'none']
         ],
         "${_drawDummy}": [
            ["style", "top", '564px'],
            ["style", "opacity", '0.8515625'],
            ["style", "left", '467px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '394px'],
            ["style", "height", '137px'],
            ["style", "display", 'none'],
            ["style", "left", '122px'],
            ["style", "width", '268px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '89px'],
            ["style", "font-size", '14px'],
            ["style", "top", '198px'],
            ["style", "text-align", 'left'],
            ["style", "height", '56px'],
            ["style", "display", 'none'],
            ["style", "width", '185px']
         ],
         "${_Text7}": [
            ["style", "top", '62px'],
            ["style", "display", 'none'],
            ["style", "height", '57px'],
            ["style", "font-weight", '700'],
            ["style", "left", '80px'],
            ["style", "width", '203px']
         ],
         "${_Text13}": [
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "left", '607px']
         ],
         "${_Text6}": [
            ["style", "top", '68px'],
            ["style", "display", 'none'],
            ["style", "height", '54px'],
            ["style", "font-weight", '700'],
            ["style", "left", '323px'],
            ["style", "width", '250px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '223px'],
            ["style", "width", '185px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '109px'],
            ["style", "left", '89px'],
            ["style", "font-size", '14px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '411px'],
            ["style", "font-size", '32px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '329px'],
            ["style", "height", '63px'],
            ["style", "display", 'none'],
            ["style", "left", '104px'],
            ["style", "width", '286px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '394px'],
            ["style", "display", 'none'],
            ["style", "height", '137px'],
            ["style", "left", '104px'],
            ["style", "width", '286px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '263px'],
            ["style", "top", '33px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '174px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '58px'],
            ["style", "left", '85px'],
            ["style", "width", '191px']
         ],
         "${_Text14}": [
            ["style", "display", 'none'],
            ["style", "font-weight", '700'],
            ["style", "top", '126px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid436", tween: [ "style", "${_Text1Copy}", "top", '139px', { fromValue: '139px'}], position: 0, duration: 0 },
            { id: "eid542", tween: [ "style", "${_Text14Copy}", "height", '97px', { fromValue: '97px'}], position: 3000, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text1}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_Text3Copy}", "width", '185px', { fromValue: '185px'}], position: 500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '74px', { fromValue: '68px'}], position: 250, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '75px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "left", '90px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '599px', { fromValue: '90px'}], position: 1000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '313px', { fromValue: '468px'}], position: 1250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '69px', { fromValue: '509px'}], position: 1500, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '449px', { fromValue: '615px'}], position: 1750, duration: 0 },
            { id: "eid157", tween: [ "style", "${_Rectangle}", "left", '527px', { fromValue: '411px'}], position: 2000, duration: 0 },
            { id: "eid211", tween: [ "style", "${_Rectangle}", "left", '591px', { fromValue: '527px'}], position: 2750, duration: 0 },
            { id: "eid220", tween: [ "style", "${_Rectangle}", "left", '615px', { fromValue: '591px'}], position: 3000, duration: 0 },
            { id: "eid188", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid195", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid177", tween: [ "style", "${_Text9}", "top", '170px', { fromValue: '61px'}], position: 2000, duration: 0 },
            { id: "eid178", tween: [ "style", "${_Text9}", "top", '126px', { fromValue: '170px'}], position: 2250, duration: 0 },
            { id: "eid462", tween: [ "style", "${_Text4Copy2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid463", tween: [ "style", "${_Text4Copy2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid530", tween: [ "style", "${_Text13Copy}", "left", '607px', { fromValue: '607px'}], position: 2750, duration: 0 },
            { id: "eid464", tween: [ "style", "${_Text4Copy2}", "top", '394px', { fromValue: '394px'}], position: 750, duration: 0 },
            { id: "eid477", tween: [ "style", "${_Text5Copy}", "top", '464px', { fromValue: '464px'}], position: 1000, duration: 0 },
            { id: "eid523", tween: [ "style", "${_Text11Copy}", "left", '540px', { fromValue: '540px'}], position: 2500, duration: 0 },
            { id: "eid524", tween: [ "style", "${_Text11Copy}", "left", '537px', { fromValue: '540px'}], position: 2750, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Text2}", "height", '58px', { fromValue: '58px'}], position: 250, duration: 0 },
            { id: "eid489", tween: [ "style", "${_Text7Copy}", "top", '83px', { fromValue: '83px'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid183", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid185", tween: [ "style", "${_orange_circle}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid469", tween: [ "style", "${_Text4Copy3}", "height", '137px', { fromValue: '137px'}], position: 750, duration: 0 },
            { id: "eid170", tween: [ "style", "${_Text2}", "left", '85px', { fromValue: '85px'}], position: 250, duration: 0 },
            { id: "eid521", tween: [ "style", "${_Text11Copy}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid522", tween: [ "style", "${_Text11Copy}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid479", tween: [ "style", "${_Text5Copy}", "width", '252px', { fromValue: '252px'}], position: 1000, duration: 0 },
            { id: "eid481", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid482", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid197", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid210", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '41px', { fromValue: '493px'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '362px', { fromValue: '253px'}], position: 500, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '39px'}], position: 750, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '138px'}], position: 1000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '416px', { fromValue: '31px'}], position: 1250, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '404px', { fromValue: '299px'}], position: 1500, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '412px', { fromValue: '33px'}], position: 1750, duration: 0 },
            { id: "eid152", tween: [ "style", "${_Rectangle2}", "height", '32px', { fromValue: '236px'}], position: 2000, duration: 0 },
            { id: "eid162", tween: [ "style", "${_Rectangle2}", "height", '32px', { fromValue: '290px'}], position: 2250, duration: 0 },
            { id: "eid204", tween: [ "style", "${_Rectangle2}", "height", '291px', { fromValue: '32px'}], position: 2750, duration: 0 },
            { id: "eid216", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '291px'}], position: 3000, duration: 0 },
            { id: "eid506", tween: [ "style", "${_Text9Copy}", "top", '193px', { fromValue: '61px'}], position: 2000, duration: 0 },
            { id: "eid507", tween: [ "style", "${_Text9Copy}", "top", '126px', { fromValue: '270px'}], position: 2250, duration: 0 },
            { id: "eid473", tween: [ "style", "${_Text4Copy3}", "width", '268px', { fromValue: '268px'}], position: 750, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Text1}", "height", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_green_circle}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid486", tween: [ "style", "${_Text7Copy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid487", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid440", tween: [ "style", "${_Text1Copy}", "width", '182px', { fromValue: '182px'}], position: 0, duration: 0 },
            { id: "eid488", tween: [ "style", "${_Text7Copy}", "left", '80px', { fromValue: '80px'}], position: 1500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '395px', { fromValue: '395px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '357px', { fromValue: '395px'}], position: 250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '364px', { fromValue: '130px'}], position: 500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Rectangle2}", "width", '222px', { fromValue: '660px'}], position: 750, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '223px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '763px', { fromValue: '161px'}], position: 1250, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '375px', { fromValue: '105px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '381px', { fromValue: '84px'}], position: 1750, duration: 0 },
            { id: "eid151", tween: [ "style", "${_Rectangle2}", "width", '32px', { fromValue: '140px'}], position: 2000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Rectangle2}", "width", '32px', { fromValue: '106px'}], position: 2250, duration: 0 },
            { id: "eid203", tween: [ "style", "${_Rectangle2}", "width", '95px', { fromValue: '32px'}], position: 2750, duration: 0 },
            { id: "eid519", tween: [ "style", "${_Text11}", "top", '168px', { fromValue: '168px'}], position: 2500, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '139px', { fromValue: '107px'}], position: 250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '185px', { fromValue: '98px'}], position: 500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Rectangle2}", "top", '558px', { fromValue: '491px'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '558px', { fromValue: '536px'}], position: 1000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '147px', { fromValue: '440px'}], position: 1250, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '153px', { fromValue: '456px'}], position: 1500, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '148px', { fromValue: '548px'}], position: 1750, duration: 0 },
            { id: "eid150", tween: [ "style", "${_Rectangle2}", "top", '361px', { fromValue: '161px'}], position: 2000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Rectangle2}", "top", '361px', { fromValue: '127px'}], position: 2250, duration: 0 },
            { id: "eid202", tween: [ "style", "${_Rectangle2}", "top", '185px', { fromValue: '361px'}], position: 2750, duration: 0 },
            { id: "eid215", tween: [ "style", "${_Rectangle2}", "top", '47px', { fromValue: '185px'}], position: 3000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_Text4}", "left", '104px', { fromValue: '104px'}], position: 750, duration: 0 },
            { id: "eid446", tween: [ "style", "${_Text2Copy}", "left", '85px', { fromValue: '85px'}], position: 250, duration: 0 },
            { id: "eid442", tween: [ "style", "${_Text2Copy}", "height", '58px', { fromValue: '58px'}], position: 250, duration: 0 },
            { id: "eid527", tween: [ "style", "${_Text11Copy}", "height", '125px', { fromValue: '125px'}], position: 2500, duration: 0 },
            { id: "eid450", tween: [ "style", "${_Text3Copy}", "height", '109px', { fromValue: '109px'}], position: 500, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Text8}", "height", '49px', { fromValue: '49px'}], position: 1750, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid502", tween: [ "style", "${_Text9Copy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid503", tween: [ "style", "${_Text9Copy}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Text5}", "top", '441px', { fromValue: '441px'}], position: 1000, duration: 0 },
            { id: "eid443", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid444", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid445", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid441", tween: [ "style", "${_Text2Copy}", "top", '174px', { fromValue: '174px'}], position: 250, duration: 0 },
            { id: "eid533", tween: [ "style", "${_Text13Copy}", "top", '221px', { fromValue: '221px'}], position: 2750, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid141", tween: [ "style", "${_Text5}", "width", '258px', { fromValue: '258px'}], position: 1000, duration: 0 },
            { id: "eid494", tween: [ "style", "${_Text8Copy}", "left", '460px', { fromValue: '460px'}], position: 1750, duration: 0 },
            { id: "eid495", tween: [ "style", "${_Text8Copy}", "left", '565px', { fromValue: '460px'}], position: 2000, duration: 0 },
            { id: "eid496", tween: [ "style", "${_Text8Copy}", "left", '629px', { fromValue: '565px'}], position: 2250, duration: 0 },
            { id: "eid490", tween: [ "style", "${_Text7Copy}", "width", '364px', { fromValue: '364px'}], position: 1500, duration: 0 },
            { id: "eid534", tween: [ "style", "${_Text13Copy}", "width", '184px', { fromValue: '184px'}], position: 2750, duration: 0 },
            { id: "eid511", tween: [ "style", "${_Text10}", "top", '166px', { fromValue: '166px'}], position: 2250, duration: 0 },
            { id: "eid137", tween: [ "style", "${_Text4}", "top", '305px', { fromValue: '305px'}], position: 750, duration: 0 },
            { id: "eid467", tween: [ "style", "${_Text4Copy2}", "height", '137px', { fromValue: '137px'}], position: 750, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '277px', { fromValue: '263px'}], position: 250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '271px', { fromValue: '723px'}], position: 500, duration: 0 },
            { id: "eid54", tween: [ "style", "${_pointer}", "left", '345px', { fromValue: '123px'}], position: 750, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '627px', { fromValue: '345px'}], position: 1000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '431px', { fromValue: '451px'}], position: 1250, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '167px', { fromValue: '763px'}], position: 1500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '529px', { fromValue: '643px'}], position: 1750, duration: 0 },
            { id: "eid153", tween: [ "style", "${_pointer}", "left", '543px', { fromValue: '624px'}], position: 2000, duration: 0 },
            { id: "eid193", tween: [ "style", "${_pointer}", "left", '626px', { fromValue: '543px'}], position: 2250, duration: 0 },
            { id: "eid196", tween: [ "style", "${_pointer}", "left", '706px', { fromValue: '626px'}], position: 2500, duration: 0 },
            { id: "eid199", tween: [ "style", "${_pointer}", "left", '788px', { fromValue: '706px'}], position: 2750, duration: 0 },
            { id: "eid217", tween: [ "style", "${_pointer}", "left", '649px', { fromValue: '788px'}], position: 3000, duration: 0 },
            { id: "eid468", tween: [ "style", "${_Text4Copy3}", "top", '394px', { fromValue: '394px'}], position: 750, duration: 0 },
            { id: "eid459", tween: [ "style", "${_Text4Copy}", "left", '104px', { fromValue: '104px'}], position: 750, duration: 0 },
            { id: "eid437", tween: [ "style", "${_Text1Copy}", "height", '117px', { fromValue: '117px'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid525", tween: [ "style", "${_Text11Copy}", "top", '195px', { fromValue: '195px'}], position: 2500, duration: 0 },
            { id: "eid453", tween: [ "style", "${_Text3Copy}", "left", '89px', { fromValue: '89px'}], position: 500, duration: 0 },
            { id: "eid454", tween: [ "style", "${_Text3Copy}", "left", '103px', { fromValue: '89px'}], position: 750, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Text7}", "left", '80px', { fromValue: '80px'}], position: 1500, duration: 0 },
            { id: "eid540", tween: [ "style", "${_Text14Copy}", "width", '202px', { fromValue: '202px'}], position: 3000, duration: 0 },
            { id: "eid538", tween: [ "style", "${_Text14Copy}", "top", '148px', { fromValue: '148px'}], position: 3000, duration: 0 },
            { id: "eid512", tween: [ "style", "${_Text10Copy}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid513", tween: [ "style", "${_Text10Copy}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
            { id: "eid500", tween: [ "style", "${_Text8Copy}", "width", '421px', { fromValue: '421px'}], position: 1750, duration: 0 },
            { id: "eid514", tween: [ "style", "${_Text10Copy}", "top", '190px', { fromValue: '190px'}], position: 2250, duration: 0 },
            { id: "eid448", tween: [ "style", "${_Text3Copy}", "top", '223px', { fromValue: '223px'}], position: 500, duration: 0 },
            { id: "eid449", tween: [ "style", "${_Text3Copy}", "top", '292px', { fromValue: '223px'}], position: 750, duration: 0 },
            { id: "eid537", tween: [ "style", "${_Text14}", "top", '126px', { fromValue: '126px'}], position: 3000, duration: 0 },
            { id: "eid187", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid194", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid146", tween: [ "style", "${_Text8}", "left", '460px', { fromValue: '460px'}], position: 1750, duration: 0 },
            { id: "eid154", tween: [ "style", "${_Text8}", "left", '565px', { fromValue: '460px'}], position: 2000, duration: 0 },
            { id: "eid166", tween: [ "style", "${_Text8}", "left", '629px', { fromValue: '565px'}], position: 2250, duration: 0 },
            { id: "eid480", tween: [ "style", "${_Text6Copy}", "height", '39px', { fromValue: '39px'}], position: 1250, duration: 0 },
            { id: "eid526", tween: [ "style", "${_Text11Copy}", "width", '279px', { fromValue: '279px'}], position: 2500, duration: 0 },
            { id: "eid447", tween: [ "style", "${_Text2Copy}", "width", '191px', { fromValue: '191px'}], position: 250, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid483", tween: [ "style", "${_Text6Copy}", "left", '323px', { fromValue: '323px'}], position: 1250, duration: 0 },
            { id: "eid485", tween: [ "style", "${_Text6Copy}", "width", '356px', { fromValue: '356px'}], position: 1250, duration: 0 },
            { id: "eid143", tween: [ "style", "${_Text6}", "top", '68px', { fromValue: '68px'}], position: 1250, duration: 0 },
            { id: "eid223", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid520", tween: [ "style", "${_Text11}", "left", '540px', { fromValue: '540px'}], position: 2500, duration: 0 },
            { id: "eid206", tween: [ "style", "${_Text11}", "left", '537px', { fromValue: '540px'}], position: 2750, duration: 0 },
            { id: "eid539", tween: [ "style", "${_Text14Copy}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3}", "height", '56px', { fromValue: '56px'}], position: 500, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text3}", "left", '89px', { fromValue: '89px'}], position: 500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Text3}", "left", '103px', { fromValue: '89px'}], position: 750, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid213", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid222", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid457", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid458", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '326px', { fromValue: '306px'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '322px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Rectangle2}", "left", '326px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '599px', { fromValue: '84px'}], position: 1000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '68px', { fromValue: '267px'}], position: 1250, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '69px', { fromValue: '814px'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '449px', { fromValue: '615px'}], position: 1750, duration: 0 },
            { id: "eid149", tween: [ "style", "${_Rectangle2}", "left", '541px', { fromValue: '673px'}], position: 2000, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Rectangle2}", "left", '623px', { fromValue: '818px'}], position: 2250, duration: 0 },
            { id: "eid198", tween: [ "style", "${_Rectangle2}", "left", '703px', { fromValue: '623px'}], position: 2500, duration: 0 },
            { id: "eid201", tween: [ "style", "${_Rectangle2}", "left", '837px', { fromValue: '703px'}], position: 2750, duration: 0 },
            { id: "eid214", tween: [ "style", "${_Rectangle2}", "left", '615px', { fromValue: '837px'}], position: 3000, duration: 0 },
            { id: "eid466", tween: [ "style", "${_Text4Copy2}", "width", '286px', { fromValue: '286px'}], position: 750, duration: 0 },
            { id: "eid465", tween: [ "style", "${_Text4Copy2}", "left", '104px', { fromValue: '104px'}], position: 750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 250, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '96deg'}], position: 500, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '180deg'}], position: 750, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '540deg'}], position: 1000, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '540deg'}], position: 1250, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 1500, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 1750, duration: 0 },
            { id: "eid205", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '180deg'}], position: 2750, duration: 0 },
            { id: "eid219", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 3000, duration: 0 },
            { id: "eid145", tween: [ "style", "${_Text7}", "top", '62px', { fromValue: '62px'}], position: 1500, duration: 0 },
            { id: "eid172", tween: [ "style", "${_HTP_m4b}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "top", '198px', { fromValue: '198px'}], position: 500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Text3}", "top", '292px', { fromValue: '198px'}], position: 750, duration: 0 },
            { id: "eid451", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid452", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid171", tween: [ "style", "${_Text2}", "width", '191px', { fromValue: '191px'}], position: 250, duration: 0 },
            { id: "eid470", tween: [ "style", "${_Text4Copy3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid471", tween: [ "style", "${_Text4Copy3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid508", tween: [ "style", "${_Text9Copy}", "height", '148px', { fromValue: '148px'}], position: 2000, duration: 0 },
            { id: "eid184", tween: [ "style", "${_red_circle}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid460", tween: [ "style", "${_Text4Copy}", "top", '329px', { fromValue: '329px'}], position: 750, duration: 0 },
            { id: "eid475", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid476", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid529", tween: [ "style", "${_Text13}", "left", '607px', { fromValue: '607px'}], position: 2750, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '60px', { fromValue: '33px'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '112px', { fromValue: '352px'}], position: 500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_pointer}", "top", '423px', { fromValue: '279px'}], position: 750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '423px', { fromValue: '423px'}], position: 1000, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '28px', { fromValue: '17px'}], position: 1250, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '18px', { fromValue: '28px'}], position: 1500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '32px', { fromValue: '23px'}], position: 1750, duration: 0 },
            { id: "eid156", tween: [ "style", "${_pointer}", "top", '229px', { fromValue: '32px'}], position: 2000, duration: 0 },
            { id: "eid200", tween: [ "style", "${_pointer}", "top", '120px', { fromValue: '229px'}], position: 2750, duration: 0 },
            { id: "eid218", tween: [ "style", "${_pointer}", "top", '13px', { fromValue: '120px'}], position: 3000, duration: 0 },
            { id: "eid72", tween: [ "style", "${_Text2}", "top", '150px', { fromValue: '150px'}], position: 250, duration: 0 },
            { id: "eid504", tween: [ "style", "${_Text9Copy}", "left", '537px', { fromValue: '460px'}], position: 2000, duration: 0 },
            { id: "eid505", tween: [ "style", "${_Text9Copy}", "left", '629px', { fromValue: '537px'}], position: 2250, duration: 0 },
            { id: "eid461", tween: [ "style", "${_Text4Copy}", "width", '286px', { fromValue: '286px'}], position: 750, duration: 0 },
            { id: "eid77", tween: [ "style", "${_Text3}", "width", '185px', { fromValue: '185px'}], position: 500, duration: 0 },
            { id: "eid138", tween: [ "style", "${_Text5}", "left", '609px', { fromValue: '609px'}], position: 1000, duration: 0 },
            { id: "eid484", tween: [ "style", "${_Text6Copy}", "top", '91px', { fromValue: '91px'}], position: 1250, duration: 0 },
            { id: "eid180", tween: [ "style", "${_Text9}", "left", '537px', { fromValue: '460px'}], position: 2000, duration: 0 },
            { id: "eid181", tween: [ "style", "${_Text9}", "left", '629px', { fromValue: '565px'}], position: 2250, duration: 0 },
            { id: "eid472", tween: [ "style", "${_Text4Copy3}", "left", '122px', { fromValue: '122px'}], position: 750, duration: 0 },
            { id: "eid147", tween: [ "style", "${_Text8}", "top", '59px', { fromValue: '59px'}], position: 1750, duration: 0 },
            { id: "eid155", tween: [ "style", "${_Text8}", "top", '138px', { fromValue: '59px'}], position: 2000, duration: 0 },
            { id: "eid167", tween: [ "style", "${_Text8}", "top", '126px', { fromValue: '138px'}], position: 2250, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '138px', { fromValue: '107px'}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '185px', { fromValue: '454px'}], position: 500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '293px', { fromValue: '302px'}], position: 750, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '434px', { fromValue: '293px'}], position: 1000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '58px', { fromValue: '101px'}], position: 1250, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '51px', { fromValue: '132px'}], position: 1500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '50px', { fromValue: '127px'}], position: 1750, duration: 0 },
            { id: "eid158", tween: [ "style", "${_Rectangle}", "top", '157px', { fromValue: '161px'}], position: 2000, duration: 0 },
            { id: "eid212", tween: [ "style", "${_Rectangle}", "top", '186px', { fromValue: '157px'}], position: 2750, duration: 0 },
            { id: "eid221", tween: [ "style", "${_Rectangle}", "top", '117px', { fromValue: '186px'}], position: 3000, duration: 0 },
            { id: "eid515", tween: [ "style", "${_Text10Copy}", "height", '147px', { fromValue: '147px'}], position: 2250, duration: 0 },
            { id: "eid438", tween: [ "style", "${_Text1Copy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid497", tween: [ "style", "${_Text8Copy}", "top", '82px', { fromValue: '82px'}], position: 1750, duration: 0 },
            { id: "eid498", tween: [ "style", "${_Text8Copy}", "top", '138px', { fromValue: '82px'}], position: 2000, duration: 0 },
            { id: "eid499", tween: [ "style", "${_Text8Copy}", "top", '126px', { fromValue: '138px'}], position: 2250, duration: 0 },
            { id: "eid41", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid478", tween: [ "style", "${_Text5Copy}", "left", '609px', { fromValue: '609px'}], position: 1000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '213px', { fromValue: '213px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '221px', { fromValue: '213px'}], position: 250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '214px', { fromValue: '221px'}], position: 500, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "width", '311px', { fromValue: '265px'}], position: 750, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '280px', { fromValue: '311px'}], position: 1000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '349px', { fromValue: '280px'}], position: 1250, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '383px', { fromValue: '349px'}], position: 1500, duration: 0 },
            { id: "eid501", tween: [ "style", "${_Rectangle}", "width", '432px', { fromValue: '383px'}], position: 1750, duration: 0 },
            { id: "eid510", tween: [ "style", "${_Rectangle}", "width", '233px', { fromValue: '432px'}], position: 2000, duration: 0 },
            { id: "eid516", tween: [ "style", "${_Rectangle}", "width", '238px', { fromValue: '233px'}], position: 2250, duration: 0 },
            { id: "eid528", tween: [ "style", "${_Rectangle}", "width", '302px', { fromValue: '238px'}], position: 2500, duration: 0 },
            { id: "eid536", tween: [ "style", "${_Rectangle}", "width", '219px', { fromValue: '302px'}], position: 2750, duration: 0 },
            { id: "eid543", tween: [ "style", "${_Rectangle}", "width", '223px', { fromValue: '219px'}], position: 3000, duration: 0 },
            { id: "eid491", tween: [ "style", "${_Text8Copy}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid492", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '99px', { fromValue: '149px'}], position: 250, duration: 0 },
            { id: "eid456", tween: [ "style", "${_Rectangle}", "height", '133px', { fromValue: '99px'}], position: 500, duration: 0 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "height", '239px', { fromValue: '133px'}], position: 750, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '94px', { fromValue: '93px'}], position: 1000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '78px', { fromValue: '94px'}], position: 1250, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '80px', { fromValue: '64px'}], position: 1500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '95px', { fromValue: '80px'}], position: 1750, duration: 0 },
            { id: "eid509", tween: [ "style", "${_Rectangle}", "height", '182px', { fromValue: '95px'}], position: 2000, duration: 0 },
            { id: "eid541", tween: [ "style", "${_Rectangle}", "height", '133px', { fromValue: '182px'}], position: 3000, duration: 0 },
            { id: "eid493", tween: [ "style", "${_Text8Copy}", "height", '49px', { fromValue: '49px'}], position: 1750, duration: 0 },
            { id: "eid173", tween: [ "style", "${_Text6}", "height", '54px', { fromValue: '54px'}], position: 1250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid45", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid531", tween: [ "style", "${_Text13Copy}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid532", tween: [ "style", "${_Text13Copy}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text1}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid439", tween: [ "style", "${_Text1Copy}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "style", "${_Text6}", "left", '323px', { fromValue: '323px'}], position: 1250, duration: 0 },
            { id: "eid535", tween: [ "style", "${_Text13Copy}", "height", '127px', { fromValue: '127px'}], position: 2750, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "HowToPlay");
