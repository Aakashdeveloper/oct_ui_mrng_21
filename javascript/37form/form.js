const getId = () => {
    var id = Math.floor(Math.random() * 1000000);
    document.getElementById('uid').value = id
}


function validateFname(){
    var name = document.getElementById('firstname').value
    if(name.trim().length == 0){
        document.getElementById('fout').innerText="Please Enter Firstname"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const validateEmail = () => {
    var email = document.getElementById('mail').value;
    if(email.trim().length==0){
        document.getElementById('eout').innerText="Please enter your email address"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") ==null){
            document.getElementById('eout').innerText="Please enter Valid email address"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const validatePwd = () => {
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min Length Should be 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red";
        }
        else if(pwd.length<11){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.backgroundColor="orange";
        }
    }else{
        document.getElementById('ppout').style.backgroundColor="green";
    }
}

function showPassword(){
    var pwd = document.getElementById('password')
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

const validateCPwd = () => {
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password Does Not Match";
    }else{
        document.getElementById('cpout').innerText="";
    }
   
}

function getCity(){
    var city = document.getElementById('city').value;
    var myCity = city ?city:'No City';
    document.getElementById('cityOut').innerText=`Your City is ${myCity}`;
}