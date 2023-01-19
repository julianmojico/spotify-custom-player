window.onSpotifyIframeApiReady = (IFrameAPI) => {
    console.log("event handler");
    let element = document.getElementById('embed-iframe');
    let options = {
        width: '0%',
        height: '0',
        uri: 'spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV'
      };
    let callback = (EmbedController) => {
        console.log(EmbedController);
        function playHandler(){
            console.log("play/pause event");
            EmbedController.togglePlay();
          }
        document.querySelector('#mybutton').onclick = playHandler;
        window.EmbedController = EmbedController;
    };
    IFrameAPI.createController(element, options, callback);
  };
  