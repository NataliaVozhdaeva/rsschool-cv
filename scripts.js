//skills opacity
const skills = document.querySelector('#skills');
const skillsContainer = document.querySelector('.skills-wrapper');
const experience = document.querySelector('#experience');

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
