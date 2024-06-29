const express = require("express");
const app = express();
const port = 3333;
const expenseRoutes = require("./src/expense/routes");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/expense", expenseRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
