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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_LAUNCH}", "click", function(sym, e) {
         
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Mission_02").show();
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("Mission_02").play();
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_LAUNCH1}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Mission_01").show();
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("Mission_01").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_LAUNCHCopy}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Mission_04").show();
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("Mission_04").play();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_LAUNCHCopy2}", "click", function(sym, e) {
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Mission_03").show();
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var mySymbolObject = sym.getSymbol("Mission_03").play();
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'audioControl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("audioControl");
   //Edge symbol end:'audioControl'

   //=========================================================
   
   //Edge symbol: 'menu_btn_1'
   (function(symbolName) {   
   
   })("menu_btn_1");
   //Edge symbol end:'menu_btn_1'

   //=========================================================
   
   //Edge symbol: 'menu_btn2'
   (function(symbolName) {   
   
   })("menu_btn_2");
   //Edge symbol end:'menu_btn_2'

   //=========================================================
   
   //Edge symbol: 'menu_btn_3'
   (function(symbolName) {   
   
   })("menu_btn_3");
   //Edge symbol end:'menu_btn_3'

   //=========================================================
   
   //Edge symbol: 'menu_btn_4'
   (function(symbolName) {   
   
   })("menu_btn_4");
   //Edge symbol end:'menu_btn_4'

   //=========================================================
   
   //Edge symbol: 'btn_LAUNCH'
   (function(symbolName) {   
   
   })("btn_LAUNCH");
   //Edge symbol end:'btn_LAUNCH'

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
   
   //Edge symbol: 'BG11'
   (function(symbolName) {   
   
   })("BG11");
   //Edge symbol end:'BG11'

   //=========================================================
   
   //Edge symbol: 'BG10'
   (function(symbolName) {   
   
   })("BG10");
   //Edge symbol end:'BG10'

   //=========================================================
   
   //Edge symbol: 'level_02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy}", "click", function(sym, e) {
         Mission2();

      });
      //Edge binding end

   })("Mission_02");
   //Edge symbol end:'Mission_02'

   //=========================================================
   
   //Edge symbol: 'BG09'
   (function(symbolName) {   
   
   })("BG09");
   //Edge symbol end:'BG09'

   //=========================================================
   
   //Edge symbol: 'Mission_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function(sym, e) {
         sym.playReverse();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy}", "click", function(sym, e) {
         Mission1();

      });
         //Edge binding end

      })("Mission_01");
   //Edge symbol end:'Mission_01'

   //=========================================================
   
   //Edge symbol: 'BG09_1'
   (function(symbolName) {   
   
      })("M1_BG01");
   //Edge symbol end:'M1_BG01'

   //=========================================================
   
   //Edge symbol: 'M1_BG01_1'
   (function(symbolName) {   
   
      })("M1_BG02");
   //Edge symbol end:'M1_BG02'

   //=========================================================
   
   //Edge symbol: 'BG11_1'
   (function(symbolName) {   
   
      })("M1_BG03");
   //Edge symbol end:'M1_BG03'

   //=========================================================
   
   //Edge symbol: 'Mission_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function(sym, e) {
         sym.playReverse();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy}", "click", function(sym, e) {
         mission3();

      });
            //Edge binding end

         })("Mission_03");
   //Edge symbol end:'Mission_03'

   //=========================================================
   
   //Edge symbol: 'M1_BG01_1'
   (function(symbolName) {   
   
         })("M3_BG01");
   //Edge symbol end:'M3_BG01'

   //=========================================================
   
   //Edge symbol: 'M1_BG02_1'
   (function(symbolName) {   
   
         })("M3_BG02");
   //Edge symbol end:'M3_BG02'

   //=========================================================
   
   //Edge symbol: 'M1_BG03_1'
   (function(symbolName) {   
   
         })("M3_BG03");
   //Edge symbol end:'M3_BG03'

   //=========================================================
   
   //Edge symbol: 'Mission_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_next}", "click", function(sym, e) {
         sym.play();

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function(sym, e) {
         sym.playReverse();

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_nextCopy}", "click", function(sym, e) {
         mission4();

      });
               //Edge binding end

            })("Mission_04");
   //Edge symbol end:'Mission_04'

   //=========================================================
   
   //Edge symbol: 'M3_BG01_1'
   (function(symbolName) {   
   
            })("M4_BG01");
   //Edge symbol end:'M4_BG01'

   //=========================================================
   
   //Edge symbol: 'M3_BG02_1'
   (function(symbolName) {   
   
            })("M4_BG02");
   //Edge symbol end:'M4_BG02'

   //=========================================================
   
   //Edge symbol: 'M3_BG03_1'
   (function(symbolName) {   
   
            })("M4_BG03");
   //Edge symbol end:'M4_BG03'

})(jQuery, AdobeEdge, "book");