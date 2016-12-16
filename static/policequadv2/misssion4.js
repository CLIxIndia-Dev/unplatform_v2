  var squares4 = [
    [0,3,0,2,1,2,1,3],
    [0,3,0,1,2,1,2,3],
    [0,3,0,0,3,0,3,3],
    [0,2,0,1,1,1,1,2],
    [0,2,0,0,2,0,2,2],
    [0,2,1,0,3,1,2,3],
    [0,2,1,1,2,2,1,3],
    [0,1,0,0,1,0,1,1],
    [0,1,1,0,2,1,1,2],
    [0,1,2,0,3,2,1,3],
    [1,3,1,2,2,2,2,3],
    [1,3,1,1,3,1,3,3],
    [1,2,1,1,2,1,2,2],
    [1,2,1,0,3,0,3,2],
    [1,2,2,1,3,2,2,3],
    [1,1,1,0,2,0,2,1],
    [1,1,2,0,3,1,2,2],
    [2,3,2,2,3,2,3,3],
    [2,2,2,1,3,1,3,2],
    [2,1,2,0,3,0,3,1]];

  var squares5 = [
[0,4,0,3,1,3,1,4],
[0,4,0,2,2,2,2,4],
[0,4,0,1,3,1,3,4],
[0,4,0,0,4,0,4,4],
[0,3,0,2,1,2,1,3],
[0,3,0,1,2,1,2,3],
[0,3,0,0,3,0,3,3],
[0,3,1,0,4,1,3,4],
[0,3,1,1,3,2,2,4],
[0,3,1,2,2,3,1,4],
[0,2,0,1,1,1,1,2],
[0,2,0,0,2,0,2,2],
[0,2,1,0,3,1,2,3],
[0,2,1,1,2,2,1,3],
[0,2,2,0,4,2,2,4],
[0,2,2,1,3,3,1,4],
[0,1,0,0,1,0,1,1],
[0,1,1,0,2,1,1,2],
[0,1,2,0,3,2,1,3],
[0,1,3,0,4,3,1,4],
[1,4,1,3,2,3,2,4],
[1,4,1,2,3,2,3,4],
[1,4,1,1,4,1,4,4],
[1,3,1,2,2,2,2,3],
[1,3,1,1,3,1,3,3],
[1,3,1,0,4,0,4,3],
[1,3,2,1,4,2,3,4],
[1,3,2,2,3,3,2,4],
[1,2,1,1,2,1,2,2],
[1,2,1,0,3,0,3,2],
[1,2,2,0,4,1,3,3],
[1,2,2,1,3,2,2,3],
[1,2,3,1,4,3,2,4],
[1,1,1,0,2,0,2,1],
[1,1,2,0,3,1,2,2],
[1,1,3,0,4,2,2,3],
[2,4,2,3,3,3,3,4],
[2,4,2,2,4,2,4,4],
[2,3,2,2,3,2,3,3],
[2,3,2,1,4,1,4,3],
[2,3,3,2,4,3,3,4],
[2,2,2,1,3,1,3,2],
[2,2,2,0,4,0,4,2],
[2,2,3,1,4,2,3,3],
[2,1,2,0,3,0,3,1],
[2,1,3,0,4,1,3,2],
[3,4,3,3,4,3,4,4],
[3,3,3,2,4,2,4,3],
[3,2,3,1,4,1,4,2],
[3,1,3,0,4,0,4,1]];

