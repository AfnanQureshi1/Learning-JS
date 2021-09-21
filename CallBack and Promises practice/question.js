// console.log('1');
// setTimeout(function(){console.log('hello')},3000 ); // hello should be printed before 2. solve it
// console.log('2');




//solution 
function one(callback)
{
    console.log("One")
    callback();
}
function two()
{
    setTimeout(function(){ console.log("Hello"); 
    console.log("two")
}, 0000);
}
one(two);

