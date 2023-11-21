// const cannot be changed though the code , just opposite of variabled
let a="R";
const pi=3.14;
// pi=44 will result an error
// thier exist a difference in local and global declared variables
// the above variables are globally declared 
{
    let a=44
    console.log(a)
}
console.log(a)
// can be seen the difference 
// the let can be used to change the variables in and out of a block of code
// whereas with var it is not possible
var b=11
{
    var b=22
    console.log(b)
}
console.log(b)
// the differnce can be screen
// its is preferred to use let