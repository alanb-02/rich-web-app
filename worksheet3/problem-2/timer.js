var displayH = document.getElementById("hour");
var displayM = document.getElementById("minute");
var dispalyS = document.getElementById("seconds");
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

        
    }
}

var timerObservable = Rx.Observable.fromEvent(startBtn, 'click');
timerObservable.subscribe(timeInput);