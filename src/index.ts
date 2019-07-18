import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import winston from "winston";
import * as sessionAuth from "./middleware/sessionAuth";
import * as routes from "./routes";
dotenv.config();
const { combine } = winston.format;
const app = express();
const port = process.env.SERVER_PORT;

const logger = winston.createLogger({
  defaultMeta: { service: "user-service" },
  format: combine(winston.format.json(), winston.format.timestamp()),
  level: "info",
  transports: [
    // new winston.transports.Console(),
    new winston.transports.File({ filename: "./logs/app.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
class MyStream {
  public write(text: string) {
    logger.info(text);
  }
}
app.use(morgan("combined", { stream: new MyStream() }));

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Configure session auth
sessionAuth.register(app);

// Configure routes
routes.register(app);

// start the Express server
app.listen(port, () => {
  logger.info(`server started at http://localhost:${port}`);
});
