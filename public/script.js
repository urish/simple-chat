(function() {
    var chatBox = document.querySelector('.chat-box');
    var inputBox = document.querySelector('.input-box');
    var chatForm = document.querySelector('.chat-form');
    var fbRef = new Firebase('https://uri-demo.firebaseio.com/chat');
    
    function addMessage(text) {
        var newMessage = document.createElement('div');
        newMessage.textContent = text;
        chatBox.insertBefore(newMessage, chatBox.firstChild);
    }
    
    chatForm.addEventListener('submit', function(event) {
        if (inputBox.value.trim()) {
            fbRef.push(inputBox.value);
            inputBox.value = '';            
        }
        event.preventDefault();
    });
    
    fbRef.on('child_added', function(snap) {
        addMessage(snap.val());
    });
})();