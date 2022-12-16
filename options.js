function save_options() {
    var length = document.getElementById('default-length').value;
  
    console.log(length);
    // chrome.storage.sync.set({
    //     defaultLength: length
    // }, function() {
    //     var status = document.getElementById('status');
    //     status.textContent = 'Options saved';
    //     setTimeout(function() {
    //         status.textContent = '';
    //     }, 750);
    // });
}

function restore_options() {
    // chrome.storage.sync.get({
    //     defaultLength: 16
    // }, function() {
    //     document.getElementById('default-length').value = 16;
    // });
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options);