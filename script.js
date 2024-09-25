// donation and history button done
document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById("margin-set").classList.add('hidden');
    document.getElementById("history-btn").classList.remove('bg-stone-100');
    document.getElementById("history-btn").classList.add('bg-bg-primary-0');
    document.getElementById("donation-btn").classList.remove('bg-bg-primary-0');
    document.getElementById("donation-btn").classList.add('bg-stone-100');
    document.getElementById("hide-history-from-home").classList.remove('hidden');
})

document.getElementById("donation-btn").addEventListener('click', function(){
    document.getElementById("margin-set").classList.remove('hidden');
    document.getElementById("donation-btn").classList.remove('bg-stone-100');
    document.getElementById("donation-btn").classList.add('bg-bg-primary-0');
    document.getElementById("history-btn").classList.remove('bg-bg-primary-0');
    document.getElementById("history-btn").classList.add('bg-stone-100');
    document.getElementById("hide-history-from-home").classList.add('hidden');
})

function donationCalculator (itemIndex) {
    const historyContainer = document.getElementById("history-container");
    const uniqueText = document.getElementById(`unique-text-${itemIndex}`).innerText;
    let myAmount = document.getElementById(`my-amount-${itemIndex}`).value;
    let currentBalance = parseFloat(document.getElementById("current-balance").innerText);
    let donatedMoney = parseFloat(document.getElementById(`donated-money-${itemIndex}`).innerText);
    const myAmountParsed = parseFloat(document.getElementById(`my-amount-${itemIndex}`).value);

    let myTime = new Date()
    let time = new Intl.DateTimeFormat("en-us", {
        dateStyle: "full",
        timeStyle: "full",
    });

    if (isNaN(myAmount) || myAmount <= 0) {
        alert("Enter valid amount");
        document.getElementById(`my-amount-${itemIndex}`).value = '';
        return;
    }

    else if (myAmount > currentBalance) {
        alert("You do not have sufficient balance");
        document.getElementById(`my-amount-${itemIndex}`).value = '';
        return;
    }

    else {
        donatedMoney += myAmountParsed;
        document.getElementById(`donated-money-${itemIndex}`).innerText = donatedMoney;
        currentBalance -= myAmount;
        document.getElementById("current-balance").innerText = currentBalance;

        // clearing input
        document.getElementById(`my-amount-${itemIndex}`).value = '';
        

        // adding history
        historyContainer.innerHTML += `
        <div class="w-3/4 rounded-xl border p-8">
        <p>${myAmount} Taka is Donated for ${uniqueText}</p>
        <p class="text-stone-600 text-sm">Date: ${time.format(myTime)}</p>
        </div>`

        document.getElementById("my_modal_5").showModal();

    }
}
