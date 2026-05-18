function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString('id-ID');

  const date = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('clock').innerHTML = time;
  document.getElementById('date').innerHTML = date;
}

setInterval(updateClock, 1000);
updateClock();