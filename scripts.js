//skills opacity
const skills = document.querySelector('#skills');
const skillsContainer = document.querySelector('.skills-wrapper');

let computedStyle = getComputedStyle(skills);
let currentOpacity = computedStyle.opacity;

document.addEventListener('scroll', function () {
  let targetPosition = {
      top: window.pageYOffset + skillsContainer.getBoundingClientRect().top,
    },
    windowPosition = {
      top: window.pageYOffset,
    };

  let scrollTop = document.scrollHeight;

  if (targetPosition.top - windowPosition.top < 3) {
    skillsContainer.classList.add('fixed');
    currentOpacity -= 0.02;
    skills.style.opacity = currentOpacity;

    if (document.scrollHeight > scrollTop) {
      console.log('down');
      scrollTop = document.scrollHeight;
    } else {
      console.log('up');
    }
  }
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
