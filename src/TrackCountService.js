import axios from "axios";

const url = "http://localhost:5000/api/track";

class TrackCountService {
  //get tracks
  static getTrack(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url, {
          params: {
            albumid: id
          }
        });
        /*
        const data = res.data.data.filter(track => {
          track.name === name;
        });
        */
        const data = res.data.data;

        resolve(data[0].playcount);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default TrackCountService;
