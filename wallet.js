let balance = 0;

function addMoney() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    balance += amount;
    updateBalance();
    document.getElementById('amount').value = '';
}

function withdrawMoney() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (amount > balance) {
        alert('Insufficient balance');
        return;
    }
    balance -= amount;
    updateBalance();
    document.getElementById('amount').value = '';
}

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}
