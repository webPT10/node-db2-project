const express = require("express");
const carsRouter = require("./cars/cars-router");

const server = express();
const port = 7000;

server.use(express(json));

server.use("/cars", carsRouter);

server.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({
    message: "You broke something. Good-by."
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
