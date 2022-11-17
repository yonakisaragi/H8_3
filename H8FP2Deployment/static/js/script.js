import location from '../data/location.json' assert {type: 'json'};
import direction from '../data/direction.json' assert {type: 'json'};

const selectForLocation = document.getElementById('location');
const selectForWindGustDir = document.getElementById('windGustDir');
const selectForWindDir9Am = document.getElementById('windDir9am');
const selectForWindDir3Pm = document.getElementById('windDir3pm');
const radioButtons = document.querySelectorAll('input[type="radio"]');

document.addEventListener('DOMContentLoaded', function () {
    radioButtons[0].checked = true;
    let locationArr = location.sort((a, b) => a[1] - b[1]);
    let directionArr = direction.sort((a, b) => a[0] - b[0]);
    for(let i = 0; i < location.length; i++) {
        let option = document.createElement("option");
        option.setAttribute('value', locationArr[i][1]);
        option.appendChild(document.createTextNode(locationArr[i][0]));
        selectForLocation.appendChild(option);
    }
    for(let i = 0; i < direction.length; i++) {
        let optionWindGustDir = document.createElement("option");
        optionWindGustDir.setAttribute('value', directionArr[i][0]);
        optionWindGustDir.appendChild(document.createTextNode(directionArr[i][1]));        
        selectForWindGustDir.appendChild(optionWindGustDir);

        let optionWindDir9am = document.createElement("option");
        optionWindDir9am.setAttribute('value', directionArr[i][0]);
        optionWindDir9am.appendChild(document.createTextNode(directionArr[i][1]));        
        selectForWindDir9Am.appendChild(optionWindDir9am);

        let optionWindDir3pm = document.createElement("option");
        optionWindDir3pm.setAttribute('value', directionArr[i][0]);
        optionWindDir3pm.appendChild(document.createTextNode(directionArr[i][1]));        
        selectForWindDir3Pm.appendChild(optionWindDir3pm);
    }
})