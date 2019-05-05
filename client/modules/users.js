export class Users {
  constructor(selector) {
    this.node = document.querySelector(selector);
    this.users = [];
    this.currentUser = null;
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  setUsers(users) {
     this.users = users;
  }

  render() {
    this.node.innerHTML = this.users.filter(user => user != this.currentUser).map(user => `[user] ${user} \n`).join('');
  }

  clear() {
    this.users = [];
    this.node.innerHTML = "";
  }
}
