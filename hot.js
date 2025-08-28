
// get innertext Number
function getInnerTextNumber (id) {
    return parseInt(document.getElementById(id).innerText)
}

// Get raw innerText
function getInnerText (id) {
    return document.getElementById(id).innerText
}




// heart icon click function

const hearts =document.getElementsByClassName('card-heart');

for (const heart of hearts){
    heart.addEventListener('click', function(){
        let heartCount = getInnerTextNumber('nav-heart');
        let newCount = heartCount + 1;

        document.getElementById('nav-heart').innerText = newCount;
    });
}


// for copy function

const copys = document.getElementsByClassName('copy-btn');

for (const copy of copys){
    copy.addEventListener('click', function(){
        const cardNumber = this.parentNode.parentNode.children[1].children[2].innerText;
        navigator.clipboard.writeText(cardNumber);
         alert(`নাম্বার কপি হয়েছে - ${cardNumber}`);

        let copyCount = getInnerTextNumber('nav-copy');
        let newCount = copyCount + 1;

        document.getElementById('nav-copy').innerText = newCount ;
    })
}

// for call button 

const calls = document.getElementsByClassName('call-btn');

for (const call of calls){
    call.addEventListener('click', function(){
        const card = this.parentNode.parentNode;
        const cardTitle = card.querySelector('p').innerText;
        const cardNumber = card.querySelector('.copy-num').innerText;

        let navCoin = getInnerTextNumber('nav-coin');
        if (navCoin < 20) {
            alert('Coin is insufficient!');
            return;
        }
        alert(`📞Calling ${cardTitle} - ${cardNumber}`);

        navCoin -= 20;
        document.getElementById('nav-coin').innerText = navCoin;

        const callHistory = document.getElementById('call-history');
        const time = new Date().toLocaleTimeString();

        const callDiv = document.createElement('div');
        callDiv.className = 'flex justify-between items-center p-2 shadow-md bg-gray-50 text-left gap-3 mt-4';
        callDiv.innerHTML = `
            <h2 class="font-medium">${cardTitle} <br />${cardNumber}</h2>
            <p>${time}</p>
        `;
        callHistory.appendChild(callDiv);
    })
}

// for clean
