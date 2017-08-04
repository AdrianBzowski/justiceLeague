'use strict'


function showPopup(event) {
    event.preventDefault();
    document.querySelector('#popup').style.display = 'block';
}

function closePopup(event) {
    event.preventDefault();
    document.querySelector('#popup').style.display = 'none';
}



$("#pobierz-informator").click(function lol(){
    var input = document.querySelector('#popup-email').value;
    $("#message").append(input);
    
});

   
    



function showMessage(event) {
    event.preventDefault();
    document.querySelector('#message').style.display = 'block';
}
