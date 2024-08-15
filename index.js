const express = require('express');
const app = express();

app.get("/todos" ,(req,res) => {
    const user = {
        Name:"anna",
        age:20,
    };
    res.send(user);
});

app.listen(3000);