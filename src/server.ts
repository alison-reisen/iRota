import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction): void => {
        if (err instanceof Error) {
            response.status(400).json({
                message: err.message,
            });
            return;
        }

        response.status(500).json({
            status: "error",
            message: "Internal server error",
        });

    }
);



app.listen(3000, () => console.log("Server is Running"));