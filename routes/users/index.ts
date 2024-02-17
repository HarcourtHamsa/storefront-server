import express from "express";
const router = express.Router();

import getUsers from "../users/get-users";

router.use(getUsers);

export default router;