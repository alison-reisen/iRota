import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello Word",
    });
});

app.listen(3000, () => console.log("Sever is Running"));