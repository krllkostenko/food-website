'use strict';
let datepicker = ()=>{
    $('#reserveModal').on('show.bs.modal',()=>{
        flatpickr(".reservationDate", {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
        });
        flatpickr('.reservationTime',{
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            static:true,
        });
    });
}