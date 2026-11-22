const router = require("express").Router();
const {
  createDemandeCtrl,
  getAllDemandesCtrl,
  getDemandeByIdCtrl,
  updateDemandeCtrl,
  deleteDemandeCtrl,
} = require("../controllers/demandeController");
const { verifyToken } = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

router
  .route("/")
  .post(verifyToken, createDemandeCtrl) // Requires login token
  .get(getAllDemandesCtrl);

router
  .route("/:id")
  .get(validateObjectId, getDemandeByIdCtrl)
  .put(validateObjectId, verifyToken, updateDemandeCtrl)
  .delete(validateObjectId, verifyToken, deleteDemandeCtrl);

module.exports = router;
