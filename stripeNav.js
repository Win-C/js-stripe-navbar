"use strict";

const triggers = document.querySelectorAll('.cool > li') // grab all the direct descendants of cool
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

/** Function handles mouseenter event on navbar */
function handleEnter(){
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') &&
  this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');
  
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

/** Function handles mouseleave event on navbar */
function handleLeave(){
  this.classList.remove('trigger-enter', 'trigger-active-enter');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
