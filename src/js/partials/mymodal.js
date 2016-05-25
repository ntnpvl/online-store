$(document).ready(function() {

  'use strict';
  var $loader  = $('.loader');
    
  var $itemId;
  var modalbody = $('.modal-body');
  var modalfooter = $('.modal-footer');

  $('.content-grid-test a').on('click', function(e) {
    // prevent the default behavior of the link
    e.preventDefault();

    // get the text of the link
    $itemId = $(this).children('img').attr("id");

      $.ajax({
         url: 'json/info.json',
         dataType: 'json'
     }).done(successFunction)
     .fail(function () {
         alert("fail");
     })    
  }); 

  // success function
  function successFunction(data) {
    // if data exists
    if (data.length > 0) {
        // loop through them
        for (var i = 0; i < data.length; i++) {
            if ($itemId === data[i].id) {

                modalbody.html("<img src=" + data[i].url + " id=" + data[i].id + ">");
                modalfooter.html("<p>"+data[i].description+"</p>");

                break;
            }
        }
    }
  }
});