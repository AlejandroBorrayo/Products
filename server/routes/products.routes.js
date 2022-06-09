const router = require("express").Router();
const ProductsController = require("../controllers/product.controller")

router.post("/",ProductsController.NewProduct)
router.get("/:id",ProductsController.GetProductsById)
router.delete("/:id",ProductsController.DeleteProduct)
router.put("/:id",ProductsController.UpdateProduct)


module.exports = router;