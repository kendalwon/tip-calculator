const tipResult = document.getElementById('tipResult');
const tip = document.getElementById('tip');

const handleCalc = () => {
    const amount = document.getElementById('amount').value;
    const service = document.getElementById('service').value;
    const people = document.getElementById('people').value;

    let total = (amount * service) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    tipResult.style.visibility = 'visible';
    tip.innerHTML = total;
}

tipResult.style.visibility = 'hidden';

document.getElementById('submit').addEventListener('click', handleCalc);