const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static('client/build'));


app.listen(PORT, function() {
  console.log(`🌎 ==> App running on port ${PORT}!`);
});
