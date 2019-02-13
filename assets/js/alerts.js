'use strict';
let showWarning = () =>{
    $('.alert-warning').fadeIn();
    setTimeout(() => {
        $('.alert-warning').fadeOut();
    }, 2000);
}
let showSuccess = () =>{
    $('.alert-success').fadeIn();
    setTimeout(() => {
        $('.alert-success').fadeOut();
    }, 2000);
}