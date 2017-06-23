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
    searchBar.value = '';
    var headers = {};
    var tracksUrl = 'https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=';


    searchBar.addEventListener('click', function(e){
      searchBar.value = '';
    });

    // try {
    //   headers['Authorization'] = 'token ' + SC_TOKEN;
    // } catch (e) {
    //   //ignore error
    // }

    // const SC_TOKEN = '095fe1dcd09eb3d0e1d3d89c76f5618f';

    function fetchStream(url) {
      fetch(url).then(function(result) {
        console.log(result);


        audioPlayer.src = '';
        audioPlayer.src = result.url;
        audioPlayer.play();
      });
    }

    // adding event listener to form
    formNode.addEventListener('submit', function(event) {
        event.preventDefault();
        userSearchInput = searchBar.value;
        userSearchInputString = userSearchInput.toString();
        var userSearchInputNoSpace = encodeURI(userSearchInputString);
        tracksUrl = tracksUrl + userSearchInputNoSpace;
        console.log(tracksUrl);

        fetch(tracksUrl).then(function(response) {
            console.log(tracksUrl);
            response.json().then(function(data) {

                //clear screen with each search, code found on SO https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
                while(allResults.firstChild) {
                    allResults.removeChild(allResults.firstChild);
                }


                // looping through all results to create tracks below
                for (var i = 0; i < data.length; i++) {
                  var info = data[i];
                  // var streamingInfo = {};

                  // each result div
                  var resultNode = document.createElement('a');
                  // resultNode.setAttribute('class', 'result' + i)
                  console.log(info.stream_url);
                  resultNode.setAttribute('class', 'result')
                  resultNode.setAttribute('id', info.stream_url + '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f');
                  allResults.prepend(resultNode);
                  // adding event listener
                  console.log("LAST RESULT NODE ID" + resultNode.id);
                  resultNode.addEventListener('click', function(event) {
                    console.log(arguments);
                    console.log(resultNode.id);
                    fetchStream(event.target.id);
                  });


                  // artwork
                  var artworkNode = document.createElement('div');
                  artworkNode.setAttribute('class', 'artwork');
                  if (info.artwork_url == null) {
                    // image source: https://yt3.ggpht.com/-zK8v1xKkZtY/AAAAAAAAAAI/AAAAAAAAAAA/SmyGR2XCwXw/s900-c-k-no-mo-rj-c0xffffff/photo.jpg
                    artworkNode.innerHTML = `<img src="images/youtube-record.jpg" id=${info.stream_url + '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f'}>`;
                  } else {
                    artworkNode.innerHTML = `<img src="${info.artwork_url}" id=${info.stream_url + '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f'}>`;
                  }
                  resultNode.appendChild(artworkNode);

                  // song title
                  var titleNode = document.createElement('p');
                  titleNode.setAttribute('class', 'song-title');
                  titleNode.textContent = info.title;
                  resultNode.appendChild(titleNode);
                }


              });
            });

            tracksUrl = 'https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=';


          });


}());




// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
