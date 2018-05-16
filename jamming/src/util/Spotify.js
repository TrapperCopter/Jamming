useraccesstoken =
Spotify () {
  let accessToken;
  const Spotify = {
    getAccessToken() {
      if(accessToken) {
        return accessToken;
      }
        window.location.href.match(
          /access_token=([^&]*)/ //the part in parenthesis means to get the entire string
          /expires_in=([^&]*)/
        )
    }
  }
};

export default Spotify
