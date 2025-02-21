document.addEventListener('DOMContentLoaded', function() {
    const events = [
      { date: '2025-03-15', title: 'Basketball Game', description: 'Local basketball game.', type: 'sports' },
      { date: '2025-04-10', title: 'Family Fun Day', description: 'A day full of fun activities for the whole family.', type: 'family' },
      { date: '2025-05-20', title: 'Rock Concert', description: 'Live rock concert featuring popular bands.', type: 'concert' },
      { date: '2025-06-05', title: 'Soccer Match', description: 'Local soccer match.', type: 'sports' },
      { date: '2025-07-18', title: 'Summer Festival', description: 'A festival with various activities and performances.', type: 'family' },
      { date: '2025-08-25', title: 'Jazz Concert', description: 'Live jazz concert.', type: 'concert' },
      { date: '2025-09-10', title: 'Community Fair', description: 'A fair with booths, games, and food.', type: 'family' },
    ];
  
    const months = [
      { name: 'March', days: 31 },
      { name: 'April', days: 30 },
      { name: 'May', days: 31 },
      { name: 'June', days: 30 },
      { name: 'July', days: 31 },
      { name: 'August', days: 31 },
      { name: 'September', days: 30 },
    ];
  
    let currentMonthIndex = new Date().getMonth() - 2; // Start from the current month (March is index 0)
  
    function renderCalendar(monthIndex) {
      const month = months[monthIndex];
      document.getElementById('monthName').textContent = month.name;
      const daysContainer = document.getElementById('daysContainer');
      daysContainer.style.opacity = 0;
  
      setTimeout(() => {
        daysContainer.innerHTML = '';
  
        // Get the first day of the month
        const firstDay = new Date(`2025-${monthIndex + 3}-01`).getDay();
  
        // Add empty divs for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
          const emptyDiv = document.createElement('div');
          emptyDiv.classList.add('day');
          daysContainer.appendChild(emptyDiv);
        }
  
        for (let i = 1; i <= month.days; i++) {
          const dayDiv = document.createElement('div');
          dayDiv.classList.add('day');
          dayDiv.innerHTML = `<div class="date">${i}</div>`;
          daysContainer.appendChild(dayDiv);
        }
  
        events.forEach(event => {
          const eventDate = new Date(event.date);
          if (eventDate.getMonth() === monthIndex + 2) {
            const day = eventDate.getDate();
            const dayDiv = daysContainer.querySelector(`.day:nth-child(${day + firstDay})`);
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event', event.type);
            eventDiv.textContent = event.title;
            eventDiv.addEventListener('click', () => showPopup(event));
            dayDiv.appendChild(eventDiv);
          }
        });
  
        daysContainer.style.opacity = 1;
      }, 300);
    }
  
    document.getElementById('prevMonth').addEventListener('click', () => {
      if (currentMonthIndex > 0) {
        currentMonthIndex--;
        renderCalendar(currentMonthIndex);
      }
    });
  
    document.getElementById('nextMonth').addEventListener('click', () => {
      if (currentMonthIndex < months.length - 1) {
        currentMonthIndex++;
        renderCalendar(currentMonthIndex);
      }
    });
  
    renderCalendar(currentMonthIndex);
  });
  
  function showPopup(event) {
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('eventPopup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('eventPopup').style.display = 'none';
  }