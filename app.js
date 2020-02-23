var tipResult = document.getElementById('tipResult');
var tip = document.getElementById('tip');


function handleCalc() {
    var amount = document.getElementById('amount').value;
    var service = document.getElementById('service').value;
    var people = document.getElementById('people').value;

    var total = (amount * service) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    console.log(total);
    
    tipResult.style.visibility = 'visible';
    tip.innerHTML = total;
}

tipResult.style.visibility = 'hidden';

document.getElementById('submit').addEventListener('click', handleCalc);