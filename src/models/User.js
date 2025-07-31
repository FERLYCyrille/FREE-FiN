// src/models/User.js
class User {
    constructor({ id, username, email, ...rest } = {}) {
        this.id = id;
        this.username = username;
        this.email = email;
        Object.assign(this, rest);
    }
    //function
    getDisplayName() {
        return this.username || this.email;
    }
}

export default User;
