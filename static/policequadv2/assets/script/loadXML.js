var loadXML = function(xmlPath,callBackFunction)
{
	var xmlDoc;
    var xmlloaded = false;
	var callBackFunctionRef = callBackFunction;
	var xmlFilePath = xmlPath;	 
	this.loadXMLFile = function()
	{			
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }		  
		xmlhttp.open("GET",xmlFilePath,false);		
		xmlhttp.send();		
		xmlDoc=xmlhttp.responseXML; 	
	
		this.readXML();
    };
	this.readXML = function(){	
		callBackFunctionRef(xmlDoc);		
	};
};

