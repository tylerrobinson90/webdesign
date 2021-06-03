
let buttons = document.querySelectorAll('.button');


for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function (event) {


        alert('You Bought The Plane!!');
        console.log('You Bought the Plane!!');

        console.log(event);
    });
}