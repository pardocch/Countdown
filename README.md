CountDown
========================================
This plugin sets a span or div to show a countdown which you given.

## Usage
```
new Countdown(timestamp, document.querSelector(YOUR_ELEMENT))
```
#### Show Columns
default: {
    "year": false,
    "month": false,
    "day": true,
    "hour": true,
    "minute": true,
    "second": true
}
```
let countDown = new Countdown(timestamp, document.querSelector(YOUR_ELEMENT));

countDown.enableField({
    "year": false,
    "month": false,
    "day": true,
    "hour": false,
    "minute": false,
    "second": false
});
```

#### Display
```
let countDown = new Countdown(timestamp, document.querSelector(YOUR_ELEMENT));
countDown.display();
```
also you can do like this:
```
let countDown = new Countdown(timestamp, document.querSelector(YOUR_ELEMENT));
countDown.enableField({
    "year": false,
    "month": false,
    "day": true,
    "hour": false,
    "minute": false,
    "second": false
});
countDown.display();
```
