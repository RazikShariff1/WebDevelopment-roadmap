// Map,filter and reduce are not similar as they use in python 
// but we are passing the funtion to the higher oder functions can be seen below

// map

let ar =[45,67,65,34]
let a=ar.map((value,index,array)=>//functon pass
{
    console.log(value,index.array)
    return value+1
})

// filter

console.log(a)
let ar2 =[45,67,65,34,2,6,7,4]
let a2=ar2.filter((a)=>//function pass
{
    return a%10==0
})
console.log(a2)

// reduce

let ar3 =[45,67,65,34]
let a3=ar3.reduce((a,b)=>//function pass
{
    return -a+b
})
console.log(a3)

//practice set on array  using codewithharry