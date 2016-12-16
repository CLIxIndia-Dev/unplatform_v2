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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'level_02'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy}", "click", function(sym, e) {
         startNextLevel();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("level_02");
   //Edge symbol end:'level_02'

   //=========================================================
   
   //Edge symbol: 'BG09'
   (function(symbolName) {   
   
   })("M3_BG03");
   //Edge symbol end:'M3_BG03'

   //=========================================================
   
   //Edge symbol: 'btn_back'
   (function(symbolName) {   
   
   })("btn_back");
   //Edge symbol end:'btn_back'

   //=========================================================
   
   //Edge symbol: 'btn_next'
   (function(symbolName) {   
   
   })("btn_next");
   //Edge symbol end:'btn_next'

   //=========================================================
   
   //Edge symbol: 'BG10'
   (function(symbolName) {   
   
   })("BG10");
   //Edge symbol end:'BG10'

   //=========================================================
   
   //Edge symbol: 'BG11'
   (function(symbolName) {   
   
   })("BG07");
   //Edge symbol end:'BG07'

   //=========================================================
   
   //Edge symbol: 'level_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         startNextLevel();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy2}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      })("level_03");
   //Edge symbol end:'level_03'

   //=========================================================
   
   //Edge symbol: 'BG12_1'
   (function(symbolName) {   
   
      })("M3_BG04");
   //Edge symbol end:'M3_BG04'

   //=========================================================
   
   //Edge symbol: 'BG13_1'
   (function(symbolName) {   
   
      })("BG14");
   //Edge symbol end:'BG14'

   //=========================================================
   
   //Edge symbol: 'BG11_1'
   (function(symbolName) {   
   
      })("BG11");
   //Edge symbol end:'BG11'

})(jQuery, AdobeEdge, "trans3");