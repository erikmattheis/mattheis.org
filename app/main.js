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
/*
function handleClick(event, subjectId) {
  event.preventDefault();

  const currentActiveButton = document.querySelector(".button.active");
  currentActiveButton.classList.remove("active");

  const newActiveButton = document.getElementById("button-" + subjectId);
  newActiveButton.classList.add("active");

  const currentActiveSubject = document.querySelector(".subject-active");
  currentActiveSubject.classList.remove("subject-active");

  const newActiveSubject = document.getElementById(subjectId);
  newActiveSubject.classList.add("subject-active");
}
*/
function handleClick(event, subjectId) {
  console.log("handleClick", subjectId);
  event.preventDefault();

  const currentActiveButton = document.querySelector(".button.active");

  if (currentActiveButton) {
    currentActiveButton.classList.remove("active");
  }

  const newActiveButton = document.getElementById("button-" + subjectId);

  newActiveButton.classList.add("active");

  const currentActiveSubject = document.querySelector(".subject-active");

  if (currentActiveSubject) {
    currentActiveSubject.classList.remove("subject-active");
    currentActiveSubject.addEventListener('transitionend', function () {
      this.style.display = 'none';
      const newActiveSubject = document.getElementById(subjectId);

      newActiveSubject.classList.add("subject-active");
      newActiveSubject.style.display = 'block';
    });
  }

}
function attachListeners() {

  const buttonAi = document.getElementById("button-ai");
  const buttonJs = document.getElementById("button-js");
  const buttonDesign = document.getElementById("button-design");

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
