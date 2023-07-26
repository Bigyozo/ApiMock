const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const compression = require("compression");
const routes = require("./routes/index");
const PORT: number = 3420;
const app = express();
app.use(multer().none());
app.use(express.static("web"));
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, AppVersion, DeviceId, *"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.options("*", (req, res) => {
  res.sendStatus(200);
});
routes(app);
app.listen(PORT, () => console.log(`listen on port: ${PORT}`));
