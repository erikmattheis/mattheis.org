let subjectsTransitioning = false;

function addActiveButton(subject) {
  const button = document.querySelector(`.button-${subject}`);

  if (button) {
    button.classList.add('active');
  }
}

function removeActive(className) {
  const actives = document.getElementsByClassName(className);

  if (!actives || actives.length === 0) {
    return;
  }

  Array.from(actives).forEach((active) => {
    active.classList.remove(className);
  });
}

function addActiveSubject(subject, className) {
  const newActiveSubject = document.querySelector(`.${subject}`);

  if (!newActiveSubject) {
    return;
  }

  newActiveSubject.classList.add(className);
}

const dummyEvent = {
  preventDefault: function () { },
};

function disableTabButtons(className) {
  const elements = document.getElementsByClassName(className);

  if (!elements || elements.length === 0) {
    return;
  }

  const tabButtons = Array.from(elements);

  tabButtons.forEach((button) => {
    button.classList.add('disabled');
  });

  setTimeout(() => {
    tabButtons.forEach((button) => {
      button.classList.remove('disabled');
    });
  }, 201);
}

function handleClick(event, subject, className) {
  event.preventDefault();

  disableTabButtons(className);

  removeActive(className);

  addActiveButton(subject, className);

  addActiveSubject(subject, className);
}

function attachListeners() {
  const buttonWork = document.querySelector('.button-work');
  const buttonTools = document.querySelector('.button-tools');
  const buttonApproach = document.querySelector('.button-approach');

  buttonWork.addEventListener('click', function (event) {
    history.pushState({}, '', '/work');
    handleClick(event, 'work', 'active');
  });

  buttonTools.addEventListener('click', function (event) {
    history.pushState({}, '', '/tools');
    handleClick(event, 'tools', 'active');
  });

  buttonApproach.addEventListener('click', function (event) {
    history.pushState({}, '', '/');
    handleClick(event, 'approach', 'active');
  });

  const buttonAi = document.querySelector('.button-ai');
  const buttonVanilla = document.querySelector('.button-vanilla');
  const buttonVue = document.querySelector('.button-vue');
  const buttonNodeJs = document.querySelector('.button-node-js');
  const buttonNoSql = document.querySelector('.button-no-sql');
  const buttonGoogleApis = document.querySelector('.button-google-apis');
  const buttonShopify = document.querySelector('.button-shopify');
  const buttonAuthentication = document.querySelector('.button-authentication');
  const buttonAngularJs = document.querySelector('.button-angular-js');
  const buttonPhp = document.querySelector('.button-php');
  const buttonSql = document.querySelector('.button-sql');
  const buttonWordpress = document.querySelector('.button-wordpress');

  buttonAi.addEventListener('click', function (event) {
    handleClick(event, 'ai', 'work-active');
  });

  buttonVanilla.addEventListener('click', function (event) {
    handleClick(event, 'vanilla', 'work-active');
  });

  buttonVue.addEventListener('click', function (event) {
    handleClick(event, 'vue', 'work-active');
  });

  buttonNodeJs.addEventListener('click', function (event) {
    handleClick(event, 'node-js', 'work-active');
  });

  buttonNoSql.addEventListener('click', function (event) {
    handleClick(event, 'no-sql', 'work-active');
  });

  buttonGoogleApis.addEventListener('click', function (event) {
    handleClick(event, 'google-apis', 'work-active');
  });

  buttonShopify.addEventListener('click', function (event) {
    handleClick(event, 'shopify', 'work-active');
  });

  buttonAuthentication.addEventListener('click', function (event) {
    handleClick(event, 'authentication', 'work-active');
  });

  buttonAngularJs.addEventListener('click', function (event) {
    handleClick(event, 'angular-js', 'work-active');
  });

  buttonPhp.addEventListener('click', function (event) {
    handleClick(event, 'php', 'work-active');
  });

  buttonSql.addEventListener('click', function (event) {
    handleClick(event, 'sql', 'work-active');
  });

  buttonWordpress.addEventListener('click', function (event) {
    handleClick(event, 'wordpress', 'work-active');
  });
}

function animateContent() {
  const allElements = document.getElementsByClassName('header');
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove('left', 'right', 'blurred');
  }
}

function initRoute() {
  switch (window.location.pathname) {
    case '/work':
      handleClick(dummyEvent, 'work', 'active');
      break;
    case '/tools':
      handleClick(dummyEvent, 'tools', 'active');
      break;
    case '/':
      handleClick(dummyEvent, 'approach', 'active');
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
