var CurrentMission = "#mission3 ";

function beginGame3(){ 
	$j(CurrentMission+'.reset').click(function() { 
		isBonus=0;
		resetLevel3();
		//startNextLevel();
	});
	
	 jQuery(".cont_btn").click(function() {    
		
		if(shapeOrigin=='Allowed'){ isBonus=1;
		if(currentStage == 5){ $j("#gloss_btn,#help_btn,#menu_btn").hide();
		$j('.trans3').hide();
		$j(".feedback").hide("slide", function() {
			jQuery(".end1").hide();
			jQuery(".end1:eq(2)").show();
			$j('.end2').show("slide");
			transisitions();
		});
		return;
		
		}
		$j(".feedback").hide("slide", function() { $j("#gloss_btn,#help_btn,#menu_btn").hide(); //alert("came");
			if(currentStage==2){$j('.trans3 .lvlScreen:eq(0)').hide();$j('.trans3 .lvlScreen:eq(1)').show();$j('.trans3').show("slide");
			transisitions();
			}
			else if(currentStage==4){$j('.trans3 .lvlScreen:eq(1)').hide();$j('.trans3 .lvlScreen:eq(0)').show();$j('.trans3').show("slide");
			transisitions();
			}
			else startNextLevel();
		});
					
		}else{ isBonus=0;
		startNextLevel();
		}
	});
	EnableMission3();
	enableTools3();
	startMission3()
}

