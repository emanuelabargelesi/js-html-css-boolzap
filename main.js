$(document).ready(function() {



//botta e risposta tra utente e cpu
  $('.fa-microphone')
    .on('click', function() {
      var message = $('.new-message-inputs').val();
      $('.right-messages').append('<p class = "greenbubble">' + message + '</p>');
      $('.new-message-inputs').val('');
serverResponse(message);
    });


function serverResponse(message) {
  $('.right-messages').append('<p class = "graybubble"> Risposta: ' + 'OK!' + '</p>');
}


//filtro i contatti
  $("#contacts-filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".contacts *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


// rimuovo classe active da tutti i contatti ogni volta che la imposto su uno per selezionarlo
$(".contact").on('click', function() {
  if($(".contact").hasClass('active')){
     $(".contact").removeClass('active');
   }
  $(this).addClass("active");
});

//giusto per provare a cambiare il testo nel DOM
$(".left-disclaimer-text a").on('click', function() {
  $(".left-disclaimer-text a").html("Disattiva notifiche desktop");
});


});
