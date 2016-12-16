var $j= jQuery.noConflict(); 
var wrapperCurrentPage = "Main";

var loadedComps 	= {};

var gameScore 		= 0;
var lessonLocation  =0;
var avatar_gender ="male";
var count=0;
var containerClass;
var avatarName ="";
var pathURL = window.location.href.replace("index.html","");
//hideAllScreens();
function restaart(){

}
$j(document).ready(function() { 
AdobeEdge.bootstrapCallback(function(compId) {
	count++;
	loadedComps[compId] = AdobeEdge.getComposition(compId);
//	console.log("compId "+compId);
	containerClass	= window;
	
	if(count==14)
	{
		loadInstructionXML();
		//loadedComps[compId].getStage().play(1);
	}

	AdobeEdge.Symbol.bindTimelineAction(compId, "stage", "Default Timeline", "complete", function(sym, e) {		

	});
	
});
});


var DocXML;
var dataShapeXML;
var setShapeXML;
var finalQuestionsXML;
function loadInstructionXML()
{

	///load questions xml
	var xmlLoader2 	= new loadXML('assets/xml/quiz.xml', convXMLLoadedHandler);
	
	xmlLoader2.loadXMLFile();
		var FinalQuestion = new loadXML('sheetFinalD.xml',questionsXMLLoadedHandler);
		var xmlShape 	= new loadXML('dataShape.xml', shapeXMLLoadedHandler);
		var xmlSetShape 	= new loadXML('setShape.xml', shapeSetXMLLoadedHandler);
		xmlShape.loadXMLFile();
		xmlSetShape.loadXMLFile();
		FinalQuestion.loadXMLFile();
}

function questionsXMLLoadedHandler(xmlDoc)
{
finalQuestionsXML= $(xmlDoc);
//mission1();
$j("#gloss_btn").qtip({    content: {text: 'Glossary'}	});
//$j("#audio_btn").qtip({    content: {text: 'Obtuse Angle Marker'}	});
$j("#help_btn").qtip({    content: {text: 'How to Play'}	});
$j("#menu_btn").qtip({    content: {text: 'Mission menu'}	});

}
function shapeXMLLoadedHandler(xmlDoc)
{
dataShapeXML= $(xmlDoc);
}
function shapeSetXMLLoadedHandler(xmlDoc)
{
setShapeXML= $(xmlDoc);

$("#splash").show();
backgroundSND.play();
enableSoundsEff();
//mission1();
	$j(document).on('DOMNodeInserted', function(e) {
    $j(e.target).find('.example-image-link').each(function() { console.log("hi");
       $j(this).featherlight();;
    });
});
loadedComps['splash'].getStage().play(1);
//StartLevel2();
}
function introShow(){
$("#splash").fadeOut( "slow", function() {
    // Animation complete
	loadedComps['intro'].getStage().play(1);
  });
$("#intro").fadeIn();
}
function OpenMenu(){backgroundSND.pause();backgroundSND.stop();
$("#intro").fadeOut( "slow", function() {
    // Animation complete
	loadedComps['book'].getStage().play(1);
  });
$("#book").fadeIn();

}
var Score=0;
var MaxScore2 =[400,450,560];
var coinsStack =[5,5,6];
var coinsValue =[40,50,60];
var coinMain =["url(images/coin40.png)","url(images/coin50.png)","url(images/coin60.png)"];
var coinMainB ="url(images/coin200.png)";
var sratsEarned =[2,2,2];//background-image: url("images/coin40.png");
var isBonus =1;

var CurrentClue = false;
var CurrentLevel = 1;
	var countYes = 0;
	var countN0 = 0;
	var countNA = 0;
	var countIDK = 0;
	var countTBD = 0;
	var queryString = "";
	var valueObj =""; 
	var stageCoins = 6;
	var missionTxt = "MISSION 2";

	var CurrentStage = 1;
var CurrentSet = [];
var currentCulpret ="fig001";
	var isMatched = false;
	var blockedCode ="#90ce00";
	var acceptedCode ="#ff9900";
	
function mission(){
//mission2();
//EnableMission2();

}
function Mission2(){
mission2();
EnableMission2();

}


var currentLevelDisplay2=[1,2,3,3];
	
function mission2(){
	$j("#gloss_btn,#help_btn,#menu_btn").show();
	CurrentClue = false;
	countYes = 0;
	countN0 = 0;
	countNA = 0;
	countIDK = 0;
	countTBD = 0;
	queryString = "";
	valueObj =""; 
	CurrentSet = [];
	currentCulpret ="fig001";
	isMatched = false;
	stageCoins = coinsStack[CurrentStage-1];
	$j(".mission2 .coin:gt("+(stageCoins-1)+")").hide();
	$j(".mission2 .coin:eq(7)").show();
	$j(".mission2 .coin:lt(7)").css("background-image",coinMain[CurrentStage-1]);
	
	$j(".feed:eq(1) .coinToken:eq(1)").css("background-image",coinMain[CurrentStage-1]);
	$j(".feed:eq(1) .coinToken:eq(0)").css("background-image",coinMainB);
	$("#book").hide();
	$("#feedback").hide();
	$("#trans").hide();
	$j(".mission").html("MISSION 2");
	$j(".level").html("LEVEL "+currentLevelDisplay2[CurrentStage-1]);
	currentScore =MaxScore2[CurrentStage-1];
	$j(CurrentMission2+".scoretxt").html(currentScore);
	StartLevel2();
	enableTools();
	$j(CurrentMission2+'.ask').hide();
	$("#mission2").fadeIn("slow");
	if(isBonus==0){
		currentScore = currentScore- $j(CurrentMission2+" .coin:eq(7)").prop("coinVal");
		$j(".mission2 .coin:eq(7)").hide();
		$j(CurrentMission2+".scoretxt").html(currentScore);
	}
}


