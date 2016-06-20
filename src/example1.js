$(document).ready(() => {
    var button = $('#fizzBuzzer'),
        outputPane = $('#outputPane'),
        //Get an observable sequence of clicks on our button
    	clickStream = Rx.Observable.fromEvent(button, 'click'),
        //Map the values in our stream to ones
    	onesStream = clickStream.map(() => 1);
    
    //Get stream of consequencive numbers
    var fizzBuzzStream = onesStream.scan((sum, x) => sum + x)
        //Map numbers to either fizz or buzz
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
       
    //Subscribe to the fizzbuzz stream
    fizzBuzzStream.subscribe(eventValue => {
        outputPane.html(outputPane.html() + '<div>' + eventValue + '</div>')
    });
});

//See example 2 for continuation of this