var currentStage = 1;
var MaxScore3 =[710,710,740,740,860];
var coinsStack3 =[3,3,3,3,4];
var coinsValue3 =[70,70,80,80,90];
var coinsImg =["url(images/coin70.png)","url(images/coin70.png)","url(images/coin80.png)","url(images/coin80.png)","url(images/coin90.png)"];
var coinsImgT ="url(images/coin500_orange.png)";
var isBonus =1;
var shapeOrigin='Block';
function enableTools3(){
	//jQuery(CurrentMission+".tool:eq(0)");
	//rightAndge tool
	$j(CurrentMission+'.bucket:eq(0)').append('<select id="bucket1"><option value="">Select Qualifier</option><option value="atleast">At Least</option><option value="lessthan">Less Than</option><option value="morethan">More Than</option><option value="exactly">Exactly</option><option value="all">All</option><option value="no">No</option> </select>');
	
	$j(CurrentMission+'.bucket:eq(1)').append('<select id="bucket2"><option value="">Quantity</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>');
	
	/*old code - shammi
	$j(CurrentMission+'.bucket:eq(2)').append('<select id="bucket3"><option value="">Select Property</option><option value="equal">equal</option><option value="parallel">parallel</option><option value="right">right</option><option value="reflex">reflex</option><option value="obtuse">obtuse</option><option value="acute">acute</option></select>');
	*/
	$j(CurrentMission+'.bucket:eq(2)').append('<select id="bucket3"><option value="">Select Property</option><option value="equal">equal</option><option value="parallel">parallel</option><option value="right">right</option><option value="reflex">reflex</option><option value="obtuse">obtuse</option><option value="acute">acute</option><option value="curved" disabled>curved</option></select>');

	//<option value="" style="display:none" disabled>adjacent sides equal</option><option style="display:none" value="" disabled>opposite sides equal</option>
	
	/*$j(CurrentMission+'.bucket:eq(3)').append('<select id="bucket4"><option value="">Select Attribute</option><option value="sides">sides</option><option value="curved" disabled>curved sides</option><option value="angles">angles</option><option value="pairsofsides">pairs of sides</option></select>');*/
	$j(CurrentMission+'.bucket:eq(3)').append('<select id="bucket4"><option value="">Select Attribute</option><option value="sides">sides</option><option value="angles">angles</option><option value="pairsofsides">pairs of sides</option></select>');
	//setOptionsDimensions
	$j(CurrentMission+'select').selectric().on('change', function() {
			//console.log(""+$j(this)[0].selectedIndex );
			//alert($j(this)[0].selectedIndex);
			if($j(CurrentMission+'#bucket1')[0].selectedIndex ==5 || $j(CurrentMission+'#bucket1')[0].selectedIndex ==6) {
					$j(CurrentMission+'.bucket:eq(1)').hide();
					$j(CurrentMission+'#bucket2').prop('selectedIndex', 0).selectric('refresh');
					if($j(CurrentMission+'#bucket1')[0].selectedIndex ==6) {
						$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
						if($j(this)[0].id=="bucket3" && $j(CurrentMission+'#bucket3')[0].selectedIndex ==7) {
							$j(CurrentMission+"#bucket4 option").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option:eq(0)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option:eq(1)").removeAttr("disabled");
						}else if($j(this)[0].id=="bucket3"){
							//$j(CurrentMission+"#bucket3 option:eq(7)").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}else{
							$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}	
						$j(CurrentMission+'#bucket3').selectric('refresh');
						$j(CurrentMission+'#bucket4').selectric('refresh');
					}
			}else if($j(CurrentMission+'#bucket1')[0].selectedIndex ==1 && $j(CurrentMission+'#bucket2')[0].selectedIndex ==1){
						$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
						if($j(this)[0].id=="bucket3" && $j(CurrentMission+'#bucket3')[0].selectedIndex ==7) {
							$j(CurrentMission+"#bucket4 option").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option:eq(0)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option:eq(1)").removeAttr("disabled");
						}else if($j(this)[0].id=="bucket3"){
							//$j(CurrentMission+"#bucket3 option:eq(7)").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}else{
							$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}	
						$j(CurrentMission+'#bucket3').selectric('refresh');
						$j(CurrentMission+'#bucket4').selectric('refresh');
			}
			else {
				$j(CurrentMission+'.bucket:eq(1)').show();
				$j(CurrentMission+"#bucket3 option:eq(7)").prop("disabled",'disabled');
				$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
				if($j(CurrentMission+"#bucket3 ").prop('selectedIndex')==7)
					$j(CurrentMission+"#bucket3 ").prop('selectedIndex', 0);
				$j(CurrentMission+'#bucket3').selectric('refresh');
				$j(CurrentMission+'#bucket4').selectric('refresh');
					
			};
			if($j(CurrentMission+'#bucket3')[0].selectedIndex ==2){
						if($j(CurrentMission+"#bucket4 ").prop('selectedIndex')==1)
						{$j(CurrentMission+"#bucket4 ").prop('selectedIndex', 0);
						$j(CurrentMission+"#bucket4 ").selectric('refresh');}
				$j(CurrentMission+"#bucket4 option:eq(1)").prop("disabled",'disabled');
				$j(CurrentMission+'#bucket4').selectric('refresh');
			}else{
				$j(CurrentMission+"#bucket4 option:eq(1)").removeAttr("disabled");
				$j(CurrentMission+'#bucket4').selectric('refresh');
			}
			if($j(CurrentMission+'#bucket1')[0].selectedIndex ==5 || $j(CurrentMission+'#bucket1')[0].selectedIndex ==6) {$j(CurrentMission+'.bucket:eq(1)').hide();$j(CurrentMission+'#bucket2').prop('selectedIndex', 0).selectric('refresh');}else $j(CurrentMission+'.bucket:eq(1)').show();
			if($j(CurrentMission+'#bucket1')[0].selectedIndex && $j(CurrentMission+'#bucket4')[0].selectedIndex) {//$j('#bucket2')[0].selectedIndex //&& $j('#bucket3')[0].selectedIndex && 
					$j(CurrentMission+'.ask').show();
				}else{
					$j(CurrentMission+'.ask').hide();
			}
			
							
	});
	CalScore3();
}

function CalScore3(){
	$j(CurrentMission+".coin").prop("coinVal", coinsValue3[currentStage-1]);
	$j(CurrentMission+".coin:eq(7)").prop("coinVal", 500);
}

