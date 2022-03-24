import axios from "axios";

const KEY = "AIzaSyC9cYTndNZcwyrLoaZvHs3aVThuC86S2Bo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
