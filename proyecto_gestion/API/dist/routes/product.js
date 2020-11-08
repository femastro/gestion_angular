"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductController_1 = require("./../controller/ProductController");
var express_1 = require("express");
var router = express_1.Router();
// Get all users
router.get('/', ProductController_1.ProductController.getAll);
// Get one user
router.get('/:id', /*[checkJwt, checkRole(['admin'])],*/ ProductController_1.ProductController.getById);
// // Create a new user
// router.post('/', [checkJwt, checkRole(['admin'])], ProductController.new);
// // Edit user
// router.patch('/:id', [checkJwt, checkRole(['admin'])], ProductController.edit);
// // Delete
// router.delete('/:id', [checkJwt, checkRole(['admin'])], ProductController.delete);
exports.default = router;
//# sourceMappingURL=product.js.map