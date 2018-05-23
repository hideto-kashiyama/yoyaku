// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cookie
//= require_tree .

// @ app/assets/javascripts/application.js
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja
 
  // DOMの準備ができたら呼ばれる。
$(function() {
    
    $("#error_explanation i.fa-times").on("click", function(){
      $("#error_explanation").hide();
    });
    
      //tval*3000秒空けて再生
      setTimeout(function(){
          $("#error_explanation").hide(); 
      },3000);
      
      
      if (!$("#admin").text()) {
       
        $("#adming").hide();
        
      }
      
     
      
});