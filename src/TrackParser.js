import axios from "axios";
import TrackCountService from "./TrackCountService";

const listUrl = "http://localhost:5000/api/trackList";

let tracks = [];

async function getCount(id) {
  try {
    const playcount = await TrackCountService.getTrack(id);
    //console.log(playcount);
    return playcount;
  } catch (err) {
    console.log(err);
  }
}

function triggerFunction(id) {
  try {
    let test;
    getCount(id).then(data => {
      test = data;
    });
    return test;
  } catch (err) {
    console.log(err);
  }
}

class TrackParser {
  //get tracks
  static getTracks() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(listUrl);
        const data = res.data.items.map(item =>
          tracks.push({
            id: item.track.id,
            name: item.track.album.name,
            artist: item.track.album.artists[0].name,
            img: item.track.album.images[1].url,
            uri: item.track.uri,
            playcount: triggerFunction(item.track.album.id)
          })
        );

        resolve(tracks);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default TrackParser;
