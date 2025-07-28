function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userMsg = input.value.trim();

  if (!userMsg) return;

  chatBox.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;

  let botResponse = "Sorry, I don't understand. Try asking for a genre like comedy, horror, or action.";
  const msg = userMsg.toLowerCase();

  if (msg.includes("comedy")) {
    botResponse = "Watch 'Superbad' or 'The Hangover'.";
  } else if (msg.includes("horror")) {
    botResponse = "Try 'Get Out' or 'The Conjuring'.";
  } else if (msg.includes("action")) {
    botResponse = "Go for 'Mad Max: Fury Road' or 'John Wick'.";
  } else if (msg.includes("romance")) {
    botResponse = "Maybe 'The Notebook' or 'La La Land'.";
  } else if (msg.includes("animation")) {
    botResponse = "How about 'Toy Story' or 'Spirited Away'?";
  }

  chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
