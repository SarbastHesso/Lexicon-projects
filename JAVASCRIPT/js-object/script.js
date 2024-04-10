// 1-Create an object representing a person with properties like name, age, and city.
const person = {
    name: 'Sarbast',
    age: 40, 
    city: 'Västerås'
}


// 2-Access and print the values of the person's properties.
// console.log(person.name, person.age, person.city);


// 3-Modify the age of the person and add a new property for their email.
person.age = 42;
person.email = 'sarbast@gmail.com';


// 4-Create an object representing a car with properties like make, model, and a method to display its details.
const car = {
    make: 'Volvo',
    model: 'xc60',
    display: () => {
        console.log(car.make, car.model);
    }
}
car.display();


// 5-Loop through the person object from exercise 1 and print each property and its value.
for(property in person){
    console.log(`${property}: ${person[property]}`);
}


// 6-Create an object representing a student with nested properties for subjects and grades.
const student = {
  name: "Sarbast",
  subjects: [
    {mathematics: "A"},
    {english: "B"},
    {science: "B"},
    {fysic: "C"},
    {history: "B"}
    ]
};


// 7-Modify the science grade of the student from the previous exercise.
student.subjects[2] = "A";


// 8-Create an array of objects representing different books with properties like title and author.
const books = [
  {
    title: "The Miserables",
    author: "Victor Hugo",
  },
  {
    title: "Isabel Allende",
    author: "Eva Luna",
  },
  {
    title: "Gabriel Garcia",
    author: "One Hundred Years of Solitude",
  },
  {
    title: "Leo Tolstoy",
    author: "Anna Karnina",
  }
];


// 9-Loop through the books array from the previous exercise and print the title and author of each book.
books.forEach (book => {
    console.log(`${book.title} by ${book.author}`);
})