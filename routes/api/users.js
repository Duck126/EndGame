const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)
  .put(usersController.updateSignIn);

  router.route("/updateLocation").put(usersController.updateLocation);

  router.route("/groupLocation").get(usersController.groupLocation);


module.exports = router;