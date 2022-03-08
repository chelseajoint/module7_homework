function infoStudent(student) {
    for (let key in student) {
        if (student.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

infoStudent({
    city: "Moscow",
    name: "Cj",
    ege: 30
});
