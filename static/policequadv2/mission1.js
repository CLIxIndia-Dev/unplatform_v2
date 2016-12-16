function Mission1(){
$j("#gloss_btn,#help_btn,#menu_btn").show();
mission1();
}
var CurrentMission1 ="#mission1 ";
var hintString = "";
var CurrentClue = false;
var CurrentSet1 = [];
var currentCulpret ="fig001";

var currentstage = 1;

var MaxScore1 =[80,80,80,200,200,200,300,300,300];
var coinsStack1 =[3,3,3,5,5,5,5,5,5];
var coinsGStack1 =[50,50,50,100,100,100,150,150,150];
var coinsValue1 =[10,10,10,20,20,20,30,30,30];
var showShapes1 = [4,4,5,6,6,6,6,6,8];

var coinsImg1 =["url(images/coin10.png)","url(images/coin10.png)","url(images/coin10.png)","url(images/coin20.png)","url(images/coin20.png)","url(images/coin20.png)","url(images/coin30.png)","url(images/coin30.png)","url(images/coin30.png)"];
var coinsImg2 =["url(images/coin50_orange.png)","url(images/coin50_orange.png)","url(images/coin50_orange.png)","url(images/coin100.png)","url(images/coin100.png)","url(images/coin100.png)","url(images/coin150.png)","url(images/coin150.png)","url(images/coin150.png)"];
function mission1(){
	startMission1();
mission1Enable();

	/* $j(CurrentMission1+".questionText").on('DOMNodeInserted', function(e) {
    if ($j(e.target).is('.example-image-link')) { console.log("camein");
       $j(e.target).featherlight({ });;
		}
	}); */
//GeneratingShapes();
}

var currentLevelDisplay1=[1,1,1,2,2,2,3,3,3,3];
function startMission1(){ 
	CurrentClue = false;
	hintString = "";
	isMatched = false;
	stageCoins = coinsStack1[currentstage-1];
	$j(".mission1 .coin:gt("+(stageCoins-1)+")").hide();
	currentScore =MaxScore1[currentstage-1];
	$j(".mission1 .coin:eq(7)").show();
	$j(".mission1 .coin:lt(7)").css("background-image",coinsImg1[currentstage-1]);
	$j(".mission1 .coin:eq(7)").css("background-image",coinsImg2[currentstage-1]);
	
	 $j(".feed:eq(0) .coinToken:eq(0)").css("background-image",coinsImg2[currentstage-1]);
	 $j(".feed:eq(0) .coinToken:eq(1)").css("background-image",coinsImg1[currentstage-1]);
	if(isBonus==1){
		$j(".mission1 .coin:eq(7)").show();
	}else{
		$j(".mission1 .coin:eq(7)").hide();
		currentScore = currentScore- $j(".mission1 .coin:eq(7)").prop("coinVal");
		$j(".scoretxt").html(currentScore);
	}
		$j(".recte").hide();
$("#book").hide();
$("#feedback").hide();
$("#trans1").hide();
$j(".mission").html("MISSION 1");
//$j(".level").html("LEVEL "+currentstage);
$j(".level").html("LEVEL "+currentLevelDisplay1[currentstage-1]);

$j(".scoretxt").html(currentScore);
	$j('.Temptool').hide();
	//$j('.ask').hide();
$("#mission1").fadeIn("slow");
CalScore1();
GeneratingShapes();
}

function equalMarkerEffect(ttThis){
var timeout;
	//$j(CurrentMission1+'.recte path, '+CurrentMission1+'.recte line').hover(function(){
	ttThis.find('path').hover(function(){
    clearTimeout(timeout);
    //console.log("came");
    $this = $j(this).parent();//find('svg');

    timeout = setTimeout(function(){
        $this.css("-webkit-transition", "all 2s ease-in-out");
       // $this.addClass('grow');
			//$this.css("transform","scale(1.22)");
	      //$this.css("-webkit-transform","scale(1.22)");
		   // $this.find('path').css("-webkit-transform","scale(0.83)");
			// $this.find('path').css("transform","scale(0.83)");
	      $this.find('path').css("stroke-width","7px");
	      $this.find('path').css("stroke-opacity","1");
		  $this.find('line').css("stroke-width","7px");
	      $this.find('line').css("stroke-opacity","1");
    }, 100);
}, function(){
    clearTimeout(timeout);
    $j(this).css("-webkit-transition", "all 0.5s ease-in-out");
	    //$this.css("transform","scale(1)");
	    //  $this.css("-webkit-transform","scale(1)");
		 // $this.find('path').css("-webkit-transform","scale(1)");
		//	 $this.find('path').css("transform","scale(1)");
	      $this.find('path').css("stroke-width","12px");
	      $this.find('path').css("stroke-opacity","0.1");
		   $this.find('line').css("stroke-width","12px");
	      $this.find('line').css("stroke-opacity","0.1");
   // $j(this).removeClass('grow');
});
ttThis.find('line').hover(function(){
    clearTimeout(timeout);
    console.log("came");
    $this = $j(this).parent();//find('svg');

    timeout = setTimeout(function(){
        $this.css("-webkit-transition", "all 2s ease-in-out");
       // $this.addClass('grow');
			//$this.css("transform","scale(1.22)");
	      //$this.css("-webkit-transform","scale(1.22)");
		   // $this.find('path').css("-webkit-transform","scale(0.83)");
			// $this.find('path').css("transform","scale(0.83)");
	      $this.find('path').css("stroke-width","7px");
	      $this.find('path').css("stroke-opacity","1");
		  $this.find('line').css("stroke-width","7px");
	      $this.find('line').css("stroke-opacity","1");
    }, 10);
}, function(){
    clearTimeout(timeout);
    $j(this).css("-webkit-transition", "all 0.5s ease-in-out");
	    //$this.css("transform","scale(1)");
	    //  $this.css("-webkit-transform","scale(1)");
		 // $this.find('path').css("-webkit-transform","scale(1)");
		//	 $this.find('path').css("transform","scale(1)");
	      $this.find('path').css("stroke-width","12px");
	      $this.find('path').css("stroke-opacity","0.1");
		   $this.find('line').css("stroke-width","12px");
	      $this.find('line').css("stroke-opacity","0.1");
   // $j(this).removeClass('grow');
});

}

	function CalScore1(){
			$j(CurrentMission1+".coin").prop("coinVal", coinsValue1[currentstage-1]);
			$j(CurrentMission1+".coin:eq(7)").prop("coinVal", coinsGStack1[currentstage-1]);
	}