//////////////
function resetLevel(){
$j(CurrentMission+".toolb").hide();
//isBonus=0;	
isReleased =false;
$j(CurrentMission2+'.grid').unbind();
//$j(CurrentMission2+".grid .rect").remove();
$j(CurrentMission2+'.grid .tag_btn').hide();
$j(CurrentMission2+'.ask').show();
$j(CurrentMission2+'.bucket').show();
$j(CurrentMission2+'.clue').hide();
$j(CurrentMission2+'.grid .tag_btn').hide();
$j(CurrentMission2+".quest").empty();
$j(".quest2").empty();
$j(CurrentMission2+".bucket").empty();
$j(CurrentMission2+".tool.active").trigger("click");
$j(CurrentMission2+'.grid').removeClass("released");
$j(CurrentMission2+".grid.selected").each(function(){ 
			 jQuery(this).removeClass('selected');
			 $j(this).find('.rect').css('opacity',1);
			 var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
				//return true;
			 }

);
$j(CurrentMission2+".grid").removeClass("suspect");
$j(CurrentMission2+".grid").show();
$j(".mission2 .coin").show();
	/*code added by abhishek shrimali to bind unbind release and askbutton and score reset*/
	$j(CurrentMission2+'.ask').unbind().bind('click',askClick);
	$j(CurrentMission2+'.ask').css('opacity','1');
	$j(CurrentMission2+'.release').unbind();
	$j(CurrentMission2+'.release').css('opacity','0.3');
	$j(CurrentMission2+'.done').css('opacity','1');
	$j(CurrentMission2+'.done').unbind().bind( "click", function() {
			 getFeedback();
	});
	$j(CurrentMission2+'.release').unbind().bind('click',releaseClick);
	/*code added by abhishek shrimali*/

}
function convXMLLoadedHandler(xmlDoc)
{
	jQuery('.mainMenu').click(function() {
				location.reload();
	}); 
	WIPAlerts();
	DocXML= $(xmlDoc);
	jQuery('.img').parent().css('cursor','pointer');
	jQuery('.txt,.HUD').css({pointerEvents: "none"});
	//enableTools();
	jQuery('.img').parent().mouseout(function() {
		if(jQuery(this).hasClass('active')) return true; 
		var imgPath = jQuery(this).find('.img').css("background-image").replace(pathURL,"");
		jQuery(this).find('.img').css('background-image',imgPath.replace("_over","_up"));
		
		
	}) .mouseover(function() {
		if(jQuery(this).hasClass('active')) return true; 
		var imgPath = jQuery(this).find('.img').css("background-image").replace(pathURL,"");
		jQuery(this).find('.img').css('background-image',imgPath.replace("_up","_over"));
	});/* .click(function() {
		if(jQuery(this).hasClass('enable')) {return true}; 
		//togglePage();
		jQuery(this).addClass('enable');
		jQuery(this).css('background-image',jQuery(this).css("background-image").replace("_over","_selected").replace("_up","_selected"));
	
		
	}); */
	//$("#intro").show();
	//console.log("kya");
	//loadedComps["main"].getStage().play(1);
	//$("#intro").show();
	
}
var CurrentMission2 = "#mission2 ";
//CurrentLevel
	//CurrentStage
	//stageCoins = 6;
	//missionTxt = "MISSION 2";
