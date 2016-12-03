(function App() {
  let textarea = document.querySelector('[data-input="comment-form"]');
  let comments = document.querySelector('[data-list="comments"]');
  let button = document.querySelector('[data-button="send-button"]');


  const predictValidation = (jsonNetwork, message) => {
    let spamBayes = new Bayes();
    spamBayes.fromJSON(JSON.stringify(jsonNetwork));

    var scores = spamBayes.guess(message);
    var winner = spamBayes.extractWinner(scores);

    console.log(winner);

    if(winner.label === "spam") {
      alert('This message look like spam, please be polite with another users');
    } else {
      buildNode(message);
    }
  };

  const validateMessage = message => {
    fetch('/categories').then(res => {
      return res.json();
    }).then(jsonNetwork => {
      predictValidation(jsonNetwork, message);
    });
  };


  const buildNode = (message) => {
    let node = document.createElement('div');
    node.className = 'message';
    node.innerHTML = `<div id=${Date.now()}>${textarea.value}</div>`
    comments.appendChild(node);
  };


  button.onclick = e => {
    validateMessage(textarea.value);
  };
})()
