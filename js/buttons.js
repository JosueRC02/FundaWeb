const Swal = require('../node_modules/sweetalert2/dist/sweetalert2.all.min');

let verde = document.getElementById("verde");

verde.addEventListener("click", btnverde);

function btnverde(){
    Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
    })
}