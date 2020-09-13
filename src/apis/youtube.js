import axios from "axios";

const KEY = "AIzaSyCh3sDTTU0tQoLWW2mFqOeLuU_-tDQ8ZmQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
