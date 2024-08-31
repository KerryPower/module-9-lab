const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");

app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to MYSQL application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port
    ${PORT}.`);
    });