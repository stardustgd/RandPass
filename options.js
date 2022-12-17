function save_options() {
    let defaultLengthBox = document.getElementById('default-length');
    let statusMessage = document.getElementById('status');
    let length = parseInt(defaultLengthBox.value);

    if (isNaN(length)) return highlightError(defaultLengthBox);
    if (length <= 0 || length > 50) return highlightError(defaultLengthBox);

    chrome.storage.local.set({
        defaultLength: length
    }, function() {
        statusMessage.textContent = 'Options saved';
        defaultLengthBox.style.borderColor = "rgba(0, 0, 0, 0.25)"; 
        setTimeout(function() {
            statusMessage.textContent = '';
        }, 750);
    });
}

function restore_options() {
    let statusMessage = document.getElementById('status');

    chrome.storage.local.set({
        defaultLength: 16
    }, function() {
        document.getElementById('default-length').value = 16;
        statusMessage.textContent = 'Restored defaults';
        setTimeout(function() {
            statusMessage.textContent = '';
        }, 750);
    });
}

function highlightError(element) {
    element.style.borderColor = 'red';
}

function load() {
    chrome.storage.local.get('defaultLength', function(result) {
        document.getElementById('default-length').value = result.defaultLength;
    })
}

document.addEventListener('DOMContentLoaded', load)
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('restore').addEventListener('click', restore_options);