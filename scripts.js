//experience animation
const experience = document.querySelector('.experience');
//const expItems = experience.querySelectorAll('.experience-item');
//const projectBtns = experience.querySelectorAll('.experience-thumbnail');
const projecImgs = [
  './assets/img/plants.png',
  './assets/img/git-search.png',
  './assets/img/elite-fire.png',
  './assets/img/comments-form.png',
  './assets/img/bikes.png',
  './assets/img/cinemaddict.png',
  './assets/img/travel.png',
  './assets/img/screen2.png',
  './assets/img/design.png',
  './assets/img/levelup.png',
  './assets/img/watchStore.jpg',
  './assets/img/JD.png',
  './assets/img/beautySalon.jpg',
  './assets/img/crm.jpg',
];

projecImgs.forEach((el, i) => {
  if (window.innerWidth < 570) {
    expRow = document.createElement('div');
    expRow.classList.add('experience-row');
    experience.append(expRow);
  } else if (window.innerWidth < 830) {
    if (i % 3 == 0) {
      expRow = document.createElement('div');
      expRow.classList.add('experience-row');
      experience.append(expRow);
    }
  } else {
    if (i % 5 == 0) {
      expRow = document.createElement('div');
      expRow.classList.add('experience-row');
      experience.append(expRow);
    }
  }

  const expBtn = document.createElement('button');
  expBtn.classList.add('experience-thumbnail');
  expBtn.style.backgroundImage = `url(${el})`;

  if (window.innerWidth < 830 && el == './assets/img/screen2.png') {
    expBtn.style.backgroundImage = `url('./assets/img/small.png')`;
  } else if (window.innerWidth < 570 && el == './assets/img/screen2.png') {
    expBtn.style.backgroundImage = `url('./assets/img/mobile-screen.png')`;
  }

  if (el == './assets/img/screen2.png') {
    const expBtnOver = document.createElement('img');
    expBtnOver.classList.add('scaled-img');
    if (window.innerWidth < 570) {
      expBtnOver.setAttribute('src', './assets/img/mobile-screen.png');
    }
    if (window.innerWidth < 830) {
      expBtnOver.setAttribute('src', './assets/img/small.png');
    } else {
      expBtnOver.setAttribute('src', './assets/img/screen2.png');
    }

    expBtn.style.visibility = 'hidden';
    expBtn.classList.add('scaled');
    expRow.append(expBtnOver);
  }
  expRow.append(expBtn);
});

//skills opacity
const skills = document.querySelector('#skills');
const skillsContainer = document.querySelector('.skills-wrapper');
const scaledImg = document.querySelector('.scaled-img');

let computedStyleForSkills = getComputedStyle(skills);
let currentOpacity = computedStyleForSkills.opacity;

let scale = 1;
let lastScrollTop = 0;

document.addEventListener('scroll', function () {
  let skillsPosition = {
      top: window.pageYOffset + skillsContainer.getBoundingClientRect().top,
      bottom: window.pageYOffset + skillsContainer.getBoundingClientRect().bottom,
    },
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    },
    experiencePosition = {
      top: window.pageYOffset + experience.getBoundingClientRect().top,
      bottom: window.pageYOffset + experience.getBoundingClientRect().bottom,
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

    if (experiencePosition.top - windowPosition.top < 500) {
      scale -= 0.03;
      scaledImg.style.transform = `scale(${scale})`;
      scaledImg.style.borderRadius = '15%';
      if (scale == 0.2 || scale < 0.2) {
        experience.querySelector('.scaled').style.visibility = '';
        scaledImg.classList.add('non-display');
      }
    }
  } else {
    if (skillsPosition.bottom - windowPosition.top > 630) {
      currentOpacity += 0.02;
      skills.style.opacity = currentOpacity;
      skills.classList.add('fixed');
      scale = 1;
      scaledImg.style.transform = `scale(${scale})`;
      scaledImg.style.borderRadius = '0';

      if (currentOpacity > 1 || skillsPosition.top - windowPosition.top > 0) {
        currentOpacity = 1;
        skills.classList.remove('fixed');
        scaledImg.classList.remove('non-display');
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
