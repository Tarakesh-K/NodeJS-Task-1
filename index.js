const fs = require("fs");
const express = require("express");
const upload = require("express-fileupload");
const fileRouter = require("./router/fileRouter");

const app = express();

app.use(upload());


app.use("/", (req, res, next) => {
    let auth = {
        authorised: true,
    }
    if (auth.authorised) {
        next();
    } else {
        res.send({ msg: "Not Authorised" });
    }
});

app.use("/", fileRouter)

app.listen(3001);