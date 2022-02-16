import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character";

export function getCharactersList() {
  return axios
    .get(baseUrl)
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));
}
