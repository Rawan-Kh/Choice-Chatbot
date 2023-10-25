const chatButton = document.getElementById('chat-button');
const chatContainer = document.getElementById('peekobot-container');
const minimiseButton = document.getElementById('minimise-button');
let isChatOpen = false;

chatButton.addEventListener('click', () => {
    isChatOpen = !isChatOpen;
    if (isChatOpen) {
        chatContainer.style.transform = 'scaleY(1)';
        chatContainer.style.display = 'flex'
      
    } else {
      chatContainer.style.transform = 'scaleY(0)';
    //   setTimeout(() => {
        chatContainer.style.display = 'none';
    //   }, 300); 
    }
  });

  minimiseButton.addEventListener('click', () => {
    isChatOpen = false;
    chatContainer.style.transform = 'scaleY(0)';
    // setTimeout(() => {
      chatContainer.style.display = 'none';
    // }, 300);
  });