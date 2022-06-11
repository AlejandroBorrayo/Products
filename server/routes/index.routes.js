const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productsRouter = require("./products.routes")
const profileRouter = require("./profile.routes")

router.use("/products",productsRouter)
router.use("/auth", authRoutes);
router.use("/profile", profileRouter);


module.exports = router;
