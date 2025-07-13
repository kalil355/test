document.getElementById('appointmentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const clientName = document.getElementById('clientName').value;
  const date = document.getElementById('date').value;
  const details = document.getElementById('details').value;

  const appointment = { clientName, date, details };
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  showAppointments();
  this.reset();
});

function showAppointments() {
  const container = document.getElementById('appointmentList');
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  container.innerHTML = '';
  appointments.forEach(item => {
    container.innerHTML += `
      <div class="suggestion-box">
        <strong>${item.clientName}</strong> – ${item.date}
        <p>${item.details}</p>
      </div>
    `;
  });
}

window.onload = showAppointments;