function mission1Enable(){
$j(CurrentMission1+'.reset').click(function() { 	
			 //alertify.alert('Reset is WIP');
				isBonus=0;
				resetLevel1();
			 });
jQuery(".cont_btn").click(function() {  $j("#gloss_btn,#help_btn,#menu_btn").hide();
		if(isMatched){
		
		currentstage++;
			isBonus=1;
		/* resetLevel();
		mission2(); */
		 if(currentstage == 10 ){
		$j('.trans1').hide();
		$j(".feedback").hide("slide", function() {
			jQuery(".end1").hide();
			jQuery(".end1:eq(0)").show();			
			$j('.end2').show("slide");
			transisitions();
		});
		return;
		
		} 
		$j(".feedback").hide("slide", function() {
			if(currentstage==7){$j('.trans1 .lvlScreen:eq(1)').hide();$j('.trans1 .lvlScreen:eq(0)').show();$j('.trans1').show("slide");
			transisitions();
			}
			else if(currentstage==4){$j('.trans1 .lvlScreen:eq(0)').hide();$j('.trans1 .lvlScreen:eq(1)').show();$j('.trans1').show("slide");
			transisitions();
			}
			else resetLevel1();
		});
		}else{
		
		resetLevel1();
		//resetLevel();
		//mission2();
		$j(".feedback").hide("slide");
		}
		
	});
		$j(CurrentMission1+".ToolMain").hide();
	$j(CurrentMission1+".ToolMain2").hide();
	
/* 	jQuery(CurrentMission1+".toolA").click(function() { 
	$j(CurrentMission1+".toolb").hide();
	}); */
	jQuery(CurrentMission1+".tool:eq(2)").click(function() { $j(".recte").hide();
	if($j(this).hasClass('active')){$j(this).removeClass('active');
	$j(CurrentMission1+".ToolMain").freetrans('destroy');
	
	$j(CurrentMission1+".ToolMain").hide();
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	return;}
	jQuery(CurrentMission1+".toolA").trigger("click");
	$j(CurrentMission1+".ToolMain:visible").freetrans('destroy');
$j(CurrentMission1+".ToolMain2:visible").freetrans('destroy');
	$j(CurrentMission1+".ToolMain").hide();
		$j(CurrentMission1+".ToolMain2").hide();
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active');
	$j(CurrentMission1+".ToolMain").show();
	$j(CurrentMission1+".ToolMain").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	
	});
	jQuery(CurrentMission1+".tool:eq(1)").click(function() { 
	jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool2_selected.png)');
	$j(CurrentMission1+".toolb").show();
	
	});
	jQuery(CurrentMission1+".tool:eq(0)").click(function() { $j(".recte").show();
	//replace here 
	
	if($j(this).hasClass('active')){
	$j(this).removeClass('active');	$j(".recte").hide();
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
	});
	return;
	}
		jQuery(CurrentMission1+".toolA").trigger("click");
		$j(CurrentMission1+".ToolMain:visible").freetrans('destroy');
		$j(CurrentMission1+".ToolMain2:visible").freetrans('destroy');
		$j(CurrentMission1+".ToolMain").hide();
		$j(CurrentMission1+".ToolMain2").hide();

	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active');
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	
	$j(CurrentMission1+'.rect').each(function (){
	 var imagePath = $j(this).css("background-image").replace(pathURL,"");
	/*var filePathExit =imagePath.substring(imagePath.indexOf("shapes/"),imagePath.indexOf(".")),"_tool1c";
	var pathIS ="_normal";
	$j.ajax({
    url:filePathExit,
    type:'HEAD',
    error: function()
    {
        pathIS = "_normal"
    },
    success: function()
    {
		 pathIS = "_tool1c"
       //  console.log("file exists");
    }

	//tool1B
	}); */
	//var weHaveSomeshapes ="_tool1c" :"_normal";
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool1c"));//tool1B
	}
	
	
	);
	

	});
	
	jQuery(CurrentMission1+".tool:eq(1)").click(function() { $j(".recte").hide();
	//replace here 
	
	if($j(this).hasClass('active')){
	$j(CurrentMission1+".ToolMain2").freetrans('destroy');
	
	$j(CurrentMission1+".ToolMain2").hide();
	$j(this).removeClass('active');	
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
	});
	return;
	}


	jQuery(CurrentMission1+".toolA").trigger("click");
	$j(CurrentMission1+".ToolMain:visible").freetrans('destroy');
