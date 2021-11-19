function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(a.trim().length>0 && b.trim().length>0){
        if(isNaN(a) || isNaN(b)){
            out = "Please enter Valid Value"
        }else{
            if(opt === 'Add'){
                out = `Sum is ${Number(a)+Number(b)}`
            }else{
                out = `Sub is ${Number(a)-Number(b)}`
            }
        }
        
    }else{
        out = "Please enter Value"
    }
   
    document.getElementsByClassName('output')[0].innerText = out;
}

/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b)
    document.getElementsByClassName('output')[0].innerText = `Sum of number is ${out}`;
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = a-b
    document.getElementsByClassName('output')[0].innerText = `Sub of number is ${out}`;
}*/