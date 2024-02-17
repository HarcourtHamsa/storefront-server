import express from "express";
const router = express.Router();

import getUsers from "../users/get-users";
import getMe from "../users/me";

router.use(getUsers);
router.use(getMe);

export default router;