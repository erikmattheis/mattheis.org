import './style.css'

function randomPercentage() {
  let result;
  do {
    result = Math.random() * 3 - 1.5;
  } while (result > -1 && result < 1);
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
  });

  const svgs = document.getElementsByClassName('svg');
  console.log(svgs)
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
  addListeners();
  changeCSSAnimationRotationRandomlyAndSlightly();

}