$j(CurrentMission1+".ToolMain2:visible").freetrans('destroy');
		$j(CurrentMission1+".ToolMain").hide();
		$j(CurrentMission1+".ToolMain2").show();

	$j(CurrentMission1+".ToolMain2").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%','maintainAspectRatio':false});
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");

	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active');
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	//$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool3"));
	}
	
	
	);
	
	
	});
	
	/* jQuery(CurrentMission1+".tool2:eq(3)").click(function() { 	jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool2D_selected.png)');
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});	
	$j('.rect').each(function (){
		var imagePath = $j(this).css("background-image").replace(pathURL,"");	
		$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2D"));
	});	
	});
	jQuery(CurrentMission1+".tool2:eq(0)").click(function() { 	jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool1A_selected.png)');
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});	
	$j(CurrentMission1+'.rect').each(function (){
		var imagePath = $j(this).css("background-image").replace(pathURL,"");	
		$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2A"));
	});	
	});
	jQuery(CurrentMission1+".tool2:eq(1)").click(function() { 		jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool1B_selected.png)');
		jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2B"));
	});	
	});
	jQuery(CurrentMission1+".tool2:eq(2)").click(function() { 		jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool1C_selected.png)');
		jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2C"));
	});	
	}); */ 
	$j(CurrentMission1+'.cluetext').html("Clue Panel");
	$j(CurrentMission1 +'.ask').show();
	$j(CurrentMission1 +'.ask').on('click', function() {
	// if no released then 
	if(ReleasedOut.length<FlushedOut.length){
		alertify.set({ labels: {ok: "Cancel", cancel : "Yes"}  });
		alertify.confirm("One or more suspect(s) can be released, are you sure you want next clue?", function(e){ 
			if (e) {
					//ReleasedOut[ReleasedOut.length] ="none";
					//$j(CurrentMission1 +'.ask').trigger("click");
					return ;
			}else{
				// do nothing
					ReleasedOut[ReleasedOut.length] ="none";
					$j(CurrentMission1+'.questionResponse:eq(0)').html("Skip");
					var colorCorrect= "rgb(255, 214, 0)";
					$j(CurrentMission1+'.questionResponse:eq(0)').css("color",colorCorrect);
					$j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color",colorCorrect);
					$j(CurrentMission1 +'.ask').trigger("click");
					return;
				
			}
		});
		return;
		}
	/* if(cluesAsk.length ==allowedClueCount){
		alertify.alert('There are no more clues!');
		
		return;
	} */
	alertify.set({ labels: {ok: "OK", cancel : "Cancel"}  });
	if(cluesAsk.length ==0){
		alertify.alert('There are no more clues!');
		
		return;
	} 
	
	//cluesAsked///cluesAsk
	var foundNow =true;
	do{
	$j(CurrentMission1+'.grid:visible').not('.released').each(function(){
		if(jQuery.inArray($j(this).prop('fig'),cluesAsk[allowedClueCount][1])!=-1){
			
			foundNow =false;
			console.log($j(this).prop('fig')+"mila"+foundNow);
			return false;
		}
		//alert("mila"+foundNow);
		console.log($j(this).prop('fig'));		
	});if(foundNow ==true)allowedClueCount++; 
	if(allowedClueCount==cluesAsk.length){foundNow = false;}
	}while(foundNow);
	
	if(allowedClueCount==cluesAsk.length){
		alertify.alert('There are no more clues!');		
		return;
	}
	statmentF =cluesAsk[allowedClueCount][0]; // allowedClueCount++;
	FlushedOut.push(cluesAsk[allowedClueCount]);
	cluesAsk.splice(allowedClueCount,1)
	allowedClueCount=0;
	var appendStatement = finalQuestionsXML.find('mergedBucket:contains('+statmentF+')').parent().find('statement').text();
	
	$j(Hyperlinks).each(function (index){
		appendStatement =appendStatement.replace(Hyperlinks[index][0],Hyperlinks[index][1]);
	});
	

	var QuestionText = 'The culprit has ' + appendStatement;
	var QuestionDiv ='<div class="questionField" style="position: relative; margin: 0px;  width: 690px; margin: 5px; height: 20px; right: auto; bottom: auto; "><div class="questionText" style="position: absolute;    text-align: left; margin: 0px; left: 0px; top: 0px; width: 525px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(81, 249, 255); font-weight: 700; text-decoration: none;">'+QuestionText+'</div><div class="questionResponse" style="position: absolute; margin: 0px; left: 518px; top: 0px; width: 160px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+'</div><div class="questionLine" style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0);  background-color: rgb(50, 133, 180);"></div></div>';
	var feedBackDiv ='<div class="feedbackStatment" resp="'+statmentF+'" statment="'+mainClue+'" style="position: relative; margin: 5px;   width: 336px; height: 23px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateZ(0px);"><div class="statmentText" style="position: absolute; margin: 0px; left: 18px; top: 0px; width: 290px; height: 20px; right: auto; bottom: auto; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(255, 255, 255); font-weight: 700; text-decoration: none;">'+QuestionText+'</div><div style="position: absolute; margin: 0px; left: 264px; top: 0px; width: 60px; height: 20px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+'</div><div style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(50, 133, 180);"></div><div class="spot" style="position: absolute; margin: 0px; left: 0px; top: 1px; width: 13px; height: 13px; right: auto; bottom: auto; border-radius: 50%; border: 0px none rgb(0, 0, 0);  background-color: #1dc105;"></div></div>';
	$j(CurrentMission1+'.sample').hide();
	//$j(CurrentMission1+'.cluetext').html(QuestionText);
	$j(CurrentMission1+'.quest').prepend(QuestionDiv);
	$j('.quest2').prepend(feedBackDiv);
	 $j(CurrentMission1+'.done').unbind("click");$j(CurrentMission1+'.release').unbind("click");$j(CurrentMission1+'.grid').unbind("click");
	enableRelease(); enableReleaseCLICK(); enableANSresponse();
	});
}
var cluesAsk=[];
var FlushedOut =[];
var ReleasedOut =[];
var ClueCount =0;
function DynamicClues(){

	//console.log("kya");
				$j(allowedClues).each(function (indx){
				//cluesAsk[ 
				 
				var XMLNode2 = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[indx]+')').parent();
				
					var shapeNelim =[];
					$j(CurrentMission1+'.grid.suspect').each(function (){ //.selected
						var fig_elimanated = $j(this).prop('fig');
		//				console.log("kya "+indx);
						if(XMLNode2.find(fig_elimanated).text() == "N")
						shapeNelim.push(fig_elimanated)
		//				console.log("kya "+indx);
					});
					if(shapeNelim.length >0)
					cluesAsk.push([allowedClues[indx],shapeNelim,shapeNelim.length]);
				});
				cluesAsk.sort(function(a, b){    
					return a[2] - b[2];
					});
}
function enableANSresponse(){
var XMLNode2 = finalQuestionsXML.find('mergedBucket:contains('+statmentF+')').parent();
$j(CurrentMission1+'.grid.suspect').each(function(index){
console.log($j(this).prop('fig'));
$j(this).prop('ANS',XMLNode2.find($j(this).prop('fig')).text());
console.log("dsfsdf "+$j(this).prop('ANS'));
});
}

