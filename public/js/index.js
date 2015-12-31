//https://www.instapaper.com/api/authenticate
//use this if you want to only check credentials without adding a URL to Instapaper
//authentication
//parameters: username,password, jsonp(optional)

//https://www.instapaper.com/api/add
//adding urls to an instapaper account
//parameters: username,password,url,title(optional),selection(optional),redirect=close(optional),jsonp(optional)

//To receive results as JSON to a specified callback function, pass a valid Javascript function name as the
//jsonp parameter to Add or Authenticate, e.g. jsonp=callbackName.
//The API will return Javascript with an HTTP 200 status code of the format:
//callbackName({"status":200});
//When Add returns a 201 status, a url value is also included to indicate which URL you asked it to add:
//callbackName({"status":201,"url":"whatever-you-sent"});
//Any of the possible status values from the Add or Authenticate methods above may be returned.

//build interface
//will search gettyImages
//for a particular set of photos
//by keyword (or more)
//then display the image to user

//REQUIREMENTS
//able to take user input
// a button to kick off the search
// once receive response from the server with images url, display the images on the interface

//need to craft custom header for my API KEY
// i have to either:
//a) build a Vanilla Javascript XHR request or
//b) if you plan on using jQuery, be sure to use the jQuery.ajax() method


var header = document.createElement('h1');
header.id = 'header';
header.innerHTML = 'Aloha';
document.body.appendChild(header);

var inputBox = document.createElement('input');
inputBox.id = 'inputBox';
inputBox.type = 'text';
inputBox.value = '';
document.body.appendChild(inputBox);

var searchButton = document.createElement('button');
searchButton.id = 'searchButton';
searchButton.innerHTML = 'search';
document.body.appendChild(searchButton);





