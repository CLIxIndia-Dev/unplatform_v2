/*-------------------------------------------------------------------------------------------------*/
/*
	Application.as v2.0.0

	Copyright (c) 2007 Tata Interactive System

*/
/*-------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------
	LMSVersion = "SCORM_1.2"
-----------------------------------------------------------------------------------------------------*/
/*******************************************************************************
**
** FileName: APIWrapper.js
**
*******************************************************************************/

/*******************************************************************************
**
** Concurrent Technologies Corporation (CTC) grants you ("Licensee") a non-
** exclusive, royalty free, license to use, modify and redistribute this
** software in source and binary code form, provided that i) this copyright
** notice and license appear on all copies of the software; and ii) Licensee does
** not utilize the software in a manner which is disparaging to CTC.
**
** This software is provided "AS IS," without a warranty of any kind.  ALL
** EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING ANY
** IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-
** INFRINGEMENT, ARE HEREBY EXCLUDED.  CTC AND ITS LICENSORS SHALL NOT BE LIABLE
** FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
** DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES.  IN NO EVENT WILL CTC  OR ITS
** LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT,
** INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER
** CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF
** OR INABILITY TO USE SOFTWARE, EVEN IF CTC  HAS BEEN ADVISED OF THE POSSIBILITY
** OF SUCH DAMAGES.
**
*******************************************************************************/

/*******************************************************************************
** This file is part of the ADL Sample API Implementation intended to provide
** an elementary example of the concepts presented in the ADL Shareable
** Courseware Object Reference Model (SCORM).
**
** The purpose in wrapping the calls to the API is to (1) provide a
** consistent means of finding the LMS API implementation within the window
** hierarchy and (2) to validate that the data being exchanged via the
** API conforms to the defined CMI data types.
**
** This is just one possible example for implementing the API guidelines for
** runtime communication between an LMS and executable content components.
** There are several other possible implementations.
**
** Usage: Executable course content can call the API Wrapper
**		  functions as follows:
**
**		javascript:
**				var result = LMSInitialize();
**				if (result != true) {
**					//handle error
**				  }
**
**		authorware
**				result := ReadURL("javascript:apiWrapper.LMSInitialize()", 100)
**
******************************************************************************************/

var _Debug = false;  // set this to false to turn debugging off
// and get rid of those annoying alert boxes.

// Define exception/error codes
var _NoError = 0;
var _GeneralException = 101;
var _InvalidArgumentError = 201;
var _NotInitialized = 301;
var _NotImplementedError = 401;


// local variable definitions
var apiHandle = null;
var checkAPI=0;
var findAPITries = 0;



/******************************************************************************************
**
** Function: doInitialize()
** Inputs:	None
** Return:	CMIBoolean true if the initialization was successful, or
**			CMIBoolean false if the initialization failed.
**
** Description:
** Initialize communication with LMS by calling the doInitialize
** function which will be implemented by the LMS, if the LMS is
** compliant with the SCORM.
**
******************************************************************************************/
function doInitialize()
{
	if (_Debug)
	{
	  alert("inside doInitialize");
	}
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoInitialize was not successful.");
      return false;
   } else {
	   if (_Debug)
		{
		   alert("API found");
		}
	}

   // call the doInitialize function that should be implemented by the API
   var emptyString = new String("");
try{
   var initResult = api.LMSInitialize("");
  }catch(e){}

   if (initResult.toString() != "true")
   {
      // doInitialize did not complete successfully.

      // Note: An assumption is made that if doInitialize returns a non-true
      //		 value, then and only then, an error was raised.

      // Note: Each function could define its own error handler, but we'll
      // just implement a generic one in this example.
      var err = ErrorHandler();
   }

   return initResult;

}

/******************************************************************************************
**
** Function doFinish()
** Inputs:	None
** Return:	None
**
** Description:
** Close communication with LMS by calling the doFinish
** function which will be implemented by the LMS, if the LMS is
** compliant with the SCORM.
**
******************************************************************************************/
function doFinish()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoFinish was not successful.");
   }
   else
   {
      // call the doInitialize function that should be implemented by the API
      var emptyString = new String("");
      api.LMSFinish("");
      var err = ErrorHandler();
   }

   return;

}

