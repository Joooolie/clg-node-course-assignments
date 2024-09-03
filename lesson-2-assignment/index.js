const students = require('./student');

// Assign the parsed content to a variable student 
var student = students; 

// I wasn't sure if this is what you meant by parsed
var parsedStudents = [];
student.forEach(person => {
    parsedStudents.push(`${person.firstName} ${person.lastName}`);
});
console.log('Parsed Students: ')
console.log(parsedStudents);

// Modify the array - this is assuming I know that John Doe is the first object
//student[0]['age'] = '23';

// If I did not know where John was
student.forEach(person => {
    if (person.firstName === 'John') {
        person['age'] = '23'
    }
});

// Check for age and print result
student.forEach(person => {
    if (person.hasOwnProperty('age')) {
        console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
    } else {
        console.log(`${person.firstName} ${person.lastName} has no age recorded.`);
    }
    
});