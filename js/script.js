const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");
const counters = document.querySelectorAll(".counter");

let scrollStarted = false;

btn.addEventListener("click", navToggle);
window.addEventListener("scroll", scrollPage);

function scrollPage() {
  const scrollPosition = window.scrollY;
    // console.log(scrollPosition);

  if (scrollPosition > 100 && !scrollStarted) {
    counterUp();
    scrollStarted = true;
  } else if (scrollPosition < 100 && scrollStarted){
    reset();
    scrollStarted = false;
  }
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = 0));
}

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-mobile-menu");
}

function counterUp() {
  counters.forEach((counter) => {
    // console.log(counter);
    counter.innerText = "0";

    const updateCounter = () => {
      // boleh guna Number() untk transform ke number.
      // get counter target
      const target = +counter.getAttribute("data-target");
      // console.log(target);

      // get current value
      const c = +counter.innerText;

      // create an increment
      const increment = target / 100;

      // if counter is less than target, add increment
      if (c < target) {
        // round up and set counter value to same with data target
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// counterUp();