function EnableMission3(){
	$j(CurrentMission+".ToolMain").hide();
	$j(CurrentMission+".ToolMain2").hide();
	
	jQuery(CurrentMission+".toolA").click(function() { 
		$j(CurrentMission+".toolb").hide();
		$j('.rect').each(function (){
				var imagePath = $j(this).css("background-image").replace(pathURL,"");
				$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
	});
	jQuery(CurrentMission+".tool:eq(3)").click(function() { 
		if($j(this).hasClass('active')){$j(this).removeClass('active');
		$j(CurrentMission+".ToolMain").freetrans('destroy');
		
		$j(CurrentMission+".ToolMain").hide();
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		return;}
		$j(this).addClass('active');
		$j(CurrentMission+".ToolMain").show();
		$j(CurrentMission+".ToolMain").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	});
	jQuery(CurrentMission+".tool:eq(1)").click(function() { 
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool2_selected.png)');
		$j(CurrentMission+".toolb").show();
	});
	jQuery(CurrentMission+".tool:eq(0)").click(function() { 
		//replace here 
		if($j(this).hasClass('active')){
			$j(this).removeClass('active');	
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
			$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");
			
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
			return;
		}
		jQuery(CurrentMission+".toolA").trigger("click");
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
		$j(this).addClass('active');
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
		
		$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");
			
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool1"));
		});
	});

	jQuery(CurrentMission+".tool:eq(2)").click(function() { 
	//replace here 
		if($j(this).hasClass('active')){
			$j(CurrentMission+".ToolMain2").freetrans('destroy');
			$j(CurrentMission+".ToolMain2").hide();
			$j(this).removeClass('active');	
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
			$j('.rect').each(function (){
				var imagePath = $j(this).css("background-image").replace(pathURL,"");
				$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
			return;
		}
		jQuery(CurrentMission+".toolA").trigger("click");

		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			$j(CurrentMission+".ToolMain2").show();
			$j(CurrentMission+".ToolMain2").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
		$j(this).addClass('active');
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
		$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");
			
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool3"));
		});
	});

	jQuery(CurrentMission+".tool2:eq(2)").click(function() { 	
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool1A_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});	
		$j('.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2A"));
		});	
	});
	jQuery(CurrentMission+".tool2:eq(3)").click(function() { 	
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool2D_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
		$j(this).removeClass("active");
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});	
		$j('.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2D"));
		});	
	});
	
	jQuery(CurrentMission+".tool2:eq(1)").click(function() {
 		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool1B_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
		$j('.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2B"));
		});	
	});
	
	jQuery(CurrentMission+".tool2:eq(0)").click(function() { 
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool1C_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
	
		$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2C"));
		});	
	}); 
	/* $j('.grid').ruler({
        vRuleSize: 0,
        hRuleSize: 0,
        showCrosshair : true,
        showMousePos: true
    });  */
	
	$j(CurrentMission+'.ask').on('click', function() { $j(".blockedEff").hide();$j(".allowedEff").hide();
		var statment =$j('#bucket1>option:selected').text() +' '+$j('#bucket2>option:selected').val() +' ' +$j('#bucket3>option:selected').val()+' ' +$j('#bucket4>option:selected').text() +'?';
		var QuestionText = 'Send Agent having ' +statment.toLowerCase();
		var ResponseText= "";//getResponse($j('#bucket1>option:selected').val(),$j('#bucket2>option:selected').val(), $j('#bucket3>option:selected').val(),$j('#bucket4>option:selected').val());
		GenerateShape($j('#bucket1>option:selected').val(),$j('#bucket2>option:selected').val(), $j('#bucket3>option:selected').val(),$j('#bucket4>option:selected').val());
		var QuestionDiv ='<div class="questionField" style="position: relative; margin: 0px;  width: 690px; margin: 5px; height: 20px; right: auto; bottom: auto; "><div class="questionText" style="position: absolute;    text-align: left; margin: 0px; left: 0px; top: 0px; width: 525px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 14px; color:#2d2b1a; font-weight: 700; text-decoration: none;">'+QuestionText+'</div><div class="questionResponse" style="position: absolute; margin: 0px; left: 518px; top: 0px; width: 160px; height: 20px; right: auto; bottom: auto; opacity:0.4;  font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #2d2b1a; font-weight: 700; text-decoration: none; text-align: right;">'+ResponseText+'</div><div class="questionLine" style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0);  background-color: rgb(50, 133, 180);"></div></div>';
		$j(CurrentMission+'.quest').prepend(QuestionDiv);
	/* 	$j(CurrentMission+'.sample').hide();
		$j(CurrentMission+'.quest').prepend(QuestionDiv);
		if(ResponseText == "Yes" || ResponseText == "No" ){
		var feedBackDiv ='<div class="feedbackStatment" resp="'+ResponseText+'" statment="'+queryString+'" style="position: relative; margin: 5px;   width: 336px; height: 23px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateZ(0px);"><div class="statmentText" style="position: absolute; margin: 0px; left: 18px; top: 0px; width: 213px; height: 20px; right: auto; bottom: auto; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(255, 255, 255); font-weight: 700; text-decoration: none;">'+statment+'</div><div style="position: absolute; margin: 0px; left: 213px; top: 0px; width: 95px; height: 20px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+ResponseText+'</div><div style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(50, 133, 180);"></div><div class="spot" style="position: absolute; margin: 0px; left: 0px; top: 1px; width: 13px; height: 13px; right: auto; bottom: auto; border-radius: 50%; border: 0px none rgb(0, 0, 0);  background-color: #1dc105;"></div></div>';
		$j(CurrentMission+'.quest2').prepend(feedBackDiv);
		} */
	});
	$j(CurrentMission+".tool2:eq(2)").qtip({    content: {text: 'Obtuse Angle Marker'}	});
	$j(CurrentMission+".tool2:eq(1)").qtip({    content: {text: 'Right Angles'}	});
	$j(CurrentMission+".tool2:eq(0)").qtip({    content: {text: 'Acute Angle Marker'}	});
	$j(CurrentMission+".tool2:eq(3)").qtip({    content: {text: 'Reflex Angle Marker'}	});
}