function EnableMission2(){
	jQuery(".cont_btn").click(function() {    $j("#gloss_btn,#help_btn,#menu_btn").hide();
		if(isMatched){
		
		CurrentStage++;
		isBonus=1;
		$j(CurrentMission2+'.done').css('opacity','1');
		//$j(CurrentMission2+'.done').unbind();
		/* resetLevel();
		mission2(); */
		if(CurrentStage == 4 ){
		$j('.trans').hide();
		$j(".feedback").hide("slide", function() {
			jQuery(".end1").hide();
			jQuery(".end1:eq(1)").show();
			$j('.end2').show("slide");
			transisitions();
		});
		return;
		
		}
		$j(".feedback").hide("slide", function() {
			if(CurrentStage==3){
			$j('.roboAnim').css('background-image','url("images/robo_G3_neutral.png")');
			$j('.trans .lvlScreen:eq(1)').hide();$j('.trans .lvlScreen:eq(0)').show();transisitions();}
			if(CurrentStage==2){$j('.trans .lvlScreen:eq(0)').hide();$j('.trans .lvlScreen:eq(1)').show();transisitions();			
			}
			$j('.trans').show("slide");
					
		});
		}else{
		isBonus=0;
		resetLevel();
		mission2();
		$j(".feedback").hide("slide");
		}
		
	});
	$j(CurrentMission2+".ToolMain").hide();
	$j(CurrentMission2+".ToolMain2").hide();
	
	jQuery(CurrentMission2+".toolA").click(function() { 
	$j(CurrentMission2+".toolb").hide();
	$j('.rect').each(function (){
				var imagePath = $j(this).css("background-image").replace(pathURL,"");
				$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
	});
	jQuery(CurrentMission2+".tool:eq(3)").click(function() { 
	if($j(this).hasClass('active')){$j(this).removeClass('active');
	$j(CurrentMission2+".ToolMain").freetrans('destroy');
	
	$j(CurrentMission2+".ToolMain").hide();
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	return;}
	$j(this).addClass('active');
	$j(CurrentMission2+".ToolMain").show();
	$j(CurrentMission2+".ToolMain").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	
	});
	jQuery(CurrentMission2+".tool:eq(1)").click(function() { 
	jQuery(CurrentMission2+".toolA").css('background-image','url(images/tool2_selected.png)');
	$j(CurrentMission2+".toolb").show();
	
	});
	jQuery(CurrentMission2+".tool:eq(0)").click(function() { 
	//replace here 
	
	if($j(this).hasClass('active')){
	$j(this).removeClass('active');	
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	$j(CurrentMission2+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
	});
	return;
	}
		jQuery(CurrentMission2+".toolA").trigger("click");
	jQuery(CurrentMission2+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active');
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	
	$j(CurrentMission2+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool1"));
	}
	
	
	);
	

	});
	jQuery(CurrentMission2+".tool:eq(2)").click(function() { 
	
	//replace here 
	
	if($j(this).hasClass('active')){
	$j(CurrentMission2+".ToolMain2").freetrans('destroy');
	
	$j(CurrentMission2+".ToolMain2").hide();
	$j(this).removeClass('active');	
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	$j(CurrentMission2+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
	});
	return;
	}
	jQuery(CurrentMission2+".toolA").trigger("click");

	jQuery(CurrentMission2+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	$j(CurrentMission2+".ToolMain2").show();
	$j(CurrentMission2+".ToolMain2").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%','maintainAspectRatio':false});
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active');
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	$j(CurrentMission2+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	//$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool3"));
	}
	
	
	);
	
	
	});
	
	jQuery(CurrentMission2+".tool2:eq(3)").click(function() { 	jQuery(CurrentMission2+".toolA").css('background-image','url(images/tool2D_selected.png)');
	jQuery(CurrentMission2+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});	
	$j('.rect').each(function (){
		var imagePath = $j(this).css("background-image").replace(pathURL,"");	
		$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2D"));
	});	
	});
	jQuery(CurrentMission2+".tool2:eq(0)").click(function() { 	jQuery(CurrentMission2+".toolA").css('background-image','url(images/tool1A_selected.png)');
	jQuery(CurrentMission2+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});	
	$j(CurrentMission2+'.rect').each(function (){
		var imagePath = $j(this).css("background-image").replace(pathURL,"");	
		$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2A"));
	});	
	});
	jQuery(CurrentMission2+".tool2:eq(1)").click(function() { 		jQuery(CurrentMission2+".toolA").css('background-image','url(images/tool1B_selected.png)');
		jQuery(CurrentMission2+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(CurrentMission2+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2B"));
	});	
	});
	jQuery(CurrentMission2+".tool2:eq(2)").click(function() { 		jQuery(CurrentMission2+".toolA").css('background-image','url(images/tool1C_selected.png)');
		jQuery(CurrentMission2+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(CurrentMission2+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2C"));
	});	
	}); 
	/* $j(CurrentMission2+'.grid').ruler({
        vRuleSize: 0,
        hRuleSize: 0,
        showCrosshair : true,
        showMousePos: true
    });  */
	
	//$j(CurrentMission2 +'.ask').on('click', );
	$j(CurrentMission2 +'.ask').unbind().bind('click',askClick);
	$j(CurrentMission2+".tool2:eq(0)").qtip({    content: {text: 'Obtuse Angle Marker'}	});
	$j(CurrentMission2+".tool2:eq(1)").qtip({    content: {text: 'Right Angles'}	});
	$j(CurrentMission2+".tool2:eq(2)").qtip({    content: {text: 'Acute Angle Marker'}	});
	$j(CurrentMission2+".tool2:eq(3)").qtip({    content: {text: 'Reflex Angle Marker'}	});
	
	/* 	$j(CurrentMission2+'.ask').on('click', function() {
		
	$j(CurrentMission2+'.clue').hide();
	if(!isReleased){
	alertify.set({ labels: {ok: "Yes", cancel : "Cancel"}  });
	alertify.confirm("Are you sure you want another clue! Without releasing a suspect.", function(e){ 
	
	if (e) {
		$j(CurrentMission2+'.ask').show();
				$j(CurrentMission2+'.bucket').show();
				alertify.error('Yes')
	}else{
		$j(CurrentMission2+'.clue').show(); alertify.success('Good Choice!')
				}
	
	});
	}
	}); */
}

