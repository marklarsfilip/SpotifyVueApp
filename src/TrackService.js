import axios from 'axios';

const url = 'http://localhost:5000/api/trackList';

class TrackService {
  //get tracks
  static getTracks() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
            data
          )
      
      } catch(err) {
        reject(err);
      }
    });
  }
}

export default TrackService;