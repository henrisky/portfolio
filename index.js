const express = require("express");
const app = express();
app.use(express.static("../portfolio"));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Running on port 3000.");
});