var squares5axis = [
[0,4,0,3,1,3,1,4],
[0,4,0,2,2,2,2,4],
[0,4,0,1,3,1,3,4],
[0,4,0,0,4,0,4,4],
[0,3,0,2,1,2,1,3],
[0,3,0,1,2,1,2,3],
[0,3,0,0,3,0,3,3],
[0,2,0,1,1,1,1,2],
[0,2,0,0,2,0,2,2],
[0,1,0,0,1,0,1,1],
[1,4,1,3,2,3,2,4],
[1,4,1,2,3,2,3,4],
[1,4,1,1,4,1,4,4],
[1,3,1,2,2,2,2,3],
[1,3,1,1,3,1,3,3],
[1,3,1,0,4,0,4,3],
[1,2,1,1,2,1,2,2],
[1,2,1,0,3,0,3,2],
[1,1,1,0,2,0,2,1],
[2,4,2,3,3,3,3,4],
[2,4,2,2,4,2,4,4],
[2,3,2,2,3,2,3,3],
[2,3,2,1,4,1,4,3],
[2,2,2,1,3,1,3,2],
[2,2,2,0,4,0,4,2],
[2,1,2,0,3,0,3,1],
[3,4,3,3,4,3,4,4],
[3,3,3,2,4,2,4,3],
[3,2,3,1,4,1,4,2],
[3,1,3,0,4,0,4,1]];

  var parallelograms4 = [
[0,3,0,2,1,0,1,1],
[0,3,0,2,1,1,1,2],
[0,3,0,2,2,0,2,1],
[0,3,0,2,2,1,2,2],
[0,3,0,2,3,0,3,1],
[0,3,0,2,3,1,3,2],
[0,3,0,1,1,0,1,2],
[0,3,0,1,2,0,2,2],
[0,3,0,1,3,0,3,2],
[0,3,1,0,2,0,1,3],
[0,3,1,0,3,0,2,3],
[0,3,1,1,2,0,1,2],
[0,3,1,1,2,1,1,3],
[0,3,1,1,3,1,2,3],
[0,3,1,2,2,2,1,3],
[0,3,1,2,3,1,2,2],
[0,3,1,2,3,2,2,3],
[0,3,2,0,3,0,1,3],
[0,3,2,1,3,1,1,3],
[0,3,2,2,3,2,1,3],
[0,2,0,1,1,0,1,1],
[0,2,0,1,1,2,1,3],
[0,2,0,1,2,0,2,1],
[0,2,0,1,2,2,2,3],
[0,2,0,1,3,0,3,1],
[0,2,0,1,3,2,3,3],
[0,2,0,0,1,1,1,3],
[0,2,0,0,2,1,2,3],
[0,2,0,0,3,1,3,3],
[0,2,1,0,2,0,1,2],
[0,2,1,0,2,1,1,3],
[0,2,1,0,3,0,2,2],
[0,2,1,1,2,1,1,2],
[0,2,1,1,3,0,2,1],
[0,2,1,1,3,1,2,2],
[0,2,1,1,3,2,2,3],
[0,2,1,2,2,3,1,3],
[0,2,1,2,3,3,2,3],
[0,2,2,0,3,0,1,2],
[0,2,2,1,3,1,1,2],
[0,2,2,1,3,2,1,3],
[0,2,2,2,3,3,1,3],
[0,1,0,0,1,1,1,2],
[0,1,0,0,1,2,1,3],
[0,1,0,0,2,1,2,2],
[0,1,0,0,2,2,2,3],
[0,1,0,0,3,1,3,2],
[0,1,0,0,3,2,3,3],
[0,1,1,0,2,0,1,1],
[0,1,1,0,2,2,1,3],
[0,1,1,0,3,0,2,1],
[0,1,1,0,3,1,2,2],
[0,1,1,1,2,2,1,2],
[0,1,1,1,2,3,1,3],
[0,1,1,1,3,2,2,2],
[0,1,1,1,3,3,2,3],
[0,1,2,0,3,0,1,1],
[0,1,2,0,3,1,1,2],
[0,1,2,1,3,2,1,2],
[0,1,2,1,3,3,1,3],
[0,1,2,2,3,3,1,2],
[0,0,1,0,2,1,1,1],
[0,0,1,0,2,2,1,2],
[0,0,1,0,2,3,1,3],
[0,0,1,0,3,1,2,1],
[0,0,1,0,3,2,2,2],
[0,0,1,0,3,3,2,3],
[0,0,1,1,2,3,1,2],
[0,0,2,0,3,1,1,1],
[0,0,2,0,3,2,1,2],
[0,0,2,0,3,3,1,3],
[0,0,2,1,3,2,1,1],
[1,3,1,2,2,0,2,1],
[1,3,1,2,2,1,2,2],
[1,3,1,2,3,0,3,1],
[1,3,1,2,3,1,3,2],
[1,3,1,1,2,0,2,2],
[1,3,1,1,3,0,3,2],
[1,3,2,0,3,0,2,3],
[1,3,2,1,3,0,2,2],
[1,3,2,1,3,1,2,3],
[1,3,2,2,3,2,2,3],
[1,2,1,1,2,0,2,1],
[1,2,1,1,2,2,2,3],
[1,2,1,1,3,0,3,1],
[1,2,1,1,3,2,3,3],
[1,2,1,0,2,1,2,3],
[1,2,1,0,3,1,3,3],
[1,2,2,0,3,0,2,2],
[1,2,2,0,3,1,2,3],
[1,2,2,1,3,1,2,2],
[1,2,2,2,3,3,2,3],
[1,1,1,0,2,1,2,2],
[1,1,1,0,2,2,2,3],
[1,1,1,0,3,1,3,2],
[1,1,1,0,3,2,3,3],
[1,1,2,0,3,0,2,1],
[1,1,2,0,3,2,2,3],
[1,1,2,1,3,2,2,2],
[1,1,2,1,3,3,2,3],
[1,0,2,0,3,1,2,1],
[1,0,2,0,3,2,2,2],
[1,0,2,0,3,3,2,3],
[1,0,2,1,3,3,2,2],
[2,3,2,2,3,0,3,1],
[2,3,2,2,3,1,3,2],
[2,3,2,1,3,0,3,2],
[2,2,2,1,3,0,3,1],
[2,2,2,1,3,2,3,3],
[2,2,2,0,3,1,3,3],
[2,1,2,0,3,1,3,2],
[2,1,2,0,3,2,3,3]];

  var rectangles4 = [
    [0,3,0,2,2,2,2,3],
    [0,3,0,2,3,2,3,3],
    [0,3,0,1,1,1,1,3],
    [0,3,0,1,3,1,3,3],
    [0,3,0,0,1,0,1,3],
    [0,3,0,0,2,0,2,3],
    [0,2,0,1,2,1,2,2],
    [0,2,0,1,3,1,3,2],
    [0,2,0,0,1,0,1,2],
    [0,2,0,0,3,0,3,2],
    [0,2,2,0,3,1,1,3],
    [0,1,0,0,2,0,2,1],
    [0,1,0,0,3,0,3,1],
    [0,1,1,0,3,2,2,3],
    [1,3,1,2,3,2,3,3],
    [1,3,1,1,2,1,2,3],
    [1,3,1,0,2,0,2,3],
    [1,3,1,0,3,0,3,3],
    [1,2,1,1,3,1,3,2],
    [1,2,1,0,2,0,2,2],
    [1,1,1,0,3,0,3,1],
    [2,3,2,1,3,1,3,3],
    [2,3,2,0,3,0,3,3],
    [2,2,2,0,3,0,3,2]];

  var rectangles5 = [
[0,4,0,3,2,3,2,4],
[0,4,0,3,3,3,3,4],
[0,4,0,3,4,3,4,4],
[0,4,0,2,1,2,1,4],
[0,4,0,2,3,2,3,4],
[0,4,0,2,4,2,4,4],
[0,4,0,1,1,1,1,4],
[0,4,0,1,2,1,2,4],
[0,4,0,1,4,1,4,4],
[0,4,0,0,1,0,1,4],
[0,4,0,0,2,0,2,4],
[0,4,0,0,3,0,3,4],
[0,3,0,2,2,2,2,3],
[0,3,0,2,3,2,3,3],
[0,3,0,2,4,2,4,3],
[0,3,0,1,1,1,1,3],
[0,3,0,1,3,1,3,3],
[0,3,0,1,4,1,4,3],
[0,3,0,0,1,0,1,3],
[0,3,0,0,2,0,2,3],
[0,3,0,0,4,0,4,3],
[0,3,2,1,3,2,1,4],
[0,3,3,0,4,1,1,4],
[0,2,0,1,2,1,2,2],
[0,2,0,1,3,1,3,2],
[0,2,0,1,4,1,4,2],
[0,2,0,0,1,0,1,2],
[0,2,0,0,3,0,3,2],
[0,2,0,0,4,0,4,2],
[0,2,1,1,3,3,2,4],
[0,2,2,0,3,1,1,3],
[0,1,0,0,2,0,2,1],
[0,1,0,0,3,0,3,1],
[0,1,0,0,4,0,4,1],
[0,1,1,0,3,2,2,3],
[0,1,1,0,4,3,3,4],
[1,4,1,3,3,3,3,4],
[1,4,1,3,4,3,4,4],
[1,4,1,2,2,2,2,4],
[1,4,1,2,4,2,4,4],
[1,4,1,1,2,1,2,4],
[1,4,1,1,3,1,3,4],
[1,4,1,0,2,0,2,4],
[1,4,1,0,3,0,3,4],
[1,4,1,0,4,0,4,4],
[1,3,1,2,3,2,3,3],
[1,3,1,2,4,2,4,3],
[1,3,1,1,2,1,2,3],
[1,3,1,1,4,1,4,3],
[1,3,1,0,2,0,2,3],
[1,3,1,0,3,0,3,3],
[1,3,3,1,4,2,2,4],
[1,2,1,1,3,1,3,2],
[1,2,1,1,4,1,4,2],
[1,2,1,0,2,0,2,2],
[1,2,1,0,4,0,4,2],
[1,2,2,1,4,3,3,4],
[1,2,3,0,4,1,2,3],
[1,1,1,0,3,0,3,1],
[1,1,1,0,4,0,4,1],
[1,1,2,0,4,2,3,3],
[2,4,2,3,4,3,4,4],
[2,4,2,2,3,2,3,4],
[2,4,2,1,3,1,3,4],
[2,4,2,1,4,1,4,4],
[2,4,2,0,3,0,3,4],
[2,4,2,0,4,0,4,4],
[2,3,2,2,4,2,4,3],
[2,3,2,1,3,1,3,3],
[2,3,2,0,3,0,3,3],
[2,3,2,0,4,0,4,3],
[2,2,2,1,4,1,4,2],
[2,2,2,0,3,0,3,2],
[2,1,2,0,4,0,4,1],
[3,4,3,2,4,2,4,4],
[3,4,3,1,4,1,4,4],
[3,4,3,0,4,0,4,4],
[3,3,3,1,4,1,4,3],
[3,3,3,0,4,0,4,3],
[3,2,3,0,4,0,4,2]];

  var rectangles5axis = [
[0,4,0,3,2,3,2,4],
[0,4,0,3,3,3,3,4],
[0,4,0,3,4,3,4,4],
[0,4,0,2,1,2,1,4],
[0,4,0,2,3,2,3,4],
[0,4,0,2,4,2,4,4],
[0,4,0,1,1,1,1,4],
[0,4,0,1,2,1,2,4],
[0,4,0,1,4,1,4,4],
[0,4,0,0,1,0,1,4],
[0,4,0,0,2,0,2,4],
[0,4,0,0,3,0,3,4],
[0,3,0,2,2,2,2,3],
[0,3,0,2,3,2,3,3],
[0,3,0,2,4,2,4,3],
[0,3,0,1,1,1,1,3],
[0,3,0,1,3,1,3,3],
[0,3,0,1,4,1,4,3],
[0,3,0,0,1,0,1,3],
[0,3,0,0,2,0,2,3],
[0,3,0,0,4,0,4,3],
[0,2,0,1,2,1,2,2],
[0,2,0,1,3,1,3,2],
[0,2,0,1,4,1,4,2],
[0,2,0,0,1,0,1,2],
[0,2,0,0,3,0,3,2],
[0,2,0,0,4,0,4,2],
[0,1,0,0,2,0,2,1],
[0,1,0,0,3,0,3,1],
[0,1,0,0,4,0,4,1],
[1,4,1,3,3,3,3,4],
[1,4,1,3,4,3,4,4],
[1,4,1,2,2,2,2,4],
[1,4,1,2,4,2,4,4],
[1,4,1,1,2,1,2,4],
[1,4,1,1,3,1,3,4],
[1,4,1,0,2,0,2,4],
[1,4,1,0,3,0,3,4],
[1,4,1,0,4,0,4,4],
[1,3,1,2,3,2,3,3],
[1,3,1,2,4,2,4,3],
[1,3,1,1,2,1,2,3],
[1,3,1,1,4,1,4,3],
[1,3,1,0,2,0,2,3],
[1,3,1,0,3,0,3,3],
[1,2,1,1,3,1,3,2],
[1,2,1,1,4,1,4,2],
[1,2,1,0,2,0,2,2],
[1,2,1,0,4,0,4,2],
[1,1,1,0,3,0,3,1],
[1,1,1,0,4,0,4,1],
[2,4,2,3,4,3,4,4],
[2,4,2,2,3,2,3,4],
[2,4,2,1,3,1,3,4],
[2,4,2,1,4,1,4,4],
[2,4,2,0,3,0,3,4],
[2,4,2,0,4,0,4,4],
[2,3,2,2,4,2,4,3],
[2,3,2,1,3,1,3,3],
[2,3,2,0,3,0,3,3],
[2,3,2,0,4,0,4,3],
[2,2,2,1,4,1,4,2],
[2,2,2,0,3,0,3,2],
[2,1,2,0,4,0,4,1],
[3,4,3,2,4,2,4,4],
[3,4,3,1,4,1,4,4],
[3,4,3,0,4,0,4,4],
[3,3,3,1,4,1,4,3],
[3,3,3,0,4,0,4,3],
[3,2,3,0,4,0,4,2]];

  var rhombuses4 = [
    [0,3,1,1,3,0,2,2],
    [0,0,2,1,3,3,1,2]];

  var rhombuses5 = [
[0,4,1,1,4,0,3,3],
[0,4,1,2,3,1,2,3],
[0,3,1,1,3,0,2,2],
[0,3,2,2,4,3,2,4],
[0,2,1,0,2,2,1,4],
[0,2,2,1,4,2,2,3],
[0,1,2,0,4,1,2,2],
[0,1,2,2,3,4,1,3],
[0,0,2,1,3,3,1,2],
[0,0,3,1,4,4,1,3],
[1,4,2,2,4,1,3,3],
[1,3,2,1,4,0,3,2],
[1,2,2,0,3,2,2,4],
[1,1,3,2,4,4,2,3],
[1,0,3,1,4,3,2,2],
[2,2,3,0,4,2,3,4]];
  var points = [];
  var computerSelectedPoints = [];
  var vertices;
  var playerVFound = 0;
  var compVFound = 0;
  var computerEfficiency = 100; // 0 to 100 only
  
  var currentLevel = 0;
  var gridSize = 5;
  var computerShape = [];
  var legalShapes = [];
  /* Start - Code Added for Invalid Selection-Abhishek*/
		var aSelectedVertex=[];
  /* End - Code Added for Invalid Selection-Abhishek*/
  
  function callbackPuff4(){
	$j(this).effect( "puff", {}, 300); 
	
	currentScore = currentScore- $j(this).prop("coinVal");
	$j(CurrentMission4+".scoretxt").html(currentScore);
	$j(CurrentMission4+".scoretxt").effect( "highlight",200);
	
		//alertify.alert('You have exhausted all appempts. Please Replay this level.');
		//	nextClick("");
	//	}
	};
  
  
   // Initializations
