function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': 'AIzaSyC9FbPGYeQJZkHZf_wh6tTxeHvUtspXZ0Y'
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.request({
        'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
      })
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
function load_pds() {
    gapi.load('client', start);
    
    gapi.client.youtube.channels.list({
        'part': 'snippet,contentDetails,statistics',
        'forUsername': 'GoogleDevelopers'
      }).then(function(response) {
        var channel = response.result.items[0];
        console.log('This channel\'s ID is ' + channel.id + '. ' +
                  'Its title is \'' + channel.snippet.title + ', ' +
                  'and it has ' + channel.statistics.viewCount + ' views.');
      });
    console.log(request);
}
window.onload = function() {
    load_elements();
    load_pds();
}