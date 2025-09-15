const hour = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const periodAm = document.querySelector('.am-pm'); 

function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, "0");

    hour.textContent = `${hours} :`;
    min.textContent = `${minutes} :`;
    sec.textContent = `${seconds}`;
    periodAm.textContent = period;
}

setInterval(updateClock, 1000);
updateClock();