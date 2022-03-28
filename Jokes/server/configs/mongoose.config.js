const mongoose = require('mongoose');

// Test Connection to the database
mongoose.connect('mongodb+srv://root:root@jokes.ufiai.mongodb.net/jokesDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));