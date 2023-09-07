document.addEventListener('DOMContentLoaded', function() {
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();

    currentDayOfTheWeekElement.textContent = daysOfWeek[now.getUTCDay()];
    currentUTCTimeElement.textContent = now.getTime();
});
