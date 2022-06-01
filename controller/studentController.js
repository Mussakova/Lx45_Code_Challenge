const studentService = require("../services/studentServices");

class studentController{
    static allStudents(){
        return studentService.allStudents();
    }
    static studentsEmailsWithCertification(){
        return studentService.studentsEmailsWithCertification();
    }
    static studentsWithCreditsOver500(){
        return studentService.studentsWithCreditsOver500();
    }
}

module.exports = studentController;