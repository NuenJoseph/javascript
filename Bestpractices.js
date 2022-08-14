/*
//JavaScript Best Practices
//Avoid global variables, avoid new, avoid ==, avoid eval()
*/
/*
//Local Variables
Local variables must be declared with the var keyword or the let keyword,or the const keyword, otherwise they will become global variables.
*/
/*
//Declare Objects with const &Arrays
//Declaring objects with const will prevent any accidental change of type:
Example;
const car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";   
*/
/*
//Use === Comparison
The == comparison operator always converts (to matching types) before comparison(This is not a strict comparison).
The === operator forces comparison of values and type(this is a strict comparison).
Example
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false
*/
