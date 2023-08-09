
    
(function updateClock() {
    let now = new Date()
    let sec = now.getSeconds()
    let min = now.getMinutes() + sec / 60
    let hour = (now.getHours() % 12) + min / 60

    let secondHandAngle = sec * 6
    let minuteHandAngle = min * 6
    let hourHandAngle = hour * 30

    let secondHand = document.querySelector("#seconds")
    let minutesHand = document.querySelector("#minutes")
    let hourHand = document.querySelector("#hours")


    secondHand.setAttribute("transform", `rotate(${secondHandAngle}, 244, 251)`);
    minutesHand.setAttribute("transform", `rotate(${minuteHandAngle}, 244, 251)`);
    hourHand.setAttribute("transform", `rotate(${hourHandAngle}, 244, 251)`);

    let tick = new Audio("./media/tick.mp3")
    // tick.currentTime = 0;
    //tick.play()

    setTimeout(updateClock, 1000)


})(); // Note immediate invocation of the function here.

