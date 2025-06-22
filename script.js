let input = document.querySelector("input");
let button = document.querySelector(".check");
let result = document.querySelector("#result");


button.addEventListener("click", function() {
    let str = input.value;
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversed = str.split('').reverse().join('');
    
    if(str == reversed) {
        result.innerText = `The string is Palindrome.`
    }
    else {
        result.innerText = `The string is not a Palindrome.`
    }

});
