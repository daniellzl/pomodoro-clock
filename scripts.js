$(document).ready(function() {

    // fade in page
    $(".container").fadeIn(1500);

    // define initial variables
    var initialT = 1500;
    var t = initialT;
    var timerOn = false;
    var countDown;

    // define function that displays the timer on webpage
    function display() {
        if ((t % 60) < 10) {
            $('#time').text(Math.floor(t / 60) + ':0' + (t % 60));
        } else {
            $('#time').text(Math.floor(t / 60) + ':' + (t % 60));
        }
    };

    // define timer function that counts down
    function timer() {
        // when timer is up, clock resets, user is alerted
        if (t === 0) {
            clearInterval(countDown);
            $('.modal').modal();
            t = initialT;
            display();
            timerOn = false;
            // else subtract 1 second and display
        } else {
            t--;
            display();
        }
    };

    // display the initial time
    display();

    // when Start/Stop button is clicked
    $('#startStop').click(function() {
        // if the timer isn't on, start counting down and change the timer status to on
        if (timerOn === false) {
            countDown = setInterval(timer, 1000);
            timerOn = true;
            // if the timer is on, stop the timer and change the timer status to off
        } else {
            clearInterval(countDown);
            timerOn = false;
        }
    });

    // when reset button is clicked, stop the timer, reset the timer, display, and turn timer off
    $('#reset').click(function() {
        clearInterval(countDown);
        t = initialT;
        display();
        timerOn = false;
    });

    // when the + button is clicked
    $('#plus').click(function() {
        // if the timer is off, add 1 minute to the timer and display
        if (timerOn === false) {
            initialT = t;
            initialT += 60;
            t = initialT;
            display();
        }
    });

    // when the - button is clicked
    $('#minus').click(function() {
        // if timer is off, subtract 1 minute
        if (timerOn === false) {
            initialT = t;
            initialT -= 60;
            t = initialT;
            // if set time is less than 0, add back 1 minutes and display time
            if (initialT < 0) {
                initialT += 60;
                t = initialT;
                display();
                // else display time
            } else {
                display();
            }
        }
    });
});
