var number1= document.getElementById("number1");
var counter1=0;
setInterval(()=> {
    /* to stop the counter */
    if (counter1 == 49){
        clearInterval();
    } else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    } 
}, 30);

var number2= document.getElementById("number2");
var counter=0;
setInterval(()=> {
    /* to stop the counter */
    if (counter == 34){
        clearInterval();
    } else{
        counter += 1;
        number2.innerHTML = counter + "%";
    } 
}, 30);

var tailWind= document.getElementById("tailWind");
var counter3=0;
setInterval(()=> {
    /* to stop the counter */
    if (counter3 == 27){
        clearInterval();
    } else{
        counter3 += 1;
        tailWind.innerHTML = counter3 + "%";
    } 
}, 30);

var reactJs= document.getElementById("reactJs");
console.log(reactJs)
var counter2=0;
setInterval(()=> {
    /* to stop the counter */
    if (counter2 == 43){
        clearInterval();
    } else{
        counter2 += 1;
        reactJs.innerHTML = counter2 + "%";
    } 
}, 30);