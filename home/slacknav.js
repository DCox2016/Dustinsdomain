const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(()=> {
    if(this.classList.contains('trigger-enter')) {
    this.classList.add('trigger-enter-active')
    }
  }, 150);
  background.classList.add('open');
  // test if function works console.log('Enter!');

  // arrow function way
  //setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('
  //trigger-enter-active'), 150);
  
  const dropdown = this.querySelector('.dropdown');
  //console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  //console.log(dropdownCoords);
  const navCoords = nav.getBoundingClientRect();
  //console.log(navCoords);
  //nav coords helps offset the space between the top and nav menu
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,  //subtract the navcoord to make the box fit
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open')
  // test if funciton works console.log('Exit!');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));