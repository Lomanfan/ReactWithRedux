import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ag_jVs7xxYVqXDgaBjwEFst4-NLXniAIZ6qY5kvRrIs",
  },
});
