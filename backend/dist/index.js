"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api', blogRoutes_1.default);
mongoose_1.default
    .connect(process.env.MONGODB_URI || 'mongodb+srv://mrisaackatana:<20I7PD60emYEgIpM>@blogdb.rtkil.mongodb.net/?retryWrites=true&w=majority&appName=blogDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
