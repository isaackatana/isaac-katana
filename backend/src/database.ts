// src/database.ts
import { MongoClient, Db } from 'mongodb';

// Replace with your MongoDB connection URI and database name
const uri = process.env.MONGODB_URI || "mongodb+srv://mrisaackatana:20I7PD60emYEgIpM@blogdb.rtkil.mongodb.net/?retryWrites=true&w=majority&appName=blogDB";
const dbName = process.env.DB_NAME || "blogdb";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
    if (!client) {
        client = new MongoClient(uri);
        try {
            await client.connect();
            db = client.db(dbName);
            console.log("Successfully connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            process.exit(1); // Exit the process if connection fails
        }
    }

    if (!db) {
        db = client.db(dbName);
    }

    return db;
}

export async function closeDatabaseConnection() {
    if (client) {
        await client.close();
        client = null;
        db = null;
        console.log("Closed MongoDB connection");
    }
}
