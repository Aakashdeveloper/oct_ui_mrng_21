> map is use to iterate over the array of elements
> it always return the same lenght of output array as input
> it is use to apply logics(add,sub,mul,div) or iterate html

var a = [4,55,8,7,9,23,11,34,6,18,9,27]

a.map((data) => {return data*2})
[8, 110, 16, 14, 18, 46, 22, 68, 12, 36, 18, 54]

var a = [4,55,8,7,9,23,11,34,6,18,9,27]
a.map((data) => {return data>20})
(12) [false, true, false, false, false, true, false, true, false, false, false, true]

var a = [4,55,8,7]
a.map((data) => {
    return `<p>${data}</p>`
})

> filter is use to filter out the data
> it may or may not return the same length of output as input array
> it only return those value for which condition/output is true


var a = [4,55,8,7,9,23,11,34,6,18,9,27]
a.filter((data) => {return data>20})
[55, 23, 34, 27]

var a = [-1,0,1,2,3]
a.filter((data) => {return data*2})
[-1, 1, 2, 3]

a.map((data) => {return data*2})
[-2, 0, 2, 4, 6]