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
  console.log("animateContent");
  const allElements = document.getElementsByClassName("header");
  for (let i = 0; i < allElements.length; i++) {
    console.log(allElements[i].classList);
    allElements[i].classList.remove("left", "right", "blurred");
  }
}

function handleClick(event, topic) {
  // prevent default behavior
  event.preventDefault();
  console.log("handleClick: ", topic);
}

function attachListeners() {
  
  const buttonAi = document.querySelector(".button-ai");
  const buttonJs = document.querySelector(".button-js");
  const buttonDesign = document.querySelector(".button-design");

  buttonAi.addEventListener("click", function (event) {
    handleClick(event, "ai");
  });

  buttonJs.addEventListener("click", function (event) {
    handleClick(event, "js");
  });

  buttonDesign.addEventListener("click", function (event) {
    handleClick(event, "design");
  });
}

window.onload = function () {
  attachListeners();
  animateContent();
};

window.addEventListener("scroll", function () {
  const topics = document.querySelectorAll(".topic .graphic");

  const noElement = {
    getPropertyValue: function () {
      return 0;
    },
  };

  const contentPadding = 16;

  const animationHeight = window.innerHeight * 0.2;

  topics.forEach(function (topic) {
    const rect = topic.getBoundingClientRect();

    const title = topic.querySelector(".copy");

    let titleStyle;

    if (title) {
      titleStyle = window.getComputedStyle(title);
    } else {
      titleStyle = noElement;
    }

    const distanceFromTop = rect.bottom - contentPadding;
    const distanceFromBottom = window.innerHeight - rect.top;

    if (distanceFromTop > 0 && distanceFromTop < animationHeight) {
      const translateX = distanceFromTop - animationHeight;

      topic.style.transform = "translateX(" + translateX + "px)";
      topic.style.opacity = distanceFromTop / animationHeight;
    } else if (distanceFromBottom > 0 && distanceFromBottom < animationHeight) {
      const translateX = animationHeight - distanceFromBottom;

      topic.style.transform = "translateX(" + translateX + "px)";
      topic.style.opacity = distanceFromBottom / animationHeight;
      return;
    }
  });

  const copies = document.querySelectorAll(".copy");

  copies.forEach(function (copy) {
    let copyStyle;

    if (copy) {
      copyStyle = window.getComputedStyle(copy);
    } else {
      copyStyle = noElement;
    }

    const rect2 = copy.getBoundingClientRect();

    const distanceFromTop2 = rect2.bottom - contentPadding;
    const distanceFromBottom2 = window.innerHeight - rect2.top;

    if (distanceFromTop2 > 0 && distanceFromTop2 < animationHeight) {
      const translateX = distanceFromTop2 - animationHeight;

      copy.style.transform = "translateX(" + translateX + "px)";
      copy.style.opacity = distanceFromTop2 / animationHeight;
      return;
    } else if (
      distanceFromBottom2 > 0 &&
      distanceFromBottom2 < animationHeight
    ) {
      const translateX = animationHeight - distanceFromBottom2;

      copy.style.transform = "translateX(" + translateX + "px)";
      copy.style.opacity = distanceFromBottom2 / animationHeight;
      return;
    }
  });
});
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
*/