function shuffle(o){
 for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
 return o;
}

function callbackPuff3(){
	if(currentScore>0){
		$j(this).effect( "puff", {}, 300); 
		currentScore = currentScore- $j(this).prop("coinVal")
		$j(".scoretxt").html(currentScore);
		$j(".scoretxt").effect( "highlight",200);
	}
	if(currentScore <=0){
		alertify.alert('You have exhausted all tokens. Please Replay this level.');			
	}
}

function GenerateShape(b1,b2,b3,b4){
	if(b2=="") b2 ="1";
	if(b3=="") b3 ="empty";
	queryString = b1+b2+b3+b4;
	//alert(queryString);
	//if statement is invalid  then "Invalid " for figure 1 then its invalid deduct tokens
	//alert(finalQuestionsXML);
	var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent();
	valueObj = XMLNode.find("fig001").text();
	
	if(valueObj =="Invalid")
	{ 
		countNA++;
		alertify.error('That is not a valid property!' );
		loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanInvalid").play(1);
		var filepath = "shapes/00/00_normal.svg";
		$j(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		calculateScore3();
		return;
	}
	// we will have to skip there shape 
	//if (valueObj =="TBD"){ countTBD++; return "Don't Know";}
	//if (valueObj =="NA"){ countIDK++; return "I don't understand";}
	if(statmentIS == queryString){
		//alert('Eqal');
		//get from allowed set 
		//alert("Allowed");
		shapeOrigin='Allowed';
		$(".questionResponse:first").text("Allowed");
		var value =$j(AllowedSet[allowedCount]).text();
		var filename = (value).substring(4,6);
		var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission+'.genrate .rect').parent().prop("fig","fig0"+filename);
		allowedCount++;
	}else{
		//get from blocked set
		//alert("Blocked");
		//alert('Sending From Block');
		$(".questionResponse:first").text("Blocked");
		var value ="NF";
		shapeOrigin='Blocked';
		///////////////////////Generate Shape 
		$j(BlockedSet).each( function(key, vv) { 
			//console.log(value);
			//alert($j(vv).text());
			valueObj = XMLNode.find($j(vv).text()).text();
			if(valueObj == "Y"){
				value = $j(vv).text();BlockVisible.push(value);
				BlockedSet.splice(key,1);
				return false; 
			} 		
		});
		if(value == "NF"){
			//alert("No Agent available At this time. (In Block) take From Allowed. IF the condition matched then for all It will be Case Solved");
			//alert('Sending From Allowed');
			shapeOrigin='Allowed';
			$j(AllowedSet).each( function(key, vv) { 
				if(key<4)  return true;
				//alert($j(vv).text());
				valueObj = XMLNode.find($j(vv).text()).text()
				if(valueObj == "Y"){ 
					console.log(valueObj );
					value = $j(vv).text();
					BlockVisible.push(value);
					AllowedSet.splice(key,1);
					return false; 
				} 		
			});
			$(".questionResponse:first").text("Allowed");
		}
		if(value == "NF"){ alert("No Agent available At this time. "); return;
			$(".questionResponse:first").text("Can't Generate");
		}
		///////////////
		//BlockVisible.push(value);
		var filename = (value).substring(4,6);
		var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission+'.genrate .rect').parent().prop("fig","fig0"+filename);
		blockedCount++;
		// if i cant find it in blocked
	}
	bindSend(value);
	/* var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent();
		valueObj = XMLNode.find(fig).text();
		if(valueObj=="Y"||valueObj=="N"){CurrentClue =true;

		$j('#bucket2,#bucket3,#bucket4,#bucket1').prop('selectedIndex', 0).selectric('refresh');
		} */
}

