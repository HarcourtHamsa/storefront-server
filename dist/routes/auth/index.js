"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const register_1 = __importDefault(require("../auth/register"));
const register_2 = __importDefault(require("../auth/register"));
router.use(register_1.default);
router.use(register_2.default);
exports.default = router;
//# sourceMappingURL=index.js.map