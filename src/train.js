var Bayes = require('ml-bayes')

var classifier = new Bayes()

classifier.train('I want to sell you', 'spam');
classifier.train('I want to sell', 'spam');
classifier.train('Sell', 'spam');
classifier.train('Hello, ', 'non_spam');
classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'non_spam');
classifier.train('Sweet, this is incredibly, amazing, perfect, great!!', 'non_spam');

classifier.train('terrible, shitty thing. Damn. Sucks!!', 'non_spam');

classifier.train('Special proposition', 'spam');

require('fs').writeFileSync('./classifier_state.json', classifier.toJSON());
