var log = (x) => console.log(x),
    CANT_DO_THIS = 'I am afraid i cannot let you do this';

//catch the errors and get the first nonerror observable result
var catchSeq = Rx.Observable.catch(
    Rx.Observable.throw(new Error()),
    Rx.Observable.throw(new Error()),
    Rx.Observable.throw(new Error()),
    Rx.Observable.just(52),
    Rx.Observable.just(53),
    Rx.Observable.just(54)
);

catchSeq.subscribe(log);

log('----------------');

//catch error based on condition
var catchChoise = Rx.Observable.throw(new Error(CANT_DO_THIS)).catch(error => {
    if (error.message === CANT_DO_THIS) {
        return Rx.Observable.just(99);
    }
    return Rx.Observable.just(1);
})

catchChoise.subscribe(log);

log('----------------');

//resume after errors
var resumeSeq = Rx.Observable.onErrorResumeNext(
    Rx.Observable.throw(new Error()),
    Rx.Observable.just(12),
    Rx.Observable.throw(new Error()),
    Rx.Observable.just(13),
    Rx.Observable.throw(new Error()),
    Rx.Observable.just(14)
);

resumeSeq.subscribe(log);