
//1- Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers
console.log('even Or Odd');
function evenOrOdd(arg) {
    if (typeof arg === 'number') {
        if (arg % 2 ===0) {
            console.log('even');
        }else{
            console.log('odd');
        }
    }else{
        console.log('the argument is not a number')
    }
  }

  evenOrOdd(0)
  evenOrOdd(1)
  evenOrOdd(2)
  evenOrOdd('false')
  evenOrOdd(true)


console.log('string To Array');
// 2- Write a function to split a string and convert it into an array of words


  function stringToArray(arg) {
    let arr=[]
    if (typeof arg === 'string') {
        if (arg.includes(' ') ) {
           arr= arg.split(' ')
        }else if (arg.includes( ',')) {
        arr= arg.split(',')
        }else{
            arr=[arg]
        
        }
    }
    return arr
   
  }
  console.log(stringToArray("Robin Singh"));



 /*   3- Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has
to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */

console.log('friends finder');

function friendsFinder(array) {
    if (Array.isArray(array)) {
        let friendsList=array.filter((elem)=>  typeof elem ==='string' && /^[A-Za-z]+$/.test(elem) &&  elem.length<=4) 
        return friendsList
    }else{
        return [];
    }
   
}



let friends=["Ryan", "Kieran", "Jason", "Yous",'42']

console.log(friendsFinder(friends));



//// 2. Отфильтровать продукты дешевле 15
const products = [
    { name: 'Apple', price: 15 },
    { name: 'Banana', price: 8 },
    { name: 'Cherry', price: 3 },
    { name: 'Grape', price: 22 },
    { name: 'Orange', price: 12 },
  ]

console.log('Products price under 15');
  let prodUnder15=products.filter((el)=>el.price<=15)
  console.log(prodUnder15);


  // 3. Найти объект с автором В
const books = [
    { title: 'Book 1', author: 'Author A' },
    { title: 'Book 2', author: 'Author B' },
    { title: 'Book 3', author: 'Author A' },
    { title: 'Book 4', author: 'Author C' },
  ]
console.log('Books with author that beginn with B');
let authorB=books.filter((el)=>{
const authorsArr=el.author.split(' ')
const authorLastName=authorsArr[authorsArr.length-1]
return authorLastName.charAt(0)==='B'
})
console.log(authorB);


console.log('method sort();   4. отсортировать по id');


const arr2 = [
    { id: 9, title: 'велосипед', price: 45000 },
    { id: 14, title: 'самокат', price: 15000 },
    { id: 7, title: 'сноуборд', price: 20000 },
    { id: 1, title: 'лыжи', price: 22000 },
    { id: 3, title: 'ролики', price: 18000 },
    { id: 13, title: 'коньки', price: 17000 },
    { id: 4, title: 'скейтборд', price: 19000 },
    { id: 15, title: 'парашют', price: 50000 },
    { id: 8, title: 'гироборд', price: 25000 },
    { id: 6, title: 'сёрфборд', price: 27000 },
    { id: 10, title: 'подводные лыжи', price: 55000 },
    { id: 12, title: 'мотоцикл', price: 65000 },
    { id: 11, title: 'санки', price: 5000 },
    { id: 5, title: 'батут', price: 30000 },
    { id: 2, title: 'катамаран', price: 32000 },
  ]

  
  let arrSortedWithID=arr2.sort((el1,el2)=>el1.id-el2.id)
  console.log(arrSortedWithID);




  console.log(' 5. отсортировать объекты по алфавиту');
const people = [
    { name: 'Frank', age: 35 },
    { name: 'Eva', age: 22 },
    { name: 'Hannah', age: 31 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'Jack', age: 27 },
    { name: 'Bob', age: 20 },
    { name: 'David', age: 28 },
    { name: 'Grace', age: 29 },
    { name: 'Isaac', age: 23 },
  ]

  let peopleSortedWithName=people.sort((elem1,elem2)=>elem1.name.localeCompare(elem2.name))
  console.log(peopleSortedWithName);


console.log(' 6. Отсортиировать по возрасту');

let peopleSortedWithAge=people.sort((elem1,elem2)=>elem1.age-elem2.age)
console.log(peopleSortedWithAge);


console.log(' задачи reduce');


console.log('7. найти сумму четных!! чисел массива.'); 
const numbers = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]


let sumNumbers=numbers.reduce((acc,currentVal)=>{
if ( typeof currentVal==='number' && currentVal % 2 === 0) {
    return acc + currentVal
}
return acc
},0)
console.log(sumNumbers);






console.log('8.  Используя метод reduce найти наибольшее число массива.');

const biggestNumber=numbers.reduce((acc,elemVal)=>{
if (elemVal > acc) {
    return elemVal
}
return acc
},numbers[0])

console.log(biggestNumber);


console.log('9.reduce найти объект товара с самой высокой ценой.');

const products2 = [
    { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
  ]

  const prodFindWithHigestPrice=products2.reduce((acc,elemVal)=>{
    if (elemVal.price >acc) {
        return  elemVal
    }
    return acc
  },products2[0])
  console.log(prodFindWithHigestPrice);


  console.log('10. Найти среднюю оценку marks у товара');

  /* let prodsWithMiddleMarks=products2.reduce((acc,elemVal)=>{
    let middleMark=(acc+elemVal.marks)/elemVal.marks.length
    return middleMark
  },0)

  console.log(prodsWithMiddleMarks); */
