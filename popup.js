document.addEventListener('DOMContentLoaded', function() {
    var angle = 0;
    let passField = document.getElementById('password-field');
    let generateButton = document.getElementById('generate-button');
    let slider = document.getElementById('length-slider');
    let sliderValue = document.getElementById('length-value');

    passField.value = generatePassword();
    
    generateButton.addEventListener('click', function() {
        passField.value = generatePassword(sliderValue.innerHTML);
        angle -= 180;

        document.getElementById('generate-icon').style.transform = `rotate(${angle}deg)`;
    });

    document.getElementById('copy-button').addEventListener('click', function() {
        passField.select()
        passField.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(passField.value);
        window.getSelection().removeAllRanges();

        let tooltip = document.getElementById('textTooltip');
        tooltip.innerHTML = "Copied!";
        document.getElementById('copy-icon').style.color = 'royalblue';

        setTimeout(() => {
            tooltip.innerHTML = "Copy";
            document.getElementById('copy-icon').style.color = 'black';
        }, "2000");
    });

    slider.oninput = function() {
        sliderValue.innerHTML = this.value;
        passField.value = generatePassword(sliderValue.innerHTML);
    }
});

function generatePassword(length = 16) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*'
    let random_nums = new Uint8Array(1);
    let password = '';
    
    for (let i = 0; i < length; i++) {
        let chooser = window.crypto.getRandomValues(random_nums) % chars.length;
        password += chars.charAt(chooser);
    }

    return password;
}