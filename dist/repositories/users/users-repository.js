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
const models_1 = __importDefault(require("../../models"));
const user_1 = require("../../types/user");
class UserRepository {
    constructor() { }
    getUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.default.User.findAndCountAll({ where: query });
        });
    }
    deleteUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield models_1.default.User.findOne({ where: query })).destroy();
        });
    }
    softDeleteUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield models_1.default.User.findOne({ where: query })).update({ status: user_1.UserStatus.DELETED });
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.default.User.findAll();
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.default.User.create(Object.assign({}, user));
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=users-repository.js.map