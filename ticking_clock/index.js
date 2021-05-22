// Declarative Code
const oneSecond = () => 1000;
const getCurrentTime = () => {
    console.log("here in currentTime");
    return new Date();
}

const serializedTime = date => {
    console.log("here in serializedTime, date: ", date);
    return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
}}

const twelveHourClock = clockTime => {
    console.log("here in twelveHourClock, clockTime: ", clockTime);
    return {
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours-12 : clockTime.hours
}}

const ampm = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM" 
})

const prependZeroIfNecessary = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours < 10) ? "0" + clockTime.hours : clockTime.hours,
    minutes: (clockTime.minutes < 10) ? "0" + clockTime.minutes : clockTime.minutes,
    seconds: (clockTime.seconds < 10) ? "0" + clockTime.seconds : clockTime.seconds
})

const setValues = clockTime => {
    const _hours = document.getElementById('hours');
    const _minutes = document.getElementById('minutes');
    const _seconds = document.getElementById('seconds');
    const _ampm = document.getElementById('ampm');

    _hours.innerText = clockTime.hours;
    _minutes.innerText = clockTime.minutes;
    _seconds.innerText = clockTime.seconds;
    _ampm.innerText = clockTime.ampm
}

const compose = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

const startTicking = () => 
    setInterval(
        compose(
            getCurrentTime,
            serializedTime,
            twelveHourClock,
            ampm,
            prependZeroIfNecessary,
            setValues
        ),
        oneSecond()
    )

startTicking();

// Imperative Code
/*

const _hours = document.getElementById('hours');
const _minutes = document.getElementById('minutes');
const _seconds = document.getElementById('seconds');
const _ampm = document.getElementById('ampm');

function getTime() {
    let date = new Date();
    let time = "";

    time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    if(time.hours === 12) 
        time.ampm = "PM"
    else if(time.hours > 12) {
        time.ampm = "PM"
        time.hours -= 12;
    }

    if(time.hours < 10) 
        time.hours = "0" + time.hours;

    if(time.minutes < 10)
        time.minutes = "0" + time.minutes;

    if(time.seconds < 10)
        time.seconds = "0" + time.seconds;

    _hours.innerHTML = time.hours;
    _minutes.innerHTML = time.minutes;
    _seconds.innerText = time.seconds;
    _ampm.innerText = time.ampm;
}

setInterval(getTime, 1000);
*/