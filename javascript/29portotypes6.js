//es5
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () =>{return `Say Hi To ${name}`}
}

//Es6
class language1{
    constructor(name,country){
        this.name =name;
        this.country = country;
    }

    greet=() =>{
        return `Say Hi To ${this.name}`
    }
}

var French = new language('French','France')
var English = new language1('English','England')
French
language {name: 'French', country: 'France', greet: ƒ}
English
language1 {name: 'English', country: 'England', greet: ƒ}
French.greet()
'Say Hi To French'
English.greet()
'Say Hi To English'


///////
class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.11
    }
}

class language2 extends geo{
    constructor(name,country){
        super()
        this.name =name;
        this.country = country;
    }

    greet=() =>{
        return `Say Hi To ${this.name}`
    }
}

var English = new language2('English','England')
undefined
English
language2 {lat: 43.22, long: 32.11, name: 'English', country: 'England', greet: ƒ}