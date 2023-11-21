let marks=[50,49,50,45] //collection of elements of similar and disimilar datatype elements
let marks1=["Absent",true,45,50]
console.log(marks.length)
marks1[1]=48
console.log(marks1)
// strings are immutable wereas array are mutable  ie they are treted as objects


//Array methods using marks.
console.log(marks.toString(),typeof(marks))
console.log(marks.join('-'))
console.log(marks.push(50))

//delete operator ,it delets only element but cannot delete array or string 
delete marks[1]
console.log(marks)

// splice is differnt from slice
// it contains 4 parts 
// strart, and number of elements to remove and list of elements
let s=[1,2,3,4,5]
s.splice(1,3,22,33,44)
console.log(s)
s.splice(1,3,22,33,44,55,66)
console.log(s)//there might be bug here
let g=[50,23,7,5,9,1,4,11,43] 
// this compare function in sort returns assending order
console.log(g.sort(compare))
function compare(x,y)
{
    return x-y
}
