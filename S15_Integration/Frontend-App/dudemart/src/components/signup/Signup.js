import axios from "axios";
const URL = "http://localhost:5000/users/create-user";

export function getUserData(state) {
  axios
    .post(URL, state)
    .then(() => {})
    .catch(() => {});
}
