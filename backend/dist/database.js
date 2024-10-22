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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
exports.closeDatabaseConnection = closeDatabaseConnection;
// src/database.ts
const mongodb_1 = require("mongodb");
// Replace with your MongoDB connection URI and database name
const uri = process.env.MONGODB_URI || "mongodb+srv://mrisaackatana:20I7PD60emYEgIpM@blogdb.rtkil.mongodb.net/?retryWrites=true&w=majority&appName=blogDB";
const dbName = process.env.DB_NAME || "blogdb";
let client = null;
let db = null;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!client) {
            client = new mongodb_1.MongoClient(uri);
            try {
                yield client.connect();
                db = client.db(dbName);
                console.log("Successfully connected to MongoDB");
            }
            catch (error) {
                console.error("Error connecting to MongoDB:", error);
                process.exit(1); // Exit the process if connection fails
            }
        }
        if (!db) {
            db = client.db(dbName);
        }
        return db;
    });
}
function closeDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        if (client) {
            yield client.close();
            client = null;
            db = null;
            console.log("Closed MongoDB connection");
        }
    });
}
