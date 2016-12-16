/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_Start}", "click", function(sym, e) {
         // insert code for mouse click here
         introShow();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_Start_up'
   (function(symbolName) {   
   
   })("btn_Start");
   //Edge symbol end:'btn_Start'

   //=========================================================
   
   //Edge symbol: 'btn_Instructions'
   (function(symbolName) {   
   
   })("btn_Instructions");
   //Edge symbol end:'btn_Instructions'

   //=========================================================
   
   //Edge symbol: 'stars'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("stars");
   //Edge symbol end:'stars'

})(jQuery, AdobeEdge, "splash");