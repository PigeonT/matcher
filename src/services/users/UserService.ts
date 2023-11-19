import axios from "axios";

class UserService {
    constructor() {
    }

    async fetchUserList(): Promise<{ data: { users: any } }> {
        return axios.get('https://dummyjson.com/users');
    }
}

export default new UserService();