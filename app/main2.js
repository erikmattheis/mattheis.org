let subjectsTransitioning = false;

function addActiveButton(subjectId, className = "active") {
  const button = document.getElementById(`button-${subjectId}`);

  if (button) {
    button.classList.add(className);
  }
}

function removeActive(className) {
  const actives = document.getElementsByClassName(className)

  if (actives.length) {
    actives.forEach((active) => {
      active.classList.remove(className);
    });
  }
}

function addActiveSubject(subjectId, className = "active") {
  const newActiveSubject = document.getElementById(subjectId);

  if (newActiveSubject) {
    newActiveSubject.classList.add(className);
  }

}

const dummyEvent = {
  preventDefault: function () { },
}

function disableTabButtons(className = "button") {
  const tabButtons = document.getElementsByClassName(className);
  console.log(tabButtons.length);
  tabButtons.forEach((button) => {
    button.classList.add("disabled");
  });
  

  setTimeout(() => {
    tabButtons.forEach((button) => {
      button.classList.remove("disabled");
    });
  }, 201);
}

function handleClick(event, subjectId, className = "active") {

  event.preventDefault();

  disableTabButtons();

  removeActive(className);

  addActiveButton(subjectId, className);

  addActiveSubject(subjectId, className);
}

function attachListeners() {
  const buttonWork = document.getElementById("button-work");
  const buttonTools = document.getElementById("button-tools");
  const buttonApproach = document.getElementById("button-approach");

  buttonWork.addEventListener("click", function (event) {
    history.pushState({}, '', '/work');
    handleClick(event, "work");
  });

  buttonTools.addEventListener("click", function (event) {
    history.pushState({}, '', '/tools');
    handleClick(event, "tools");
  });

  buttonApproach.addEventListener("click", function (event) {
    history.pushState({}, '', '/');
    handleClick(event, "approach");
  });

  buttonProject.addEventListener("click", function (event) {
    history.pushState({}, '', '/work/project');
    handleClick(event, "project", "active-work");
  });

  buttonTools.addEventListener("click", function (event) {
    history.pushState({}, '', '/work/project/features');
    handleClick(event, "features", "active-work");
  });

  buttonApproach.addEventListener("click", function (event) {
    history.pushState({}, '', '/work/project/tools');
    handleClick(event, "tools", "active-work");
  });
}


function animateContent() {
  const allElements = document.getElementsByClassName("header");
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("left", "right", "blurred");
  }
}

function initRoute() {
  switch (window.location.pathname) {
    case '/work':
      handleClick(dummyEvent, 'work');
      break;
    case '/tools':
      handleClick(dummyEvent, 'tools');
      break;
    case '/':
      handleClick(dummyEvent, 'approach');
      break;
    default:
      handleClick(dummyEvent, 'not-found');
  }
}

window.onload = function () {
  initRoute();
  attachListeners();
  animateContent();
};
/*
window.addEventListener("scroll", function () {
return;
  const topics = document.querySelectorAll(".slide");

  const noElement = {
    getPropertyValue: function () {
      return 0;
    },
  };

  const animationHeight = window.innerHeight * 0.1;

  topics.forEach(function (topic) {
    const rect = topic.getBoundingClientRect();

    const distanceFromTop = rect.bottom;
    const distanceFromBottom = window.innerHeight - rect.top;

    if (distanceFromTop > 0 && distanceFromTop < animationHeight) {
      const translateX = distanceFromTop - animationHeight;
      //topic.style.transform = "translateX(" + translateX + "px)";
      topic.style.opacity = distanceFromTop / animationHeight;
    } else if (distanceFromBottom > 0 && distanceFromBottom < animationHeight) {
      const translateX = animationHeight - distanceFromBottom;
      //topic.style.transform = "translateX(" + translateX + "px)";
      topic.style.opacity = distanceFromBottom / animationHeight;
    } else if (rect.top < window.innerHeight && rect.bottom > 0) {
      //topic.style.transform = "translateX(0px)";
      topic.style.opacity = 1;
    }
  });

});
*/