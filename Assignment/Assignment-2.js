import fs from "fs";

const file = "attendance.txt";
// Add student
function addStudent(name) {
    fs.appendFileSync(file, name + "\n");
    console.log("Student added");
}
// Show all student
function showStudents() {
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, "utf8");
        console.log("\nAttendance List:");
        console.log(data);
    } else {
        console.log("File does not exist");
    }
}
