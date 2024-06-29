const getData = "SELECT * FROM books b ORDER BY id ASC";

const insertData =
  "INSERT INTO public.books (title, author, amount, category) values ($1, $2, $3, $4)";

const updateData =
  "UPDATE public.books set title = $1, author = $2, amount = $3, category = $4, updated_at=now() WHERE id = $5";

const deleteData = "DELETE FROM public.books where id=$1";

module.exports = {
  getData,
  insertData,
  updateData,
  deleteData,
};

// native query
// query builder knex.js
// orm sequelize
