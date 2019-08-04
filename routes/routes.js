//intialise express router
const router = require("express").Router();

//default router response
router.get("/", (req, res) => {
  res.json({
    status: "MY GOD IT WORKS, JOHN",
    message: "Welcome to RESThub"
  });
});

//import contact controller
let contactController = require("../contactController");

//Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

//export the routes
module.exports = router;
