import axios from "axios";

const baseUrl = "https://api.unsplash.com";
const clientId = "sUV22DxAKlFhcqd51VsFin7iWwObGbNcZgfAgu_qGqY";

export const getAllPhotos = () => {
  return axios.get(`${baseUrl}/photos?page=1&client_id=${clientId}`);
};
