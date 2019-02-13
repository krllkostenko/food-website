'use strict';
let slide = ()=>{
    let index = 1;
    $('[id^=menu-slide]').hide();
    setInterval(() => {
        setTimeout(() => {
            $(`#menu-slide${index}`).fadeIn();
        }, 3000);
        index++;
        $(`#menu-slide${index-1}`).hide();
        if(index >3){
            index=1;
        }
    }, 3000);
}