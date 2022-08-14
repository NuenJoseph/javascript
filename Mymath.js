var mymath = {
    PI:3.142,
    add:(a,b)=>a+b,
    multiply:(a,b)=>a*b
}
const sine = x => Math.sin(x);
// named export: there can be multiple named exports
export {sine};
// default export: there can only be one default export in a file
export default mymath;
