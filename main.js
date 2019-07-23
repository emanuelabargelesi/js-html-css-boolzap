$(document).ready(function() {




  $('#submitmsg')
    .on('click', function() {
      var message = $('#inpututente').val();
      $('#schermochatutente').append('<p class="paroleutente">' + message + '</p>');
      $('#inpututente').val('');
serverResponse(message);
    });
});



function serverResponse(message) {
  $('#schermochatcpu').append('<p class="rispostacpu"> Risposta: ' + 'OK!' + '</p>');
}
