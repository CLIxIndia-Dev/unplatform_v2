
/**************************************************
Custom SCORM Code - Begins
**************************************************/
var LMSCourseStaff = true;
var startTime = 0;
var LMSTracking = false;
var dataReady = false;
var courseId= "CenovusSAGD-Game";
var TennantID = 0;
var status = "";
var student_id ="";
var student_name ="";
var score = 0;

var isManagerial =true;
var tempScore = 0;

var sessionTime;
var lessonLocation = "";
var trackingInitCtr =0;
function initAPI()
{
//testlms
/*
level =2;
var SuspendString =  "{shammi club},"+"{2}";
var getArrayOfString  = SuspendString.match(/{([^}]*)}/g);		
var subs = getArrayOfString[0];

teamName= getArrayOfString[0].substring(1, subs.length-1); 
subs = getArrayOfString[1];
teamSelected= parseInt(subs.substring(1, subs.length-1));
*/


	if (LMSTracking == true) {
		apiInited = doInitialize();
		if ((apiInited == "1") || (apiInited == "true") || (apiInited == true)) {
		
			callGetValue();
		} else {
			trackingInitCtr++;
			if (trackingInitCtr < 3)
				timerID = setTimeout("initAPI()",300);
		}
	} else {
		dataReady = true;
		init();
	}
}
function callGetValue()
{
	startTimer();
	status = doGetValue("cmi.core.lesson_status");
	student_id = doGetValue("cmi.core.student_id");	
	student_name = doGetValue("cmi.core.student_name");
	score = doGetValue("cmi.core.score.raw");
	
	if(score>0)tempScore = (score*8)/100;
	//alert((score>0)+"score is "+tempScore);
	var les = doGetValue("cmi.core.lesson_location");
	if(parseInt(les)>0){level =parseInt(les);{
	lessonLocation =level;
	currentScene="scene"+level;
	}
	//also save  "{"+avatar_gender+"},"+"{"+oil_score+"},"+"{"+carbon_score+"},"+"{"+barWidth_oil+"},"+"{"+barWidth_carbon+"},"+"{"+avatarName+"}"
	var SuspendString = doGetValue("cmi.suspend_data");
	if (SuspendString != null||SuspendString!=""){
		var getArrayOfString  = SuspendString.match(/{([^}]*)}/g);
		if(getArrayOfString != null && getArrayOfString.length>=1){		
			var subs = getArrayOfString[0];
			avatar_gender= getArrayOfString[0].substring(1, subs.length-1); 
			subs = getArrayOfString[1];
			oil_score= parseInt(subs.substring(1, subs.length-1));
			subs = getArrayOfString[2];
			carbon_score= parseInt(subs.substring(1, subs.length-1));
			subs = getArrayOfString[3];
			barWidth_oil= parseInt(subs.substring(1, subs.length-1));
			subs = getArrayOfString[4];
			barWidth_carbon= parseInt(subs.substring(1, subs.length-1));
			subs = getArrayOfString[5];
			avatarName= (subs.substring(1, subs.length-1));
			

		}
	}
	
	}
	dataReady = true;	
	doSetValue("cmi.core.lesson_status", "incomplete");
	//level(status, lessonLocation);
}
function startTimer()
{
	startTime = new Date().getTime();
}
/*function getTimeSpent()
{
	var date = new Date();
	var logoffTime = date.getTime();
	timeDiff = logoffTime - startTime;
	sec = timeDiff/1000;
	tmp = sec/3600;
	hrs = Math.floor(tmp);
	min1 = (tmp - hrs) * 60;
	min = Math.floor(min1);
	sec1 = (min1-min)*60;
	sec = Math.floor(sec1);
	if (hrs < 10) hrs = "0" + hrs;
	if (min < 10) min = "0" + min;
	if (sec < 10) sec = "0" + sec;
	time = hrs + ":" + min + ":" + sec;
	return time;
}*/

function getTimeSpent()
{
	var date = new Date();
	var logoffTime = date.getTime();
	timeDiff = logoffTime - startTime;
	sec = timeDiff/1000;
	tmp = sec/3600;
	hrs = Math.floor(tmp);
	min1 = (tmp - hrs) * 60;
	min = Math.floor(min1);
	sec1 = (min1-min)*60;
	sec = Math.floor(sec1);
	//if (hrs < 10) hrs = "0" + hrs;
	//if (min < 10) min = "0" + min;
	//if (sec < 10) sec = "0" + sec;
	//time = hrs + ":" + min + ":" + sec;
	var addHrs = hrs * 60;
	if(hrs<1)
		return Math.ceil(min1);
	else
		return Math.ceil(addHrs+min1);
}


function getTimeSpent2()
{
	var date = new Date();
	var logoffTime = date.getTime();
	timeDiff = logoffTime - startTime;
	sec = timeDiff/1000;
	tmp = sec/3600;
	hrs = Math.floor(tmp);
	min1 = (tmp - hrs) * 60;
	min = Math.floor(min1);
	sec1 = (min1-min)*60;
	sec = Math.floor(sec1);
	if (hrs < 10) hrs = "0" + hrs;
	if (min < 10) min = "0" + min;
	if (sec < 10) sec = "0" + sec;
	time = hrs + ":" + min + ":" + sec;
	return time;
}/*
function doGameScore(){//argStatus){

	if(LMSTracking == true)
	{
		sessionTime = getTimeSpent2();
		doSetValue("cmi.core.session_time", sessionTime);
		doSetValue("cmi.core.lesson_status", "completed"); //incomplete or completed
		doSetValue("cmi.core.score.raw", score);
		doSetValue("cmi.core.lesson_location", "0");
		doSetValue("cmi.suspend_data", getCharacter());
		//doCommit();
	//	doFinish();
	}

}*/
function doQuestionScore(){
	if(LMSTracking == true)
	{
		sessionTime = getTimeSpent2();		
		doSetValue("cmi.core.session_time", sessionTime);
		//doSetValue("cmi.core.lesson_status", "incomplete"); //incomplete or completed
		var temp = ((lessonLocation/8)*100).toFixed(2);
		if (temp >100)temp =100;
		doSetValue("cmi.core.score.raw", temp);
		doSetValue("cmi.core.lesson_location", lessonLocation);		
		doSetValue("cmi.suspend_data", "{"+avatar_gender+"},"+"{"+oil_score+"},"+"{"+carbon_score+"},"+"{"+barWidth_oil+"},"+"{"+barWidth_carbon+"},"+"{"+avatarName+"}");
	//	doCommit();
	//	doFinish();
	}
}
var isRefresh =false;
function doRestart(){
isRefresh=true;
restaart();
confirmationMessage ="The game will restart from the beginning, Status will be rest to incomplete!";
doQuit();
}
function doQuit(){

	if(LMSTracking == true)
	{
	//	sessionTime = getTimeSpent2();
	//	doSetValue("cmi.core.session_time", sessionTime);
		//doSetValue("cmi.core.lesson_status", argStatus); //incomplete or completed
		//score = tempScore +correctAnswers.length *100 + totalGoals * 200 + achiCount* 500 - inCorrecttAnswers*20;
	//	doSetValue("cmi.core.score.raw",((score/10000)*100).toFixed(2));
	//	doSetValue("cmi.core.lesson_location", level);
	//	if(level==4)
	//	doSetValue("cmi.core.lesson_status", "completed");
		doQuestionScore();
		doCommit();
		doFinish();
	}
	//do not call when restart
	if(isRefresh)location.reload();
	else
	parent.top.close();
}
/**************************************************
Custom SCORM Code - Ends
**************************************************/