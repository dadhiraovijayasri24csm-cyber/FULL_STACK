const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        const db = client.db("collegeDB");
        const students = db.collection("students");

        const result = await students.updateOne(
            { rollNo: "23CM001" },
            { $set: { email: "ravi.kumar@example.com" } }
        );

        console.log("EMAIL UPDATED:");
        console.log("Modified documents:", result.modifiedCount);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main();