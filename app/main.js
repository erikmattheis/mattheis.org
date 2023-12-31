let loaderTimeout;

function removeLoading() {
  const loader = document.getElementsByClassName("loader-container");
  if (loader[0]) {
    loader[0].remove();
  }
}

function hideLoading() {
  clearTimeout(loaderTimeout);

  const loader = document.getElementsByClassName("loader-container");

  if (loader[0]) {
    loader[0].classList.add("transparent");
  }

  document.removeEventListener("mousemove", hideLoading);
  document.removeEventListener("touchstart", hideLoading);

  animateContent();

  setTimeout(removeLoading, 1000);
}

function animateLoader() {
  const allElements = document.getElementsByClassName("loader");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("left", "right", "blurred");
  }
}

function animateContent() {
  const allElements = document.getElementsByClassName("header");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("left", "right", "blurred");
  }
}

function addAnimations() {
  let elements = document.querySelectorAll(".topic");

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("intersecting");
        entry.target.classList.remove("left", "right", "blurred");
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

document.onload = function () {
  addAnimations();
};

window.onload = function () {
  loaderTimeout = setTimeout(hideLoading, 500);

  document.addEventListener("mousemove", hideLoading);
  document.addEventListener("touchstart", hideLoading);

  addAnimations();

  const links = document.querySelectorAll('.button a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove the active class from all links
      links.forEach(function(link) {
        link.classList.remove('active');
        document.getElementById(link.textContent.toLowerCase() + '-content').style.display = 'none';
      });

      // Add the active class to the clicked link
      this.classList.add('active');
      document.getElementById(this.textContent.toLowerCase() + '-content').style.display = 'block';
    });
  });
}




/*
function randomPercentage() {
  let result;
  do {
    result = Math.random() * 3 - 1.5;
  } while (result > -1.3 && result < 1.3);
  return result;
}

function changeCSSAnimationRotationRandomlyAndSlightly() {
  const swingElements = document.querySelectorAll('.swing');
  const stylesheet = document.styleSheets[0];

  swingElements.forEach((element, index) => {
    const animationName = 'swing' + index;
    const rotation = randomPercentage();
    const duration = Math.abs(rotation) * 1.5;

    const keyframes = `
      @keyframes ${animationName} {
        0% { transform: rotate(-${rotation}deg); }
        50% { transform: rotate(${rotation}deg); }
        100% { transform: rotate(-${rotation}deg); }
      }
    `;

    stylesheet.insertRule(keyframes, stylesheet.cssRules.length);

    element.style.animation = `${animationName} ${duration}s infinite ease-in-out`;
    element.style.transformOrigin = "center -200px";
  });
}

function addListeners() {
  const swingElements = document.querySelectorAll('.swing');

  swingElements.forEach(element => {
    element.addEventListener('mouseover', function () {
      element.style.animationPlayState = 'paused';
    });
  });

  swingElements.forEach(element => {
    element.addEventListener('mouseout', function () {
      element.style.animationPlayState = 'running';
    });
  });

  swingElements.forEach(element => {
    element.addEventListener('touchstart', function () {
      element.style.animationPlayState = 'paused';
    });
  });

  swingElements.forEach(element => {
    element.addEventListener('touchend', function () {
      element.style.animationPlayState = 'running';
    });


    element.addEventListener('mouseover', function () {
      document.getElementById('message').style.display = 'block';
      this.style.animationPlayState = 'running'; // Access style on individual SVG
    });
    element.addEventListener('touchstart', function () {
      document.getElementById('message').style.display = 'block';
      this.style.animationPlayState = 'running'; // Access style on individual SVG
    });

    element.addEventListener('mouseover', function () {
      this.nextElementSibling.classList.add('hovered');
    });
    element.addEventListener('mouseout', function () {
      this.nextElementSibling.classList.remove('hovered');
    });

  });

  const topics = document.getElementsByClassName('topic');
  for (let i of topics) {
    console.log(i)
  }

  let svgs = document.getElementsByTagName('svg');
  for (let i = 0; i < svgs.length; i++) {

  }

  svgs.forEach(element => {
    element.addEventListener('mouseover', function () {
      document.getElementById('message').style.display = 'block';
    });
  });

  svgs.forEach(element => {
    console.log('OGVIYTVYVGI')

    element.addEventListener('touchstart', function () {
      document.getElementById('message').style.display = 'block';
    });
  });
}


window.onload = function () {

  console.log('window.onload')
  //addListeners();
  //changeCSSAnimationRotationRandomlyAndSlightly();

}

*/
