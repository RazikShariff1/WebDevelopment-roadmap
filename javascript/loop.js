/*
  >>for 
  ->for
  ->for of 
  ->for in
  
  >>while 

  >>do-while

*/
for(let i=0;i<=10;i++)
{
    console.log(i)
}
//  userinput is still pending   // let num=input("Enter a number")
// for in is used to iterate through keys in an objects
const marks={
  Mohammed:29,
  shariff:25,
  Khan:26,
  Syed:27,
  Pasha:28, 
}
for(let a in marks)
 {console.log("Marks of "+a+" is "+marks[a])
}
// for of is used to iterate through iterables strings ,arrays
for(let a of "shariffS")
 {console.log(a)}
let num="6"
n=Number.parseInt(num)// converts string to a integer
console.log(n)
// while and do-while loop works similar as a basic while and do-while  loop
