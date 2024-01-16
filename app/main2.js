let controller;
let subjectsTransitioning = false;

/*
const footerHtml = `<footer class="header animated dur06 blurred">
<p class="slide">Let's build something great togther.</p>
<a class="slide mail" href="mailto:erik@mattheis.org">erik@mattheis.org</a>
<div class="slide">Saint Paul, MN</div>
</footer>`;
*/

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
  console.log('disabling buttons')
  const tabButtons = document.querySelectorAll(".button");
  tabButtons.forEach((button) => {
    button.classList.add("disabled");
  });
  

  setTimeout(() => {
    console.log('enabling buttons')
    tabButtons.forEach((button) => {
      button.classList.remove("disabled");
    });
    console.log('enabled', buttonWork, buttonTools, buttonApproach)
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

/*
  button.addEventListener('click', function() {

    buttons.forEach(function(btn) { btn.classList.remove('active'); });
    subjects.forEach(function(subject) { subject.classList.remove('active'); });

    button.classList.add('active');

    var subjectId = button.id.replace('button-', '');
    var subject = document.getElementById(subjectId);
    subject.classList.add('active');
  });
*/

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
  console.log('attaching listeners')
  const buttonWork = document.getElementById("button-work");
  const buttonTools = document.getElementById("button-tools");
  const buttonApproach = document.getElementById("button-approach");
console.log('attaching listeners', buttonWork, buttonTools, buttonApproach)
  buttonWork.addEventListener("click", function (event) {
    console.log('attatching work')
    history.pushState({}, '', '/work');
    handleClick(event, "work");
  });

  buttonTools.addEventListener("click", function (event) {
    console.log('attaching tools')
    history.pushState({}, '', '/tools');
    handleClick(event, "tools");
  });

  buttonApproach.addEventListener("click", function (event) {
    console.log('attaching approach')
    history.pushState({}, '', '/');
    handleClick(event, "approach");
  });

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
  console.log('windoe')

  initRoute();
  // addFooterToEverySubjectClass();
  attachListeners();
  animateContent();
};

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
