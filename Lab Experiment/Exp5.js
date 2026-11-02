import express from "express";

const app = express();

app.use(express.json());

let student = {
    id: 1,
    name: "Dushyant Chauhan",
    rollno: 487,
    email: "dushyantchauhan9953@gmail.com",
    course: "B.Tech"
};

// GET - Display
app.get("/student", (req, res) => {
    res.send(student);
});

// POST - Insert
app.post("/student", (req, res) => {
    student = { ...student, ...req.body };
    res.send("Student added successfully");
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
