(function () {
  // Get the script tag element
  var scripts = document.getElementsByTagName('script');
  var currentScript = scripts[scripts.length - 1];
  
  // Read the share key from the data-share-key attribute of the script tag
  var shareKey = currentScript.getAttribute('data-share-key');
  
  if (!shareKey) {
    console.error('Share key not provided. Please add the data-share-key attribute to the script tag.');
    return;
  }

  var chatButton = document.createElement('div');
  chatButton.innerHTML = 'Chat';
  chatButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; background-color: #007bff; color: white; border-radius: 50%; text-align: center; line-height: 60px; cursor: pointer; z-index: 9999;';

  chatButton.onclick = function () {
    openChatBot();
  };

  function openChatBot() {
    var chatBotContainer = document.createElement('div');
    chatBotContainer.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; background-color: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); z-index: 9999;';

    var chatBotIframe = document.createElement('iframe');
    chatBotIframe.src = 'https://app.scrol.ai/sharing/' + shareKey;
    chatBotIframe.style.cssText = 'border: none; width: 100%; height: 100%;';

    var closeButton = document.createElement('div');
    closeButton.innerHTML = '&times;';
    closeButton.style.cssText = 'position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; color: #888; font-size: 20px; line-height: 20px; text-align: center; cursor: pointer;';

    closeButton.onclick = function () {
      closeChatBot();
    };

    chatBotContainer.appendChild(chatBotIframe);
    chatBotContainer.appendChild(closeButton);

    document.body.appendChild(chatBotContainer);
  }

  function closeChatBot() {
    var chatBotContainer = document.querySelector('.chatbot-container');
    chatBotContainer.remove();
  }

  document.body.appendChild(chatButton);
})();
