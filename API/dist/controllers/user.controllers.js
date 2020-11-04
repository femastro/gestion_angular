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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
var User_1 = require("../entity/User");
var typeorm_1 = require("typeorm");
exports.getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var datos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.neumaticos).find({ select: ['idneumaticos', 'marca', 'modelo', 'medida'] })];
            case 1:
                datos = _a.sent();
                return [2 /*return*/, res.send(datos)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: 'Somenthing goes wrong!' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idneumaticos, dato, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                idneumaticos = req.params.idneumaticos;
                return [4 /*yield*/, typeorm_1.getRepository(User_1.neumaticos).findOneOrFail(idneumaticos, { select: ['idneumaticos', 'marca', 'modelo', 'medida'] })];
            case 1:
                dato = _a.sent();
                if (dato) {
                    return [2 /*return*/, res.send([dato])];
                    //return res.status(200).json({ user });
                }
                return [2 /*return*/, res.status(404).json({ message: 'User Not Found !' })];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: 'Somenthing goes wrong!' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newDato, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newDato = typeorm_1.getRepository(User_1.neumaticos).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.neumaticos).save(newDato)];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ message: 'User Created !' })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: 'Somenthing goes wrong!, User Exist !' })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dato, results, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.neumaticos).findOne(req.params.id)];
            case 1:
                dato = _a.sent();
                if (!dato) return [3 /*break*/, 5];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                typeorm_1.getRepository(User_1.neumaticos).merge(dato, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.neumaticos).save(dato)];
            case 3:
                results = _a.sent();
                return [2 /*return*/, res.status(200).json({ message: 'User Update !' })];
            case 4:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: 'Somenthing goes wrong!' })];
            case 5: return [2 /*return*/, res.status(404).json({ message: 'User Not Found !' })];
        }
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.neumaticos).delete(req.params.id)];
            case 1:
                results = _a.sent();
                if (results.affected) {
                    return [2 /*return*/, res.status(200).json({ message: 'User Deleted !' })];
                }
                return [2 /*return*/, res.status(404).json({ message: 'User Not Found !' })];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: 'Somenthing goes wrong!' })];
            case 3: return [2 /*return*/];
        }
    });
}); };