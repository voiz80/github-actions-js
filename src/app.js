const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

//fix it
try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;