const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        const db = client.db("collegeDB");
        const students = db.collection("students");

        const indexes = await students.listIndexes().toArray();

        console.log("AVAILABLE INDEXES:");
        console.log(indexes);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main();