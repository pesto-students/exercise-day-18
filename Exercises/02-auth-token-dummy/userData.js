const bcrypt = require('bcrypt');

class User {

  constructor() {
    this.user = [];
  }

  add(username, password) {
    const accessToken = this.getAuthToken(username, password);
    this.user.push({
      username,
      password,
      accessToken,
    });
    return accessToken;
  }

  getAuthToken(username, password) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
  }

  find(token) {
    return this.user.find(user => user.accessToken === token);
  }
}

module.exports = new User();