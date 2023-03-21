//experiens animation
const experience = document.querySelector('#experience');
const expItems = experience.querySelectorAll('.experience-item');
//const projectBtns = experience.querySelectorAll('.experience-thumbnail');
const projecImgs = [
  './assets/img/plants.png',
  './assets/img/git-search.png',
  './assets/img/elite-fire.png',
  './assets/img/comments-form.png',
  './assets/img/bikes.png',
  '',
  './assets/img/cinemaddict.png',
  './assets/img/travel.png',
  './assets/img/design.png',
  './assets/img/levelup.png',
  './assets/img/watchStore.jpg',
  './assets/img/JD.png',
  './assets/img/beautySalon.jpg',
  './assets/img/crm.jpg',
];

projecImgs.forEach((el, i) => {
  if (i % 4 == 0) {
    expRow = document.createElement('div');
    expRow.classList.add('experience-row');
    experience.append(expRow);
  }
  const expBtn = document.createElement('button');
  expBtn.classList.add('experience-thumbnail');
  expBtn.style.backgroundImage = `url(${el})`;
  expRow.append(expBtn);
});

//skills opacity
const skills = document.querySelector('#skills');
const skillsContainer = document.querySelector('.skills-wrapper');

let computedStyle = getComputedStyle(skills);
let currentOpacity = computedStyle.opacity;
let lastScrollTop = 0;

document.addEventListener('scroll', function () {
  let skillsPosition = {
      top: window.pageYOffset + skillsContainer.getBoundingClientRect().top,
      bottom: window.pageYOffset + skillsContainer.getBoundingClientRect().bottom,
    },
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };

  let top = window.pageYOffset;

  if (lastScrollTop < top) {
    if (skillsPosition.top - windowPosition.top < 10) {
      currentOpacity -= 0.02;
      skills.style.opacity = currentOpacity;
      skills.classList.add('fixed');
      if (currentOpacity < 0 || skillsPosition.bottom - windowPosition.top < 750) {
        currentOpacity = 0;
        skills.classList.remove('fixed');
      }
    }
  } else {
    if (skillsPosition.bottom - windowPosition.top > 630) {
      currentOpacity += 0.02;
      skills.style.opacity = currentOpacity;
      skills.classList.add('fixed');
      if (currentOpacity > 1 || skillsPosition.top - windowPosition.top > 0) {
        currentOpacity = 1;
        skills.classList.remove('fixed');
      }
    }
  }

  lastScrollTop = top;
});

// lang change
const langBtn = document.querySelector('.language-btn');
langBtn.addEventListener('click', () => {
  const popup = document.querySelector('.popup');
  popup.classList.add('show-popup');

  setTimeout(() => {
    popup.classList.remove('show-popup');
  }, 5000);
});
