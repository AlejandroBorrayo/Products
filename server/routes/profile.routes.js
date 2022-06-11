const router = require("express").Router();
const ProfileController = require("../controllers/profile.controller")

router.put("/:id",ProfileController.UpdateProfile)
router.get("/:id",ProfileController.GetProfile)


module.exports = router;