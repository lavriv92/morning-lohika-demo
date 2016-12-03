const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use('/cdn', express.static(__dirname + '/../node_modules/ml-bayes'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/templates/index.html');
});

app.get('/categories', (_, res) => {
  res.end(require('fs').readFileSync('./classifier_state.json').toString());
});


app.listen(8080, () => console.log('App running'));
