'use strict';



/**
 * ~ Selecting --------------------------------------------------------------
 **/

/*
console.log(document.documentElement);  // Entire HTML
console.log(document.head);  // Head
console.log(document.body); // Body

document.getElementById('section--1');  // without selector only name of id

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const allButtons = document.getElementsByTagName('button');  // returns an HTML collection: is actually a so-called live collection
console.log(allButtons); // If the DOM changes then this collection is also immediately updated automatically


document.getElementsByClassName('btn'); // without selector only name of class

 */
/**
 * ~ Creating and inserting elements --------------------------------------------------------------
 **/
/* 
// * Creating ----------------------------------------

// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent = 'We use cookies for improved functionally and analytics.'

message.innerHTML = 'We use cookies for improved functionally and analytics.<button class="btn btn--close-cookie">Got it</button>';

const header = document.querySelector('.header');

// * Inserting ----------------------------------------
header.prepend(message); // Adds the element at the first child of header element
// header.append(message); // Adds the element at the last child of header element

header.append(message.cloneNode(true)); // the multiple copies of same elements (child elements will also be copied)

// header.before(message); // Adds this element after the header element
// header.after(message); // Adds this element before the header element
*/

/**
 * ~ Deleting --------------------------------------------------------------
 **/

/*
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.remove();  // new method
  message.parentElement.removeChild(message); // old method

});
 */


/**
 * ~ Styles, Attributes and Classes --------------------------------------------------------------
 **/
/* 
// * Styles --------------------------------------------------
message.style.backgroundColor = '#37383d'
message.style.width = '120%';

// gets the only style that we set manually ourselves
console.log(message.style.backgroundColor);

// - Inserting ----------------------------------------
// real style as its appears on the page
// console.log(getComputedStyle(message)); 
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = parseInt(getComputedStyle(message).height, 10) + 3 + 'px';

// documentElement: root 
document.documentElement.style.setProperty('--color-primary', 'orangered');

// * Attributes --------------------------------------------------
// Gets
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);  // absolute url
console.log(logo.className);

// Non-standard: undefined
// console.log(logo.designer); // undefined

console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('src')); // relevant url

// Sets
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href')); // relevant url

// Data attributes
console.log(logo.dataset.versionNumber);

// * Classes --------------------------------------------------
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c', 'j');
logo.classList.contains('c');  // not includes

// Don't use this because it will override all the existing classes and also it allows us to only put one class on any element
logo.className = ' jonas'
 */


/**
 * ~ Smooth Scrolling --------------------------------------------------------------
 **/
/* 
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // getBoundingClientRect(): getting rectangular DOM of Selected element 
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (x/y)', window.scrollX, window.scrollY);

  console.log('height/weight',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth)

  // * Scrolling --------------------------------------------------
  // Old-School style
  // first arguments: left position, top position + current scroll(absolute)
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth'
  // });

  // New-Style: but modern browser
  section1.scrollIntoView({ behavior: "smooth" });

}); 
*/

/**
 * ~ Type of Events and Events Handlers --------------------------------------------------------------
 **/

/* 
// * mouseenter
const h1 = document.querySelector('h1');

// Old-School
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! you are reading the heading :D');
// }


const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');

  // Removing 
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/


/**
 * ~ Event Propagation: Bubbling and Capturing --------------------------------------------------------------
 **/
/* 
// rgb(255,255,255);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);

  console.log(e.currentTarget === this); // true

  // * Stop propagation: not a good idea -----------------
  // e.stopPropagation();
});


document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true

  console.log(e.currentTarget === this); // true

});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);

  console.log(e.currentTarget === this); // true
}, true); // capturing parameters
 */

/**
 * ~ DOM Traversing --------------------------------------------------------------
 **/

/* 
const h1 = document.querySelector('h1');

// Going downwards: child : direct sibling
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upward: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest parent element
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: sibling (direct sibling : previous and next one)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
 */

