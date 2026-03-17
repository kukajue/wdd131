
let mnums = [12, 10, 8, 4];
console.log(mnums.sort(compareFn));


function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();

console.log(simpleSort);

let lowerList = simpleList.map(function(fruit){
    return fruit.toLowerCase();
})
let lowerSort = lowerList.sort();
console.log(lowerSort);

let searchTerm = 'co';

let filterfruit = lowerSort.filter(searchFruit);

function searchFruit(item){
   return item.icludes(searachTerm);
}

console.log(filterFruit);

function comparefn(a,b) {
    if (a.productName > b.productName) {
        return -1;
    }else if (a.productName > b.productName) {
        return 1;
    }
}
                
                