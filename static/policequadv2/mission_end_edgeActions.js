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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'BG15'
   (function(symbolName) {   
   
   })("M02");
   //Edge symbol end:'M02'

   //=========================================================
   
   //Edge symbol: 'promotion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("promotion_m1");
   //Edge symbol end:'promotion_m1'

   //=========================================================
   
   //Edge symbol: 'btn_Start'
   (function(symbolName) {   
   
   })("btn_Start");
   //Edge symbol end:'btn_Start'

   //=========================================================
   
   //Edge symbol: 'btn_next'
   (function(symbolName) {   
   
   })("btn_next");
   //Edge symbol end:'btn_next'

   //=========================================================
   
   //Edge symbol: 'Mission2_end'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();
         
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("Mission2_end");
   //Edge symbol end:'Mission2_end'

   //=========================================================
   
   //Edge symbol: 'Mission2_end_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();
         
         

      });
            //Edge binding end

      })("Mission1_end");
   //Edge symbol end:'Mission1_end'

   //=========================================================
   
   //Edge symbol: 'promotion_m1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("promotion_m2");
   //Edge symbol end:'promotion_m2'

   //=========================================================
   
   //Edge symbol: 'Mission2_end_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();
         
         

      });
            //Edge binding end

      })("Mission3_end");
   //Edge symbol end:'Mission3_end'

   //=========================================================
   
   //Edge symbol: 'promotion_m2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("promotion_m3");
   //Edge symbol end:'promotion_m3'

   //=========================================================
   
   //Edge symbol: 'Mission3_end_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();
         
         

      });
            //Edge binding end

      })("Mission4_end");
   //Edge symbol end:'Mission4_end'

   //=========================================================
   
   //Edge symbol: 'promotion_m3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4083, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("promotion_m4");
   //Edge symbol end:'promotion_m4'

   //=========================================================
   
   //Edge symbol: 'M02_1'
   (function(symbolName) {   
   
      })("M01");
   //Edge symbol end:'M01'

   //=========================================================
   
   //Edge symbol: 'M02_1'
   (function(symbolName) {   
   
      })("M03");
   //Edge symbol end:'M03'

   //=========================================================
   
   //Edge symbol: 'M03_1'
   (function(symbolName) {   
   
      })("M04");
   //Edge symbol end:'M04'

})(jQuery, AdobeEdge, "end2");