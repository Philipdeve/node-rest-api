const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    windowsMs: 1 * 60 * 1000,  // 1 minute
    max: 5
})

//middleware
app.use(limiter);

app.get("/", (req, res) => {
    res.send("Node + Express Server")
})

const port = 5000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});