function enableRelease(){
		 $j(CurrentMission1+'.grid').click(function() { 	
			 { 
			
			 if(jQuery(this).hasClass('selected')){ 
			 jQuery(this).removeClass('selected');
			 $j(this).find('.rect').css('opacity',1);
			 var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
				return true;
			 }
			 jQuery(this).addClass('selected');
			// alertify.log('selected all innocent suspect(s), before selecting release button.');
			  $j(this).find('.rect').css('opacity',0.3);
				var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
				
			 }
			 
			 });
}


function enableReleaseCLICK(){
	 $j(CurrentMission1+'.done').click(function() { 	
		if($j(CurrentMission1+'.grid:visible').not('.released').not('.selected').length==2 && $j(CurrentMission1+'.grid.selected').length==1){
		//alertify.alert('Last Remaining.');
		$j(CurrentMission1+'.release').trigger("click");
		}else if($j(CurrentMission1+'.grid:visible').not('.released').not('.selected').length==5 && $j(CurrentMission1+'.grid.selected').length==1){
		alertify.set({ labels: {ok: "Yes", cancel : "No"}  });
		alertify.confirm("Your case is unsolved, are your sure you want to end?", function(e){ 
			if (e) {
				resetLevel1();
			}else{
				$j(CurrentMission1+'.release').trigger("click");
			}
		});
		return;
		}else if($j(CurrentMission1+'.grid:visible').not('.released').length>1){
		//$j(".mtch_txt").html("NO MATCH"); $j(".job").html("Don't be in a hurry – next time,ask more questions!");$j(".solved").html("Please attempt again!");
		alertify.alert("Don't be in a hurry – next time,ask more questions!");
		return;
		}	
		if($j(CurrentMission1+'.grid.selected.released').length == TotalShapes-1){
				var culpret = $j(CurrentMission1+'.suspect:visible').not(".released").prop("fig");
				var res= (culpret== currentCulpret1 )?"You caught the culprit.":"Oops! That is not the culprit - better luck with the next case!";
				isMatched = (culpret== currentCulpret1 );
				alertify.set({ labels: {ok: "Continue"}  });//,onok:
				alertify.alert(''+ res,getFeedback1);
				 
				}
	 });
	 
			 $j(CurrentMission1+'.release').click(function() { 	
			 alertify.set({ labels: {ok: "Ok", cancel : "Cancel"}  });
			 $j(CurrentMission1+'.done').css("opacity","1");
			 /* if(!()){alertify.error('You must select an innocent suspect to release.');
			 return;
			 } */
			if( $j(CurrentMission1+'.grid.selected').length >= TotalShapes){alertify.alert('All suspects cannot be released one of them is a culprit.');
			 return;
			 }
			if( $j(CurrentMission1+'.grid.selected').not('.released').length ==0){alertify.alert('Please select an innocent suspect(s) to release.');
			 return;
			 }
			  $j(CurrentMission1+'.grid').unbind("click");
			{ // $j(CurrentMission1+'.grid.selected').hide();
				 $j(CurrentMission1+'.release').unbind("click");
				$j(CurrentMission1+'.grid.selected .tag_btn').show();
				$j(CurrentMission1+'.grid.selected').unbind();
				//evaluate Things
				var incorrectSeletion = false;
				ReleasedOut[ReleasedOut.length ]=[];
				$j(CurrentMission1+'.grid:visible').not('.released').each(function (){ //.selected
				ReleasedOut[ReleasedOut.length-1].push($j(this).prop("fig"));	
				//console.log($j(this).prop("ANS") == "N" && !$j(this).hasClass('selected') );
				//console.log($j(this).prop("ANS") == "Y"  && $j(this).hasClass('selected'));
					if( ($j(this).prop("ANS") == "N" && !$j(this).hasClass('selected') ) ||
					  ($j(this).prop("ANS") == "Y"  && $j(this).hasClass('selected')))
					incorrectSeletion =(incorrectSeletion || true);
					
				});
				/* $j(CurrentMission1+'.grid.selected:visible').not('.released').each(function (){ //.selected
					if (($j(this).prop("ANS") == "N" ) ||  ($j(this).prop("ANS") == "NA" )||  ($j(this).prop("ANS") == "DK" )){
					incorrectSeletion =(incorrectSeletion || false);
					}else
					incorrectSeletion =(incorrectSeletion || true);
				}); */
				if(incorrectSeletion ){
					if(isBonus==1){
						$j(CurrentMission1+" .coin:eq(7)").effect( "pulsate", {}, 500, callbackPuff1 );
						isBonus=0;
					}else{
					    $j(CurrentMission1+" .coin:eq("+--stageCoins+")").effect( "pulsate", {}, 500, callbackPuff1 ); 	
					}
					
					alertify.error('Token Lost incorrect suspect released.' );
				}
				var txtCorrect= (incorrectSeletion?"Incorrect":"Correct");
				$j(CurrentMission1+'.questionResponse:eq(0)').html(txtCorrect);
				var colorCorrect= (incorrectSeletion?"#ff9900":"#99cc00");				
				$j(CurrentMission1+'.questionResponse:eq(0)').css("color",colorCorrect)
				$j(CurrentMission1+'.grid.selected').addClass("released");
				
				if(incorrectSeletion) $j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color","rgb(248, 13, 13)");
				else $j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color","#1dc105");
				
				if(!$j(CurrentMission1+'.grid.selected.released').length == TotalShapes-1){
					$j(CurrentMission1+'.grid.selected.released').each(function(){
						if($j(this).prop('fig') ==currentCulpret1){
							alertify.alert("Oops… looks like you released the culprit too! Better luck with the next case!",getFeedback1);
							return;
						}
					});
				}
			}
			  
			  
				
			 });
}