/******************************************************************************************
**
** Function doGetValue(name)
** Inputs:	name - string representing the cmi data model defined category or
**				   element (e.g. cmi.core.student_id)
** Return:	The value presently assigned by the LMS to the cmi data model
**			element defined by the element or category identified by the name
**			input value.
**
** Description:
** Wraps the call to the LMS doGetValue method
**
******************************************************************************************/
function doGetValue(name)
{
if (LMSTracking == false)return null;
   if (_Debug)
   {
   alert("inside doGetValue & parameter is "+name);
   }
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoGetValue was not successful.");
      return null;
   }
   else
   {
      var value = api.LMSGetValue(name);
	 if (_Debug)
     {
	  alert("result of LMSGetValue :: "+name +" :: "+value);
	 }
      var err = ErrorHandler();
      // if an error was encountered, then return null,
      // else return the retrieved value
      if (err != _NoError)
      {
         return null;
      }
      else
      {
         return value.toString();
      }
   }
}

/******************************************************************************************
**
** Function doSetValue(name, value)
** Inputs:	name - string representing the cmi data model defined category or element
**			value - the value that the named element or category will be assigned
** Return:	None
**
** Description:
** Wraps the call to the LMS doSetValue method
**
******************************************************************************************/
function doSetValue(name, value)
{
if (LMSTracking == false)return null;
	if (_Debug)
	{
		 alert("LMSetValue :: "+name +" :: "+value);
	}
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoSetValue was not successful.");
   }
   else
   {
      api.LMSSetValue(name, value);
      var err = ErrorHandler();
	  if (_Debug)
	  {
		alert("Error encountered is :: "+err);
	  }
   }

   return;
}

/******************************************************************************************
**
** Function doCommit()
** Inputs:	None
** Return:	None
**
** Description:
** Call the doCommit function which will be implemented by the LMS,
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function doCommit()
{

   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoCommit was not successful.");
   }
   else
   {
      // call the doInitialize function that should be implemented by the API
      var emptyString = new String("");
      api.LMSCommit("");
      var err = ErrorHandler();
   }

   return;

}

/******************************************************************************************
**
** Function doGetLastError()
** Inputs:	None
** Return:	The error code (integer format) that was set by the last LMS function call
**
** Description:
** Call the doGetLastError function which will be implemented by the LMS,
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function doGetLastError()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoGetLastError was not successful.");
      //since we can't get the error code from the LMS, return a general error
      return _GeneralError;
   }


   return api.LMSGetLastError().toString();

}

/******************************************************************************************
**
** Function doGetErrorString(errorCode)
** Inputs:	errorCode - Error Code(integer format)
** Return:	The textual description that corresponds to the input error code
**
** Description:
** Call the doGetErrorString function which will be implemented by the LMS,
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function doGetErrorString(errorCode)
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoGetErrorString was not successful.");
   }

   return api.LMSGetErrorString(errorCode).toString();

}

/******************************************************************************************
**
** Function doGetDiagnostic(errorCode)
** Inputs:	errorCode - Error Code(integer format), or null
** Return:	The vendor specific textual description that corresponds to the input error code
**
** Description:
** Call the doGetDiagnostic function which will be implemented by the LMS,
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function doGetDiagnostic(errorCode)
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoGetDiagnostic was not successful.");
   }

   return api.LMSGetDiagnostic(errorCode).toString();

}

/*******************************************************************************
**
** Function doIsInitialized()
** Inputs:	none
** Return:	true if the LMS API is currently initialized, otherwise false
**
** Description:
** Determines if the LMS API is currently initialized or not.
**
*******************************************************************************/
function doIsInitialized()
{
   // there is no direct method for determining if the LMS API is initialized
   // for example an doIsInitialized function defined on the API so we'll try
   // a simple doGetValue and trap for the LMS Not Initialized Error

   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\ndoIsInitialized() failed.");
      // no choice but to return false.
      return false;
   }
   else
   {
      var value = api.LMSGetValue("cmi.core.student_name");
      var errCode = api.LMSGetLastError().toString();
      if (errCode == _NotInitialized)
      {
         return false;
      }
      else
      {
         return true;
      }
   }
}