function askClick() {
	var statment =$j(CurrentMission2+'#bucket1>option:selected').text() +' '+$j(CurrentMission2+'#bucket2>option:selected').val() +' ' +$j(CurrentMission2+'#bucket3>option:selected').val()+' ' +$j(CurrentMission2+'#bucket4>option:selected').text() +'?'
	
	$j(Hyperlinks).each(function (index){
		statment =statment.replace(Hyperlinks[index][0],Hyperlinks[index][1]);
	});
	var responseColor='';
	var QuestionText = 'Does the culprit have ' +statment.toLowerCase();
	var ResponseText= getResponse($j(CurrentMission2+'#bucket1>option:selected').val(),$j(CurrentMission2+'#bucket2>option:selected').val(), $j(CurrentMission2+'#bucket3>option:selected').val(),$j(CurrentMission2+'#bucket4>option:selected').val());
	if(ResponseText=="I don't understand"){
		var colorCorrect= "#ff9900";
		//$j(CurrentMission2+'.questionText:eq(0)').css("color",colorCorrect);
		responseColor="color:"+colorCorrect+";";
	}
	var QuestionDiv ='<div class="questionField" style="position: relative; margin: 0px;  width: 690px; margin: 5px; height: 20px; right: auto; bottom: auto; "><div class="questionText" style="position: absolute;    text-align: left; margin: 0px; left: 0px; top: 0px; width: 525px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(81, 249, 255); font-weight: 700; text-decoration: none;'+responseColor+'">'+QuestionText+'</div><div class="questionResponse" style="position: absolute; margin: 0px; left: 518px; top: 0px; width: 160px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+ResponseText+'</div><div class="questionLine" style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0);  background-color: rgb(50, 133, 180);"></div></div>';
	$j(CurrentMission2+'.sample').hide();
	$j(CurrentMission2+'.quest').prepend(QuestionDiv);
	if(ResponseText == "Yes" || ResponseText == "No" ){
	var feedBackDiv ='<div class="feedbackStatment" resp="'+ResponseText+'" statment="'+queryString+'" style="position: relative; margin: 5px;   width: 336px; height: 23px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateZ(0px);"><div class="statmentText" style="position: absolute; margin: 0px; left: 18px; top: 0px; width: 213px; height: 20px; right: auto; bottom: auto; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(255, 255, 255); font-weight: 700; text-decoration: none;">'+statment+'</div><div style="position: absolute; margin: 0px; left: 213px; top: 0px; width: 95px; height: 20px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+ResponseText+'</div><div style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(50, 133, 180);"></div><div class="spot" style="position: absolute; margin: 0px; left: 0px; top: 1px; width: 13px; height: 13px; right: auto; bottom: auto; border-radius: 50%; border: 0px none rgb(0, 0, 0);  background-color: #1dc105;"></div></div>';
	$j('.quest2').prepend(feedBackDiv);
	
	var allselected=0;
	var noneselected=0;
	$j(CurrentMission2+'.grid:visible').not('.released').each(function (){
		if( valueObj == 'Y'){
			if(($j(this).prop("ANS") == "Y")){
					allselected++;
			}		
		}else if( valueObj == 'N'){
			if(($j(this).prop("ANS") == "N")){
					noneselected++;
			}		
		}
		
		if(allselected==$j(CurrentMission2+'.grid:visible').not('.released').length){
			alertify.alert('It seems all the suspects have this property. Reframe your question.',function(){
				/*code added by abhishek shrimali to bind unbind release and askbutton*/
				$j(CurrentMission2+'.ask').unbind().bind('click',askClick);
				$j(CurrentMission2+'.ask').css('opacity','1');
				$j(CurrentMission2+'.release').unbind();
				$j(CurrentMission2+'.release').css('opacity','0.3');
				$j(CurrentMission2+'.done').css('opacity','1');
				/*code added by abhishek shrimali*/
			});
		}
		if(noneselected==$j(CurrentMission2+'.grid:visible').not('.released').length){
			alertify.alert('It seems no suspect carries this property. Reframe your question.',function(){
				/*code added by abhishek shrimali to bind unbind release and askbutton*/
				$j(CurrentMission2+'.ask').unbind().bind('click',askClick);
				$j(CurrentMission2+'.ask').css('opacity','1');
				$j(CurrentMission2+'.release').unbind();
				$j(CurrentMission2+'.release').css('opacity','0.3');
				$j(CurrentMission2+'.done').css('opacity','1');
				/*code added by abhishek shrimali*/
			});
		}
	});
	
	/*code added by abhishek shrimali to bind unbind release and askbutton*/
		$j(CurrentMission2+'.release').unbind().bind('click',releaseClick);
		$j(CurrentMission2+'.release').css('opacity','1');
		$j(CurrentMission2+'.ask').unbind();
		$j(CurrentMission2+'.ask').css('opacity','0.3');
		/*code added by abhishek shrimali*/
	}
		
}
function showRoboAnim(){
if(CurrentStage ==3){
	$j('.roboAnim').css('background-image','url("images/robo_G3_neutral.png")');
	}else{
	$j('.roboAnim').css('background-image','url("images/robo_G3_neutral.png")');
	}

}
var isReleased = false;
function enableTools(){
	//jQuery(CurrentMission2+".tool:eq(0)");
	//rightAndge tool
	

	/*$j(CurrentMission2+'.bucket:eq(0)').append('<select id="bucket1"><option value="">Select Qualifier</option><option value="atleast">At Least</option><option value="lessthan">Less Than</option><option value="morethan">More Than</option><option value="exactly">Exactly</option><option value="all">All</option><option value="no">No</option> </select>');*/
	$j(CurrentMission2+'.bucket:eq(0)').append('<select id="bucket1"><option value=""></option><option value="atleast">At Least</option><option value="lessthan">Less Than</option><option value="morethan">More Than</option><option value="exactly">Exactly</option><option value="all">All</option><option value="no">No</option> </select>');
	
	
	/*$j(CurrentMission2+'.bucket:eq(1)').append('<select id="bucket2"><option value="">Quantity</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>');*/
	
	$j(CurrentMission2+'.bucket:eq(1)').append('<select id="bucket2"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>');
	
	/*$j(CurrentMission2+'.bucket:eq(2)').append('<select id="bucket3"><option value="">Select Property</option><option value="equal">equal</option><option value="parallel">parallel</option><option value="right">right</option><option value="reflex">reflex</option><option value="obtuse">obtuse</option><option value="acute">acute</option></select>');*/
	$j(CurrentMission2+'.bucket:eq(2)').append('<select id="bucket3"><option value=""></option><option value="equal">equal</option><option value="parallel">parallel</option><option value="right">right</option><option value="reflex">reflex</option><option value="obtuse">obtuse</option><option value="acute">acute</option></select>');
	
	//<option value="" style="display:none" disabled>adjacent sides equal</option><option style="display:none" value="" disabled>opposite sides equal</option>
	
	/*$j(CurrentMission2+'.bucket:eq(3)').append('<select id="bucket4"><option value="">Select Attribute</option><option value="sides">sides</option><option value="angles">angles</option><option value="pairsofsides">pairs of sides</option></select>');*/
	
	$j(CurrentMission2+'.bucket:eq(3)').append('<select id="bucket4"><option value=""></option><option value="sides">sides</option><option value="angles">angles</option><option value="pairsofsides">pairs of sides</option></select>');

	$j('select').selectric().on('change', function() {
			//console.log(""+$j(this)[0].selectedIndex );
			if($j(CurrentMission2+'#bucket1')[0].selectedIndex ==5 || $j(CurrentMission2+'#bucket1')[0].selectedIndex ==6) {$j(CurrentMission2+'.bucket:eq(1)').hide();$j(CurrentMission2+'#bucket2').prop('selectedIndex', 0).selectric('refresh');}else $j(CurrentMission2+'.bucket:eq(1)').show();
				 if($j(CurrentMission2+'#bucket1')[0].selectedIndex && $j(CurrentMission2+'#bucket4')[0].selectedIndex) {//$j(CurrentMission2+'#bucket2')[0].selectedIndex //&& $j(CurrentMission2+'#bucket3')[0].selectedIndex && 
					$j(CurrentMission2+'.ask').show();
				}else{
					$j(CurrentMission2+'.ask').hide();
			}
			if($j(CurrentMission2+'#bucket3')[0].selectedIndex ==2){
						if($j(CurrentMission2+"#bucket4 ").prop('selectedIndex')==1)
						{$j(CurrentMission2+"#bucket4 ").prop('selectedIndex', 0);
						$j(CurrentMission2+"#bucket4 ").selectric('refresh');}
				$j(CurrentMission2+"#bucket4 option:eq(1)").prop("disabled",'disabled');
				$j(CurrentMission2+'#bucket4').selectric('refresh');
			}else{
				$j(CurrentMission2+"#bucket4 option:eq(1)").removeAttr("disabled");
				$j(CurrentMission2+'#bucket4').selectric('refresh');
			}
	});
	
	CalScore();
	}

	function CalScore(){
		$j(".mission2 .coin").prop("coinVal", coinsValue[CurrentStage-1]);
		$j(".mission2 .coin:eq(7)").prop("coinVal", 200);
	}
