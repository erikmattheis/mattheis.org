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

  //animateContent();

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
  // addAnimations();
};

window.addEventListener('scroll', function () {
  const topics = document.querySelectorAll('.topic');
  

    topics.forEach(function (topic) {
      const rect = topic.getBoundingClientRect();

      const title = topic.querySelector('.svg-title');
      const titleStyle = window.getComputedStyle(title);

      const visibleMarginBottom = parseInt(titleStyle.getPropertyValue('margin-bottom'), 10);
      const visiblePaddingBottom = parseInt(titleStyle.getPropertyValue('padding-bottom'), 10);

      const distanceFromTop = rect.bottom - (visiblePaddingBottom + visibleMarginBottom);
      const distanceFromBottom = window.innerHeight - rect.top;

      const animationHeight = window.innerHeight * 0.2;
      if (distanceFromTop > 0 && distanceFromTop < animationHeight) {
        const translateX = distanceFromTop - animationHeight;
        topic.style.transform = 'translateX(' + translateX + 'px)';
        topic.style.opacity = distanceFromTop / animationHeight;
        return;
      }
      if (distanceFromBottom > 0 && distanceFromBottom < animationHeight) {
        const translateX = animationHeight - distanceFromBottom;
        topic.style.transform = 'translateX(' + translateX + 'px)';
        topic.style.opacity = distanceFromBottom / animationHeight;
        return;
      }
    });
  })
/*
window.onload = function() {
  const topics = document.querySelectorAll('.topic');
  const animationHeight = window.innerHeight * 0.2;

  window.addEventListener('scroll', function() {

    topics.forEach(function(topic) {

      const rect = topic.getBoundingClientRect();
      var style = window.getComputedStyle(topic);
      const visibleTop = rect.top - (topic.style.marginTop + topic.style.paddingTop || 0)
      console.log(`${rect.top} - ${topic.style.marginTop} + ${topic.style.paddingTop}` || 0)

      if (visibleTop > 0 && visibleTop < animationHeight) {
        console.log('visibleTop:', visibleTop)
        console.log('animationHeight:', animationHeight)
        console.log('')
        topic.style.transform = 'translateX(' + visibleTop + 'px)';

        
        var top = style.getPropertyValue('margin-top');

        return;
        
      }

      const visibleBottom = rect.bottom - (topic.style.visibleMarginBottom + topic.style.visiblePaddingBottom  || 0)

      if (visibleBottom < window.innerHeight && visibleBottom > window.innerHeight - animationHeight) {

        console.log('visibleBottom:', visibleBottom)
        console.log('animationHeight:', animationHeight)
        console.log('')
        
        topic.style.transform = 'translateX(' + (animationHeight - visibleBottom) + 'px)';

        return;
        
      }

      const distanceFromBottom = window.innerHeight - visibleBottom;

      console.log('distanceFromBottom', distanceFromBottom)

      if (distanceFromBottom > 0 && distanceFromBottom < animationHeight) {

        const translateX =  distanceFromBottom - animationHeight;

        console.log(translateX)

        topic.style.transform = 'translateX(' + translateX + 'px)';
        
        return

      }

    });
  });
}
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
*/