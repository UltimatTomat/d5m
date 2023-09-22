function updateClock() {
    let currentTime = new Date()
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let clock = hours + ":" + minutes + ":" + seconds
    document.getElementById("clock").innerHTML = (clock)
}

updateClock()
setInterval(updateClock, 1)