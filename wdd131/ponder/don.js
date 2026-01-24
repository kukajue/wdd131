const title = document.querySelector('h1');

console.log(title);

title.textContent = 'web page component';

document.getElementById('topics').style.color= 'purple';

let list =document.querySelector('list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

// para.style.backgroundColor = 'lightblue';
para.classList.add('background');



let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                