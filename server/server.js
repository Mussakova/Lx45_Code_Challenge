const express = require("express");
const studentController = require("../controller/studentController");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Student Service API in localhost: ${port}`);
});
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({messsage: "API Initialized"});
});
app.get("/allStudents", (req, res)=>{
    const allStudents = studentController.allStudents();
    res.json(allStudents);
});
app.get("/studentsEmailsWithCertification", (req, res)=>{
    const studentsEmailsWithCertification = studentController.studentsEmailsWithCertification();
    res.json(studentsEmailsWithCertification);
});
app.get("/studentsWithCreditsOver500", (req, res)=>{
    const studentsWithCreditsOver500 = studentController.studentsWithCreditsOver500();
    res.json(studentsWithCreditsOver500);
});