function brakeChain() {
    // Brake chain animation
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";


    setTimeout(function() {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}


// Call animation
brakeChain();


// Animate every 2 seconds
setInterval(brakeChain, 2000);

// Battery charge animation
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";


    setTimeout(function() {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function() {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function() {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function() {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

// Run animation
chargeBattery();


// Run animation every 5 seconds
setInterval(chargeBattery, 5000);


// Hourglass tip animation
function hourglassTip() {
    let Hourglass = document.getElementById('hourglass');
    Hourglass.innerHTML = "&#xf251;";

    setTimeout(function() {
        hourglass.innerHTML = "&#xf252";
    }, 1000);

    setTimeout(function() {
        hourglass.innerHTML = "&#xf253";
    }, 2000);

}


hourglassTip();



// Run animation every 2 seconds
setInterval(hourglassTip, 3000);