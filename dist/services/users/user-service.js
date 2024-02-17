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
const users_repository_1 = __importDefault(require("../../repositories/users/users-repository"));
class UserService {
    constructor() {
        this.userRepository = new users_repository_1.default();
    }
    getUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUser(query);
        });
    }
    deleteUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.userRepository.deleteUser(query));
        });
    }
    softDeleteUser(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.userRepository.softDeleteUser(query));
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUsers();
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.createUser(user);
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user-service.js.map