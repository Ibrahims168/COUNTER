

let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           let day = Math.floor(totalSeconds / 86400)
           let hour = Math.floor(totalSeconds /3600);
           let minute = Math.floor((totalSeconds - hour*3600)/60);
           let seconds = totalSeconds - (hour*3600 + minute*60);
           if(day < 10)
                day = "0" + day;
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("counterNum").innerHTML = day + ":" + hour + ":" + minute + ":" + seconds;
        }

