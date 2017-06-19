/*
  Here is a guide for the steps you could take:
*/

(function() {

  // delcaring variables
  var formNode = document.getElementById('search-form');
  var searchBar = document.getElementById('search-bar');
  var userSearchInput;
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
    console.log('Artist: ', userSearchInput);

    fetch(tracksUrl, {headers: headers}).then(function(response){
    // // console.log(userUrl);
    //   response.json().then(function(data){
    //     console.log(data);
      });

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
