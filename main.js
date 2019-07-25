$(document).ready(function() {


  // $('.new-message-inputs')
  // .on('click', function() {
  //   $('.fa-microphone').toggle();
  //   $('.fa-paper-plane').toggle();
  // });

  //togglie immagine quando entri nell'imput
  $('.new-message-inputs')
    .mouseenter(function() {
      $('.fa-microphone').hide();
      $('.fa-paper-plane').show();
    }).mouseleave(function() {
      $('.fa-microphone').show();
      $('.fa-paper-plane').hide();
    });



  //botta e risposta tra utente e cpu
  $('.fa-microphone').on('click', function() {
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


  // rimuovo classe active da tutti i contatti ogni volta che la imposto su uno per selezionarlo e gli collego una chat
  $(".contact").on('click', function() {
    var refchat = $(this).attr('refchat');
    if ($(".contact.active")) { //.contact.active, senza spazi, va a prendere solo quelli con class active (con lo spazio i figli)
      $(".contact").removeClass('active');
      $(".right-messages").removeClass('active');
    }
    $(this).addClass("active");
    $('.right-messages[refchat="' + refchat + '"]').addClass('active');
    // console.log('il valore di refchat è ' + refchat);
  });


//attivare e disattivare le notifiche
  $('.left-disclaimer-text a').on('click', function() {
    $(this).text(function(i, text){
          return text === 'Attiva notifiche desktop' ? 'Disattiva notifiche desktop' : 'Attiva notifiche desktop';
      });
  });



  //sta scrivendo
  $(".new-message-inputs").on('click', function() {
    $(".stascrivendo").html('<p> Sta scrivendo ...</p>')
      .css({
        'font-size': '12px',
        'align-items': 'flex-end'
      });
  });


});
