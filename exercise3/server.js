const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");

app.use(express.json());

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port
    ${PORT}.`);
});
