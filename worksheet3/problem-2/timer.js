/* reading in the outputs spans for hours, minutes, and seconds */
var displayH = document.getElementById("hour");
var displayM = document.getElementById("minute");
var dispalyS = document.getElementById("second");
/* reading the the button to start the timer */
const startBtn = document.getElementById("startBtn");
var count = 0;
/* check to see if timer has finished counting down */
var running = false;


/* function that reads in time from user and countdowns from that time */
const timeInput = {
    next: function() {
        /* if countdown is running then alert is displayed and no change to the countdown is made */
        if (running === true) {
            alert("Wait for CountDown to Finish !!!")
        }else {
            /* reads in the input time from the user - h, m, s */
            const h = document.getElementById('inputHour').value;
            const m = document.getElementById('inputMinute').value;
            const s = document.getElementById('inputSecond').value;
    
            /* counverts hours to seconds */
            var hTos = h * 3600;
            /* converts minutes to seconds */
            var mTos = m * 60;
            /* adds all the second conversions to get duration user inputted */
            var duration = hTos + mTos + parseInt(s);

            /* starting coutdown from duration */
            var startCount = Rx.Observable.interval(1000).map(count => duration - count).subscribe(seconds => {
                var time = String(seconds/3600);
    
                /* converting the total seconds  to hours by diving the seconds and getting the integer part of the decimal */
                hrs = seconds / 3600;
                hrs = Math.trunc(h);
    
                /* converts the remaing time to minutes and gets the integer of teh decimal value */
                mins = seconds % 3600;
                mins = mins / 60;
                mins = Math.trunc(mins);
    
                /* getting the remaining time using modulus */
                secs = seconds % 3600;
                secs = secs % 60;
    
                /* formating the output time vales to have a 0 before single digit numbers */
                if ( hrs < 10 || mins < 10  || secs < 10) {
                    hrs = String(hrs).padStart(2, '0');
                    mins = String(mins).padStart(2, '0');
                    secs = String(secs).padStart(2, '0');
                }
    
                /* adding the the times into the output spans*/
                displayH.innerHTML = hrs;
                displayM.innerHTML = mins;
                dispalyS.innerHTML = secs
    
                console.log(hrs, mins, secs);  
                running = true;
                
                /* once the countdown has reached 0 seconds 0 minutes and 0 hours the count has been unsubscribed */
                if(time == 0) {
                    startCount.unsubscribe();
                    /* false allows for restarting timer */
                    running = false;
                }
                
            }) 
        }
    }
}

var timerObservable = Rx.Observable.fromEvent(startBtn, 'click');
timerObservable.subscribe(timeInput);