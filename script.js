// donation and history button done
document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById("margin-set").classList.add('hidden');
    document.getElementById("history-btn").classList.add('focus:bg-bg-primary-0');
    document.getElementById("donation-btn").classList.remove('bg-bg-primary-0');
    document.getElementById("donation-btn").classList.add('bg-stone-100');
})

document.getElementById("donation-btn").addEventListener('click', function(){
    document.getElementById("margin-set").classList.remove('hidden');
    document.getElementById("donation-btn").classList.add('bg-bg-primary-0');
    document.getElementById("history-btn").classList.remove('bg-bg-primary-0');
})


function donationCalculator () {
    let myAmount = parseFloat(document.getElementById("my-amount").value);
    let currentBalance = parseFloat(document.getElementById("current-balance").innerText);
    let donatedMoney = parseFloat(document.getElementById("donated-money").innerText);
    const historyContainer = document.getElementById("history-container");
    const uniqueText = document.getElementById('unique-text').innerText;

    if (myAmount <= currentBalance && !isNaN(myAmount)) {
        donatedMoney += myAmount;
        document.getElementById("donated-money").innerText = donatedMoney;
        currentBalance -= myAmount;
        document.getElementById("current-balance").innerText = currentBalance;

        // adding history
        historyContainer.innerHTML += `
        <div class="w-3/4 rounded-xl border p-8">
        <p>${myAmount} Taka is Donated for ${uniqueText}</p>
      </div>`
    }

    else {
        document.getElementById("my_modal_5").classList.add('hidden');
        return alert ("Invalid Amount");
    }
}