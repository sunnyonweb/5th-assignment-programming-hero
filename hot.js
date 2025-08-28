
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
