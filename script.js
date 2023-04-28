'use strict';
// here we selecting the element with querySelector and store it in a variable.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// in HTML file we have 3 elements with same class name show-modal.
const btnsOpenModal = document.querySelectorAll('.show-modal'); // in this case it only select the first element so instead of querySelector we use .querySelectorAll()
// console.log(btnsOpenModal);

//note:- if there is one line of code after for loop or if else statement we do not have to give {} curly braces.

//here in console tab the buttons are in the form of like array so we can now loop through it to do anything.
// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);..........// now with the help of btnsOpenModal[i] buttons which are in the form of array changes to an element and we can also .textContent to get text content for all the 3 buttons.

// for hiding the modal
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//to hide the modal window by clicking outside of modal box which is overlay.
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//instead of writing duplicate code multiple times which we doing in above do this , create a function and not call it but use it everywhere.
const openModal = function () {
  // console.log('Button-Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//here we looping through buttons and we add event handler that gives a value Button-Clicked in console on each button clicked.
for (let i = 0; i < btnsOpenModal.length; i++)
  //for showing the modal
  btnsOpenModal[i].addEventListener('click', openModal);
// we attached this function to all of the 3 buttons.

// modal.classList.remove('hidden');......... // here we use classList property to modal that we already selected above and store it in a variable named modal and in classList property we use .remove method to show hidden modal of hidden class. note:- "remember here we do not use . to select class"
// overlay.classList.remove('hidden');

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function () {
//   console.log('A key was pressed!');
// });

//note:- how will we know which key was actually pressed if this event here happens for all the keys, well the info about which key was pressed will be stored in the event that is gonna occur as soon as any key is pressed so remember as we hit any key here in the keyboard , a keydown event is generated then our handler func. here waiting for that event to happen and anytime that an event like this occur JS thus generate and "Object" and that object contains all the info about the event itself and we can then access that object in the event handler func.

//  here this time we actually need to look at the event object in order to figure out which key was pressed, then hat we'll to we need to give this func. a parameter and then when the event occur JS will call this func. with the event object as an argument then simply log it.
document.addEventListener('keydown', function (e) {
  console.log(e.key); // .key property help us to generae the key name in console now we use the info of key to close the modal using escape key.

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //here we invert the situation when modal is visible then close the modal thats why we use "!" operator. and here we also using && operator to avoid to if block statement.

    // we can also check if an  element already has a certain class we use ".contain" , (here we can also use add and remove method.)
    closeModal(); // here we using this func. by calling it.
  }
});
