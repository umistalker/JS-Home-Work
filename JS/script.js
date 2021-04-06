'use strict';

// const arr = [1,2,3,4,5];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.pop();

// console.log(arr);

// arr.push(10);

// console.log(arr);

// for (let i =0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// const str =prompt("","");
// const products = str.split(", ");
// products.sort(compareNum);
// function compareNum(a,b) {
//     return a-b;
// }

// console.log(products.join("; "));

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} вниутри массива ${arr}`);
// });

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj;

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj){

//     let objCopy ={};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;

// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x:1,
//         y:6
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({},add);

// clone.d = 10;

// console.log(add);
// console.log(clone);

// const oldArrey = ['a','b','c'];
// const newArray = oldArrey.slice();
// newArray[1] ='aaaaaaaaaaaa';
// console.log(newArray);
// console.log(oldArrey);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["aaa", "asdasd", "adsqweq"],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// const array =["a", "b"];

// const newArray = [ ...array];

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj ={...q};




    const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }, 
    rememberMyFilms: function(){

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){

        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
        },
        showMyDB: function(){
            if(personalMovieDB.privat == false){
                console.log(personalMovieDB);
        }
    },
        toggleVesibleMyDB: function(){
            if(personalMovieDB.privat){
                personalMovieDB.privat = false;
            }else {personalMovieDB.privat = true;
            }
        },
        writeYourGenres: function(){
            for(let i = 0; i<3; i++){
                let a = prompt(`Janr ${i+1}`);
                if(a == null || a == ""){
                    i--;
                }else{
                 personalMovieDB.genres[i] = a;
                 personalMovieDB.genres.forEach((item, i) => {
                    console.log(` Lovely Janr ${i+1}- this ${item}`);
                 });
                 
                }
            }
        }
            
     };




