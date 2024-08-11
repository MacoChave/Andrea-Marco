// Establece la fecha objetivo para el conteo regresivo (formato: año, mes - 1, día, hora, minuto, segundo)
var targetDate = new Date(2024, 8, 8, 11, 0, 0);

function getTimeRemaining(endTime) {
    var currentTime = new Date();
    var timeDifference = endTime - currentTime;

    if (timeDifference < 0) {
        return { total: timeDifference, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    var seconds = Math.floor((timeDifference / 1000) % 60);
    var minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return { total: timeDifference, days: days, hours: hours, minutes: minutes, seconds: seconds };
}

function updateCountdown() {
    var timeRemaining = getTimeRemaining(targetDate);

    if (timeRemaining.total <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '¡El evento empezó!';
    } else {
        let daySpan = `<span class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.days}</span>`
        let hoursSpan = `<span class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.hours}</span>`
        let minSpan = `<span class="p-2 font-mono text-gray-800" style="background: #CFB53B;">${timeRemaining.minutes}</span>`
        let secSpan = `<span class="p-2 font-mono text-gray-200" style="background: #CFB53B;">${timeRemaining.seconds}</span>`

        document.getElementById('countdown').innerHTML = `${daySpan} ${hoursSpan} ${minSpan} ${secSpan}`
    }
}

// Actualiza el contador cada segundo
var countdownInterval = setInterval(updateCountdown, 1000);