function calculateScore3(){
	if(currentScore>0){
		if(isBonus==1){
			$j(".mission3 .coin:eq(7)").effect( "pulsate", {}, 500, callbackPuff3 );
			isBonus=0;
		}else{
			$j(".mission3 .coin:eq("+--stageCoins+")").effect( "pulsate", {}, 500, callbackPuff3); 	
		}
	}
}

function unbindSend(){
	$j(CurrentMission+' .btn_discard').unbind('click');
	$j(CurrentMission+' .done').unbind('click');
	$j(CurrentMission+' .done').css("opacity",0.3);
	$j(CurrentMission+' .btn_discard').css("opacity",0.3);
	
}

function bindSend(targetShape){
	unbindSend();
	$j(CurrentMission+' .done').css("opacity",1);
	$j(CurrentMission+' .btn_discard').css("opacity",1);
	///////////////////
	$j(CurrentMission+' .done').click(function (){
		unbindSend();
		if(statmentIS == queryString){
			//alert("Correct ! Game end here.Play Next Level");
			showFeedback();
			//alert("Feedback Screen Will Be Shown Here");
			//startNextLevel();
		}	
		else{
			  //alert('Shape Origin'+shapeOrigin+' and TargetShape is'+targetShape);	
			  var allPropertyAllowedShape;
			  var allPropertyBlockedShape;
			  var found=0;
			  $j(AllowedSet).each( function(key, vv) { 
					if(key>3){ return true;}
					allPropertyAllowedShape =finalQuestionsXML.find($j(vv).text()).filter(function(){
						var value = $(this).text();
						return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
					}).parent().find('mergedBucket:contains('+queryString+')');
					
					$j(allPropertyAllowedShape).each(function(key, vv) {	
						//alert('In Allowed'+key+','+vv+','+found);
						found++;
					});
			  });	
			  if(found==4){
				  var found=0;
				  //alert('Check:property is in allowed, it should not be in blocked then its a success');
				  $j(BlockedSet).each( function(key, vv) { 
					if(key>3){ return true;}
					allPropertyBlockedShape =finalQuestionsXML.find($j(vv).text()).filter(function(){
						var value = $(this).text();
						return (value == "N"); // returns boolean - true will keep this item in the filtered collection
					}).parent().find('mergedBucket:contains('+queryString+')');
					
					$j(allPropertyBlockedShape).each(function(key, vv) {	
						//alert('In Blocked'+key+','+vv+','+found);
						found++;
					});
				 });
			  }
			  if(found==4){
				  shapeOrigin=='Allowed';
			  } 
			  if(shapeOrigin=='Blocked'){
				 showIncorrect();
				 calculateScore3(); 
			  }else{
				   showFeedback();
				  //startNextLevel();
			  } 
		}
		
	});
	$j(CurrentMission+' .btn_discard').click(function (){
		unbindSend();
		if(statmentIS == queryString){
			  showIncorrect(1);
			  calculateScore3();
		}
		else{
			  //alert('Shape Origin'+shapeOrigin);
			  if(shapeOrigin=='Allowed'){
				showIncorrect(1);
				calculateScore3();
			  }else{
				  //alert("Correct! ");	
			  }
		}
		shapeOrigin='Blocked';
	});
}

