// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function display(){ 
//     document.write('Numbers added!'); 
//      } 
//      // Calling addition() function
//     addition(5,5,display);

function myMessage(message) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Code With Harry`);
        message();
    }, 2000);
}

yourmessage = (() => {
    console.log('i am not you')

}, 2000);


myMessage(yourmessage)