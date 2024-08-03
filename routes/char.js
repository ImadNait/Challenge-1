const express = require("express");
const { getAll, create, update, Delete, getById, getByName } = require("../controllers/req");
const { logReq } = require("../middlewares/Logs");
// exporting the validation for Post and Put
const { validateUser } = require('../middlewares/Validation');
//Routes
const router = express.Router();
router.get("/",getAll)
router.get("/:id",getById)
router.get("/:name",getByName)
router.post("/:id", validateUser, create, logReq)
router.put("/:id", validateUser, update)
router.delete("/:id",Delete);



module.exports = router;
