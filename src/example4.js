var urls = ["https://randomuser.me/api/", "https://randomuser.me/api/", "https://randomuser.me/api/"],
    intervalStream = Rx.Observable.interval(1000),
    urlStream = Rx.Observable.from(urls),
    //Input stream of urls every one secound
    urlInput = intervalStream.zip(urlStream);
    
//Concatenate request observables
var responsesStream = urlInput.selectConcat(url => 
    //Create a observable, delay for 5000 to simulate slower connection
    Rx.Observable.fromPromise($.getJSON(url[1])).delay(5000));

responsesStream.subscribe((x) => console.log(Date.now(), x));