"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../../services/users/user-service"));
function register(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { first_name, last_name, email_address, password, } = req.body;
        const userService = new user_service_1.default();
        try {
            console.log("Request from ip: ", req.ip);
            // get user with existing email address
            const existingUserAccount = yield userService.getUser({ email_address });
            if (existingUserAccount) {
                throw new Error("Email is already in use");
            }
            const createdUserAccount = yield userService.createUser({
                first_name,
                last_name,
                email_address,
                password,
            });
            return res.json({
                data: createdUserAccount
            });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = register;
//# sourceMappingURL=register.js.map