const allStudents = require("../db/visualpartners.json");

class studentService{
    static allStudents(){
        return allStudents;
    }
    static studentsEmailsWithCertification(){
        const studentsWithCertification = allStudents.filter((i)=>{return i.haveCertification == true;});
        const studentsEmailsWithCertification = studentsWithCertification.map((i)=> i.email);
        return studentsEmailsWithCertification;
    }
    static studentsWithCreditsOver500(){
        const studentsWithCreditsOver500 = allStudents.filter((i)=>{ return i.credits >= 500;});
        return studentsWithCreditsOver500;
    }

}

module.exports = studentService;