/******************************************************************************************
** APIWrapper Private function implementations
** Note: This is javascript so there is no way to really prevent someone
**	   from calling the other methods in this file, but they are really
**	   intended to be private methods.  Only the methods above
**       are intended to be called directly by the learning
**       content components.
******************************************************************************************/

/******************************************************************************************
**
** Function ErrorHandler()
** Inputs:	None
** Return:	The current value of the LMS Error Code
**
** Description:
** Determines if an error was encountered by the previous API call
** and if so, displays a message to the user.  If the error code
** has associated text it is displayed.
**
** Side Effects: Displays an alert window with the appropriate error information
**
******************************************************************************************/
function ErrorHandler()
{
   var api = getAPIHandle();
   if (api == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");
      return;
   }

   // check for errors caused by or from the LMS
   var errCode = api.LMSGetLastError().toString();
   if (errCode != _NoError)
   {
      // an error was encountered so display the error description
      var errDescription = api.LMSGetErrorString(errCode);

      if (_Debug == true)
      {
         errDescription += "\n";
         errDescription += api.LMSGetDiagnostic(null);
         // by passing null to doGetDiagnostic, we get any available diagnostics
         // on the previous error.

      }

      if (_Debug) alert(errDescription);

   }

   return errCode;
}

/******************************************************************************************
**
** Function getAPIHandle()
** Inputs:	None
** Return:	value contained by APIHandle
**
** Description:
** Returns the handle to API object if it was previously set,
** otherwise it returns null
**
******************************************************************************************/
function getAPIHandle()
{
   if (apiHandle == null)
   {
      apiHandle = getAPI();
   }

   return apiHandle;
}


/******************************************************************************************
**
** Function findAPI(win)
** Inputs:	win - a Window Object
** Return:	If an API object is found, it is returned, otherwise null is returned.
**
** Description:
** This function looks for an object named API in the supported window hierarchy,
**
******************************************************************************************/
function findAPI(win)
{

   // Search the window hierarchy for an object named "API"
   // Look in the current window (win) and recursively look in any child frames
      // alert("findAPI::"+win.API)
	  
	while ((win.API == null) && (win.parent != null) && (win.parent != win))
	{
		 
		findAPITries++;
		// Note: 7 is an arbitrary number, but should be more than sufficient
		if (findAPITries > 7)
		{
		 if (_Debug == true) {alert("Error finding API -- too deeply nested.");}
		 return null;
		}
		
		win = win.parent;

	}
	
   return win.API;

}


/******************************************************************************************
**
** Function getAPI()
** Inputs:	none
** Return:	If an API object is found, it is returned, otherwise null is returned.
**
** Description:
** This function looks for an object named API, first in the current window's hierarchy,
**  and then, if necessary, in the current window's opener window hierarchy (if there is
**  an opener window).
******************************************************************************************/

function getAPI()
{

   if (_Debug) {
	  alert("Checking "+window.name+" for API"); 
	}
	var theAPI = findAPI(window);
	if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined"))
	{
		var myWin=window.opener;
		while(theAPI == null & checkAPI<10)
		{
			if(typeof(myWin)=="undefined") {break;}				
			checkAPI++;	
			//alert("API::"+theAPI)
			theAPI = findAPI(myWin);
			
			myWin=myWin.opener;
		  }
	}
	
   if (theAPI == null && checkAPI>=10)
   {
      if (_Debug) {alert("Unable to find an API adapter- too deply nested");}
   }
   if (theAPI == null && typeof(myWin)=="undefined")
	{
      if (_Debug) {alert("Unable to find an API adapter- No opener window present");}
   }
   
   return theAPI;
}


