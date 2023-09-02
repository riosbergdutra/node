const router = require("express").Router();
const empresa = require("../controller/empresa.controller");

router.get("/find/:id", empresa.find);
router.get("/findAll", empresa.findAllEmpresa);
router.post("/create", empresa.createEmpresa);

module.exports = router;