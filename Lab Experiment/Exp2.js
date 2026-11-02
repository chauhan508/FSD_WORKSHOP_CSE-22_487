import fs from "node:fs/promises";

const filePath = "userData.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filePath, content, "utf8");
        console.log("File created successfully!");
    } catch (err) {
        console.error("Error creating file:", err);
    }
}
