const pool = require("../../config/db");

const queries = require("./queries");

const getExpense = (req, res) => {
  pool
    .query(queries.getData)
    .then((result) => {
      return res.status(200).json(result.rows);
    })
    .catch((error) => {
      console.error("Error fetching expenses:", error);
      return;
    });
};

const addExpense = (req, res) => {
  const { title, author, amount, category } = req.body;

  pool
    .query(queries.insertData, [title, author, parseInt(amount), category])
    .then((result) => {
      return res
        .status(200)
        .json({ message: "Berhasil menambah data", data: result.rows });
    })
    .catch((error) => {
      console.error("Error adding expense:", error);
      return res.status(500).json({
        error: "Internal server error",
        message: "Gagal menambah data",
      });
    });
};

const updateExpense = (req, res) => {
  const { title, author, amount, category, id } = req.body;

  // Validate amount
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount) || parsedAmount < 0) {
    return res.status(400).json({ error: "Amount must be a valid number" });
  }

  pool
    .query(queries.updateData, [title, author, parsedAmount, category, id])
    .then((result) => {
      return res.status(200).json({
        message: "Successfully updated data",
        data: result.rows,
      });
    })
    .catch((error) => {
      console.error("Error updating expense:", error);
      return res.status(500).json({
        error: "Internal server error",
        message: "Failed to update data",
      });
    });
};

const deleteExpense = (req, res) => {
  const { id } = req.params;

  pool
    .query(queries.deleteData, [id])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.status(404).json({
          error: "Expense not found",
        });
      }
      return res.status(200).json({
        message: "Successfully deleted expense",
      });
    })
    .catch((error) => {
      console.error("Error deleting expense:", error);
      return res.status(500).json({
        error: "Internal server error",
        message: "Failed to delete expense",
      });
    });
};

module.exports = { getExpense, addExpense, updateExpense, deleteExpense };
