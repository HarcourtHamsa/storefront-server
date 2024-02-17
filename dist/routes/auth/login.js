"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { validationResult } = require('express-validator');
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
const validateRequest = () => {
    return [
        (0, express_validator_1.body)("email_address").notEmpty().withMessage("Email address is required"),
        (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(errors.array());
            }
            next();
        }
    ];
};
router.post("auth/login", validateRequest(), (req, res, next) => {
    res.send("Login successful");
});
exports.default = router;
//# sourceMappingURL=login.js.map