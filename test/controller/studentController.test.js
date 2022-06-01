const studentController = require("../../controller/studentController");

describe("Test de la lógica implementada en los servicios del estudiante",()=>{
    test("1. probando la petición de la base de datos en json", ()=>{
        const checkStudentService = studentController.allStudents();
        expect(require("../../db/visualpartners.json")).toEqual(checkStudentService);
    });
    test("2. Probando la petición de los emails de los estudiantes con certificación", ()=>{
        const emails = studentController.studentsEmailsWithCertification();
        const certificatedStudents = studentController.allStudents().filter((i)=>{return i.haveCertification == true;});     
        for(let i = 0; i<emails.length; i++){expect(emails[i]).toMatch(/@/);}
        for(let i = 0; i<emails.length; i++){expect(emails.length).toEqual(certificatedStudents.length);}
    });
    test("3. Todos los estudiantes con créditos mayor a 500", ()=>{
        const check = studentController.studentsWithCreditsOver500();
        for(let i = 0; i<check.length; i++){expect(check[i].credits).toBeGreaterThan(500);}
    });
});