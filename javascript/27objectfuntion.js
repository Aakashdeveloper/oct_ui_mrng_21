function language(name,country){
    this.name = name;
    this.country = country;
    this.greet= () => {return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'
Hindi.name
'Hindi'

var English = new language('Engish','England')
undefined
English
language {name: 'Engish', country: 'England', greet: ƒ}


var myobj = new Object();
myobj.city= "Delhi"
myobj
{city: 'Delhi'}