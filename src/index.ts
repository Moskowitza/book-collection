import express from "express";
import morgan from "morgan";
import path from "path";
import winston from "winston";
// import { errorLog, accessLog } from './config/logger';

const app = express();
const port = 8080; // default port to listen

const logger = winston.createLogger({
  defaultMeta: { service: "user-service" },
  format: winston.format.json(),
  level: "info",
  transports: [
    new winston.transports.Console(),
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

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.render("index");
});

// start the Express server
app.listen(port, () => {
  logger.info(`server started at http://localhost:${port}`);
});
