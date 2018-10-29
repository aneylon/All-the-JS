# JavaScript Interview questions
Questions and answers you can expect in a JavaScript interview.

## Closure
```javascript
    // Explain the difference between the following code samples.
    for(var i = 1; i < 5; i ++ ){
      setTimeout(function() {
        console.log(i)
      }, 1000 * i)
    }
  
    for(var i = 1; i < 5; i ++) {
      (function(x){
        setTimeout(function(){
          console.log(x)
        }, 1000 * x)
      })(i)
    }
```

## Reference
https://www.toptal.com/javascript/interview-questions

https://www.onlineinterviewquestions.com/advanced-javascript-interview-questions/

https://www.tutorialspoint.com/javascript/javascript_interview_questions.htm

https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
