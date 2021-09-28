/* objective 1-6 */
name = "Margaret";
var name;
console.log(name);
/* objectivve 7-9 */
setName();
function setName() {
    var name="covalence";
    console.log(name);
}
/* objective 10 -11 */
console.log("Average Results");
let avg = findAvg(2,2)
console.log("Average is:", avg);
function findAvg(a,b) {
    console.log("find average of two numbers");
    var answer = (a + b) / 2;
    return answer; // returns first message, second message, and the results of the findAv function //
}
/* This exercise practice scoping */
let fruits = ["apple", "orange", "banana"];
/* let favFruit;  removing as global variable causes it to be undefined when placed in printFruits function*/ 
function printFruits() {
    let favFruit = fruits[2];
    /* favFruit = fruits[2]; */
    printFavFruit(); // yields a reference error, if placed before the let //
    console.log(fruits[0]);
function printFavFruit() {
    let leastFav = ["rutabagas", "dates", "figs"];
    console.log(favFruit);
    console.log(leastFav); // must come after variable is declared to avoid error. //
}
}
test();
function test() {
    console.log("Hello", name);
}
let newTest = function test2() {
    alert("This is a test function to see if there are any problems with scope of variables");
}
newTest(); // cannot access newTest before initialization error when placed before declared//

printFruits();
// printFavFruit(); printFavFruit is able to log favFruit because favFruit is a global variable. Once function is moved, no longer valid //
/* printFavFruit can no longer call the function once it is nested.  Call inside printFruits function, syntax error*/

