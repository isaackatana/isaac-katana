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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
// Create a new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const newUser = new user_1.default({ username, password, email });
        const savedUser = yield newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.createUser = createUser;
// Get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
// Get a user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        else {
            res.status(200).json(user);
        }
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.getUserById = getUserById;
// Update a user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedUser = yield user_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
        }
        else {
            res.status(200).json(updatedUser);
        }
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.updateUser = updateUser;
// Delete a user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield user_1.default.findByIdAndDelete(id);
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
        }
        else {
            res.status(200).json({ message: "User deleted successfully" });
        }
    }
    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.deleteUser = deleteUser;
