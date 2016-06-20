$(document).ready(() => {
    var button = $('#fizzBuzzer'),
        outputPane = $('#outputPane'),
    	clickStream = Rx.Observable.fromEvent(button, 'click'),
        //Create a stream of a values every second
        timeStream = Rx.Observable.interval(1000),
        //Merge click and time stream into a single stream
        mergedStream = Rx.Observable.merge(timeStream, clickStream),
    	onesStream = mergedStream.map(() => 1);

    var fizzBuzzStream = onesStream.scan((sum, x) => sum + x)
       .map(x => {
           if (x % 3 == 0 && x % 5 == 0) {
               return 'FizzBuzz';
           }
           else if (x % 3 == 0) {
               return 'Fizz';
           } else if (x % 5 == 0) {
               return 'Buzz';
           }
           return x;
       });
       
    fizzBuzzStream.subscribe(eventValue => {
        outputPane.html(outputPane.html() + '<div>' + eventValue + '</div>')
    });
});