function showFeedback(){
$j(".allowedEff").show();
//$j( ".genrate" ).addClass("ui-effects-transfer_allow");
$j( ".genrate" ).effect( "transfer",{ to: ".allowed", className: "ui-effects-transfer_allow" }, 800).delay(500).effect( "transfer",{ to: ".allowed", className: "ui-effects-transfer_allow" }, 500);
	$j(".feed:eq(2) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(2) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(2) .star:eq(0)").html(" "+ (isBonus?'1':'0'));
	gameScore+=isBonus?1:0;
	$j(CurrentMission+" .star:eq(0)").html(" "+ gameScore);
	loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanAnimation").play(1);
setTimeout(function(){ /* $j( ".genrate" ).removeClass("ui-effects-transfer_allow");  */
$j(".allowedEff").hide();
/* { $j(".mtch_txt").html(""); $j(".job").html("Nice Try!");$j(".solved").html("Please attempt again!");
	$j( ".additionalTextVal").html("Try to solve the case again.");
	$j( ".additionalTextVal").hide();
	}else{
 */	
	$j(".mtch_txt").html("Allowed!"); $j(".job").html("Great Job!");$j(".solved").html("You solved the case!");
	 $j( ".additionalTextVal").show();
//	}
		var suspected =$j( '.genrate .rect').parent().prop("fig");
		var sp = suspected.replace("fig0","");
		$j(".feed:eq(2) "+".matchShape").css('background-image',' url("	shapes/'+sp+'/'+sp+'_normal.svg"');
	$j( ".additionalTextVal").html("Looks like you need to find a suitable Judic agent for another factory.");
	$j("#feedback").toggle("slide", function(){ jQuery(".feed").hide();  jQuery(".feed:eq(2)").show();});
	
	}, 2000);
	$j(".feed:eq(2) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(2) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(2) "+".scoretxt").html(currentScore);
	$j(".feed:eq(2) "+".scoretxt").effect( "highlight",200);
}

