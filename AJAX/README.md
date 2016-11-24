[Back](../../../)

# AJAX
https://developer.mozilla.org/en-US/docs/AJAX

Asynchronous JavaScript and XML is used to retrieve data from a server and update a page with that information. Although XML is part of the name JSON is more typically used.

To use AJAX you must first create an instance of the XMLHttpRequest object.
```Javascript
  var xhttp = new XMLHttpRequest();
```
This object requires a function to execute when it's status or 'ready state' changes
```JavaScript
  xhttp.onreadystatechange = function(){}
```
To send a request you must first open a request with a
```javascript
  xhttp.open('GET', 'path/file.js', true);
```
`open(method, url, async, user, password)`
method is the HTTP method https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

url - location of resource to load

async - true ( asynchronous - default ) or false ( synchronous - will block further code execution until finished )

Note: if async is false do not use an onreadystatechange function. Just continue code after `send()` is called.

```javascript
  xhttp.send();
```
`send(<string>)`
Send the request to the server with an optional string.

`setRequestHeaders(header, value)`

`getResponseHeader()`

`getAllResponseHeaders()`

`abort()`

`onreadystatechange`

`readyState`

`responseText`

`responseXML`

`status`
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

`statusText`

[Back](../../../)