function getFeedback1(){
	
	if(!isMatched){ $j(".mtch_txt").html("NO MATCH"); $j(".job").html("Nice Try!");$j(".solved").html("Please attempt again!");
	$j( ".additionalTextVal").html("Try to solve the case again.");
		//$j( ".cont_txt").html("CONTINUE");
	}else{
	 $j(".mtch_txt").html("MATCH"); $j(".job").html("Great Job!");$j(".solved").html("You solved the case!");
	 /* if(currentstage != 3)
	 $j( ".cont_txt").html("Next Case"); */
	}
	var cp = currentCulpret1.replace("fig0","");
	var suspected = $j(CurrentMission1+'.suspect:visible').not(".released").prop("fig");
	var sp = suspected.replace("fig0","");
	$j(".feed:eq(0) "+".matchShape:eq(1)").css('background-image',' url("	shapes/'+sp+'/'+sp+'_normal.svg"');
	$j(".feed:eq(0) "+".matchShape:eq(0)").css('background-image',' url("shapes/'+cp+'/'+cp+'_normal.svg"');
	$j(".feed:eq(0) .scoretxt").html(currentScore);
	/*$j(".feedbackStatment").each(function(){
	var Correct = (finalQuestionsXML.find('mergedBucket:contains('+$j(this).attr('resp') +')').parent().find(suspected).text()==(finalQuestionsXML.find('mergedBucket:contains('+$j(this).attr('statment')+')').parent().find(suspected).text())); */
	/* var Correct = true;
	if(!Correct) $j(this).find('.spot').css("background-color","rgb(248, 13, 13)");
	else $j(this).find('.spot').css("background-color","#1dc105");
	}); */
$j( ".additionalTextVal").html("Looks like there is another case for you to solve.");
	$j("#feedback").toggle("slide", function(){  jQuery(".feed").hide();  jQuery(".feed:eq(0)").show();
	$j( ".feed:eq(0) "+".matchShape:eq(0)" ).effect( "transfer",{ to: ".feed:eq(0) "+".matchShape:eq(1)", className: "ui-effects-transfer" }, 500).delay(800).effect( "transfer",{ to: ".feed:eq(0) "+".matchShape:eq(1)", className: "ui-effects-transfer" }, 500);});
	//Great Job! //You solved he case.
	$j(".feed:eq(0) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(0) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(0) .star:eq(0)").html(" "+ (isBonus?'1':'0'));
	gameScore+=isBonus?1:0;
	$j(CurrentMission1+" .star:eq(0)").html(" "+ gameScore);
	}
