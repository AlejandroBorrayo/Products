const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productsRouter = require("./products.routes")

router.use("/products",productsRouter)
router.use("/auth", authRoutes);

module.exports = router;
