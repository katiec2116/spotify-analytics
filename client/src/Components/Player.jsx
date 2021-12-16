import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";



  // Read - https://www.npmjs.com/package/react-spotify-web-playback
  // Whenever trackURI changes setPlay=true, so that player start playing that song immediately without pressing the play button
  // "callback" in SpotifyPlayer holds the current state of the player, so if no song is playing we will setPlay=false
  // magnifySliderOnHover - Magnify the player's slider on hover.

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [trackUri]);

  if (!accessToken) return null;
  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => { 
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        styles={{
          bgColor: '#282828',
          color: '#fff',
          sliderColor: '#1db954',
          sliderHandleColor: '#1cb954',
          trackNameColor: '#fff',
        }}
      />
    </div>
  );
};

export default Player;
