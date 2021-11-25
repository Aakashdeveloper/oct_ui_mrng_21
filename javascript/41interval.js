// interval > run some operation after certain interval of time
// timeout > run only once after certain time

setInterval(function() {},time)

var myinterval = setInterval(function() {
    console.log(Math.random())
},3000)

clearInterval(myinterval)

///////

setTimeout(function() {
    console.log(Math.random())
},3000)