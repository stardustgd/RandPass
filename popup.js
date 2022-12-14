document.addEventListener('DOMContentLoaded', function() {
    let passField = document.getElementById('password-field');
    let slider = document.getElementById('length-slider');
    let sliderValue = document.getElementById('length-value');

    passField.value = generatePassword();
    
    document.getElementById('generate-button').addEventListener('click', function() {
        passField.value = generatePassword(sliderValue.innerHTML);
    });

    document.getElementById('copy-button').addEventListener('click', function() {
        passField.select()
        passField.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(passField.value);
        window.getSelection().removeAllRanges();

        let tooltip = document.getElementById('textTooltip');
        tooltip.innerHTML = "Copied password!";

        setTimeout(() => {
            tooltip.innerHTML = "Copy to Clipboard";
        }, "2000");
    });

    slider.oninput = function() {
        sliderValue.innerHTML = this.value;
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

function resetCopy() {
    let tooltip = document.getElementById('textTooltip');
    tooltip.innerHTML = "Copy to Clipboard";
}