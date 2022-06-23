function creatNullObj () {
    const student = Object.create(null);
    student.name = "Cj";
    console.log(student);
}

creatNullObj();
