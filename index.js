import express from "express";
import bodyParser from "body-parser";
import Router from "./routes/routes.js";
import cors from "cors";

const app = express();
const port = 8080;
const ipAddress = "localhost";
app.use(
    cors({
      origin: "*",
    })
  );

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);

app.listen(port, ipAddress, () => {
  console.log(`Server running at http://${ipAddress}:${port}/`);
});

