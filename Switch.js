var dem = 0;

function Change() {
    if (dem % 2 == 0) {
        document.getElementById('temperature1').innerHTML = 'Celsius:';
        document.getElementById('temperature2').innerHTML = 'Fahrenheit:';
        document.getElementById('input').placeholder = 'Celsius';
    } else {
        document.getElementById('temperature2').innerHTML = 'Celsius:';
        document.getElementById('temperature1').innerHTML = 'Fahrenheit:';
        document.getElementById('input').placeholder = 'Fahrenheit';
    }
    dem++;
}

function Chuyendoi(valNum) {
    let valNum1 = parseFloat(valNum);
    if (document.getElementById('input').value != '') {
        if (dem % 2 == 0) {
            document.getElementById('result').innerHTML = (valNum1 - 32) / 1.8;
        } else {
            document.getElementById('result').innerHTML = valNum1 * 1.8 + 32;
        }
    } else {
        document.getElementById('result').innerHTML = '';
    }
}