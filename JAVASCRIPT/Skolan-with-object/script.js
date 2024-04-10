

// --1--
let lifeschool = {
    name: 'Lifeschool',
    address: 'Backstreet 99',
    zipcode: 99999,
    city: 'Stars city',
    students: [],
    teachers: [],
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject)
    },
    addTeacher : function(teacher){
        this.teachers.push(teacher)
    },
    addStudent: function(student){
        this.students.push(student);
    },
    removeStudent: function(student){
        this.students = this.students.filter((x) => x !== student);
    }
}

// --2--
let mathematic = {
    name: "mathematic",
    students: [],
    teachers: {},
    addTeacher: function (teacher) {
        this.teachers = teacher;
    },
    addStudent: function (student) {
        this.students.push(student);
    },
    removeStudent: function (student) {
        this.students = this.students.filter((x) => x !== student);
    },
};

let science = {
    name: "science",
    students: [],
    teachers: {},
    addTeacher: function (teacher) {
        this.teachers = teacher;
    },
    addStudent: function (student) {
        this.students.push(student);
    },
    removeStudent: function (student) {
        this.students = this.students.filter((x) => x !== student);
    },
};

let english = {
    name: "english",
    students: [],
    teachers: {},
    addTeacher: function (teacher) {
        this.teachers = teacher;
    },
    addStudent: function (student) {
        this.students.push(student);
    },
};

// --3--
let Sarbast = {
    name: "Sarbast",
    age: 40,
    gender: "male",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
};

let Rosel = {
    name: "Rosel",
    age: 18,
    gender: "female",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
};

let Naya = {
    name: "Naya",
    age: 16,
    gender: "female",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
};

let Roni = {
    name: "Roni",
    age: 21,
    gender: "female",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
};

let Lisa = {
    name: "Lisa",
    age: 24,
    gender: "female",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
};

// --4--
let Niklas = {
    name: "Niklas",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    }
};

let Thomas = {
    name: "Thomas",
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject)
    }
};


// --5--
// Niklas.subjects.push(mathematic);
// console.log(Niklas);
// console.log(Niklas.subjects);


// --6--
// Sarbast.subject.push(mathematic);
// console.log(Sarbast);

// --7--
// mathematic.teachers = Niklas;
// console.log(mathematic);
// const addSubjectToTeacher = (_subject, _teacher) => {
//     _teacher.subjects.push(_subject);
//     _subject.teachers = _teacher
// }
// addSubjectToTeacher(science, Thomas);

// console.log(Niklas);


// --8--
// Niklas.addSubject = function(subject) {
//     this.subjects.push(subject)
// }
// Niklas.addSubject(english);
// console.log(Niklas);


// --9--
// lifeschool.addTeacher(Niklas);
// lifeschool.addTeacher(Thomas);
// lifeschool.addStudent(Sarbast);
// lifeschool.addStudent(Rosel);
// lifeschool.addStudent(Naya);
// lifeschool.addStudent(Roni);
// lifeschool.addStudent(Lisa);
// mathematic.addTeacher(Niklas);
// mathematic.addStudent(Sarbast);
// mathematic.addStudent(Rosel);
// science.addTeacher(Thomas);
// science.addStudent(Lisa);
// science.addStudent(Sarbast);
// english.addTeacher(Niklas);
// english.addStudent(Roni);
// english.addStudent(Naya);
// english.addStudent(Rosel);
// Niklas.addSubject(mathematic);
// Niklas.addSubject(english);
// Thomas.addSubject(science);
// Sarbast.addSubject(mathematic);
// Sarbast.addSubject(science);
// Rosel.addSubject(mathematic);
// Rosel.addSubject(english);
// Naya.addSubject(english);
// Roni.addSubject(english);
// Lisa.addSubject(science);


// --10--
// console.log(lifeschool);
// console.log(Niklas.subjects);
// console.log(Sarbast.subjects);
// console.log(mathematic.teachers);
// console.log(science.students);


// --11--12--
// lifeschool.removeStudent(Sarbast);
// mathematic.removeStudent(Sarbast);
// science.removeStudent(Sarbast);
// console.log(lifeschool);
// console.log(science);


// --13--
lifeschool.students.push(Sarbast, Lisa, Roni, Rosel, Naya);
lifeschool.subjects.push(mathematic, science, english);
lifeschool.teachers.push(Niklas, Thomas);

const assignSubjectToStudentAndTeacher = (_subject, _student, _teacher) => {
    _student.addSubject(_subject);
    _subject.addStudent(_student);
    _teacher.addSubject(_subject);
    _subject.addTeacher(_teacher);
}
assignSubjectToStudentAndTeacher(mathematic, Sarbast, Niklas);
assignSubjectToStudentAndTeacher(mathematic, Rosel, Niklas);
assignSubjectToStudentAndTeacher(science, Rosel, Niklas);
assignSubjectToStudentAndTeacher(english, Roni, Thomas);
assignSubjectToStudentAndTeacher(english, Naya, Thomas);
assignSubjectToStudentAndTeacher(science, Lisa, Niklas);
assignSubjectToStudentAndTeacher(mathematic, Lisa, Niklas);


console.log(lifeschool);


// --14--
const displayAllStudents = () => {
    for (key in lifeschool.students){
        console.log(lifeschool.students[key]);
    }
}

const displayStudentsNames = () => {
    for (key in lifeschool.students){
        console.log(lifeschool.students[key].name);
    }
}

// displayAllStudents();
// displayStudentsNames();

// --15--
const displayAllSubjectsOfStudent = (_student) => {
    for (key in _student){
        if (key === 'subjects'){
            console.log(_student[key]);
        }
    }
}
// displayAllSubjectsOfStudent(Rosel);


const displayAllStudentsEnlistedToSubject = (_subject) => {
    for (key in _subject){
        if (key === 'students'){
            console.log(_subject[key]);
        }
    }
}
// displayAllStudentsEnlistedToSubject(english);

const displayAllTeachers = () => {
    for (key in lifeschool.teachers){
        console.log(lifeschool.teachers[key]);
    }
}
// displayAllTeachers();


// --16--
const grades = {
    scores: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
    },
    addStudent: function (student) {
        this.students.push(student);
    },
    addGrade: function(student, subject, grade){
        this.scores.push(`${student}'s grade in ${subject} is ${grade}`);
    }
};

grades.addGrade(Sarbast.name, mathematic.name, 85);
grades.addGrade(Lisa.name, science.name, 75);
console.log(grades.scores);