var MaxScore4 =[1200,1200,1330,1330,1480,1480];
var coinsStack4 =[2,2,3,3,4,4];
var coinsGStack4 =[100,100,110,110,120,120];
var coinsValue4 =[100,100,110,110,120,120];
var isBonus =1;
var coinsImg4 =["url(images/coin100.png)","url(images/coin100.png)","url(images/coin110.png)","url(images/coin110.png)","url(images/coin120.png)","url(images/coin120.png)"];
CurrentMission4 =".mission4 ";
function CalScore4(){ 
			$j(CurrentMission4+".coin").prop("coinVal", coinsValue4[currentLevel]);
			$j(CurrentMission4+".coin:eq(6)").prop("coinVal", 1000);
	}
var coinsImg44 =["url(images/coin1000.png)"];
  var vertexShapes = new Array(gridSize);
  var edgeShapes = new Array(gridSize);
  var table1Points =  new Array(gridSize);
  var table2Points = new Array(gridSize);
   var haveTried=new Array(gridSize);
  
   function rethink(){
  for(var i = 0; i < gridSize; i++) {
    vertexShapes[i] = new Array(gridSize);
    edgeShapes[i] = new Array(gridSize);
    table1Points[i] = new Array(gridSize);
	 table2Points[i] = new Array(gridSize);
    for(var j = 0; j < gridSize; j++) {
      vertexShapes[i][j] = [];
      edgeShapes[i][j] = [];
      for(var k = 0; k < legalShapes.length; k++) {
        var shape = legalShapes[k];
        var t = 0;
        while(t < 4) {
          if(i === shape[2*t] && j === shape[2*t+1]) {
            vertexShapes[i][j].push(k);
            break;
          }
          t++;
        }
        if(t === 4) {
          for(t = 0; t < 4; t++) {
            if(isEdgePoint(shape[2*t], shape[2*t+1],
                           shape[2*((t+1)%4)],
                           shape[2*((t+1)%4)+1],
                           i, j)) {
              edgeShapes[i][j].push(k);
              break;
            }
          }
        }
      }
    }
  }
 
 
  for(var i = 0; i < gridSize; i++) {
    haveTried[i] = new Array(gridSize);
    for(var j = 0; j < gridSize; j++) {
      haveTried[i][j] = false;
    }
  }
 }
  // End of initializations
  function beginGame() {
  $j("#gloss_btn,#help_btn,#menu_btn").show();
  
  jQuery(".cont_btn").click(function() {    
		
		if(MatchedH =="player"){
		if(currentLevel == 5){ $j("#gloss_btn,#help_btn,#menu_btn").hide();
		$j('.trans').hide();
		$j(".feedback").hide("slide", function() {
			jQuery(".end1").hide();
			jQuery(".end1:eq(3)").show();
			$j('.end2').show("slide");
			transisitions();
		});
		return;
		
		}
		$j(".feedback").hide("slide", function() { $j("#gloss_btn,#help_btn,#menu_btn").hide(); //alert("came");
			if(currentLevel==1){$j('.trans4 .lvlScreen:eq(0)').hide();$j('.trans4 .lvlScreen:eq(1)').show();$j('.trans4').show("slide");
			transisitions();
			}
			else if(currentLevel==3){$j('.trans4 .lvlScreen:eq(1)').hide();$j('.trans4 .lvlScreen:eq(0)').show();$j('.trans4').show("slide");
			transisitions();
			}
			else nextClick(MatchedH);
		});
		}else{
		nextClick(MatchedH);
		}
	});
      levelChange(currentLevel);
  }

  
  var ShapeBox =["square","square","rectangle","rectangle or a square","rhombus","parallelogram"];
  var currentLevelDisplay4=[1,1,2,2,3,3,3];
   function levelChange(level) { $j("#gloss_btn,#help_btn,#menu_btn").show();
  // console.log("changed");
   $j(".mission").html("MISSION 4");
	$j(".level").html("LEVEL "+currentLevelDisplay4[level]);
	currentScore =MaxScore4[level];
	$j(".scoretxt").html(currentScore);
   	stageCoins = coinsStack4[level];
	$j(".mission4 .coin").show();
	$j(".mission4 .coin:gt("+(stageCoins-1)+")").hide();
	if(isBonus==1){
		$j(".mission4 .coin:eq(6)").show();
	}else{
		currentScore = currentScore- $j(".mission4 .coin:eq(6)").prop("coinVal");
		$j(CurrentMission4+".scoretxt").html(currentScore);
	}
	$j(".mission4 .coin:lt(6)").css("background-image",coinsImg4[level]);
	$j(".mission4 .coin:eq(6)").css("background-image",coinsImg44[0]);
	
	$j(".feed:eq(3) .coinToken:eq(1)").css("background-image",coinsImg4[level]);
	$j(".feed:eq(3) .coinToken:eq(0)").css("background-image",coinsImg44[0]);
	
	CalScore4();
	$j(".hideBOX").hide();
	$j(".nextcase").hide();
	$j(".play").hide();$j(".draw").show();
		$j(".reset_btn").hide();
		$j(".hideBOX").hide();
		$j(".drawBtn").show();
		$j(".play_btn").hide();
    points = [];
	computerSelectedPoints=[];
    playerVFound = 0;
    compVFound = 0;
    computerEfficiency = 100; // 0 to 100 only
	
	/* Start - Code Added for Invalid Selection-Abhishek*/
	aSelectedVertex=[];
	/* End - Code Added for Invalid Selection-Abhishek*/
	
    //$j(".level").html( "LEVEL " + (level+1));
	$j(".level").html("LEVEL "+currentLevelDisplay4[level]);
    if(level === 0) {
      legalShapes = squares5;
      computerShape = squares5axis[Math.floor(Math.random()*squares5axis.length)];
      gridSize = 5;
		$j(".teleporter1Shape").html("Your teleporter must be a <b>square</b>");
		$j(".oppText").html("The enemy teleporter is a <b>square</b>");
     // teleporter1Shape.style.display = "block";
    } else if(level === 1) {
      legalShapes = squares5;
      computerShape = squares5[Math.floor(Math.random()*squares5.length)];
      gridSize = 5;
		$j(".teleporter1Shape").html("Your teleporter must be a <b>square</b>");
		$j(".oppText").html("The enemy teleporter is a <b>square</b>. Can be a rotated.");
     // teleporter1Shape.style.display = "block";
    } else if(level === 2) {
      legalShapes = squares5.concat(rectangles5);
      computerShape = rectangles5axis[Math.floor(Math.random()*rectangles5axis.length)];
      gridSize = 5;
     $j(".teleporter1Shape").html("Your teleporter must be a <b>rectangle</b>");
    $j(".oppText").html("The enemy teleporter is a <b>rectangle</b>");
     // teleporter1Shape.style.display = "block";
    } else if(level === 3) {
      legalShapes = squares5.concat(rectangles5);
      var temp = squares5axis;
      if(Math.random() > 0.75) {
        temp = rectangles5axis;
      }
      computerShape = temp[Math.floor(Math.random()*temp.length)];
      gridSize = 5;
		$j(".teleporter1Shape").html("Your teleporter must be a rectangle or a <b>square</b>");
		$j(".oppText").html("The enemy teleporter must be a rectangle or a <b>square</b>. Can be a rotated.");
     // teleporter2Shape.innerHTML = "The enemy// teleporter is a rectangle or a square";
     // teleporter1Shape.style.display = "block";
    } else if(level === 4) {
      legalShapes = squares5.concat(rhombuses5);
      var temp = squares5;
      if(Math.random() <= 0.5) {
        temp = rhombuses5;
      }
      computerShape = temp[Math.floor(Math.random()*temp.length)];
      gridSize = 5;
	    $j(".teleporter1Shape").html("Your teleporter must be a <b>rhombus</b>");
		$j(".oppText").html("The enemy teleporter must be a <b>rhombus</b>");
     // teleporter2Shape.innerHTML = "The enemy// teleporter is a rhombus";
     // teleporter1Shape.style.display = "block";
    } else if(level === 5){   // level === 5
      legalShapes = squares4.concat(rectangles4.concat(
                    rhombuses4.concat(parallelograms4)));
      var temp = squares4;
      var r = Math.random();
      if(r > 0.25 && r <= 0.5) {
        temp = rectangles4;
      } else if(r > 0.5 && r <= 0.75) {
        temp = rhombuses4;
      } else if(r > 0.75) {
        temp = rhombuses4;
      }
      computerShape = temp[Math.floor(Math.random()*temp.length)];
      gridSize = 4;
	  	    $j(".teleporter1Shape").html("Your teleporter must be a <b>parallelogram</b>");
			$j(".oppText").html("The enemy teleporter must be a <b>parallelogram</b>");
     // teleporter2Shape.innerHTML = "The enemy// teleporter is a parallelogram";
     // teleporter1Shape.style.display = "block";
    }

   /*  else {
        document.getElementById("gameoverBox").style.display = "block";
        document.getElementById("gameoverBox").style.opacity = "1";
        document.getElementById("gameoverBox").style.zIndex = "10";
        document.getElementById("gameoverBox").style.transition = "opacity 1s ease-in-out 0.3s";
    }
 */
    currentLevel = level;
    // console.log(currentLevel);
	 rethink();
    makeGrid();
  }
  
   function toggle(e) {
    if(e.currentTarget.children[1].style.display=="none" && e.currentTarget.children[5].style.display=="none") {
        e.currentTarget.children[0].style.display="none";
        e.currentTarget.children[1].style.display="block";
      }

     // showCoordinates(e);
  }

  function toggleback(e) {
    if(e.currentTarget.children[1].style.display=="block" && e.currentTarget.children[5].style.display=="none")
      {
        e.currentTarget.children[0].style.display="block";
        e.currentTarget.children[1].style.display="none";
      }
   // hideCoordinates(e);
  }

  function toggleback_when_select(p) {
    if(p.children[1].style.display=="block")
    {
      p.children[0].style.display="block";
      p.children[1].style.display="none";
    }
  //  p1.innerHTML = " ";
  }

  function showCoordinates(e) {
  //  p1.innerHTML = "<h4 style='color:orange'>Point: (" + e.currentTarget.gridx + "," + e.currentTarget.gridy + ")</h4>";
  }

  function hideCoordinates(e) {
   // p1.innerHTML = " ";
  }
  
   function makeGrid() {
  /*   if(table1) {
      table1.remove();
      table2.remove();
      p1.innerHTML=" ";
      canvasOne.remove();
      canvasTwo.remove();
      resultDiv.style.display = "none";
      // drbtn.remove();
    }
    table1=document.createElement("table");
    table1.id = "table1"; */

    // if (gridSize === 4) {
    //     table1.style.backgroundImage = 'url("4x4grid.png")';
    // }
    // else if (gridSize === 5) {
    //     table1.style.backgroundImage = 'url("5x5grid.png")';
    // }

   /*  for(var i = 0; i < gridSize; i++) {
      var tr1=document.createElement("tr");
      for(var j = 0; j < gridSize; j++) {
        var cell_in=td1.cloneNode(true);
        cell_in.addEventListener("mouseenter",toggle);
        cell_in.addEventListener("click",selectedPoints);
        cell_in.addEventListener("mouseleave",toggleback);
        cell_in.gridx = j;
        cell_in.gridy = gridSize-i-1;
        tr1.appendChild(cell_in);
        table1Points[cell_in.gridx][cell_in.gridy] = cell_in;
      }
      table1.appendChild(tr1);
    } */
	
	if(gridSize ==5){
		$j(" .grid5").show();//.draw
		$j(" .grid4").hide();
	}else{
		$j(" .grid5").hide();
		$j(" .grid4").show();
		
	}
	var i =0;
	var j =0;
	$j(".draw  .grid"+gridSize+" .cell").each(function (index){
		$(this).unbind();
		$(this).mouseenter(toggle).mouseleave(toggleback).click(selectedPoints);
		$(this).children('div:gt(0)').hide();
		if(index%gridSize ==0) {i++; j=0;}
		this.gridx = j;
		this.gridy = gridSize-i;
		 j++; 
		// $(this).html(this.gridx+","+this.gridy);
		// console.log(this.gridx+" fdsf"+this.gridy);
		table1Points[this.gridx][this.gridy] = this;
	});
	var i =0;
	var j =0;
	$j(".player .grid"+gridSize+" .cell").each(function (index){
			$(this).unbind();
		$(this).children('div:gt(0)').hide();
		if(index%gridSize ==0) {i++; j=0;}
		this.gridx = j;
		this.gridy = gridSize-i;
		 j++; 
		// $(this).html(this.gridx+","+this.gridy);
		
		table2Points[this.gridx][this.gridy] = this;
	});
	$j(".drawBtn").unbind("click");
	$j(".drawBtn").click( draw);
	$j(".play_btn").click( function(){
		$j(".drawBtn").hide();
		$j(".draw").hide();
		$j(".play").show();
	});
	$j(".reset_btn").click( function(){
	$j(".reset_btn").hide();
	$j(".hideBOX").hide();
	$(points).each(function(index){
	table1Points[points[index][0]][points[index][1]].children[5].style.display="none";
	table1Points[points[index][0]][points[index][1]].children[0].style.display="block";
	});
		points = [];
		computerSelectedPoints = [];
		//table1Points = new Array(gridSize);
		//table2Points = new Array(gridSize);
	 
	$j(".boxGrid svg").remove();
	$j(".drawBtn").show();
	$j(".play_btn").hide();
	});
	

	//.play
	//.drawBtn
//------------------------------------------------------------------------

    // table2=document.createElement("table");
    // table2.style.display="none";
    // table2.id="table2";

    // if (gridSize === 4) {
    //     table2.style.backgroundImage = 'url("4x4grid.png")';
    // }
    // else if (gridSize === 5) {
    //     table2.style.backgroundImage = 'url("5x5grid.png")';
    // }

    // for(var i = 0; i < gridSize; i++) {
    //   var tr1=document.createElement("tr");
    //   for(var j = 0; j < gridSize; j++) {
    //     var cell_in=td1.cloneNode(true);
    //     cell_in.addEventListener("mouseenter",toggle);
    //     cell_in.addEventListener("click",evaluatePlayer);
    //     cell_in.addEventListener("mouseleave",toggleback);
    //     cell_in.gridx = j;
    //     cell_in.gridy = gridSize-i-1;
    //     tr1.appendChild(cell_in);
    //   }
    //   table2.appendChild(tr1);
    // }
	//$j(".opp")
	//$j(".player .cell").hide();
	//$j(".player .cell").hide();
	var i =0;
	var j =0;
	//$j("#feedback .opp .cell").hide();
	$j("#mission4 .opp .grid"+gridSize+" .cell").each(function (index){
			$(this).unbind();
		$(this).mouseenter(toggle).mouseleave(toggleback).click(evaluatePlayer);
		$(this).children('div:gt(0)').hide();
		if(index%gridSize ==0) {i++; j=0;}
		this.gridx = j;
		this.gridy = gridSize-i;
		 j++; 
		// $(this).html(this.gridx+","+this.gridy);
		 //console.log(this.gridx+" fdsf"+this.gridy);
		//table1Points[this.gridx][this.gridy] = this;
	});
 /*    table2 = table1.cloneNode(true);
    table2.id = "table2";
    table2.style.display = "none";

    for(var i = 0; i < gridSize; i++) {
        for(var j = 0; j < gridSize; j++) {
            table2.childNodes[i].childNodes[j].addEventListener("mouseenter",toggle);
            table2.childNodes[i].childNodes[j].addEventListener("click",evaluatePlayer);
            table2.childNodes[i].childNodes[j].addEventListener("mouseleave",toggleback);
            table2.childNodes[i].childNodes[j].gridx = j;
            table2.childNodes[i].childNodes[j].gridy = gridSize-i-1;
            table2.childNodes[i].childNodes[j].width = (window.innerWidth * 0.25)/gridSize;
            table2.childNodes[i].childNodes[j].height = (window.innerWidth * 0.25)/gridSize;
        }
    } */

//------------------------------------------------------------------------

  /*   canvasOne = document.createElement('canvas');
    canvasOne.id = "canvas1";
    canvasOne.width = window.innerWidth * 0.25;
    canvasOne.height = window.innerWidth * 0.25;

    canvasOne.setAttribute("class", "canv");
    canvasOne.style.position = "absolute";
    canvasOne.style.left = "0%";

    var ctxOne = canvasOne.getContext('2d');
    var bgImg = document.createElement('img');
    if (gridSize === 4) {
        bgImg.src = "4x4grid.png";
    }
    else if (gridSize === 5) {
        bgImg.src = "5x5grid.png";
    }

    canvasTwo = canvasOne.cloneNode(true);
    canvasTwo.id = "canvas2";
    canvasTwo.style.display = "none";
    var ctxTwo = canvasTwo.getContext('2d');

    bgImg.onload = function() {
        ctxOne.drawImage(bgImg, 0, 0, canvasOne.width, canvasOne.height);
        ctxTwo.drawImage(bgImg, 0, 0, canvasTwo.width, canvasTwo.height);
    }

    grid1.appendChild(table1);
    grid1.insertBefore(canvasOne, table1);

    grid2.appendChild(table2);
    grid2.insertBefore(canvasTwo, table2); */


/*     btn1.style.top=parseInt(table1.style.top) + 600 + "px";
    btn1.style.zIndex=5;
    p1=document.createElement("p");
    tn1=document.createTextNode(" ");
    p1.appendChild(tn1);
    p1.style.margin = "20%";
    p1.style.position="absolute";
    p1.style.bottom = "20%";
    p1.style.left = "90%";
    p1.style.width = "130px"; */
    // p1.style.left=parseInt(table1.style.left)
    //              +parseInt(table1.offsetParent.offsetLeft)
    //              +parseInt(table1.offsetLeft)+70+"px";
    // drbtn.style.left=parseInt(table1.style.left)
    //              +parseInt(table1.offsetParent.offsetLeft)
    //              +parseInt(table1.offsetLeft)+25+"px";
/*     p1.style.color="white"; */
  //  buttonArea.appendChild(p1);
  }

  
  
  function selectedPoints(e) {  //alert("came");
    if (e.currentTarget.children[5].style.display === "block") {
      e.currentTarget.children[0].style.display = "block";
      e.currentTarget.children[1].style.display = "none";
      e.currentTarget.children[5].style.display = "none";
      for(var i = 0; i < points.length; i++) {
        if(points[i][0] === e.currentTarget.gridx &&
           points[i][1] === e.currentTarget.gridy) {
          points.splice(i, 1);
		  computerSelectedPoints.splice(i, 1);
          break;
        }
      }
    }
    else {
      e.currentTarget.children[0].style.display = "none";
      e.currentTarget.children[1].style.display = "none";
      e.currentTarget.children[5].style.display = "block";
      points.push([e.currentTarget.gridx, e.currentTarget.gridy]);
	  computerSelectedPoints.push([e.currentTarget.gridx, e.currentTarget.gridy]);
    }
  }

  // Does (x2, y2) on the line segment between
  // (x0, y0) and (x1, y1) between its endpoints?
  function isEdgePoint(x0, y0, x1, y1, x2, y2) {
     return Math.min(x0, x1) <= x2 &&
               x2 <= Math.max(x0, x1) &&
               Math.min(y0, y1) <= y2 &&
               y2 <= Math.max(y0, y1) &&
               (y1-y0)*(x2-x0) === (y2-y0)*(x1-x0);
  }

  function matches(shape) {
    var matched = [false, false, false, false];
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        if(!matched[j]) {
          if(points[i][0] === shape[2*j] &&
             points[i][1] === shape[2*j+1]) {
            matched[j] = true;
            break;
          }
        }
      }
    }
    for(var i = 0; i < 4; i++) {
      if(!matched[i]) { return false; }
    }
    for(var i = 0; i < 4; i++) {
      points[i][0] = shape[2*i];
      points[i][1] = shape[2*i+1];
    }
    points.push(points[0]);
    return true;
  }

  function checkValidity() {
    for(var i = 0; i < legalShapes.length; i++) {
      if(matches(legalShapes[i])) {
        return true;
      }
    }
    return false;
  }

  function draw() {
    // console.log(points.length);
    valid = (points.length === 4) && checkValidity();
    if(!valid) {
      alertify.alert("Oops! This shape must be a "+ShapeBox[currentLevel]+". Try again!");
    } else {

    /*     if (gridSize === 5) {
            var multiplier = 67;
            var offsetX = 46;
            var offsetY = 42;
        }
        else if (gridSize === 4) {
            var multiplier = 83;
            var offsetX = 48;
            var offsetY = 46;
        } */
		  var multiplier =95;
  if (gridSize === 4) {
	multiplier =126;
  }
  
  var plot = 'M '+points[0][0]*multiplier+' '+points[0][1]*multiplier+' L'+points[1][0]*multiplier+' '+points[1][1]*multiplier+' L'+points[2][0]*multiplier+' '+points[2][1]*multiplier+' L'+points[3][0]*multiplier+' '+points[3][1]*multiplier+' ';
       // teleporter1Shape.style.display = "none";
       // teleporter2Shape.style.display = "block";
      //  enemyTeleporter.style.display = "block";
	  $(".boxGrid").append('<svg width="385px" height="385px"><path d="'+plot+' Z" style="stroke: #66CC00; stroke-width: 3px; fill="#ffffff" fill-opacity="0.2"" /></svg>');
		$j(".opp .boxGrid svg").hide();
	$j(".reset_btn").show();
	$j(".hideBOX").show();
	$j(".play_btn").show();
	$j(".drawBtn").hide();
    /*   var ctx = document.getElementById('canvas1').getContext("2d");
      ctx.beginPath();
      firstx = (points[0][0] * multiplier) + offsetX;
      firsty = (gridSize-1-points[0][1]) * multiplier + offsetY;
      ctx.moveTo(firstx, firsty);
      for(var i = 1; i < points.length-1; i++) {
        nextx = (points[i][0] * multiplier) + offsetX;
        nexty = (gridSize-1-points[i][1]) * multiplier + offsetY;
        ctx.lineTo(nextx,nexty);
        ctx.lineWidth ="7";
        ctx.strokeStyle = "green";
        ctx.stroke();
      }
      ctx.lineTo(firstx,firsty);
      // ctx.strokeStyle = "red";
      ctx.stroke(); */
      // btn1.style.display="none";
      // document.getElementById("canvas2").style.display="block";
     // table2.style.display="block";
    //  canvasTwo.style.display = "block";
      // console.log(table1.children);

      // Removing listeners
    /*   for(var ix = 0; ix < table1.childNodes.length; ix ++) {
        for(var jx = 0; jx < table1.childNodes[ix].childNodes.length; jx ++) {
            // console.log(table1.childNodes[ix].childNodes[jx].children[0]);
            table1.childNodes[ix].childNodes[jx].children[0].src = "blank.png";

          table1.childNodes[ix].childNodes[jx].removeEventListener("mouseenter",toggle);
          table1.childNodes[ix].childNodes[jx].removeEventListener("click",selectedPoints);
          table1.childNodes[ix].childNodes[jx].removeEventListener("mouseleave",toggleback);
        }
      } */


    }
  }

  function showVertex(e_cell) {
    e_cell.removeEventListener("mouseenter",toggle);
    e_cell.removeEventListener("mouseleave",toggleback);
    e_cell.addEventListener("mouseover",showCoordinates);
    e_cell.addEventListener("mouseleave",hideCoordinates);


    e_cell.children[1].style.display="none";
    e_cell.children[0].style.display="none";
    e_cell.children[5].style.display="none";
    e_cell.children[2].style.display="block"; //vertices are green
  }

  function showEdge(e_cell) {
    e_cell.removeEventListener("mouseenter",toggle);
    e_cell.removeEventListener("mouseleave",toggleback);
    e_cell.addEventListener("mouseover",showCoordinates);
    e_cell.addEventListener("mouseleave",hideCoordinates);

    e_cell.children[1].style.display="none";
    e_cell.children[0].style.display="none";
    e_cell.children[5].style.display="none";
    e_cell.children[4].style.display="block"; //edges are yellow
  }

  function showMiss(e_cell) {
   e_cell.removeEventListener("mouseenter",toggle);
  e_cell.removeEventListener("mouseleave",toggleback);
  e_cell.addEventListener("mouseenter",showCoordinates);
  e_cell.addEventListener("mouseleave",hideCoordinates);

  e_cell.children[1].style.display="none";
  e_cell.children[0].style.display="none";
  e_cell.children[5].style.display="none";
  e_cell.children[3].style.display="block"; //miss is red
  }

  function evaluatePlayer(e) {
    var selected = [e.currentTarget.gridx,
                    e.currentTarget.gridy];
    vertices = [[computerShape[0], computerShape[1]],
                    [computerShape[2], computerShape[3]],
                    [computerShape[4], computerShape[5]],
                    [computerShape[6], computerShape[7]]];
    console.log("look out for this"+vertices);
    toggleback(e);
    var exists = false;
	for(var i = 0; i < vertices.length; i++) {
      var v = vertices[i];
      if((v[0] == selected[0])&&(v[1] == selected[1])) {
        showVertex(e.currentTarget);
		playerVFound+=1;

		/* Start - Code Added for Invalid Selection-Abhishek*/
		aSelectedVertex.push(v);
		/* End - Code Added for Invalid Selection-Abhishek*/

        if(playerVFound===4) {
          announceWinner("player");
          return;
        }
        exists = true;
        break;
      }
    }

	/* Start - Code Added for Invalid Selection-Abhishek*/	
	//alert('legal shape'+legalShapes.length);
	//alert('selected vertex length'+aSelectedVertex.length);
	var allowedShapes = [];
	if(playerVFound>=2){
			j=0;
			for(var k = 0; k < legalShapes.length; k++) {
				var shape = legalShapes[k];
				var t = 0;
				var allowedNodeFlag=0;
				while(t < 4) {
				  for(var l = 0; l < aSelectedVertex.length; l++) {	
					  if(aSelectedVertex[l][0]==shape[2*t] && aSelectedVertex[l][1]==shape[2*t+1])	{
						  allowedNodeFlag++;
					  }
				  }
				  t++;
				}
				if(allowedNodeFlag==aSelectedVertex.length){
					//console.log("vertext length"+aSelectedVertex.length);
					//console.log("allowed flag"+allowedNodeFlag+'-'+k);
					allowedShapes.push(legalShapes[k]);
				}
			}
	}		
	//alert(selected[0]+','+selected[1]);
	//alert('allowed shape'+allowedShapes.length);
	if(playerVFound>=2){		
			var allowedFlag=0;
			for(var k = 0; k < allowedShapes.length; k++) {
				var aShape = allowedShapes[k];
				var t = 0;
				while(t < 4) {
				  if(selected[0]==aShape[2*t] && selected[1]==aShape[2*t+1])	{
					 allowedFlag=1;
					 break;
				  }
				  t++;
				}
	        }
			if(allowedFlag==0){
				for(var i = 0; i < vertices.length; i++) {
					if(isEdgePoint(vertices[i][0],
								   vertices[i][1],
								   vertices[(i+1)%4][0],
								   vertices[(i+1)%4][1],
								   selected[0], selected[1])) {
					  allowedFlag=2;   
					  break;
					}
				}
				if(allowedFlag==0){
					//alert('Wrong Selection');
					if(currentScore >0){
					if(isBonus==1){
						$j(".mission4 .coin:eq(6)").effect( "pulsate", {}, 500, callbackPuff4 );
						isBonus=0;
					}else{
					    $j(".mission4 .coin:eq("+--stageCoins+")").effect( "pulsate", {}, 500, callbackPuff4 ); 	
					}
					}
					
				}
			}
	}
	/* End - Code Added for Invalid Selection-Abhishek*/	

    if(!exists) {
      for(var i = 0; i < vertices.length; i++) {
        if(isEdgePoint(vertices[i][0],
                       vertices[i][1],
                       vertices[(i+1)%4][0],
                       vertices[(i+1)%4][1],
                       selected[0], selected[1])) {
          showEdge(e.currentTarget);
          exists = true;
          break;
        }
      }
    }
    if(!exists) {
      showMiss(e.currentTarget);
     // thinkingBox.style.display = "block";
     // thinkingBox.style.transition = "display 0.5s ease-in-out";
      setTimeout(compPick, 10);
    }

  }

  function compPick() {
  //  thinkingBox.style.display = "none";
    var listX = [];
    var listY = [];
    var best = 0;
    for(var i = 0; i < gridSize; i++) {
      for(var j = 0; j < gridSize; j++) {
        if(!haveTried[i][j]) {
          var temp = vertexShapes[i][j].length;
          if(temp > best) {
            listX = [i];
            listY = [j];
            best = temp;
          } else if(temp === best) {
            listX.push(i);
            listY.push(j);
          }
        }
      }
    }
    var r = Math.floor(Math.random()*listY.length);
    var best_x = listX[r];
    var best_y = listY[r];
	if(compVFound >= 2) {
		//alert('AA'+computerSelectedPoints.length);
		for(i=0;i<computerSelectedPoints.length;i++){
			best_x=computerSelectedPoints[i][0];
			best_y=computerSelectedPoints[i][1];
		}	
	}
    haveTried[best_x][best_y] = true;
    evaluateComp(table2Points[best_x][best_y]);
  }

  function updateHit(isVertex, i, j) {
    var possible = isVertex ? vertexShapes[i][j]
                            : edgeShapes[i][j];
    for(var m = 0; m < gridSize; m++) {
      for(var n = 0; n < gridSize; n++) {
        for(var k = 0; k < vertexShapes[m][n].length; k++) {
          if(possible.indexOf(vertexShapes[m][n][k]) === -1) {
            if(Math.random()*100 <= computerEfficiency) {
              vertexShapes[m][n].splice(k, 1);
              k--;
            }
          }
        }
        for(var k = 0; k < edgeShapes[m][n].length; k++) {
          if(possible.indexOf(edgeShapes[m][n][k]) === -1) {
            if(Math.random()*100 <= computerEfficiency) {
              edgeShapes[m][n].splice(k, 1);
              k--;
            }
          }
        }
      }
    }
  }

  function updateMiss(i, j) {
    var impossible = vertexShapes[i][j].concat(edgeShapes[i][j]);
    for(var m = 0; m < gridSize; m++) {
      for(var n = 0; n < gridSize; n++) {
        for(var k = 0; k < vertexShapes[m][n].length; k++) {
          if(impossible.indexOf(vertexShapes[m][n][k]) >= 0) {
            if(Math.random()*100 <= computerEfficiency) {
              vertexShapes[m][n].splice(k, 1);
              k--;
            }
          }
        }
        for(var k = 0; k < edgeShapes[m][n].length; k++) {
          if(impossible.indexOf(edgeShapes[m][n][k]) >= 0) {
            if(Math.random()*100 <= computerEfficiency) {
              edgeShapes[m][n].splice(k, 1);
              k--;
            }
          }
        }
      }
    }
  }

  function evaluateComp(e) {
    for(var i = 0; i < points.length-1; i++) {
      if(points[i][0] === e.gridx &&
         points[i][1] === e.gridy) {
        showVertex(e);
		for(j=0;j<computerSelectedPoints.length;j++){
			if(computerSelectedPoints[j][0]==e.gridx && computerSelectedPoints[j][1]==e.gridy){
				computerSelectedPoints.splice(j, 1);
			}
		}
        compVFound += 1;
        updateHit(true, e.gridx, e.gridy);
        if(compVFound === 4) {
          announceWinner("Opponent");
        }
        return;
      }
    }
    for(var i = 0; i < points.length-1; i++) {
      if(isEdgePoint(points[i][0], points[i][1],
                     points[(i+1)%4][0], points[(i+1)%4][1],
                     e.gridx, e.gridy)) {
        showEdge(e);
        updateHit(false, e.gridx, e.gridy);
        return;
      }
    }
    showMiss(e);
    updateMiss(e.gridx, e.gridy);
  }
