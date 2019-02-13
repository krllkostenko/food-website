'use strict';
let getPatterns = () => {
    const patterns = {
        emailPattern: /^\w{1,}@gmail.com$/g,
        namePattern: /[A-Z][a-z]{2,}/
    }
    return patterns;
}
let validatate = (email, name)=>{
    let patterns = getPatterns();
    let nameValue = $(name).val();
    let emailValue = $(email).val();
    if (nameValue.match(patterns.namePattern) && emailValue.match(patterns.emailPattern)) {
        $(email).val('');
        $(name).val('');
        showSuccess();
    } else {
        showWarning();
    }
}
let validation = (action, email, name) => {
    $(action).click(() => {
            if (action === '.reserve') {
                if ($('.reservationDate').val() === '' || $('.reservationTime').val() === '') {
                    showWarning();
                }else{
                    validatate(email,name);
                }
            } else {
                validatate(email,name)
            }
        }
    );
}