function showIncorrect(tt){ 
loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanAnimation").play(1);

/* mission3 mainGameUI 
loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanInvalid").play(1)
invalidEff
animEff
allowedEff
blockedEff */
if(tt){



	//$j( ".genrate" ).addClass("ui-effects-transfer_block");
	setTimeout(function(){ /* $j( ".genrate" ).removeClass("ui-effects-transfer_block"); */ $j(".blockedEff").show(); }, 2000);
}else{
//$j( ".genrate" ).addClass("ui-effects-transfer_block");
$j( ".genrate" ).effect( "transfer",{ to: ".blocked", className: "ui-effects-transfer_block" }, 800).delay(800).effect( "transfer",{ to: ".blocked", className: "ui-effects-transfer_block" }, 500)
//$j( ".genrate" ).css("border" ,"3px solid #99cc00")
setTimeout(function(){ /* $j( ".genrate" ).removeClass("ui-effects-transfer_block"); */ $j(".blockedEff").show();}, 2000);
}
}
var	allowedCount = 4;
var	blockedCount = 4;
var BlockVisible =[];
var stageShapesMin=1;
var stageShapesMax=4;
var currentLevelDisplay3=[1,1,2,2,3,3];
function startMission3(){ shapeOrigin='Blocked'; $j("#gloss_btn,#help_btn,#menu_btn").show();
	AllowedSet=[];;
	BlockedSet=[];
	ruleIs = "";
	statmentIS = "";
	allowedCount = 4;
	blockedCount = 4;
	countNA = 0;
	queryString = "";
	valueObj =""; 
	CurrentSet = [];
	currentShape ="fig001";
	isMatched = false;
	stageCoins = coinsStack3[currentStage-1];
	$j(CurrentMission+" .coin:gt("+(stageCoins-1)+")").hide();
	$j(CurrentMission+" .coin:eq(7)").show();
	$j(CurrentMission+" .coin:lt(7)").css("background-image",coinsImg[currentStage-1]);
	 $j(".feed:eq(2) .coinToken:eq(0)").css("background-image",coinsImgT[currentStage-1]);
	 $j(".feed:eq(2) .coinToken:eq(1)").css("background-image",coinsImg[currentStage-1]);
	$j(CurrentMission+".mission").html("MISSION 3");
	$j(CurrentMission+".level").html("Level "+currentLevelDisplay3[currentStage-1]);
	currentScore =MaxScore3[currentStage-1];
	if(isBonus==1){
		$j(CurrentMission+".coin:eq(7)").show();
	}else{
		$j(CurrentMission+".coin:eq(7)").hide();
		currentScore = currentScore- $j(CurrentMission+" .coin:eq(7)").prop("coinVal");
	}
	$j(CurrentMission+".scoretxt").html(currentScore);
	$j(CurrentMission+" .btn_done, .btn_discard").css("opacity",0.3);
 	var filepath = "shapes/00/00_normal.svg";
	$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		
	ReturnStage1Shpes (randomNo(stageShapesMin,stageShapesMax));
	shuffle(AllowedSet)
	shuffle(BlockedSet)
	//BlockedSet.shuffle();
	
	$j(CurrentMission+' .allowed .rect').each(function (index){
	value = $j(AllowedSet[index]).text();
	var filename = (value).substring(4,6);
	var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(this).css('background-image',' url("'+filepath+'"');
		$(this).parent().prop("fig","fig0"+filename);
		
	});
	
	$j(CurrentMission+' .blocked .rect').each(function (index){
	value = $j(BlockedSet[index]).text();
	BlockVisible.push(value);
	 /* BlockedSet.find(value).parent().remove(); */
	 BlockedSet.splice(index,1);
 	 var filename = (value).substring(4,6);
	 var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
	 $(this).css('background-image',' url("'+filepath+'"');
	 $(this).parent().prop("fig","fig0"+filename);
	});
}

