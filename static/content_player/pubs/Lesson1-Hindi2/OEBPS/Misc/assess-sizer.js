'use strict';

$(document).ready(function() {
  window.addEventListener("message", function(event){
    var player = document.getElementById('openassessments_container')
    var payload = JSON.parse(event.data);
    if(payload.height) {
      player.style.height = payload.height + 'px';
    }

  }, false);

});
