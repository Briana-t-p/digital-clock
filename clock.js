function startTime() {
    var currentdate = new Date();
    var hour = currentdate.getHours();
    var minute = currentdate.getMinutes();
    var seconds = currentdate.getSeconds();

    minute = checkTime(minute);
    seconds = checkTime(seconds);

    document.getElementById("clock").innerHTML =
        hour + ":" + minute + ":" + seconds;

    var time = setTimeout(startTime, 500);
}

function checkTime(now) {
    if (now < 10) {
        now = "0" + now
    };
    return now;
}


var entry = prompt("Enter your name?");

function greeting() {

    var hey;
    var day = new Date().getHours();


    if (day < 10) {
        hey = "Good Morning " + entry;
        document.body.style.backgroundImage = "url('img/coffee.jpg')";
    } else if (day < 17) {
        hey = "Good Afternoon " + entry;
        document.body.style.backgroundImage = "url('img/jog.jpeg')";
    } else if (day < 20) {
        hey = "Good Evening " + entry;
        document.body.style.backgroundImage = "url('img/traffic.jpg')";
    } else {
        hey = "Good Night " + entry;
        document.body.style.backgroundImage = "url('night.png')";
    }


    document.getElementById("name").innerHTML = hey;
}

greeting();
