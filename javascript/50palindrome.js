1221
12321
123331

var palindrome = (data) => {
    var rem,temp,final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(501)
VM309:12 Number 501 is not a palindrome
undefined
palindrome(10501)
VM309:10 Number 10501 is palindrome