import axios from "axios";
const github = axios.create({
  baseURL: "https://api.gitub.com/"
});
export default class Api {
  static apiCredentials() {
    return {
      client_id: "",
      client_secret: ""
    };
  }
  static async getUserInfo(username) {
    try {
      const response = await github.get(
        `/users/${username}?client_id=${
          this.apiCredentials().client_id
        }&client_secret=${this.apiCredentials().client_secret}`
      );
      const user = { ...response.data };
      return user;
    } catch (err) {
      console.log(err);
    }
  }
}
