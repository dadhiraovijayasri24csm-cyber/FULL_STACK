const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        const db = client.db("collegeDB");
        const students = db.collection("students");

        const studentData = [
            {
                rollNo: "23CM001",
                name: "Ravi Kumar",
                branch: "CSE-AIML",
                year: 3,
                marks: 85,
                email: "ravi@example.com"
            },
            {
                rollNo: "23CM002",
                name: "Priya Sharma",
                branch: "CSE",
                year: 3,
                marks: 92,
                email: "priya@example.com"
            },
            {
                rollNo: "23CM003",
                name: "Arjun Reddy",
                branch: "ECE",
                year: 2,
                marks: 68,
                email: "arjun@example.com"
            },
            {
                rollNo: "23CM004",
                name: "Sneha Rao",
                branch: "CSE-AIML",
                year: 3,
                marks: 78,
                email: "sneha@example.com"
            },
            {
                rollNo: "23CM005",
                name: "Kiran Kumar",
                branch: "MECH",
                year: 2,
                marks: 45,
                email: "kiran@example.com"
            },
            {
                rollNo: "23CM006",
                name: "Anjali Devi",
                branch: "CSE",
                year: 4,
                marks: 88,
                email: "anjali@example.com"
            }
        ];

        const result = await students.insertMany(studentData);

        console.log("Students inserted successfully!");
        console.log("Number of students inserted:", result.insertedCount);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main();