function callbackPuff1(){
	if(currentScore > coinsValue1[currentstage-1]){
	currentScore = currentScore- $j(this).prop("coinVal");
	$j(this).effect( "puff", {}, 300); 
	$j(".scoretxt").html(currentScore);
	$j(".scoretxt").effect( "highlight",200);
	}
	if(currentScore <= coinsValue1[currentstage-1]){
		isMatched =false;
		alertify.alert('You have exhausted all tokens better luck with the next case!.',getFeedback1);
			
			//resetLevel1();
			
		}
	};
var statmentF="";

var M1Stage1="all1equalsides,exactly2equalsides,exactly3equalsides,exactly4equalsides,exactly5equalsides,exactly6equalsides,no1equalsides,exactly3emptysides,exactly4emptysides,exactly5emptysides,exactly6emptysides,exactly6equalpairsofsides,exactly5equalpairsofsides,exactly4equalpairsofsides,exactly3equalpairsofsides,exactly2equalpairsofsides".split(',');


var M1Stage1a = "no1equalpairsofsides,all1equalpairsofsides,exactly6equalpairsofsides,exactly5equalpairsofsides,exactly4equalpairsofsides,exactly3equalpairsofsides,exactly2equalpairsofsides".split(',');

var complexequalpairsofsides="atleast1equalpairsofsides,atleast2equalpairsofsides,atleast3equalpairsofsides,atleast4equalpairsofsides,atleast5equalpairsofsides,atleast6equalpairsofsides,morethan1equalpairsofsides,morethan2equalpairsofsides,morethan3equalpairsofsides,morethan4equalpairsofsides,morethan5equalpairsofsides,morethan6equalpairsofsides".split(',')

var stage1RemoveKeys ="angles,lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty,right,obtuse,acute,reflex,parallel".split(',');

var M1Stage2="no1equalpairsofsides,all1equalpairsofsides,no1rightangles,all1rightangles".split(',');
var stage2RemoveKeys ="lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty,obtuse,acute,reflex,parallel".split(',');
var M1Stage3="exactly1rightangles,exactly2rightangles,exactly3rightangles,exactly4rightangles,exactly5rightangles,exactly6rightangles".split(',');
var stage3RemoveKeys ="lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty,obtuse,acute,reflex,parallel".split(',');
var M1Stage4="exactly1obtuseangles,exactly2obtuseangles,exactly3obtuseangles,exactly4obtuseangles,exactly5obtuseangles,exactly6obtuseangles,no1obtuseangles,all1obtuseangles".split(',');
var stage4RemoveKeys ="lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty,acute,reflex,parallel".split(',');
var M1Stage5 ="exactly1acuteangles,exactly2acuteangles,exactly3acuteangles,exactly4acuteangles,exactly5acuteangles,exactly6acuteangles,no1acuteangles,all1acuteangles".split(',');
var stage5RemoveKeys ="lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty,reflex,parallel".split(',');
var M1Stage6 ="exactly1reflexangles,exactly2reflexangles,exactly3reflexangles,exactly5reflexangles,no1reflexangles".split(',');
var stage6RemoveKeys ="lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty,parallel".split(',');
// removed curved from 7,8,9
var M1Stage9 ="exactly1parallelpairsofsides,exactly2parallelpairsofsides,exactly3parallelpairsofsides,exactly4parallelpairsofsides,exactly5parallelpairsofsides,exactly6parallelpairsofsides".split(',');//,no1parallelpairsofsides
var stage9RemoveKeys ="curved,emptyangles,emptysides,lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty".split(',');
//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
//step2- for fig? a shape get all property with Yes filter those from allowed clue list for that stage 
//step3- give me one new shape with property No from allowed clue list.
//repeat step3 for 4- 6  more shapes different property clue.
var currentCulpret1 ="fig001";
var mainClue = "";
var TotalShapes =showShapes1[currentstage-1];
var setShapesM1 = [];
var allowedClues =[];
var allowedClueCount =0;


