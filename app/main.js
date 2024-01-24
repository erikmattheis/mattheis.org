let subjectsTransitioning = false;

function addActiveButton(subject) {
  const button = document.querySelector(`.button-${subject}`);

  if (button) {
    button.classList.add("active");
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

  newActiveSubject.classList.add(className)

}

const dummyEvent = {
  preventDefault: function () { },
}

function disableTabButtons(className) {

  const elements = document.getElementsByClassName(className);

  if (!elements || elements.length === 0) {
    return;
  }

  const tabButtons = Array.from(elements);

  tabButtons.forEach((button) => {
    button.classList.add("disabled");
  });

  setTimeout(() => {
    tabButtons.forEach((button) => {
      button.classList.remove("disabled");
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
  const buttonWork = document.querySelector(".button-work");
  const buttonTools = document.querySelector(".button-tools");
  const buttonApproach = document.querySelector(".button-approach");

  buttonWork.addEventListener("click", function (event) {
    history.pushState({}, '', '/work');
    handleClick(event, "work", "active");
  });

  buttonTools.addEventListener("click", function (event) {
    history.pushState({}, '', '/tools');
    handleClick(event, "tools", "active");
  });

  buttonApproach.addEventListener("click", function (event) {
    history.pushState({}, '', '/');
    handleClick(event, "approach", "active");
  });

  const buttonArticlNet = document.querySelector(".button-button-articl-net");
  const buttonNaturallyHued = document.querySelector(".button-button-naturally-hued");
  const buttonSlotMachine = document.querySelector(".button-button-slotmachine");
  const buttonArticlQa = document.querySelector(".button-button-articl-qa");
  const buttonGreatClipsAdTool = document.querySelector(".button-button-greatclips-adtool");
  const buttonGsnCore = document.querySelector(".button-button-gsn-core");
  const buttonGsnApiClient = document.querySelector(".button-button-gsn-api-client");
  const buttonEjmAddSearchForm = document.querySelector(".button-button-ejm-add-search-form");
  const buttonCryptocurrencyDashboard = document.querySelector(".button-button-cryptocurrency-dashboard");
  const buttonMongodbS3Backup = document.querySelector(".button-button-mongodb-s3-backup");
  const buttonOpeningRangeBot = document.querySelector(".button-button-openingrangebot");

  buttonArticlNet.addEventListener("click", function (event) {
    handleClick(event, "articl-net", "work-active");
  }
  
  );

  buttonNaturallyHued.addEventListener("click", function (event) {
    handleClick(event, "naturally-hued", "work-active");
  });

  buttonSlotMachine.addEventListener("click", function (event) {
    handleClick(event, "slotmachine", "work-active");
  });

  buttonArticlQa.addEventListener("click", function (event) {

    handleClick(event, "articl-qa", "work-active");
  }

  );

  buttonGreatClipsAdTool.addEventListener("click", function (event) {
    handleClick(event, "greatclips-adtool", "work-active");
  }
  );

  buttonGsnCore.addEventListener("click", function (event) {
    handleClick(event, "gsn-core", "work-active");
  } 

  );


  buttonGsnApiClient.addEventListener("click", function (event) {
    handleClick(event, "gsn-api-client", "work-active");
  }
  );

  buttonEjmAddSearchForm.addEventListener("click", function (event) {
    handleClick(event, "ejm-add-search-form", "work-active");
  }
  );

  buttonCryptocurrencyDashboard.addEventListener("click", function (event) {

    handleClick(event, "cryptocurrency-dashboard", "work-active");
  }

  );

  buttonMongodbS3Backup.addEventListener("click", function (event) {

    handleClick(event, "mongodb-s3-backup", "work-active");
  }

  );

  buttonOpeningRangeBot.addEventListener("click", function (event) {

    handleClick(event, "openingrangebot", "work-active");
  }

  );

  
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
      handleClick(dummyEvent, 'work', "active");
      break;
    case '/tools':
      handleClick(dummyEvent, 'tools', "active");
      break;
    case '/':
      handleClick(dummyEvent, 'approach', "active");
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