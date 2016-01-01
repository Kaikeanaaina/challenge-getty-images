var index = require('./index.js');

// var oReq = new XMLHttpRequest();

// function reqListener(){
//   console.log(this.responseText);
// }

//  var contentBeingSearched = document.getElementById('inputBox').value;
//  oReq.open("GET", "https://api.gettyimages.com/v3/search/images?phrase="+contentBeingSearched);
//  oReq.setRequestHeader('Api-Key','r5tzed7rukawv62y2snrr4a6');

// // oReq.addEventListener("progress", updateProgress);
// // oReq.addEventListener("load", transferComplete);
// // oReq.addEventListener("error", transferFailed);
// // oReq.addEventListener("abort", transferCanceled);

// oReq.send();

$('#searchButton').click(function(event){

  var text =$('#inputBox').val();
  $.ajax('https://api.gettyimages.com/v3/search/images?phrase='+text,{
    headers: {
      'Api-Key': 'r5tzed7rukawv62y2snrr4a6'
    },
    type: 'GET'
  }).done(function(data){

    var soonToClearDiv = document.getElementById('imgContainer');
    console.log(soonToClearDiv);

    soonToClearDiv.innerHTML = '';

    console.log(data);

    for(var i = 0; i<data.images.length;i++){
      for(var j = 0; j<data.images[i].display_sizes.length;j++){
        var image = data.images[i].display_sizes[j].uri;
        console.log(image);

        var picture = document.createElement('img');
        picture.src = image;
        document.getElementById('imgContainer').appendChild(picture);

      }
    }


  });



});

