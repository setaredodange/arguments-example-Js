
// arguments keyword 
// ********* regular function


function sum (a, b, c){

    
    // console.log(arguments);  //Array


    let sumAllArgs = 0

    let arrayArgs = Array.from(arguments)
    arrayArgs.forEach (item => sumAllArgs += item)


    return sumAllArgs
}

console.log(sum(2, 4, 3, 5, 7, 10));  //31

// console.log(sum(2, 4, 3));  //9

// console.log(sum(2, 4, 3, 5, 7, 10))  //9
 


// ********** // arrow function
// rest operator


const sum = (a, b, c, ...args) =>{

    // const sum = (...args) =>{
        // const sum = (a, ...args) =>{

    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('args', args);

    let sumAllArgs = 0
    args.forEach (item => sumAllArgs += item)


    return sumAllArgs
}

console.log(sum(1, 2, 3, 4, 5, 6))  /// (a,b,c,...args) //15 ***  (...args)//21