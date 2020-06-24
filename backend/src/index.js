const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("./database/connection");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});
