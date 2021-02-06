export default {
  playBtn: document.querySelector('#play-button'), // button in the left corner
  pauseBtn: document.querySelector('#toggle-pause-button'), // button in the left corner
  reverseBtn: document.querySelector('#reverse-button'), // button in the left corner
  list: document.querySelector('[data-anim="list"]'), // the whole shopping list element
  listItems: document.querySelectorAll('[data-anim=list-item]'), // the list items with carrots
  truck: document.querySelector('[data-anim=truck-btn]'), // the whole truck element (button, wheels, etc..)
  truckBtn: document.querySelector('#truck'), // the SHIP IT button
  truckBtnBg: document.querySelector('#btn'), // the background of the button & the label SHIP IT
  shippedLabel: document.querySelector('[data-anim=btn-shipped]'), // the label which appears after the truck is out of sight
  frontGroup: document.querySelector('[data-anim=front-group]'), // the front parts of the truck
  frontWheel1: document.querySelectorAll('[data-anim=front-wheel-1]'), // front wheel
  frontWheel2: document.querySelectorAll('[data-anim=front-wheel-2]'), // front wheel
  frontWheelsBack: document.querySelector('[data-anim=front-wheel-back]'), // front wheel
  backWheel1: document.querySelector('[data-anim=back-wheel-1]'), // back wheel 1
  backWheelBack1: document.querySelector('[data-anim=back-wheel-back-1]'), // back wheel 1
  backWheel2: document.querySelector('[data-anim=back-wheel-2]'), // back wheel 2
  backWheelBack2: document.querySelector('[data-anim=back-wheel-back-2]'), // back wheel 2
  containerParts: document.querySelectorAll('[data-anim=container-part]'), // truck container parts
  container: document.querySelector('[data-anim=container]'), // truck container shadows
};
