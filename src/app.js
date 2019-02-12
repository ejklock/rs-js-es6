import Api from "./api";
class App {
  constructor() {
    this.users = [];
    this.listEl = document.getElementById("user-list");
    this.inputEl = document.querySelector("input[name=user]");
    this.formEl = document.getElementById("user-form");
    this.registerHandlers();
  }
  registerHandlers() {
    this.formEl.onsubmit = event => this.addUserProfile(event);
  }
  async addUserProfile(event) {
    event.preventDefault();
    const userInput = this.inputEl.value;
    if (userInput.lenght === 0) {
      return;
    }
    const user = await this.getUser(userInput);
    this.users.push(user);
    this.render();
  }
  async getUser(user) {
    return await Api.getUserInfo(user);
  }

  render() {
    this.listEl.innerHTML = "";
    this.users.forEach(user => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", user.avatar_url);
      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(user.login));
      let pEl = document.createElement("p");
      pEl.createTextNode(user.bio);
      let linkEl = document.createElement("a");
      linkEl.setAttribute("href", user.html_url);
      linkEl.appendChild(document.createTextNode(user.html_url));
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(pEl);
      listItemEl.appendChild(linkEl);
      this.listEl.appendChild(listItemEl);
    });
  }
}
const app = new App();
