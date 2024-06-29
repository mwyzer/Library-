const express = require("express");
const app = express();
const port = 3333;
const booksRoutes = require("./src/books/routes");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/books", booksRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
