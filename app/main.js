let controller;
let subjectsTransitioning = false;

const footerHtml = `<footer class="header animated dur06 blurred">
<p>Let's build something great togther.</p>
<a class="mail" href="mailto:erik@mattheis.org">erik@mattheis.org</a>
Saint Paul, MN
</footer>`;

function addActiveButton(subjectId) {
  const button = document.getElementById(`button-${subjectId}`);

  if (button) {
    button.classList.add("active");
  }
}

function removeActiveButton(subjectId) {

  const currentActiveButton = document.querySelector(".button.active");

  if (currentActiveButton) {
    currentActiveButton.classList.remove("active");
  }
}

function removeActiveSubject(subjectId) {
  const currentActiveSubject = document.querySelector(".subject-active");

  if (currentActiveSubject) {
    currentActiveSubject.classList.remove("subject-active");
  }

}

function attachTransitionEndListener(subjectId) {
  const subject = document.getElementById(subjectId);

  if (subject) {
    subject.addEventListener("transitionend", function (event) {
      subjectsTransitioning = false;
      console.log('transitionend', subjectId, event.type)
    });
  }

}

function attachTransitionEndListeners() {

  const subjects = document.querySelectorAll(".subject");

  subjects.forEach(function (subject) {
    attachTransitionEndListener(subject.attributes.id.value);
  });

}

function addActiveSubject(subjectId) {
  const newActiveSubject = document.getElementById(subjectId);

  if (newActiveSubject) {
    newActiveSubject.classList.add("subject-active");
  }

}

const dummyEvent = {
  preventDefault: function () { },
}

function disableTabButtons() {
  const tabButtons = document.querySelectorAll(".button");
  tabButtons.forEach((button) => {
    button.classList.add("disabled");
  });

  setTimeout(() => {
    tabButtons.forEach((button) => {
      button.classList.remove("disabled");
    });
  }, 201);
}

function handleClick(event, subjectId) {
  console.log(`handleClick ${subjectId}`)
  event.preventDefault();

  disableTabButtons();

  removeActiveButton(subjectId);
  addActiveButton(subjectId);
  removeActiveSubject(subjectId);
  addActiveSubject(subjectId);
}

handleClick(dummyEvent, 'approach');

window.addEventListener('DOMContentLoaded', adjustSubjectWrapperHeight);
window.addEventListener('resize', adjustSubjectWrapperHeight);

function adjustSubjectWrapperHeight() {
  var subjectWrapper = document.querySelector('.subject-wrapper');
  var activeSubject = document.querySelector('.subject.subject-active');

  if (subjectWrapper && activeSubject) {
    subjectWrapper.style.height = activeSubject.offsetHeight + 'px';
  }
}

function attachListeners() {
  const buttonAi = document.getElementById("button-work");
  const buttonJs = document.getElementById("button-tools");
  const buttonApproach = document.getElementById("button-approach");

  buttonAi.addEventListener("click", function (event) {
    history.pushState({}, '', '/work');
    handleClick(event, "work");
  });

  buttonJs.addEventListener("click", function (event) {
    history.pushState({}, '', '/tools');
    handleClick(event, "tools");
  });

  buttonApproach.addEventListener("click", function (event) {
    history.pushState({}, '', '/');
    handleClick(event, "approach");
  });

  attachTransitionEndListeners();
}

function addFooterToEverySubjectClass() {
  const subjects = document.querySelectorAll(".subject");
  subjects.forEach(function (subject) {
    subject.insertAdjacentHTML("beforeend", footerHtml);
  });
}

function removeLoading() {
  const loader = document.getElementsByClassName("loader-container");
  if (loader[0]) {
    loader[0].remove();
  }
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
  addFooterToEverySubjectClass();
  attachListeners();
  animateContent();
};
