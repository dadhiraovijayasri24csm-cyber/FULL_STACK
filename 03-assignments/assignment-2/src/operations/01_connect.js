const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        console.log("MongoDB connected successfully!");

        const db = client.db("collegeDB");

        console.log("Database selected: collegeDB");

    } catch (error) {
        console.error("Connection failed:", error);
    } finally {
        await client.close();
    }
}

main();