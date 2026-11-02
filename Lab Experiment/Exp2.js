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

async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log("File Content:\n", data);
        return data;
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("File does not exist yet.");
        } else {
            console.error("Error reading file:", err);
        }
    }
}

async function updateFile(content) {
    try {
        await fs.appendFile(filePath, "\n" + content, "utf8");
        console.log("File updated successfully!");
    } catch (err) {
        console.error("Error updating file:", err);
    }
}
