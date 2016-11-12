/*eslint-disable*/
window.onload = function(){
    var emailInput = document.querySelector('.reg-modal .email-input-js');
    var nameInput = document.querySelector('.reg-modal .name-input-js');
    var lastNameInput = document.querySelector('.reg-modal .lastname-input-js');
    var passwordInput = document.querySelector('.reg-modal .password-input-js');
    var superPlaceholderOptions = {
        // delay between letters (in milliseconds)
        letterDelay: 100, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 1000,
        // should start on input focus. Set false to autostart
        startOnFocus: true,
        // loop through passed sentences
        loop: true,
        // Initially shuffle the passed sentences
        shuffle: false,
        // Show cursor or not. Shows by default
        showCursor: true,
        // String to show as cursor
        cursor: '|'
    };


    superplaceholder({
        el: emailInput,
        sentences: [ 'Укажите ваш личный email', 'Например: example@mail.ru'],
        options: superPlaceholderOptions
    });

    superplaceholder({
        el: nameInput,
        sentences: [ 'Укажите ваше имя', 'Например: Дональд'],
        options: superPlaceholderOptions
    });

    superplaceholder({
        el: lastNameInput,
        sentences: [ 'Укажите вашу фамилию', 'Например: Трамп'],
        options: superPlaceholderOptions
    });

    superplaceholder({
        el: passwordInput,
        sentences: [ 'Укажите ваш пароль', 'Например: войтивматрицу'],
        options: superPlaceholderOptions
    });
};

$(document).on('click', '.register-modal-btn', function(e){
    e.preventDefault();
    $('#reg-modal').bPopup({
        closeClass: 'modal-close-link'
    });
});
/*eslint-enable*/
