$(document).ready(function() {

  //togglie immagine quando entri nell'imput
  $('.new-message-inputs')
    .mouseenter(function() {
      $('.fa-microphone').hide();
      $('.fa-paper-plane').show();
    }).mouseleave(function() {
      $('.fa-microphone').show();
      $('.fa-paper-plane').hide();
    });


  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

//aggiungo ultimo accesso al contatto
  $('.time').html('Ultimo accesso oggi alle: ' + time);

//aggiungo ultimo accesso
$('.time.f-right').html(time);



  //botta e risposta tra utente e cpu
  $('.fa-microphone').on('click', function() {

    var message = $('.new-message-inputs').val();
    $('.right-messages.active').append('<p class = "greenbubble">' + message + " <br /> " +
      "<span class= 'timechat'>" + time + "</span>" + '</p>');
    $('.new-message-inputs').val('');
    serverResponse(message);
  });


  function serverResponse(message) {
    $('.right-messages.active').append('<p class = "graybubble"> ' + 'OK!' +
      "<span class= 'timechat'>" + time + "</span>" + '</p>');
  }



  //delete message
  $(".right-messages.active").on('click', '.greenbubble', function() {

    $(this).addClass('selected').siblings().removeClass('selected');
    $('#delPop').show();

    $('#yes').one('click', function() {
      $('.greenbubble.selected').remove();
      $('#delPop').hide();
    });

    $('#no').one('click', function() {
      $('#delPop').hide();
    });
  });



  //filtro i contatti
  $('#contacts-filter').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('.contacts *').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });



  // rimuovo classe active dal contatto e gli collego una chat
  $('.contact').on('click', function() {
    var refchat = $(this).attr('refchat');
    if ($('.contact.active')) { //.contact.active, senza spazi, va a prendere solo quelli con class active (con lo spazio i figli)
      $('.contact').removeClass('active');
      $('.right-messages').removeClass('active');
    }
    $(this).addClass('active');
    $('.right-messages[refchat="' + refchat + '"]').addClass('active');
    // console.log('il valore di refchat è ' + refchat);
  });


  //attivare e disattivare le notifiche
  $('.left-disclaimer-text a').on('click', function() {
    $(this).text(function(i, text) {
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
