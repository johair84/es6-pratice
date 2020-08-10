class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schooll = "collegiate School";
    }
}

const student1 = new Student(12, "Shovo");
const student2 = new Student(22, "Mahiya");
const student3 = new Student(29, "Bappy");
console.log(student1.name, student2.name);