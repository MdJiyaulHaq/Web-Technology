
// StopWatch Program

function StopWatch() {
    let startTime, endTime, duration, isRunning = 0;
    this.start = function () {
        if (isRunning)
            throw new Error('StopWatch is already running.');
        isRunning = true;
        startTime = new Date();
        console.log('StopWatch started.')
    };
    this.stop = function () {
        if (!isRunning)
            throw new Error('StopWatch is already stopped.');
        isRunning = false;
        endTime = new Date();
        console.log('StopWatch stopped.')
        const seconds = (endTime.getTime() - startTime.getTime()) / 100;
        duration = duration + seconds;
    };
    this.reset = function () {
        startTime = 0;
        endTime = 0;
        isRunning = false;
        duration = 0;
        console.log('StopWatch reset.')
    };
    Object.defineProperty(this, duration, {
        get: function () { return duration; }
    });
}