function resetLevel1(){ $j("#gloss_btn,#help_btn,#menu_btn").show();
//isBonus =0;
TotalShapes = showShapes1[currentstage-1];
setShapesM1 = [];
allowedClues =[];
cluesAsk =[];
FlushedOut =[];
ReleasedOut =[];
allowedClueCount =0;
	
	$j(".quest").empty();
	$j(".quest2").empty();
	$j(".tool.active").trigger("click");
	$j(".mission3 .coin").show();
	$j(CurrentMission1+'.done').unbind("click"); $j(CurrentMission1+'.release').unbind("click");$j(CurrentMission1+'.grid').unbind("click");
$j(CurrentMission1+'.done').css("opacity","0.3");	
$j(CurrentMission1+'.grid .tag_btn').hide();
	 $j(CurrentMission1+'.cluetext').html("Generate Clue");
	$j(CurrentMission1 +'.ask').show();
	$j(CurrentMission1+'.grid').removeClass("released");
	$j(CurrentMission1+".grid.selected").each(function(){ 
			 jQuery(this).removeClass('selected');
			 $j(this).find('.rect').css('opacity',1);
			 var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
				//return true;
			 });
			 $j(CurrentMission1+".recte svg").empty();
$j(CurrentMission1+".grid").removeClass("suspect");
$j(CurrentMission1+".grid").show();
$j(CurrentMission1+".coin").show();
	 
	startMission1();
}

