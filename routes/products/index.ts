import express from "express"
const router = express.Router()

import createProduct from "../products/create-product"
import getProductByID from "../products/get-product-by-id"
import getProductsInStore from "../products/get-products-in-store"
import updateProduct from "../products/update-product"

router.use(createProduct)
router.use(getProductByID)
router.use(getProductsInStore)
router.use(updateProduct)


export default router