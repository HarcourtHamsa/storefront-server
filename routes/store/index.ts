import express from 'express'
const router = express.Router()

import getStores from "../store/get-stores"
import getStoreByID from "../store/get-store-by-id"
import createStore from "../store/create-store"

router.use(getStores)
router.use(getStoreByID)
router.use(createStore)

export default router