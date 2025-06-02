

const student = {
    firstName: "Md",
    lastName: "Jiyaul",
    get fullName() {
        return `${student.firstName} ${student.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

student.fullName = "Shankar Kharel";
console.log(student)