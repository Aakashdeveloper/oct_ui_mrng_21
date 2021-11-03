// ifelse > multiple condition and multiple output
// ternery > one condition and one output
// switch > one condition and multiple output

var name = "Aakash"

switch (name){
    case "Aakash":
        console.log(`Hi ${name}`)
        break;
    case 'Bhumika':
        console.log(`Hi ${name}`)
        break;
    case 'Eva':
        console.log(`Hi ${name}`)
        break;
    default:
        console.log(`Hi Unknown`)
}

var input = 2;

switch (input%2){
    case 0:
        console.log(`Number ${input} is even`)
        break;
    case 1:
        console.log(`Number ${input} is odd`)
        break;
    default:
        console.log(`Hi Unknown`)

}

Number 2 is even

switch (new Date().getDay()){
    case 0:
       console.log(`Today is sunday`)
       break;
    case 1:
       console.log(`Today is Monday`)
       break;
    case 3:
       console.log(`Today is Wednesday`)
       break; 
    default:
        console.log("Invalid Input) 
}

Today is Wednesday