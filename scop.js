//     there are two types of scope 
///        globel scope => a veriable that can be access from everywhere is called globel scope
let globelScope = "I'm a Globel Scope"
function Glob() {
    console.log(globelScope);
}
Glob()
// Functionl Scope => a veriable that can only be use within the function
function func() {
    let funct = "I'm a functional Scope"
}
console.log(funct)