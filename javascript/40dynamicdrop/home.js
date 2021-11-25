var url = "https://developerfunnel.herokuapp.com/location";

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement('option') /// <option></option>
            var text = document.createTextNode(data[i].city_name) // delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value= data[i]._id //<option value="1">Delhi</option>
            document.getElementById('city').appendChild(element) //<select><option value="1">Delhi</option></select>
        }
    })
}

function getHotel(){
    var cityId = document.getElementById('city').value;
    var hotels = document.getElementById('hotels');
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`https://developerfunnel.herokuapp.com/hotels?city=${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement('option') /// <option></option>
            var text = document.createTextNode(data[i].name) // delhi
            element.appendChild(text) //<option>Delhi</option>
            hotels.appendChild(element) //<select><option value="1">Delhi</option></select>
        }
    })
}