function GeneratingShapes(){ setShapesM1 = [];
	switch(currentstage){
		case 1:{
			//M1Stage1
			//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
			M1Stage1.shuffle();
			var ind =0;
			mainClue= M1Stage1[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			mainClue= M1Stage1[ind];
			//console.log("milgeya");
			}while(shapeFound);
			shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage1RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				  if(shapes.length == 0){
					allowedClues.splice(i,1); i--;
					continue;
				 }
				 shuffle(shapes);
				
				 var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					// console.log(shapes+"why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
		}break;
		//case 2
		
		case 2:{
			//M1Stage1
			//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
			M1Stage2.shuffle();
			var ind =0;
			mainClue= M1Stage2[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			mainClue= M1Stage2[ind];
			//console.log("milgeya");
			}while(shapeFound);
			shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage2RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				  if(shapes.length == 0){
					allowedClues.splice(i,1); i--;
					continue;
				 }
				 shuffle(shapes);
				
				 var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					 console.log(shapes+"why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
		}break;
		/// case 3
		
		case 3:{
			//M1Stage1
			//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
			M1Stage3.shuffle();
			var ind =0;
			mainClue= M1Stage3[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			mainClue= M1Stage3[ind];
			//console.log("milgeya");
			}while(shapeFound);
			shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage3RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				  if(shapes.length == 0){
					allowedClues.splice(i,1); i--;
					continue;
				 }
				 shuffle(shapes);
				
				 var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					 console.log(shapes+"why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
		}break;
		///case 4
		case 4:{
			M1Stage4.shuffle();
			var ind =0;
				mainClue= M1Stage4[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			//console.log("milgeya");
			mainClue= M1Stage4[ind];
			}while(shapeFound);
			shuffle(shapes);
			
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage4RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				  if(shapes.length == 0){
				 allowedClues.splice(i,1); i--;
				 continue;
				 }
				 shuffle(shapes);
				 
				// setShapesM1.push($j(shapes[0]).prop("tagName"));
				var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					 //console.log("why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
			
		}break;
		case 5:{
			M1Stage5.shuffle();
			var ind =0;
				mainClue= M1Stage5[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			//console.log("milgeya");
			mainClue= M1Stage5[ind];
			}while(shapeFound);
			shuffle(shapes);
			
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage5RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				  if(shapes.length == 0){
				 allowedClues.splice(i,1); i--;
				 continue;
				 }
				 shuffle(shapes);
				 
				// setShapesM1.push($j(shapes[0]).prop("tagName"));
				var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					 //console.log("why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
			
		}break;
		case 6:{
			M1Stage6.shuffle();
			var ind =0;
				mainClue= M1Stage6[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			//console.log("milgeya");
			mainClue= M1Stage6[ind];
			}while(shapeFound);
			shuffle(shapes);
			
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage6RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				  if(shapes.length == 0){
				 allowedClues.splice(i,1); i--;
				 continue;
				 }
				 shuffle(shapes);
				 
				// setShapesM1.push($j(shapes[0]).prop("tagName"));
				var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					 //console.log("why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
			
		}break;
		case 7:
		case 8:
		case 9:{
			M1Stage9.shuffle();
			var ind =0;
				mainClue= M1Stage9[ind];
			var shapeFound =true;
			do{
			var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			mainClue= M1Stage9[ind];
			//console.log("milgeya");
			}while(shapeFound);
			
			 shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalQuestionsXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log("");
				var testPassed = false;
				$j(stage9RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				if(!testPassed)
				allowedClues.push(cluetext);
				
				
			});
			//we now have clues to ask randomly
			allowedClues.shuffle();
			
			for (var i=0;i<TotalShapes-1;i++){
				
				 XMLNode = finalQuestionsXML.find('mergedBucket:contains('+allowedClues[i]+')').parent();
				 shapes = XMLNode.find(':contains(N)');
				 if(shapes.length == 0){
				 allowedClues.splice(i,1); i--;
				 continue;
				 }
				 shuffle(shapes);
				 console.log(""+shapes.toString());
				// setShapesM1.push($j(shapes[0]).prop("tagName"));
				var j =0;
				 // setShapesM1.push($j(shapes[j]).prop("tagName")); 
				 var isNew;
				 do{
					 isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
					 //console.log("why error"+isNew);
				 	 if(isNew){
					 setShapesM1.push($j(shapes[j]).prop("tagName")); 					  
					 isNew = false;
					 }else{j++;isNew =true};
					}while(isNew); 
			}
			
			
		}break;
	
	}
	
	setShapesM1.shuffle();
	//console.log("error came "+setShapesM1);
	$j.each(setShapesM1 , function( index, value ) {

	var filename = (value).substring(4,6);
	var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
	var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B_m1.svg";//var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B.svg";
	$j.ajax({
    url:filepath2,
    type:'HEAD',
    error: function()
    {
       filepath2 = "shapes/"+filename+"/"+filename+"_tool1B.svg";
    },
    success: function()
    {
       //  console.log("file exists");
    }
});
	//var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B_m1.svg";
		$(CurrentMission1+'.grid:eq('+index+') .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission1+'.grid:eq('+index+')').prop("fig","fig0"+filename);
		$(CurrentMission1+'.grid:eq('+index+')').addClass("suspect");
		 $j(CurrentMission1+'.recte:eq('+index+') ').load(filepath2,function() { 
					equalMarkerEffect($j(this));
			});
		$j(CurrentMission1+'.recte:eq('+index+') svg').css("transform"," scale(1.1)");
 
	});
	
	$(CurrentMission1+'.grid').not(".suspect").hide();
	DynamicClues();

}
  
  
  //$(CurrentMission1+'.grid:eq('+5+') svg').css("transform"," scale(1.1)")
  //$(CurrentMission1+'.grid:eq('+5+') .rect').load('http://localhost:8080/shapes/24/24_tool1B.svg')
  //$j("svg #shape").hide();
/*   var timeout;
   $j(CurrentMission1+'.grid:eq('+5+') .rect').load('http://localhost:8080/shapes/24/24_tool1B.svg')
  $j(CurrentMission1+'.grid:eq('+5+') svg').css("transform"," scale(1.1)");
  $j(CurrentMission1+'.grid:eq('+5+')').hover(function(){
    clearTimeout(timeout);
    
    $this = $j(this).find('svg');

    timeout = setTimeout(function(){
        $this.css("-webkit-transition", "all 2s ease-in-out");
        $this.addClass('grow');
    }, 500);
}, function(){
    clearTimeout(timeout);
    $j(this).css("-webkit-transition", "all 0.5s ease-in-out");

    $j(this).removeClass('grow');
}); */



/* 	jQuery(".dropArea2").droppable({
		 accept:function(drag){
		
			var nameOfbatch = jQuery(drag).css('background-image');
			 var nameOfbox = jQuery(this).css('background-image')
		 // return jQuery(drag).hasClass("batchtag");
	//console.log(nameOfbatch.substr(nameOfbatch.length - 7)+''+nameOfbox.substr(nameOfbox.length - 7));
		  return (nameOfbatch.substr(nameOfbatch.length - 7)== nameOfbox.substr(nameOfbox.length - 7));
		 },
      drop: function( event, ui ) {
	 // alert(ui+"you dropped that "+event);
	 	jQuery(this).droppable( "option", "disabled", true );
		jQuery(ui.draggable).draggable( "option", "disabled", true );
		// jQuery(ui.draggable).hide();
		jQuery(this).css('background-image',jQuery(ui.draggable).css("background-image"));
		var nameOfbatch = jQuery(this).css('background-image');
		var indexOfBatch = nameOfbatch.indexOf('.png')-1;
		//console.log("the string is "+indexOfBatch);
		jQuery('.kunalSays').html(quizXML.find("answer[id="+nameOfbatch.charAt(indexOfBatch)+"]").text());
	  }
});
		
		jQuery(".batchtag").draggable({
      //cancel: "a.ui-icon", // clicking an icon won't initiate dragging
		//revert: true ,
		revert:  function(event, ui) {
                        // on older version of jQuery use "draggable"
                        // $(this).data("draggable")
			
						//return !event;
                        return (event !== false) ? false : true;
                   },
      containment:"parent",
      helper: "clone",
	  snap: '.dropArea',
		snapMode: 'inner',
      cursor: "move"
    }); */