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
   
   //Edge symbol: 'mainGameUI'
   (function(symbolName) {   
   
   })("mainGameUI");
   //Edge symbol end:'mainGameUI'

   //=========================================================
   
   //Edge symbol: 'topBand'
   (function(symbolName) {   
   
   })("topBand");
   //Edge symbol end:'topBand'

   //=========================================================
   
   //Edge symbol: 'shapesScreen'
   (function(symbolName) {   
   
   })("shapesScreen");
   //Edge symbol end:'shapesScreen'

   //=========================================================
   
   //Edge symbol: 'tool1'
   (function(symbolName) {   
   
   })("tool1");
   //Edge symbol end:'tool1'

   //=========================================================
   
   //Edge symbol: 'tool2'
   (function(symbolName) {   
   
   })("tool2");
   //Edge symbol end:'tool2'

   //=========================================================
   
   //Edge symbol: 'tool3'
   (function(symbolName) {   
   
   })("tool3");
   //Edge symbol end:'tool3'

   //=========================================================
   
   //Edge symbol: 'btn_release'
   (function(symbolName) {   
   
   })("btn_release");
   //Edge symbol end:'btn_release'

   //=========================================================
   
   //Edge symbol: 'btn_release_1'
   (function(symbolName) {   
   
   })("btn_reset");
   //Edge symbol end:'btn_reset'

   //=========================================================
   
   //Edge symbol: 'questionPanel'
   (function(symbolName) {   
   
   })("questionPanel");
   //Edge symbol end:'questionPanel'

   //=========================================================
   
   //Edge symbol: 'dropDown'
   (function(symbolName) {   
   
   })("dropDown");
   //Edge symbol end:'dropDown'

   //=========================================================
   
   //Edge symbol: 'btn_ask'
   (function(symbolName) {   
   
   })("btn_ask");
   //Edge symbol end:'btn_ask'

   //=========================================================
   
   //Edge symbol: 'btn_done'
   (function(symbolName) {   
   
   })("btn_done");
   //Edge symbol end:'btn_done'

   //=========================================================
   
   //Edge symbol: 'robot'
   (function(symbolName) {   
   
   })("robot");
   //Edge symbol end:'robot'

   //=========================================================
   
   //Edge symbol: 'coinBox'
   (function(symbolName) {   
   
   })("coinBox");
   //Edge symbol end:'coinBox'

   //=========================================================
   
   //Edge symbol: 'questionField'
   (function(symbolName) {   
   
   })("questionField");
   //Edge symbol end:'questionField'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_5'
   (function(symbolName) {   
   
   })("Symbol_5");
   //Edge symbol end:'Symbol_5'

   //=========================================================
   
   //Edge symbol: 'Symbol_6'
   (function(symbolName) {   
   
   })("Symbol_6");
   //Edge symbol end:'Symbol_6'

   //=========================================================
   
   //Edge symbol: 'Symbol_7'
   (function(symbolName) {   
   
   })("Symbol_7");
   //Edge symbol end:'Symbol_7'

   //=========================================================
   
   //Edge symbol: 'Symbol_8'
   (function(symbolName) {   
   
   })("Symbol_8");
   //Edge symbol end:'Symbol_8'

   //=========================================================
   
   //Edge symbol: 'btn_ask_1'
   (function(symbolName) {   
   
      })("btn_ask_1");
   //Edge symbol end:'btn_ask_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_9'
   (function(symbolName) {   
   
      })("Symbol_9");
   //Edge symbol end:'Symbol_9'

   //=========================================================
   
   //Edge symbol: 'Stage_transition'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Stage_transition");
   //Edge symbol end:'Stage_transition'

   //=========================================================
   
   //Edge symbol: 'scanAnimation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("scanAnimation");
   //Edge symbol end:'scanAnimation'

   //=========================================================
   
   //Edge symbol: 'text_allowed'
   (function(symbolName) {   
   
   })("text_allowed");
   //Edge symbol end:'text_allowed'

   //=========================================================
   
   //Edge symbol: 'text_allowed_1'
   (function(symbolName) {   
   
   })("text_blocked");
   //Edge symbol end:'text_blocked'

   //=========================================================
   
   //Edge symbol: 'scanAnimation_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("scanInvalid");
   //Edge symbol end:'scanInvalid'

})(jQuery, AdobeEdge, "mission3");