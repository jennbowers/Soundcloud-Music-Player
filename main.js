/*
  Here is a guide for the steps you could take:
*/

(function() {

  // delcaring variables
  var formNode = document.getElementById('search-form');
  var searchBar = document.getElementById('search-bar');
  var allResults = document.querySelector('.all-results');
  var audioPlayer = document.querySelector('.music-player');
  var userSearchInput = '';
  var headers = {};
  var tracksUrl = 'https://api.soundcloud.com/tracks/?client_id=' + SC_TOKEN + '&q=';

  try {
      headers['Authorization'] = 'token ' + SC_TOKEN;
    } catch (e) {
      //ignore error
    }

  // adding event listener to form
  formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    userSearchInput = searchBar.value;
    userSearchInputString = userSearchInput.toString();
    console.log(userSearchInputString);
    console.log('Artist: ', userSearchInputString);
    tracksUrl = tracksUrl + userSearchInputString;

    fetch(tracksUrl, {headers: headers}).then(function(response){
      console.log(tracksUrl);
      response.json().then(function(data){
        console.log(data);

      // looping through all results to create tracks below
      for(var i = 0; i < data.length; i++) {
        var info = data[i];
        var streamingInfo = {};

        // each result div
        var resultNode = document.createElement('a');
        resultNode.setAttribute('class', 'result')
        resultNode.setAttribute('href', '#');
        allResults.appendChild(resultNode);
        resultNode.addEventListener('click', function(event) {
          audioPlayer.setAttribute('src', info.stream_url + '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f');
        });

        // artwork
        var artworkNode = document.createElement('div');
        artworkNode.setAttribute('class', 'artwork');
        artworkNode.innerHTML = '<img src="' + info.artwork_url + '">';
        resultNode.appendChild(artworkNode);

        // song title
        var titleNode = document.createElement('p');
        titleNode.setAttribute('class', 'song-title');
        titleNode.textContent = info.title;
        resultNode.appendChild(titleNode);


      }

      });

    });

    // resetting variables
    userSearchInput = ' ';
    tracksUrl = 'https://api.soundcloud.com/tracks/?client_id=' + SC_TOKEN + '&q=';

  });




    // SC.get('/tracks', {q: 'userSearchInput'}).then(function(tracks) {
    //   console.log(tracks)
    // });

// what SoundCloud had in API documentation on how to search
    // SC.get('/tracks', {
    //   q: 'buskers', license: 'cc-by-sa'
    // }).then(function(tracks) {
    //   console.log(tracks);
    // });




}());
// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
