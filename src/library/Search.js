import axios from "axios";

// function compareTo(EntryString, StringToCompare) {

//     let i = 0;

//     while (i < EntryString.length || i < StringToCompare.length) {
//         if (EntryString[i] !== StringToCompare[i]) {
//             console.log(false);
//             return false;
//         }
//         i++
//     }
//     console.log(true);
//     return true
// }

function getAllCountries() {
    var countries = [];

    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => {
        var i = 0;
        while(i < 250){
                countries.push(res.data[i].name.common)
                i++
            }
    });

    return countries
}

export default getAllCountries;
