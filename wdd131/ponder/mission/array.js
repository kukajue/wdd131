// ARRAY + forEach
const steps = ['one', 'two', 'three'];

steps.forEach(function (item) {
    console.log(item);
});

steps.forEach(showSteps);

function showSteps(item) {
    console.log(item);
}


// MAP to HTML list
let myList = document.querySelector('#MyList');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
}

myList.innerHTML = stepsHtml.join('');


// GPA CALCULATION
let grades = ['A', 'B', 'C'];

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade) {
        case 'A': return 4;
        case 'B': return 3;
        case 'C': return 2;
        case 'D': return 1;
        case 'F': return 0;
        default:
            alert('Not a valid grade');
            return 0;
    }
}

console.log(gpaPoints);

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;

console.log(gpaAverage);


// FILTER
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function (word) {
    return word.length < 6;
});

console.log(shortWords);


// indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex);


// STUDENT DISPLAY
let container = document.querySelector('#studentContainer');

const students = [
    { last: 'Andrus', first: 'Aaron' },
    { last: 'Masa', first: 'Manny' },
    { last: 'Tanda', first: 'Tamanda' }
];

students.forEach(function (item) {
    let name = document.createElement('div'); // fixed
    name.className = 'format';

    let html = `
        <span>${item.first}</span>
        <span>${item.last}</span>
        <hr>
    `;

    name.innerHTML = html;
    container.appendChild(name);
});

