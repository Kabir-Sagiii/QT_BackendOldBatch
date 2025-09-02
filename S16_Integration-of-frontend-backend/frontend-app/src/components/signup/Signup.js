import axios from "axios";
const URL = "http://localhost:5000/users/create-user";

export function getUserData(state, setMessage) {
  axios
    .post(URL, state)
    .then((res) => {
      alert("Request is successfull");
      console.log(res);
      setMessage(res.data.results);
    })
    .catch(() => {});
}
