// // var nameError = document.getElementById('name-error');
// // var emailError = document.getElementById('email-error');
// // var passwordError = document.getElementById('password-error');
// // var phoneError = document.getElementById('phone-error');
// var nameError = document.getElementById('name-error');
// var phoneError = document.getElementById('phone-error');
// var emailError = document.getElementById('email-error');
// var messageError = document.getElementById('message-error');
// var submitError = document.getElementById('subit-error');
// // function validateForm() {
// //     var name = document.getElementById('contact-name').Value;
// //     if(name.length == 0){
// //         nameError.innerHTML = 'Name is required';
// //         return false;

// //     }
// //     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
// //         nameError.innerHTML ='write full name';
// //         return false;
// //     }
// //     nameError.innerHTML = 'valid';
// //     return true;
// // }
// function validateName(){
//     var name = document.getElementById('contact-name').value;

//     if(name.length == 0){
//         nameError.innerHTML = 'Name is required';
//         return false;
//     }
//     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         nameError.innerHTML = 'Write full name';
//         return false;
//     }
//     nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('subit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
