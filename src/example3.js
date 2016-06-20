var source = Rx.Observable.create(observer => {
    // Yield a single value
    observer.onNext(true);

    // Complete the stream
    observer.onCompleted();
    
    // Optional cleanup logic
    return () => console.log('disposed');
});

var logToConsole = (x) => console.log(x);

source.subscribe(logToConsole, logToConsole, () => {
    console.log('completed')
});