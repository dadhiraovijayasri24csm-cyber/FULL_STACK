const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        const db = client.db("collegeDB");
        const students = db.collection("students");

        const result = await students
            .find({ rollNo: "23CM001" })
            .explain("executionStats");

        console.log("INDEX USAGE DEMONSTRATION:");
        console.log("Execution stage:", result.executionStats.executionStages.stage);
        console.log("Index name:",
            result.executionStats.executionStages.inputStage?.indexName
        );
        console.log("Documents examined:", result.executionStats.totalDocsExamined);
        console.log("Documents returned:", result.executionStats.nReturned);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main();