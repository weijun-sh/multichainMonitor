//  110days 20h 10m 4s
function transferMilSecond(milSecond) {

    if (!milSecond) {
        return milSecond
    }
    let second_time =  milSecond / 1000;

    var time = parseInt(second_time) + "s";
    if (parseInt(second_time) > 60) {

        var second = parseInt(second_time) % 60;
        var min = parseInt(second_time / 60);
        time = min + "m " + second + "s";

        if (min > 60) {
            min = parseInt(second_time / 60) % 60;
            var hour = parseInt(parseInt(second_time / 60) / 60);
            time = hour + "h " + min + "m " + second + "s";

            if (hour > 24) {
                hour = parseInt(parseInt(second_time / 60) / 60) % 24;
                var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
                time = day + "days " + hour + "h " + min + "m " + second + "s";
            }
        }

    }
    return time;
}

function timestamp2DateTime(timestamp){
    if(!timestamp){
        return timestamp
    }
    timestamp *= 1;
    if(`${timestamp}`.length === 10){
        timestamp *= 1000
    }
    let date = new Date(timestamp).toLocaleDateString().replace(/\//g, '-');
    let time = new Date(timestamp).toLocaleTimeString();

    return `${date} ${time}`
}

module.exports = {
    transferMilSecond,
    timestamp2DateTime
}