/**
 * ~ The Intersection Observer API --------------------------------------------------------------
 **/
/*
 // This callback function here will get called each time that the observed element(target element) 
// is intersecting the route element at the threshold that we defined in the function.
const obsCallback = function (entries, observer) {
  // entries : actually an array of the threshold entries
  // observer: observer object itself

  entries.forEach(entry => {
    console.log(entry);
  });
}
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const obsOptions = {
  root: null,      // null: for viewport // This here is the target and the route element will be the element that we want our target element to intersect.
  threshold: [0, 0.2], // this is basically the percentage of intersection at which the observe callback will be called
  rootMargin: `-${navHeight}px`,  // And this route margin here, for example 90 is a box of 90px that will be applied outside the target element


};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);  // target element
*/

/**
 * ~ Lifecycle DOM Events --------------------------------------------------------------
 **/
// * DOM content loaded --------------------
/*
 document.addEventListener('DOMContentLoaded', function (e) {
  console.log(`HTML parsed and DOM tree built!`, e);
});
*/

// * load --------------------
/*
window.addEventListener('load', function (e) {
   console.log(`Page fully load`, e);
});
*/

// * beforeunload --------------------
/* 
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();  // some browser required it, not chrome
  console.log(e);

  // in order to display a leaving confirmation, we need to set the return value on the event to an empty string.
  e.returnValue = '';  // this if for historical reasons.
});
*/

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const allSections = document.querySelectorAll('.section');


const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Old School
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



///////////////////////////////////////
// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  // getBoundingClientRect(): getting rectangular DOM of Selected element 
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (x/y)', window.scrollX, window.scrollY);

  console.log('height/weight',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth)

  // Old-School style
  // first arguments: left position, top position + current scroll(absolute)
  // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth'
  // });

  // New-Style: but modern browser
  section1.scrollIntoView({ behavior: "smooth" });

});


///////////////////////////////////////
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//      console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });

//   });
// });

// * Event Delegation -----------------------------------------------------
// - 1. add the event listener to a common parent element
// - 2. in that eventListener determine what element originate the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);

  // - Matching Strategy ----------
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// * Tab Component --------------------------------------------------------------

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); // bad practice

// Event delegation
tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target;
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  // Active tab 
  clicked.classList.add('operations__tab--active');

  // Activate content area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

});

// * Menu fade animation -----------------------------------------------------
const handleHover = function (e) {
  // console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {

    const link = e.target;

    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// mouseenter event can not bubble up 
// opposite mouseenter: mouseleave | mouseover: mouseout 

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5)); // if we want pass multiple argument than we should pass array or object
nav.addEventListener('mouseout', handleHover.bind(1));

// * Sticky Navigation: The Scroll Event -----------------------------------------------------
/*  // bad practice
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

window.addEventListener('scroll', function (e) {

  // console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}); 
*/

// * Sticky Navigation: A Better Way: The Intersection Observer API -----------------------------------------------------
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // entire view port
  threshold: 0,
  rootMargin: `-${navHeight}px`,  // And this route margin here, for example 90 is a box of 90px that will be applied outside the target element
});
headerObserver.observe(header);

// * Revealing Elements On Scroll: The Intersection Observer API -----------------------------------------------------
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);  // if observer finish its work than just unobserve
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// * Lazy Loading Images: The Intersection Observer API -----------------------------------------------------
const imgTarget = document.querySelectorAll('img[data-src]');
// console.log(imgTarget);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTarget.forEach(img => imgObserver.observe(img));

// * Slider Component -----------------------------------------------------

const sliders = function () {

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');


  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // 0%, 100%, 200%, 300%

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList
        .remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }


  const goToSlide = function (slide) {
    slides.forEach((s, i) =>
      (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    // curSlide = 1: -100%, 0%, 100%, 200%

  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);

  }

  // Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {

      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Functions
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);

  }
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();

    e.key === 'ArrowRight' && nextSlide();

  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);

    }
  });
}

sliders();