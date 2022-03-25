import axios from "axios";



function getAllCountries() {
   let countries = [];

    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => {
        var i = 0;
        while(i < 250){
                countries.push(res.data[i].name.common.toLowerCase());
                i++;
            }
    });

    return countries
}

export default getAllCountries;