function nextClick(st){
$j("#end1").hide();
$j("#trans4").hide();
$j("#feedback").hide();
		$(".boxGrid svg").remove();
		$(".cell").children().show();
		isBonus=0;
		if(st=="player"){currentLevel++;isBonus=1;}
		points = [];
		aSelectedVertex=[];
		 for(var i = 0; i < gridSize; i++) {
		
		table1Points[i] = new Array(gridSize);
		table2Points[i] = new Array(gridSize);
	 }
	 legalShapes =[];
	 //rethink()
 	 if(currentLevel == 6){currentLevel =0;   $j(".nextcase").hide();
	 $j(".play").hide();//alertify.alert("Mission Complete!");
	 }else{
		levelChange(currentLevel);
	} 
		
	}
	

	
	
function getFeedback4(){
	
	if(MatchedH!="player"){ $j(".mtch_txt").html(MatchedH.toUpperCase() +"<br>Wins!"); $j(".job").html("Nice Try!");$j(".solved").html("Please attempt again!");
	$j( ".additionalTextVal").html("Try to solve the case again.");
	//$j( ".additionalTextVal").hide();
	}else{
	 $j(".mtch_txt").html(MatchedH.toUpperCase() +"<br>Wins!"); $j(".job").html("Great Job!");$j(".solved").html("You solved the case!");
	 $j( ".additionalTextVal").html("Looks like you have another case to solve.");
	// $j( ".additionalTextVal").show();
	}

	//$j( ".additionalTextVal").html("Looks like there is another case for you to solve.");
	$j("#feedback").toggle("slide", function(){ jQuery(".feed").hide();  jQuery(".feed:eq(3)").show();});
	$j(".feed:eq(3) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(3) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(3) .star:eq(0)").html(""+ (isBonus?'4':'0'));
	gameScore+=isBonus?4:0;
	$j(".mission4 .star:eq(0)").html(" "+ gameScore);
	$j(".feed:eq(3) "+".scoretxt").html(currentScore);
	$j(".feed:eq(3) "+".scoretxt").effect( "highlight",200);
	//Great Job! //You solved he case.
}
var MatchedH ="pp";
  function announceWinner(st){
  //$j(".nextcase").show();
  $j(".nextcase").hide();
  //alertify.alert(st +" wins!");
  MatchedH =st;
				if(MatchedH!="player"){
				if(currentScore >0){
				if(isBonus==1){
						$j(".mission4 .coin:eq(6)").effect( "pulsate", {}, 500, callbackPuff4 );
						isBonus=0;
					}else{
					    $j(".mission4 .coin:eq("+--stageCoins+")").effect( "pulsate", {}, 500, callbackPuff4 ); 	
					}
					}
					}
 // alertify.alert(st +" wins!",getFeedback4);
  	  var multiplier =95;
  if (gridSize === 4) {
	multiplier =126;
  }
  
  var plot = 'M '+vertices[0][0]*multiplier+' '+vertices[0][1]*multiplier+' L'+vertices[1][0]*multiplier+' '+vertices[1][1]*multiplier+' L'+vertices[2][0]*multiplier+' '+vertices[2][1]*multiplier+' L'+vertices[3][0]*multiplier+' '+vertices[3][1]*multiplier+' ';

	  $(".opp .boxGrid").append('<svg width="385px" height="385px"><path d="'+plot+' Z" style="stroke: #66CC00; stroke-width: 5px; fill="#ffffff" fill-opacity="0.2"" /></svg>');
	if(st=="player")$j(".nextcase .txt").html("Next Case"); 
	if(st!="player")$j(".nextcase .txt").html("Play Again"); 
		//getFeedback4();
	alertify.alert(st.toUpperCase() +" Wins!",getFeedback4);	
	//	MatchedH +" wins!"
	//$j(".nextcase").one( "click",getFeedback4);//
  //  table2.disabled="true";
   // teleporter1Shape.style.display="none";
   // teleporter2Shape.style.display="none";
  //  resultDiv.style.display = "block";

/*     if (gridSize === 5) {
        var multiplier = 67;
          var offsetX = 46;
            var offsetY = 46;
    }
    else if (gridSize === 4) {
        var multiplier = 83;
        var offsetX = 48;
        var offsetY = 46;
    } */

/*     var ctx = document.getElementById('canvas2').getContext("2d");
    ctx.beginPath();
    firstx = (vertices[0][0] * multiplier) + offsetX;
    firsty = (gridSize-1-vertices[0][1]) * multiplier + offsetY;
    ctx.moveTo(firstx, firsty);
    for(var i = 1; i < vertices.length; i++) {
        nextx = (vertices[i][0] * multiplier) + offsetX;
        nexty = (gridSize-1-vertices[i][1]) * multiplier + offsetY;
        ctx.lineTo(nextx,nexty);
        ctx.lineWidth ="7";
        ctx.strokeStyle = "#0066ff";
        ctx.stroke();
    }
    ctx.lineTo(firstx,firsty);
      // ctx.strokeStyle = "red";
    ctx.stroke();

    for (var i = 0; i < gridSize ;i++) {
      for (var j = 0; j < gridSize; j++) {

        table1.rows[i].cells[j].removeEventListener("mouseenter",toggle);
        table1.rows[i].cells[j].removeEventListener("click",selectedPoints);
        table1.rows[i].cells[j].removeEventListener("mouseleave",toggleback);
        table1.rows[i].cells[j].removeEventListener("mouseenter",showCoordinates);
        table1.rows[i].cells[j].removeEventListener("mouseleave",hideCoordinates);
        table1.rows[i].cells[j].removeEventListener("mouseover",showCoordinates);
      }
    }
    for (var i = 0; i < gridSize ;i++) {
      for (var j = 0; j < gridSize; j++) {
        table2.rows[i].cells[j].children[0].src = "blank.png";
        table2.rows[i].cells[j].removeEventListener("mouseenter",toggle);
        table2.rows[i].cells[j].removeEventListener("click",evaluatePlayer);
        table2.rows[i].cells[j].removeEventListener("mouseleave",toggleback);
        table2.rows[i].cells[j].removeEventListener("mouseenter",showCoordinates);
        table2.rows[i].cells[j].removeEventListener("mouseleave",hideCoordinates);
        table2.rows[i].cells[j].removeEventListener("mouseover",showCoordinates);

      }
    }
    p1.style.display="block";
 *//*     if(st=="player")
    {
      document.getElementById("resultText").innerHTML = "You win!!";
      document.getElementById("resultDiv").style.opacity = "1";
      document.getElementById("resultDiv").style.zIndex = "10";
      document.getElementById("resultDiv").style.transition = "opacity 1s ease-in-out 0.3s";
      document.getElementById("proceedButton").onclick = function () {
        document.getElementById("resultDiv").style.opacity = "0";
        document.getElementById("resultDiv").style.transition = "opacity 1s ease-in-out";
        enemyTeleporter.style.display = "none";
        setTimeout(function () {
          levelChange(currentLevel+1);
        }, 1000);
      }
      document.getElementById("retryButton").onclick = function () {
        document.getElementById("resultDiv").style.opacity = "0";
        document.getElementById("resultDiv").style.transition = "opacity 1s ease-in-out";
        enemyTeleporter.style.display = "none";
        setTimeout(function () {
          levelChange(currentLevel);
        }, 1000);
      }

    } */
 /*    if(st=="comp")
    {
      document.getElementById("resultText").innerHTML = "Computer wins!";
      document.getElementById("resultDiv").style.opacity = "1";
      document.getElementById("resultDiv").style.zIndex = "10";
      document.getElementById("resultDiv").style.transition = "opacity 1s ease-in-out 0.3s";
      document.getElementById("proceedButton").onclick = function () {
        document.getElementById("resultDiv").style.opacity = "0";
        document.getElementById("resultDiv").style.transition = "opacity 1s ease-in-out";
        enemyTeleporter.style.display = "none";
        setTimeout(function () {
          levelChange(currentLevel+1);
        }, 1000);
      }
      document.getElementById("retryButton").onclick = function () {
        document.getElementById("resultDiv").style.opacity = "0";
        document.getElementById("resultDiv").style.transition = "opacity 1s ease-in-out";
        enemyTeleporter.style.display = "none";
        setTimeout(function () {
          levelChange(currentLevel);
        }, 1000);
      }
    } */
	
	

  }
  
  //trans4
 // alert("dds");
// beginGame();