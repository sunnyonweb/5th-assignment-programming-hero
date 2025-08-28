
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