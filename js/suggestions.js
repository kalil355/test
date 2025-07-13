document.getElementById('suggestionForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const suggestion = { name, message, reply: "" };

  let suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
  suggestions.push(suggestion);
  localStorage.setItem('suggestions', JSON.stringify(suggestions));
  displaySuggestions();
  this.reset();
});

function displaySuggestions() {
  const container = document.getElementById('suggestionsList');
  const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
  container.innerHTML = '';
  suggestions.forEach((item, index) => {
    container.innerHTML += `
      <div class="suggestion-box">
        <strong>${item.name}:</strong>
        <p>${item.message}</p>
        <em>Reply: ${item.reply || "No reply yet"}</em>
      </div>
    `;
  });
}

window.onload = displaySuggestions;
