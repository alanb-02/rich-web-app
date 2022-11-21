var displayH = document.getElementById("hour");
var displayM = document.getElementById("minute");
var dispalyS = document.getElementById("second");
const startBtn = document.getElementById("startBtn");
var count = 0;

const timeInput = {
    next: function() {
        const h = document.getElementById('inputHour').value;
        const m = document.getElementById('inputMinute').value;
        const s = document.getElementById('inputSecond').value;

        var hTos = h * 3600;
        var mTos = m * 60;
        var duration = hTos + mTos + parseInt(s);
        /* console.log(hTos, mTos, sTos, duration); */

        var startCount = Rx.Observable.interval(1000).map(count => duration - count).subscribe(seconds => {
            var time = String(seconds/3600);
            /* console.log(time);  */

            hrs = seconds / 3600;
            hrs = Math.trunc(h);

            mins = seconds % 3600;
            mins = mins / 60;
            mins = Math.trunc(mins);

            secs = seconds % 3600;
            secs = secs % 60;

            console.log(hrs, mins, secs); 

            displayH.innerHTML = hrs;
            displayM.innerHTML = mins;
            dispalyS.innerHTML = secs



            /* var date = new Date(0, 0); */
            /* date.setSeconds(+time * 60 * 60);
            console.log(date); */
            if(time == 0) {
                startCount.unsubscribe();
                
            }
        }) 
    }
}

var timerObservable = Rx.Observable.fromEvent(startBtn, 'click');
timerObservable.subscribe(timeInput);