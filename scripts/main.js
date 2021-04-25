let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/TMNT-Shredder-black.jpg') {
        myImage.setAttribute('src', 'images/TMNT-Shredder-green.jpg');
    } else {
        myImage.setAttribute('src', 'images/TMNT-Shredder-black.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'The Shredder sees you, ' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'The Shredder sees you, ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}