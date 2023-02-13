const express = require("express");
const router = express.Router();
const  protect = require("../middleWare/authMiddleware");
const {  createProduct,  getProducts,  getProduct,  deleteProduct,  updateProduct} = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);
router.post("/", upload.single('image'),protect, createProduct);
module.exports = router;

