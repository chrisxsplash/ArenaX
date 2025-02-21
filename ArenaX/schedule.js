const months = [
  { name: 'March', days: 31, startDay: 6, events: { 5: { type: 'family', name: 'Family Picnic' }, 12: { type: 'concert', name: 'Concert Night' }, 20: { type: 'sports', name: 'Sports Event' } } },
  { name: 'April', days: 30, startDay: 2, events: { 10: { type: 'family', name: 'Art Exhibition' }, 18: { type: 'family', name: 'Food Festival' }, 25: { type: 'concert', name: 'Tech Conference' } } },
  { name: 'May', days: 31, startDay: 4, events: { 8: { type: 'sports', name: 'Marathon' }, 15: { type: 'family', name: 'Book Fair' }, 22: { type: 'concert', name: 'Music Festival' } } },
  { name: 'June', days: 30, startDay: 0, events: { 5: { type: 'family', name: 'Yoga Retreat' }, 12: { type: 'concert', name: 'Film Screening' }, 19: { type: 'family', name: 'Dance Workshop' } } },
  { name: 'July', days: 31, startDay: 2, events: { 4: { type: 'sports', name: 'Independence Day Parade' }, 11: { type: 'family', name: 'Beach Party' }, 25: { type: 'concert', name: 'Science Fair' } } },
  { name: 'August', days: 31, startDay: 5, events: { 7: { type: 'family', name: 'Cultural Fest' }, 14: { type: 'sports', name: 'Charity Run' }, 21: { type: 'concert', name: 'Comedy Show' } } },
  { name: 'September', days: 30, startDay: 1, events: { 3: { type: 'family', name: 'Wine Tasting' }, 10: { type: 'family', name: 'Craft Fair' }, 24: { type: 'concert', name: 'Theater Play' } } }
];

let currentMonthIndex = 0;

function generateCalendar(monthIndex) {
  const calendar = document.querySelector('.calendar');
  const header = document.querySelector('.header');
  const month = months[monthIndex];

  // Update header
  header.textContent = `${month.name} 2025 Schedule`;

  // Clear existing calendar
  gsap.to(calendar, {
    duration: 0.5,
    x: -100,
    opacity: 0,
    onComplete: () => {
      calendar.innerHTML = '';
      calendar.style.transform = 'translateX(100%)';
      calendar.style.opacity = '0';

      // Add day names
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      dayNames.forEach(dayName => {
        const dayNameElement = document.createElement('div');
        dayNameElement.classList.add('day-name');
        dayNameElement.textContent = dayName;
        calendar.appendChild(dayNameElement);
      });

      // Add empty days for the first week
      for (let i = 0; i < month.startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
      }

      // Add days of the month
      for (let i = 1; i <= month.days; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.innerHTML = `<span class="date">${i}</span>`;
        
        const event = month.events[i];
        if (event) {
          const eventTab = document.createElement('div');
          eventTab.classList.add('event-tab', event.type);
          eventTab.textContent = event.name;
          eventTab.addEventListener('click', (e) => {
            e.stopPropagation();
            showEventPopup(monthIndex, i, event.type);
          });
          day.appendChild(eventTab);
        }

        calendar.appendChild(day);
      }

      // Slide in new calendar
      gsap.to(calendar, {
        duration: 0.5,
        x: 0,
        opacity: 1
      });
    }
  });
}

// Show event popup
function showEventPopup(monthIndex, day, eventType) {
  const eventPopup = document.getElementById('event-popup');
  const eventTitle = document.getElementById('event-title');
  const eventDescription = document.getElementById('event-description');
  const earmarker = document.createElement('div');
  earmarker.classList.add('earmarker', eventType);
  const month = months[monthIndex];
  const event = month.events[day];

  if (event) {
    eventTitle.textContent = event.name;
    eventDescription.textContent = `Details about the ${event.name} on ${month.name} ${day}, 2025.`;
  } else {
    eventTitle.textContent = `No Event`;
    eventDescription.textContent = `There is no event scheduled for ${month.name} ${day}, 2025.`;
  }

  eventPopup.appendChild(earmarker);
  eventPopup.style.display = 'block';
  gsap.to(eventPopup, {
    duration: 0.5,
    scale: 1.2,
    opacity: 1
  });
}

// Close event popup
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-btn')) {
    const eventPopup = document.getElementById('event-popup');
    gsap.to(eventPopup, {
      duration: 0.5,
      scale: 0.8,
      opacity: 0,
      onComplete: () => {
        eventPopup.style.display = 'none';
        eventPopup.innerHTML = `
          <div class="event-content">
            <span class="close-btn" id="close-btn">&times;</span>
            <h2 id="event-title"></h2>
            <p id="event-description"></p>
            <button id="register-btn">Register</button>
          </div>
        `;
      }
    });
  }
});

// Navigate to previous month
document.getElementById('prev-month').addEventListener('click', () => {
  if (currentMonthIndex > 0) {
    currentMonthIndex--;
    generateCalendar(currentMonthIndex);
  }
});

// Navigate to next month
document.getElementById('next-month').addEventListener('click', () => {
  if (currentMonthIndex < months.length - 1) {
    currentMonthIndex++;
    generateCalendar(currentMonthIndex);
  }
});

// Generate the calendar on page load
generateCalendar(currentMonthIndex);