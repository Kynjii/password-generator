const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r", "s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let generateEl = document.getElementById("generate-el")
let password1 = document.getElementById("password-el1")
let password2 = document.getElementById("password-el2")


// on-click function for showing random password

generateEl.addEventListener('click', function () {
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    
    let selectedCharacters = [...letters];
    if (includeNumbers) selectedCharacters = selectedCharacters.concat(numbers);
    if (includeSymbols) selectedCharacters = selectedCharacters.concat(symbols);
    
    password1.textContent = generateRandomPassword(selectedCharacters, 15);
    password2.textContent = generateRandomPassword(selectedCharacters, 15);
    
    function generateRandomPassword(charSet, length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
        return password;
    }
});



 // Copy-to-clipboard function
function copyToClipboard(elementId) {
    let text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}