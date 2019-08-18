//call and label for changes.html
let myImage = document.querySelector('img');

//loop to alternate between images, IF  is cat1 THEN change to cat2, ELSE cat1
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat1.jpg') {
      myImage.setAttribute ('src','images/cat2.jpg');
    } else {
      myImage.setAttribute ('src','images/cat1.jpg');
    }
}

//each click anywhere on page except button
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

//call and label the button for changes below
let myButton = document.querySelector('button');

//call and label the heading for changes below
let myHeading = document.querySelector('h1');

//define function, variables, action to prompt for variable value, action to change heading
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Cats, ' + myName;
}

//Remember value: Check variable 'name',  IF empty, THEN run, ELSE assign 'name' to storedName
if(!localStorage.getItem('name')) {
 setUserName();
} else {
let storedName = localStorage.getItem('name');
 myHeading.textContent = 'Welcome to Cats, ' + storedName;
}

//Buton Click runs function
myButton.onclick = function() {
  setUserName();
}