function randomNo(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

var AllowedSet;
var BlockedSet;
var ruleIs = "";
var statmentIS = "";
function ReturnStage1Shpes (rndom){ 
	//rndom=1;
	switch (rndom){ 
			case 1: { //At least one curved side
				statmentIS ="atleast1curvedsides";
				ruleIs = "At least one curved side";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				
				BlockedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "N"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			}
			break; 
			case 2: { //No curved sides yes
				ruleIs = "No curved sides yes";
				statmentIS ="no1curvedsides";
				AllowedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "N"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				
				BlockedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			}
		    break; 
			case 3:
			{ 
				//Exactly n sides (3>= n <= 5)
				var minNumber =3; var  maxNumber =6
				var n= randomNo(3,6);
				ruleIs = "Exactly n sides (3>= n <= 6). n equals "+n;
				statmentIS ="exactly"+n+"emptysides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value == n)//(value >= minNumber && value <= maxNumber); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				BlockedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value < n || value > n ); 
				}).parent().find("ShapeID");
			}
			break;
			case 4: 
			{ //
				ruleIs = "All sides equal";
				statmentIS ="all1equalsides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('allSideEqual').filter(function(){
					var value = $(this).text();
					return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				
				BlockedSet =dataShapeXML.find('allSideEqual').filter(function(){
					var value = $(this).text();
					return (value == "N"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
					
			}
			break;
		   case 5:
			{
				statmentIS ="exactly1rightangles";
				ruleIs = "Exactly 1 right angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value == "1"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value <1 || value >1 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");				
				
			}
			break;
			case 6:{
				statmentIS ="exactly2rightangles";
				ruleIs = "Exactly 2 right angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value == "2"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value <2 || value >2 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				//Exactly 2 right angles
				//At least 1 right angle
				//At least 1 reflex angle
			}
			break;
			case 7:
			{
				statmentIS ="atleast1rightangles";
				ruleIs = "At least 1 right angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value <1  ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
		  }
		  break;
		  case 8:{
				statmentIS ="atleast1reflexangles";
				ruleIs = "At least 1 reflex angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('reflexAngle').filter(function(){
				var value = $(this).text();
				return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('reflexAngle').filter(function(){
					var value = $(this).text();
					return (value <1  ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
		}
		break;
		 case 9:{
				statmentIS ="atleast1obtuseangles";
				ruleIs = "At least one obtuse angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('obtuseAngle').filter(function(){
				var value = $(this).text();
				return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('obtuseAngle').filter(function(){
					var value = $(this).text();
					return (value < 1  ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 10:{
				statmentIS ="exactly1equalpairsofsides";
				ruleIs = "Exactly 1 pair of sides equal";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
					var value = $(this).text();
				return (value != 1 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
		}
		case 11:{
				statmentIS ="exactly2equalpairsofsides";
				ruleIs = "Exactly 2 pair of sides equal";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 2 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		case 12:{
				statmentIS ="exactly1parallelpairsofsides";
				ruleIs = "Exactly 1 pair of sides parallel";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value != 1 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 13:{
				statmentIS ="atleast2parallelpairsofsides";
				ruleIs = "At least 2 pairs of sides parallel";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value >= 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value < 2 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 14:{
				statmentIS ="no1parallelpairsofsides";
				ruleIs = "No pair of sides parallel";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value == 0); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value > 0 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 15:{
				statmentIS ="exactly3emptysides";
				ruleIs = "Exactly 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 16:{
				statmentIS ="exactly3emptysides";
				ruleIs = "Exactly 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 0); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 0); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 17:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 18:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('obtuseAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('obtuseAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 19:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('reflexAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('reflexAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 20:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 21:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 2); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 22:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 23:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('pairsParallelSides').filter(function(){
					var value = $(this).text();
					return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value != 2); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 24:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 25:{
				statmentIS ="exactly4emptysides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('pairsParallelSides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 26:{
				statmentIS ="atleast3emptysides";
				ruleIs = "At least 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value >= 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 27:{
				statmentIS ="atleast3emptysides";
				ruleIs = "At least 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value >= 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('pairsParallelSides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
	}
}

function resetLevel3(){
$j(CurrentMission+".toolb").hide();
$j(".blockedEff").hide();
$j(".allowedEff").hide();
	//isBonus=0;
	//alert('Reset');
	$j('.ask').hide();
	$j('.bucket').show();
	$j(".quest").empty();
	$j(".bucket").empty();
	$j(".tool.active").trigger("click");
	$j(".mission3 .coin").show();
	var filepath = "shapes/00/00_normal.svg";
	$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
	enableTools3();
	startMission3()
}

function startNextLevel(){
$j("#trans3").hide();
$j("#feedback").hide();
	currentStage=currentStage+1;
	//alert('Next Level is'+currentStage);
	switch(currentStage){
		case 1: {stageShapesMin=1; stageShapesMax=4;}break;
		case 2: {stageShapesMin=5; stageShapesMax=8;}break;
		case 3: {stageShapesMin=9; stageShapesMax=14};break;
		case 4: {stageShapesMin=15; stageShapesMax=19};break;
		case 5: {stageShapesMin=20; stageShapesMax=27};break;
	}
	//alert('Stage Bound Cases Are'+stageShapesMin+','+stageShapesMax);
	if(currentStage == 6){currentStage =1; alertify.alert("Mission Complete!");  $j(".nextcase").hide();}
	$j(".play").hide();
	$j('.ask').hide();
	$j('.bucket').show();
	$j(".quest").empty();
	$j(".bucket").empty();
	$j(".tool.active").trigger("click");
	$j(".mission3 .coin").show();
	var filepath = "shapes/00/00_normal.svg";
	$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
	enableTools3();
	startMission3();
}
//btn_done, btn_discard
///////////////Common elements 
/* var array1  = [1, 2, 3, 4, 5, 6],
    array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var common = $.grep(array1, function(element) {
    return $.inArray(element, array2 ) !== -1;
});
console.log(common); // returns [1, 2, 3, 4, 5, 6];
var array3 = array2.filter(function(obj) { return array1.indexOf(obj) == -1; });
// returns [7,8,9];*/