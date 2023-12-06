import './style.css'


// after everything is loaded

  function randomPercentage() {
    return (Math.random() * 200 - 100) + '%';
    }
window.onload = () => {

  var stylesheet = document.styleSheets[0];

for (var i = 0; i < stylesheet.cssRules.length; i++) {
  var rule = stylesheet.cssRules[i];

  if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === "move") {
    // This is the "move" keyframes rule
    console.log(rule);
  }
}

  var stylesheet = document.styleSheets[0];

  const ruleList = document.styleSheets[0].cssRules;

  console.log('lll', JSON.stringify(ruleList));

  

  stylesheet.deleteRule(0);
  
  var keyframes = `
  @keyframes move {
    0% { 
      background-position: ${randomPercentage()}% ${randomPercentage()}%, ${randomPercentage()}% ${randomPercentage()}%, ${randomPercentage()}% ${randomPercentage()}%; 
    }
    50% {
      background-position: ${randomPercentage()}% ${randomPercentage()}%, ${randomPercentage()}% ${randomPercentage()}%, ${randomPercentage()}% ${randomPercentage()}%; 
    }
    100% {
      background-position: ${randomPercentage()}% ${randomPercentage()}%, ${randomPercentage()}% ${randomPercentage()}%, ${randomPercentage()}% ${randomPercentage()}%; 
    }
  }
`;
stylesheet.insertRule(keyframes, 0);
}

