"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { validationResult } = require('express-validator');
const register_1 = __importDefault(require("../../handlers/auth/register"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
const validateRequest = () => {
    return [
        (0, express_validator_1.body)("email_address").notEmpty().withMessage("Email address is required"),
        (0, express_validator_1.body)("first_name").notEmpty().withMessage("First name is required"),
        (0, express_validator_1.body)("last_name").notEmpty().withMessage("Last name is required"),
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
router.post("auth/register", validateRequest(), register_1.default);
exports.default = router;
//# sourceMappingURL=register.js.map