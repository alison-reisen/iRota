import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

//app.get("/", (request, response): any => {
//  return response.json({
//    message: "Hello Word",
//});
//});

app.listen(3000, () => console.log("Server is Running"));