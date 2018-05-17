let accessToken;
const cliendID= "e0856715edfc4954b180a6d7ef15d93c";
const redirectURL = "http://localhost:3000/";

const Spotify = {

  search(term) {
    return
    fetch('https://api.spotify.com/v1/search?type=track&q=${term}',
      {
        headers: {Authorization: Bearer ${accessToken}}
      }
    ).then(response => return response.json())
    .then(response => response.map(array))
    if (resonse === "") {
      array= []
    }
    else {
      array=[
        ID: track.id ,
        ...
        ...
        ...
      ]
    }
  }


  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      window.location("https://accounts.spotify.com/authorize?client_id=" + {cliendID} +
      "&response_type=token&scope=playlist-modify-public&redirect_uri=" + {REDIRECT_URI})
    } else {

    }
  }
}

export default Spotify