function getResponse(b1,b2,b3,b4){
if(b2=="") b2 ="1";
if(b3=="") b3 ="empty";
var fig=currentCulpret;
queryString = b1+b2+b3+b4;
var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent();
	valueObj = XMLNode.find(fig).text();
	if(valueObj=="Y"||valueObj=="N"){CurrentClue =true;
/* 	$j(CurrentMission2+'.ask').hide();
	$j(CurrentMission2+'.bucket').hide();
	$j(CurrentMission2+'.clue').show(); */
	$j('#bucket2,#bucket3,#bucket4,#bucket1').prop('selectedIndex', 0).selectric('refresh');
	}
$j(CurrentMission2+'.grid.suspect').each(function(index){
//console.log($j(this).prop('fig'));
$j(this).prop('ANS',XMLNode.find($j(this).prop('fig')).text());
//console.log("dsfsdf "+$j(this).prop('ANS'));
});
if (valueObj =="Y"){countYes++; return "Yes";}
if (valueObj =="N"){countN0++; return "No";}
if (valueObj =="Invalid" || valueObj == undefined){countNA++; 
	//alertify.error('Question framed incorrectly will impact score... Invalid Count('+countNA+')' );
	calculateScore2();
	return "I don't understand";
}
if (valueObj =="DK"){ countTBD++; return "I don't understand";}
if (valueObj =="DA"){ countIDK++; return "I don't understand";}
}
	function WIPAlerts(){
			$j(CurrentMission2+'.reset').click(function() { 	
			 //alertify.alert('Reset is WIP');
				isBonus=0;
				resetLevel();
				mission2();
			 });
			/*code added by abhishek shrimali to bind unbind release and askbutton*/
			$j(CurrentMission2+'.ask').unbind().bind('click',askClick);
			$j(CurrentMission2+'.ask').css('opacity','1');
			$j(CurrentMission2+'.release').unbind();
			$j(CurrentMission2+'.release').css('opacity','0.3');
			$j(CurrentMission2+'.done').css('opacity','1');
			$j(CurrentMission2+'.done').unbind().bind( "click", function() { 
					 getFeedback();
			});
			$j(CurrentMission2+'.release').unbind().bind('click',releaseClick);
			/*code added by abhishek shrimali*/
	}

	function releaseClick() { 	
			 /* if(!()){alertify.error('You must select an innocent suspect to release.');
			 return;
			 } */
			if( $j(CurrentMission2+'.grid.selected').length >= CurrentSet.length){
				alertify.alert('All suspects cannot be released one of them is a culprit.');
				return;
			 }
			if( $j(CurrentMission2+'.grid.selected').length ==0){
				alertify.alert('Please select an innocent suspect(s) to release.');
				return;
			 }
			{ // $j(CurrentMission2+'.grid.selected').hide();
				isReleased =true;
				$j(CurrentMission2+'.grid.selected .tag_btn').show();
				$j(CurrentMission2+'.grid.selected').unbind();
				//evaluate Things
				var correctSeletion = false;
					$j(CurrentMission2+'.grid:visible').not('.released').each(function (){
					if( valueObj == 'Y'){
					if(($j(this).prop("ANS") == "Y"  && $j(this).hasClass('selected'))||
						$j(this).prop("ANS") == "N" && !$j(this).hasClass('selected'))
							correctSeletion =(correctSeletion || true);	
					}else if( valueObj == 'N'){
						if(($j(this).prop("ANS") == "N"  && $j(this).hasClass('selected'))||
						$j(this).prop("ANS") == "Y" && !$j(this).hasClass('selected')){
							correctSeletion =(correctSeletion || true);	
						}
					}
					//if (($j(this).prop("ANS") == "N" && valueObj == 'N') || ($j(this).prop("ANS") == "Y" && valueObj != 'Y') || valueObj == 'Invalid' || valueObj == 'TBD'){
				});
				if(correctSeletion){
					calculateScore2();
					//alertify.error('Token Lost incorrect suspect released.' );
				}
				$j(CurrentMission2+'.grid.selected').addClass("released");
				$j(CurrentMission2+'.grid.released').each(function (){
					if($j(this).prop("fig")==currentCulpret){
						//alertify.alert('You released the culprit',getFeedback);	
					}
					
				});	
			}
			  
			  if($j(CurrentMission2+'.grid.selected').length == CurrentSet.length-1){
				var culpret = $j(CurrentMission2+'.suspect:visible').not(".released").prop("fig");
				var res= (culpret== currentCulpret )?"You caught the culprit.":", Oops! That is not the culprit - better luck with the next case!";
				isMatched = (culpret== currentCulpret );
				//alertify.set({ labels: {ok: "Continue"}  });//,onok:
				//alertify.alert('You caught a culprit'+ res,getFeedback);
				 
				}
				/*code added by abhishek shrimali to bind unbind release and askbutton*/
				$j(CurrentMission2+'.ask').unbind().bind('click',askClick);
				$j(CurrentMission2+'.ask').css('opacity','1');
				$j(CurrentMission2+'.release').unbind();
				$j(CurrentMission2+'.release').css('opacity','0.3');
				/*code added by abhishek shrimali*/ 
				
				if($j(CurrentMission2+'.grid:visible').not('.released').length==1){
				 //$j(CurrentMission2+'.done').css('opacity','1');
				/* $j(CurrentMission2+'.done').bind( "click", function() {
					 getFeedback();
				});*/
				/*code added by abhishek shrimali to bind unbind release and askbutton*/
				$j(CurrentMission2+'.ask').unbind();
				$j(CurrentMission2+'.ask').css('opacity','0.3');
				$j(CurrentMission2+'.release').unbind();
				$j(CurrentMission2+'.release').css('opacity','0.3');
				$j(CurrentMission2+'.done').css('opacity','1');
				/*code added by abhishek shrimali*/
			 }
			 $j(CurrentMission2+'.ask').hide();
	}
	
	function calculateScore2(){
		if(isBonus==1){
			$j(".mission2 .coin:eq(7)").effect( "pulsate", {}, 500, callbackPuff );
			isBonus=0;
		}else{
			$j(".mission2 .coin:eq("+--stageCoins+")").effect( "pulsate", {}, 500, callbackPuff ); 	
		}
	}
	function getFeedback(){
		//alert(currentScore);
	if(currentScore==coinsValue[CurrentStage-1]){
		$j(".mtch_txt").html("No MATCH"); $j(".job").html("Oops!");$j(".solved").html("You have exhausted all appempts!");
		getFeedbackAction();
	}
	else if($j(CurrentMission2+'.grid:visible').not('.released').not('.selected').length==2 && $j(CurrentMission2+'.grid.selected').length==1){
		//alertify.alert('Last Remaining.');
		releaseClick();
		getFeedbackAction();
	}else if($j(CurrentMission2+'.grid:visible').not('.released').not('.selected').length==5 && $j(CurrentMission2+'.grid.selected').length==1){
		alertify.set({ labels: {ok: "Yes", cancel : "No"}  });
		alertify.confirm("Your case is unsolved, are your sure you want to exit?", function(e){ 
			if (e) {
				resetLevel();
				mission2();
			}else{
				releaseClick();
			}
		});
		return true;
	}else if($j(CurrentMission2+'.grid:visible').not('.released').length>1){
		//$j(".mtch_txt").html("NO MATCH"); $j(".job").html("Don't be in a hurry – next time,ask more questions!");$j(".solved").html("Please attempt again!");
		alertify.alert("Don't be in a hurry – next time,ask more questions!");
		return true;
	}	
	
	if(currentScore>coinsValue[CurrentStage-1]){
		if(!isMatched){
			//$j(".mtch_txt").html("NO MATCH"); $j(".job").html("Nice Try!");$j(".solved").html("Please attempt again!");
			alertify.alert('Oops! That is not the culprit.Better luck with the next case!',function(){
				$j(".mtch_txt").html("NO MATCH"); $j(".job").html("Oops!");$j(".solved").html("That is not the culprit");
				getFeedbackAction();
			});
		}else{
				alertify.alert('Great Job! You cought the culprit!',function(){
				$j(".mtch_txt").html("MATCH"); $j(".job").html("Great Job!");$j(".solved").html("You solved the case!");
				getFeedbackAction();
			});
		}
	}
   }
   function getFeedbackAction(){
	var cp = currentCulpret.replace("fig0","");
	var suspected = $j(CurrentMission2+'.suspect:visible').not(".released").prop("fig");
	var sp = suspected.replace("fig0","");
	$j(".feed:eq(1) "+".matchShape:eq(1)").css('background-image',' url("shapes/'+sp+'/'+sp+'_normal.svg"');
	$j(".feed:eq(1) "+".matchShape:eq(0)").css('background-image',' url("shapes/'+cp+'/'+cp+'_normal.svg"');
	$j(".feedbackStatment").each(function(){
var Correct = ($j(this).attr('resp') ==(finalQuestionsXML.find('mergedBucket:contains('+$j(this).attr('statment')+')').parent().find(suspected).text().replace("Y","Yes").replace("N","No")));
if(!Correct) $j(this).find('.spot').css("background-color","rgb(248, 13, 13)");
else $j(this).find('.spot').css("background-color","#1dc105");
});
	$j("#feedback").toggle("slide", function(){ jQuery(".feed").hide();  jQuery(".feed:eq(1)").show();
	$j(".feed:eq(1) "+".matchShape:eq(0)" ).effect( "transfer",{ to: ".feed:eq(1) "+".matchShape:eq(1)", className: "ui-effects-transfer" }, 500).delay(800).effect( "transfer",{ to: ".feed:eq(1) "+".matchShape:eq(1)", className: "ui-effects-transfer" }, 500);});
	$j(".feed:eq(1) "+".scoretxt").html(currentScore);
	$j(".feed:eq(1) "+".scoretxt").effect( "highlight",200);
	//Great Job! //You solved he case.
	$j(".feed:eq(1) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(1) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(1) .star:eq(0)").html(""+ (isBonus?'2':'0'));
	gameScore+=isBonus?2:0;
	$j(CurrentMission2+" .star:eq(0)").html(" "+ gameScore);
   }
	var currentScore = 0;
	//scoretxt
	function callbackPuff(){
		if(currentScore > coinsValue[CurrentStage-1]){	
			currentScore = currentScore- $j(this).prop("coinVal");
				$j(this).effect( "puff", {}, 300); 
				$j(CurrentMission2+".scoretxt").html(currentScore);
				$j(CurrentMission2+".scoretxt").effect( "highlight",200);
		}
		if(currentScore <= coinsValue[CurrentStage-1]){
			isMatched=false;
			alertify.alert('You have exhausted all appempts. Please Replay this level.',getFeedback);
			//resetLevel();
			//mission2();
		}
	}
	
	//$j( ".matchShape:eq(0)" ).effect( "transfer",{ to: ".matchShape:eq(1)", className: "ui-effects-transfer" }, 500);
