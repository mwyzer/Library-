const { Router } = require("express");

const router = Router();

const controller = require("./controller");

router.get("/", controller.getBooks);
router.post("/", controller.addBook);
router.put("/", controller.updateBook);
router.delete("/:id", controller.deleteBook);

module.exports = router;
