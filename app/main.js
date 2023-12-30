const welcomeSplash = `
<div class="page">
  <div class="card">
    <div class="loader-container">
      <div class="modal-loader">
        <h1 class="loader animated dur06 blurred">Let's Build Something Great Together</h1>
        <div class="svg animated dur06 blurred">
          <svg class="ov-icon ov-wrench" viewBox="0.48 0.48 23.04 23.04">
            <path fill="#ffffff"
              d="M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z">
            </path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`

document.body.insertAdjacentHTML('beforeend', welcomeSplash);

let loaderTimeout;

function removeLoading() {
  const loader = document.getElementsByClassName('loader-container');
  if (loader[0]) {
  loader[0].remove();
}
  
}

function hideLoading() {

  clearTimeout(loaderTimeout);

  const loader = document.getElementsByClassName('loader-container');

  if (loader[0]){
    loader[0].classList.add('transparent');
  }

  document.removeEventListener('mousemove', hideLoading);
  document.removeEventListener('touchstart', hideLoading);
  
  //animateContent();

  setTimeout(removeLoading, 1000);

}

function animateLoader() {
  const allElements = document.getElementsByClassName('loader');
  for(let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove('left', 'right', 'blurred');
  }
}

animateLoader();

function animateContent() {
  const allElements = document.getElementsByTagName('*');
  for(let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove('left', 'right', 'blurred');
  }
}

function addAnimations() {
  let elements = document.querySelectorAll('.topic');
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('intersecting')
          entry.target.classList.remove('left', 'right', 'blurred');
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  }

window.onload = function() {

  loaderTimeout = setTimeout(hideLoading, 500);

  document.addEventListener('mousemove', hideLoading);
  document.addEventListener('touchstart', hideLoading);

  addAnimations();
}

/*

*/

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