//$j(".tool:eq(0)").effect( "pulsate", {}, 500, callback ); //puff //explode

//$j( ".matchShape:eq(0)" ).effect( "transfer",{ to: ".matchShape:eq(1)", className: "ui-effects-transfer" }, 500).delay(600).effect( "transfer",{ to: ".matchShape:eq(1)", className: "ui-effects-transfer" }, 500);


function StartLevel2(){
	 $j(CurrentMission2+'.grid').click(function() { 	
			 { 
			 if(!CurrentClue) {
			  //alertify.error('You need a Clue before selecting a suspect');
			  return;
			 }
			 if(jQuery(this).hasClass('selected')){ 
			 jQuery(this).removeClass('selected');
			 $j(this).find('.rect').css('opacity',1);
			 var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
				return true;
			 }
			 jQuery(this).addClass('selected');
			 //alertify.log('selected all innocent suspect(s), before selecting release button.');
			  $j(this).find('.rect').css('opacity',0.3);
				var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
				
			 }
			 
			 });
//.filter(function() { return $(this).text() == 'bar'; })...
	$Sett = setShapeXML.find('stage:contains('+CurrentStage+')').parent();
	$randomSet= $Sett.eq(Math.floor(Math.random() * $Sett.length));

	
	$shapes = $randomSet.find('shapeId').text().split(',');
	$shapes.shuffle();
	$.each($shapes , function( index, value ) {
	//console.log( index + ": " + value );
	CurrentSet.push(dataShapeXML.find('Shape[nos='+value+']'));
	var filename = (parseInt(value)>9)?value:'0'+value;
	var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(CurrentMission2+'.grid:eq('+index+') .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission2+'.grid:eq('+index+')').prop("fig","fig0"+filename);
		$(CurrentMission2+'.grid:eq('+index+')').addClass("suspect");
	});
	CurrentSet.shuffle();
	currentCulpret =CurrentSet[0].find('ShapeID').text();
	$(CurrentMission2+'.grid').not(".suspect").hide();
	//random shape is a culprit  
	/* $.each(CurrentSet , function( index, value ) {
	//console.log( index + ": " + value );
	//console.log(value.find('nos'));
	$('.grid:eq('+index+') .rect').css('background-image',' url("shapes/2000px-Rapporteur_180deg.svg.png"');
	
	});
	 */
}
	
/* function LogoClicked(){
$("#mission2").css({"height": "650px"});
	jQuery('.Iframe').html('<iframe style="width:1024px; height:650px" src="scr_Home.html" frameborder="0" scrolling="no" id="myFrame"></iframe>');
} */



Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
function hideAllScreens()
{
	$("#splash").hide();
	$("#mission2").hide();
	$("#mission3").hide();
	$("#mission1").hide();
	$("#feedback").hide();
	$("#trans").hide();
	$("#trans1").hide();
	$("#mission4").hide();
	$("#end2").hide();
	$("#book").hide();
}


//Rtxt
//tag_btn

/* function togglePage(){
		jQuery('.menubuttons').each(function (){
		
		jQuery(this).removeClass('enable');
		jQuery(this).css('background-image',jQuery(this).css("background-image").replace("_Over","_Normal").replace("_Click","_Normal"));
		});
		
		//jQuery('.menubuttons').css('background-image',jQuery(this).css("background-image").replace("_Normal","_Click"));
}
 */

var Mission1Shapes  ="fig001,fig002,fig003,fig004,fig005,fig006,fig007,fig018,fig019,fig022,fig023,fig024,fig025,fig026,fig027,fig028,fig036,fig039,fig040,fig048,fig050,fig052,fig053,fig055,fig058,fig059,fig060,fig061,fig062,fig063,fig064,fig065,fig066,fig067,fig068,fig069,fig070,fig071".split(',');


/* $j('#book_menu_btn_1_menu_button_bg').click(function (){

}); */

function mission4(){
	hideAllScreens();
	setMission4();
	$("#mission4").show();
	beginGame();
}
function mission3(){
	hideAllScreens();
	setMission3();
	$("#mission3").show();
	beginGame3();
}
function setMission4(){



}

function setMission3(){



}

function hideOtherMenu(){
	$j("#gloss_btn,#help_btn,#menu_btn").hide();
}



var Hyperlinks= [["parallel",'<a class="example-image-link" target="_blank" href="images/G_parallelSide.png">parallel</a> '],
["acute angles",'<a class="example-image-link" target="_blank"  href="images/G_acuteAngle.png">acute angles</a> '],
["equal pairs of sides",'<a class="example-image-link" target="_blank"  href="images/G_equalSide.png">equal pairs of sides</a> '],
["obtuse angles",'<a class="example-image-link" target="_blank"  href="images/G_obtuseAngle.png">obtuse angles</a> '],
["straight sides",'<a class="example-image-link" target="_blank"  href="images/G_straightSide.png">straight sides</a> '],
["curved side",'<a class="example-image-link" target="_blank"  href="images/G_curvedSide.png">curved side</a> '],
["right angles",'<a class="example-image-link" target="_blank"  href="images/G_rightAngle.png">right angles</a> '],
["reflex angles",'<a class="example-image-link" target="_blank"  href="images/G_reflexAngle.png">reflex angles</a> ']]; 