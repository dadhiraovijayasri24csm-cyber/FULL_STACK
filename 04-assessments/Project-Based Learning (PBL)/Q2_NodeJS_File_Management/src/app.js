const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function fileManagement() {
    try {
        const fileName = (await askQuestion("Enter filename: ")).trim();
        const initialContent = await askQuestion("Enter content to write: ");

        if (!fileName) {
            console.log("Error: Filename cannot be empty.");
            rl.close();
            return;
        }

        // Create/write the file
        fs.writeFileSync(fileName, initialContent);
        console.log("\nFile created and content written successfully.");

        // Read the file contents
        const contentAfterWrite = fs.readFileSync(fileName, "utf8");

        console.log("\nFile contents after writing:");
        console.log(contentAfterWrite);

        // Get additional content
        const additionalContent = await askQuestion(
            "\nEnter additional content to append: "
        );

        // Append additional content
        fs.appendFileSync(fileName, additionalContent);
        console.log("\nAdditional content appended successfully.");

        // Read and display final contents
        const finalContent = fs.readFileSync(fileName, "utf8");

        console.log("\nFinal file contents:");
        console.log(finalContent);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        rl.close();
    }
}

fileManagement();